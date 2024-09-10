import { and, count, gte, lte } from 'drizzle-orm'
import { db } from '../../../db'
import { goalCompletions } from '../../../db/schema'
import { firstDayOfWeek, lastDayOfWeek } from '../dayjs'

export const goalCompletionCounts = db.$with('goal_completion_counts').as(
  db
    .select({
      goalId: goalCompletions.goalId,
      completionCount: count(goalCompletions.id).as('completionCount'),
    })
    .from(goalCompletions)
    .where(
      and(
        gte(goalCompletions.createdAt, firstDayOfWeek),
        lte(goalCompletions.createdAt, lastDayOfWeek)
      )
    )
    .groupBy(goalCompletions.id)
)
