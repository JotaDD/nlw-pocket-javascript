import { sql } from 'drizzle-orm'
import { db } from '../db'
import { goalsCreatedUpToWeek } from './helpers/sql/goals-created-up-to-week'
import { goalsCompletedInWeek } from './helpers/sql/goals-completed-in-week'
import { goalsCompletedByWeekDay } from './helpers/sql/goals-completed-by-week-day'

export async function getWeekSummary() {
  const result = await db
    .with(goalsCreatedUpToWeek, goalsCompletedInWeek, goalsCompletedByWeekDay)
    .select({
      completed:
        sql /*sql*/`(SELECT COUNT(*) FROM ${goalsCompletedInWeek})`.mapWith(
          Number
        ),
      total: sql /*sql*/`(
          SELECT sum(CAST(${goalsCreatedUpToWeek.desiredWeeklyFrequency} AS INTEGER)) 
          FROM ${goalsCreatedUpToWeek}
        )`.mapWith(Number),
      goalsPerDay: sql /*sql*/`
        JSON_OBJECT_AGG(
          ${goalsCompletedByWeekDay.completedAtDate},
          ${goalsCompletedByWeekDay.completions}
        )
      `,
    })
    .from(goalsCompletedByWeekDay)

  return {
    summary: result,
  }
}
