import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'

dayjs.locale(ptBR)

export const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
export const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

export function getWeekDayByDate(date: dayjs.ConfigType) {
  return dayjs(date).format('dddd')
}

export function getFormattedDate(date: dayjs.ConfigType) {
  return dayjs(date).format('D[ de ]MMMM')
}

export function getTimefromDate(date: dayjs.ConfigType) {
  return dayjs(date).format('HH:mm')
}
