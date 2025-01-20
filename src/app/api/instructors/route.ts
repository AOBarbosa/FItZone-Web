import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { InstructorStatus } from '@/models/instructors'

// [GET] Listar todos os instrutores
export async function GET() {
  try {
    const instructors = await prisma.instructor.findMany()
    return NextResponse.json(instructors, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch instructors' },
      { status: 500 },
    )
  }
}

// [POST] Criar um novo instrutor
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, cpf, cref, birthdate, role } = body

    if (!name || !email || !phone || !cpf) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    const newInstructor = await prisma.instructor.create({
      data: {
        name,
        email,
        phone,
        cpf,
        birthdate,
        role,
        cref: cref || null,
        active: InstructorStatus.ACTIVE,
      },
    })

    return NextResponse.json(newInstructor, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create instructor' },
      { status: 500 },
    )
  }
}
