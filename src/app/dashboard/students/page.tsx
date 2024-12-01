'use client'

import { DollarSign, UserPlus, Users } from 'lucide-react'
import { Suspense, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import Loading from './loading'
import { RevenueChart } from '../_components/revenue-chart'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<Loading />}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          {/* Receita Total */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Mensalidade recebida (Novembro)
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
                R$ 3.200, 89
              </span>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +12%
                </span>{' '}
                em relação a mês passado.
              </p>
            </CardContent>
          </Card>

          {/* Alunos novos */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Alunos Novos (mês)
              </CardTitle>
              <UserPlus className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">+ 12</span>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +20%
                </span>{' '}
                em relação a mês passado.
              </p>
            </CardContent>
          </Card>

          {/* Alunos ativos */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Alunos ativos
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">35</span>
              <p className="text-xs text-muted-foreground">na academia agora</p>
            </CardContent>
          </Card>

          {/* Instrutores ativos */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Instrutores ativos
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">4</span>
              <p className="text-xs text-muted-foreground">na academia agora</p>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Card className='w-[250px]'>
                <CardContent className="space-y-1">
                  <span className="text-2xl font-bold tracking-tight">+</span>
                  <p className="text-xs text-muted-foreground">Adcionar aluno</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar aluno</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">
                    Name
                  </p>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">
                    Email
                  </p>
                  <Input
                    id="email"
                    defaultValue="example@email.com"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">
                    Contato
                  </p>
                  <Input
                    id="contact"
                    defaultValue="(00) 00000-0000"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">
                    CPF
                  </p>
                  <Input
                    id="cpf"
                    defaultValue="000.000.000-00"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">
                    Data de nascimento
                  </p>
                  <Input
                    id="cpf"
                    defaultValue="DD/MM/AAAA"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}

        <RevenueChart />

        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </Suspense>
    </div>
  )
}
