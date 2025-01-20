'use client'

import { Student } from '@prisma/client'
import { Plus, UserPlus, Users } from 'lucide-react'
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
import { StudentService } from '@/services/student'

import { columns } from './_components/columns'
import { RegisterStudentForm } from './_components/register-student-form'
import Loading from './loading'

export default function Page() {
  const [students, setStudents] = useState<Student[]>([])
  const [newStudentCounter, setNewStudentCounter] = useState(0)
  const [activeStudentCounter, setActiveStudentCounter] = useState(0)
  const [isListUpdated, setIsListUpdated] = useState(false)

  const studentService = new StudentService()

  async function getStudents() {
    const data = await studentService.get()

    data.forEach((student: Student) => {
      if (student.active) {
        setActiveStudentCounter((prev) => prev + 1)
      }
    })

    setStudents(data)
  }

  useEffect(() => {
    getStudents()
    setIsListUpdated(false)
  }, [isListUpdated])
  console.log('lista de alunos', activeStudentCounter)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<Loading />}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          {/* Receita Total */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Total de Alunos
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
                {students.length}
              </span>
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
              <span className="text-2xl font-bold tracking-tight">
                + {newStudentCounter}
              </span>
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
              <span className="text-2xl font-bold tracking-tight">
                {activeStudentCounter}
              </span>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">
                    Cadastrar Aluno
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
                <DialogTitle>Cadastrar aluno</DialogTitle>
              </DialogHeader>
              <RegisterStudentForm
                setIsListUpdated={setIsListUpdated}
                newStudentCounter={newStudentCounter}
                setNewStudentCounter={setNewStudentCounter}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}

        <DataTable columns={columns} data={students} />
      </Suspense>
    </div>
  )
}
