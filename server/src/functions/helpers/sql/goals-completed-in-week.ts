import { and, eq, gte, lte, sql } from 'drizzle-orm'
import { db } from '../../../db'
import { goalCompletions, goals } from '../../../db/schema'
import { firstDayOfWeek, lastDayOfWeek } from '../dayjs'

export const goalsCompletedInWeek = db.$with('goals_completed_in_week').as(
  db
    .select({
      id: goalCompletions.id,
      title: goals.title,
      completedAt: goalCompletions.createdAt,
      completedAtDate: sql /*sql*/`
        DATE(${goalCompletions.createdAt})
      `.as('completedAtDate'),
    })
    .from(goalCompletions)
    .innerJoin(goals, eq(goals.id, goalCompletions.goalId))
    .where(
      and(
        gte(goalCompletions.createdAt, firstDayOfWeek),
        lte(goalCompletions.createdAt, lastDayOfWeek)
      )
    )
)
