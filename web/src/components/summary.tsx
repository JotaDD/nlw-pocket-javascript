import { Plus } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[30em] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>
              Voce completou <span className="text-zinc-100">8</span> de{' '}
              <span className="text-zinc-100">15</span> metas nessa semana
            </span>
          </div>

          <Separator />

          <div className="flex flex-wrap gap-3">
            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Meditar
            </OutlineButton>
            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Fazer exercícios
            </OutlineButton>
            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Nadar
            </OutlineButton>
            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Nadar
            </OutlineButton>
          </div>
        </Progress>
      </div>
    </div>
  )
}
