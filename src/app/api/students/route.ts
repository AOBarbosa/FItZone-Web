import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function GET() {
  return new Response('Hello, Next.js!', {
    status: 200,
  })
}

const studentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  cpf: z.string(),
})

export async function POST(req: NextRequest) {
  const student = await req.json()

  const { name, email, cpf, phone } = studentSchema.parse(student)

  const newStudent = await prisma.student.create({
    data: {
      name,
      email,
      cpf,
      phone,
    },
  })

  return NextResponse.json(newStudent, { status: 201 })
}
