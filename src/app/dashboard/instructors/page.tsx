'use client'

import { DollarSign, UserPlus, Users } from 'lucide-react'
import { Suspense } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import Loading from './loading'

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<Loading />}>
        <div className="grid gap-4 auto-rows-min gap-4 md:grid-cols-4">
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
        </div>

        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}

        {/* <RevenueChart /> */}

        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </Suspense>
    </div>
  )
}

