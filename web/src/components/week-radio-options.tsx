import { RadioGroupIndicator, RadioGroupItem } from './ui/radio-group'

const emojis = ['🥱', '🙂', '😎', '😜', '🤨', '🤯', '🔥']

export function WeekRadioOptions() {
  return emojis.map((emoji, index) => (
    <RadioGroupItem key={emoji} value={String(index + 1)}>
      <RadioGroupIndicator />
      <span className="text-zinc-300 text-sm font-medium leading-none">
        {index + 1 === 7
          ? 'Todos os dias da semana'
          : `${index + 1}x na semana`}
      </span>
      <span className="leading-none text-lg">{emoji}</span>
    </RadioGroupItem>
  ))
}
