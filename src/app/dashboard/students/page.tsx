import { DollarSign, UserPlus, Users } from 'lucide-react'
import { Suspense } from 'react'

import { DataTable } from '@/components/data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PaymentStatus, Student, StudentStatus } from '@/models/students'

import { columns } from './_components/columns'
import Loading from './loading'

const students: Student[] = [
  {
    id: '1a2b3c4d',
    cpf: '123.456.789-00',
    name: 'Alice Silva',
    dateOfBirth: new Date(1995, 4, 15), // Maio é 4
    phone: '(11) 98765-4321',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.SUCCESS,
  },
  {
    id: '5e6f7g8h',
    cpf: '234.567.890-11',
    name: 'Bruno Oliveira',
    dateOfBirth: new Date(1990, 9, 25), // Outubro é 9
    phone: '(21) 99988-7766',
    status: StudentStatus.INACTIVE,
    paymentStatus: PaymentStatus.PENDING,
  },
  {
    id: '9i0j1k2l',
    cpf: '345.678.901-22',
    name: 'Camila Costa',
    dateOfBirth: new Date(2000, 1, 10), // Fevereiro é 1
    phone: '(31) 91234-5678',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.FAILED,
  },
  {
    id: '3m4n5o6p',
    cpf: '456.789.012-33',
    name: 'Diego Souza',
    dateOfBirth: new Date(1988, 11, 5), // Dezembro é 11
    phone: '(41) 92345-6789',
    status: StudentStatus.INACTIVE,
    paymentStatus: PaymentStatus.PENDING,
  },
  {
    id: '7q8r9s0t',
    cpf: '567.890.123-44',
    name: 'Eduarda Mendes',
    dateOfBirth: new Date(1993, 6, 20), // Julho é 6
    phone: '(51) 98765-1234',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.SUCCESS,
  },
  {
    id: '1u2v3w4x',
    cpf: '678.901.234-55',
    name: 'Felipe Albuquerque',
    dateOfBirth: new Date(1997, 0, 30), // Janeiro é 0
    phone: '(61) 91234-8765',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.FAILED,
  },
  {
    id: '5y6z7a8b',
    cpf: '789.012.345-66',
    name: 'Gabriela Lima',
    dateOfBirth: new Date(1992, 3, 12), // Abril é 3
    phone: '(71) 91123-4567',
    status: StudentStatus.INACTIVE,
    paymentStatus: PaymentStatus.PENDING,
  },
  {
    id: '9c0d1e2f',
    cpf: '890.123.456-77',
    name: 'Henrique Borges',
    dateOfBirth: new Date(1999, 8, 15), // Setembro é 8
    phone: '(81) 92234-5678',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.SUCCESS,
  },
  {
    id: '3g4h5i6j',
    cpf: '901.234.567-88',
    name: 'Isabela Freitas',
    dateOfBirth: new Date(1996, 10, 3), // Novembro é 10
    phone: '(91) 94455-6677',
    status: StudentStatus.INACTIVE,
    paymentStatus: PaymentStatus.FAILED,
  },
  {
    id: '7k8l9m0n',
    cpf: '012.345.678-99',
    name: 'João Carvalho',
    dateOfBirth: new Date(1991, 7, 18), // Agosto é 7
    phone: '(31) 93344-5566',
    status: StudentStatus.ACTIVE,
    paymentStatus: PaymentStatus.PENDING,
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
                Receita total (mês)
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
                R$ 45.231, 89
              </span>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">
                  +20%
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
              <span className="text-2xl font-bold tracking-tight">20</span>
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
        </div>

        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        <DataTable columns={columns} data={students} />
      </Suspense>
    </div>
  )
}
