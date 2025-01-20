import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { FeeStatus, StudentStatus } from '@/models/students'

export async function GET() {
  const students = await prisma.student.findMany()
  return NextResponse.json(students)
}

const studentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  cpf: z.string(),
  birthdate: z.string(),
})

export async function POST(req: NextRequest) {
  const student = await req.json()

  const { name, email, cpf, phone, birthdate } = studentSchema.parse(student)

  const newStudent = await prisma.student.create({
    data: {
      name,
      email,
      cpf,
      phone,
      birthdate,
      active: StudentStatus.ACTIVE,
      feeStatus: FeeStatus.SUCCESS,
    },
  })

  return NextResponse.json(newStudent, { status: 201 })
}
