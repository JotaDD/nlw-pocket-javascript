import { eq, sql } from 'drizzle-orm'
import { db } from '../db'
import { getGoalCompletionCounts } from './helpers/sql/goal-completion-counts'
import { goalsCreatedUpToWeek } from './helpers/sql/goals-created-up-to-week'

export async function getWeekPendingGoals() {
  const goalCompletionCounts = getGoalCompletionCounts()

  const pendingGoals = await db
    .with(goalsCreatedUpToWeek, goalCompletionCounts)
    .select({
      id: goalsCreatedUpToWeek.id,
      title: goalsCreatedUpToWeek.title,
      desiredWeeklyFrequency: goalsCreatedUpToWeek.desiredWeeklyFrequency,
      completionCount: sql /*sql*/`
        COALESCE(${goalCompletionCounts.completionCount}, 0 )  -- if statement no sql
        `.mapWith(Number),
    })
    .from(goalsCreatedUpToWeek)
    .leftJoin(
      goalCompletionCounts,
      eq(goalCompletionCounts.goalId, goalsCreatedUpToWeek.id)
    )

  return {
    pendingGoals,
  }
}
