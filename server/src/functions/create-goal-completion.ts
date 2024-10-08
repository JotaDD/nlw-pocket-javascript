import { eq, sql } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { getGoalCompletionCounts } from './helpers/sql/goal-completion-counts'

interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest) {
  const goalCompletionCounts = getGoalCompletionCounts(goalId)
  const result = await db
    .with(goalCompletionCounts)
    .select({
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      completionCount: sql /*sql*/`
        COALESCE(${goalCompletionCounts.completionCount}, 0 ) AS completionCount  -- if statement no sql
        `.mapWith(Number),
    })
    .from(goals)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1)

  if (result.length === 0) {
    throw new Error('Goal not found!')
  }

  const { completionCount, desiredWeeklyFrequency } = result[0]

  if (completionCount >= desiredWeeklyFrequency) {
    throw new Error('Goal already completed this week!')
  }

  const insertResult = await db
    .insert(goalCompletions)
    .values({ goalId })
    .returning()

  const goalCompletion = insertResult[0]

  return {
    goalCompletion,
  }
}
