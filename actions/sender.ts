'use server'

import { sendNotification } from '@/lib/tg'
import { BriefSchema } from '@/schemas'
import * as z from 'zod'

export const sendMessage = async (
  value: z.infer<typeof BriefSchema>,
  data?: string
) => {
  const validatedFiled = BriefSchema.safeParse(value)

  if (!validatedFiled.success) {
    return { error: 'Введены не верные данные' }
  }

  const { name, phone } = validatedFiled.data

  try {
    await sendNotification(
      `<b>Matryoshka</b> Заявка от ${name} ${phone}. ${data}`
    )
    return { succsess: 'Спасибо за заявку' }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }

    throw error
  }
}
