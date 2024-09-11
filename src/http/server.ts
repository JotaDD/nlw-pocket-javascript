import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoal } from '../functions/create-goals'
import z from 'zod'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals'
import { createGoalCompletion } from '../functions/create-goal-completion'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

const createGoalSchema = z.object({
  title: z.string(),
  desiredWeeklyFrequency: z.number().int().min(1).max(7),
})

const createGoalCompletionsSchema = z.object({
  goalId: z.string(),
})

app.get('/pending-goals', async () => {
  const { pendingGoals } = await getWeekPendingGoals()

  return { pendingGoals }
})

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
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
