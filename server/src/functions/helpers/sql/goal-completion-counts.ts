import { and, count, eq, gte, lte, sql } from 'drizzle-orm'
import { db } from '../../../db'
import { goalCompletions } from '../../../db/schema'
import { firstDayOfWeek, lastDayOfWeek } from '../dayjs'

//export const goalCompletionCounts = db.$with('goal_completion_counts').as(
//  db
//    .select({
//      goalId: goalCompletions.goalId,
//      completionCount: count(goalCompletions.id).as('completionCount'),
//    })
//    .from(goalCompletions)
//    .where(
//      and(
//        gte(goalCompletions.createdAt, firstDayOfWeek),
//        lte(goalCompletions.createdAt, lastDayOfWeek)
//      )
//    )
//    .groupBy(goalCompletions.id)
//)
//
export function getGoalCompletionCounts(goalId?: string) {
  const query = db
    .select({
      goalId: goalCompletions.goalId,
      completionCount: count(goalCompletions.id).as('completionCount'),
    })
    .from(goalCompletions)
    .where(
      and(
        gte(goalCompletions.createdAt, firstDayOfWeek),
        lte(goalCompletions.createdAt, lastDayOfWeek),
        goalId
          ? eq(goalCompletions.goalId, goalId)
          : lte(goalCompletions.createdAt, lastDayOfWeek) // just repeating the previous condition to not break the sql because it can't have nullish condition
      )
    )
    .groupBy(goalCompletions.goalId)

  return db.$with('goal_completion_counts').as(query)
}
