'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const chartData = [
  { month: 'January', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'February', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'March', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'April', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'June', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'July', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'August', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'September', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'October', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'November', total: Math.floor(Math.random() * 5000) + 1000 },
  { month: 'December', total: Math.floor(Math.random() * 5000) + 1000 },
]

export function RevenueChart() {
  return (
    <Card className="flex min-h-[100vh] flex-1 flex-col justify-between rounded-xl bg-muted/50 md:min-h-min">
      <CardHeader>
        <CardTitle>Receita Total</CardTitle>
        <CardDescription>Janeiro - Dezembro 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
