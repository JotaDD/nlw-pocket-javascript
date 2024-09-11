import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'
import { z } from 'zod'

const createGoalCompletionsSchema = z.object({
  goalId: z.string(),
})

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: createGoalCompletionsSchema,
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({ goalId })
    }
  )
}
