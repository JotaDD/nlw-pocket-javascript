import { Plus, X } from 'lucide-react'
import letsStart from './assets/lets-start-illustration.svg'
import logo from './assets/logo-in-orbit.svg'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/ui/radio-group'
export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letsStart} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button variant="primary">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar Meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>
            <DialogDescription>
              Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
              mesmo?
            </DialogDescription>
          </div>
          <form className="flex flex-1 flex-col justify-between" action="">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercícios, meditar, etc.."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      1x na semana
                    </span>
                    <span className="leading-none text-lg">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      2x na semana
                    </span>
                    <span className="leading-none text-lg">🙂</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      3x na semana
                    </span>
                    <span className="leading-none text-lg">😎</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="4">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      4x na semana
                    </span>
                    <span className="leading-none text-lg">😜</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="5">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      5x na semana
                    </span>
                    <span className="leading-none text-lg">🤨</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
