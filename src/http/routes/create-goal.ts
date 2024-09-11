import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../functions/create-goals'

const createGoalSchema = z.object({
  title: z.string(),
  desiredWeeklyFrequency: z.number().int().min(1).max(7),
})

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: createGoalSchema,
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        title: title,
        desiredWeeklyFrequency: desiredWeeklyFrequency,
      })
    }
  )
}
