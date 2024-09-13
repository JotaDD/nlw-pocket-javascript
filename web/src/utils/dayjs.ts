import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'

dayjs.locale(ptBR)

export const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
export const lastDayOfWeek = dayjs().endOf('week').format('D MMM')
