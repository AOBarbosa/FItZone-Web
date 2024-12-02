'use client'
import { DollarSign, Plus, Users } from 'lucide-react'
import { Suspense } from 'react'

import { DataTable } from '@/components/data-table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Instructor,
  InstructorStatus,
  InstructorType,
} from '@/models/instructors'

import { columns } from './_components/columns'
import Loading from './loading'

const instructors: Instructor[] = [
  {
    id: '1a2b3c4d',
    cpf: '123.456.789-00',
    cref: '002324-F/RN',
    name: 'Alice Silva',
    dateOfBirth: new Date(1995, 4, 15), // Maio é 4
    phone: '(11) 98765-4321',
    status: InstructorStatus.ACTIVE,
    type: InstructorType.TREINEER,
  },
  {
    id: '5e6f7g8h',
    cpf: '234.567.890-11',
    cref: '000124-F/RN',
    name: 'Bruno Oliveira',
    dateOfBirth: new Date(1990, 9, 25), // Outubro é 9
    phone: '(21) 99988-7766',
    status: InstructorStatus.INACTIVE,
    type: InstructorType.INTERN,
  },
  {
    id: '9i0j1k2l',
    cpf: '345.678.901-22',
    cref: '003214-F/RN',
    name: 'Camila Costa',
    dateOfBirth: new Date(2000, 1, 10), // Fevereiro é 1
    phone: '(31) 91234-5678',
    status: InstructorStatus.ACTIVE,
    type: InstructorType.INTERN,
  },
  {
    id: '3m4n5o6p',
    cpf: '456.789.012-33',
    cref: '014524-F/RN',
    name: 'Diego Souza',
    dateOfBirth: new Date(1988, 11, 5), // Dezembro é 11
    phone: '(41) 92345-6789',
    status: InstructorStatus.INACTIVE,
    type: InstructorType.PERSONAL,
  },
  {
    id: '7q8r9s0t',
    cpf: '567.890.123-44',
    cref: '000231-F/RN',
    name: 'Eduarda Mendes',
    dateOfBirth: new Date(1993, 6, 20), // Julho é 6
    phone: '(51) 98765-1234',
    status: InstructorStatus.ACTIVE,
    type: InstructorType.TEACHER,
  },
  {
    id: '2o1r9z2j',
    cpf: '437.823.123-45',
    cref: '005123-F/RN',
    name: 'Augusto Filho',
    dateOfBirth: new Date(1999, 6, 2), // Julho é 6
    phone: '(45) 93265-1434',
    status: InstructorStatus.ACTIVE,
    type: InstructorType.TEACHER,
  },
]

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<Loading />}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          {/* Receita Total */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Pagamentos realizados (mês)
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
                R$ 12.231, 89
              </span>
              <p className="text-xs text-muted-foreground">
                de
                <span className="text-emerald-500 dark:text-emerald-400">
                  &nbsp;6
                </span>{' '}
                funcionários.
              </p>
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
              <span className="text-2xl font-bold tracking-tight">6</span>
            </CardContent>
          </Card>

          {/* Instrutores na academia */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Instrutores na academia
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
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">
                    Cadastrar Instrutor
                  </CardTitle>
                  {/* <UserPlus className="size-4 text-muted-foreground" /> */}
                </CardHeader>

                <CardContent className="flex size-full justify-center">
                  <Plus className="size-10 cursor-pointer text-muted-foreground" />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar aluno</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">Name</p>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">Email</p>
                  <Input
                    id="email"
                    defaultValue="example@email.com"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">Contato</p>
                  <Input
                    id="contact"
                    defaultValue="(00) 00000-0000"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">CPF</p>
                  <Input
                    id="cpf"
                    defaultValue="000.000.000-00"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <p className="text-right">Data de nascimento</p>
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

        {/* <RevenueChart /> */}

        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        <DataTable columns={columns} data={instructors} />
      </Suspense>
    </div>
  )
}
