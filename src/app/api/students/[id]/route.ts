import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params

  try {
    const student = await prisma.student.findUnique({
      where: { id },
    })

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    return NextResponse.json(student)
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    )
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const body = await req.json()

  try {
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        cpf: body.cpf,
        birthdate: body.birthdate,
        active: body.active,
        feeStatus: body.feeStatus,
      },
    })

    return NextResponse.json(updatedStudent)
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params

  try {
    await prisma.student.delete({ where: { id } })
    return NextResponse.json({ message: 'Student deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}
