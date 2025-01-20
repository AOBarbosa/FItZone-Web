'use client'

import { Instructor } from '@prisma/client'
import { DollarSign, Plus, Users } from 'lucide-react'
import { Suspense, useEffect, useState } from 'react'

import { DataTable } from '@/components/data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { InstructorService } from '@/services/instructors'

import { columns } from './_components/columns'
import { RegisterInstructorDialog } from './_components/register-instructor-dialog'
import Loading from './loading'

export default function Page() {
  const [instructors, setInstructors] = useState<Instructor[]>([])
  // const [newStudentCounter, setNewStudentCounter] = useState(0)
  const [activeInstructorsCounter, setActiveInstructorsCounter] = useState(0)
  const [isListUpdated, setIsListUpdated] = useState(false)

  const instructorsService = new InstructorService()

  async function getInstructors() {
    const data = await instructorsService.get()

    data.forEach((student: Instructor) => {
      if (student.active) {
        setActiveInstructorsCounter((prev) => prev + 1)
      }
    })

    setInstructors(data)
  }

  useEffect(() => {
    getInstructors()
    setIsListUpdated(false)
  }, [isListUpdated])

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<Loading />}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          {/* Receita Total */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Pagamentos realizados
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">
                R$ 12.231, 89
              </span>
              <p className="text-xs text-muted-foreground">neste mês</p>
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
              <span className="text-2xl font-bold tracking-tight">
                {activeInstructorsCounter}
              </span>
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
                <DialogTitle>Cadastrar Instrutor</DialogTitle>
              </DialogHeader>
              <RegisterInstructorDialog setIsListUpdated={setIsListUpdated} />
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
