import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

// [GET] Obter um instrutor pelo ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params
    const instructor = await prisma.instructor.findUnique({ where: { id } })

    if (!instructor) {
      return NextResponse.json(
        { error: 'Instructor not found' },
        { status: 404 },
      )
    }

    return NextResponse.json(instructor, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch instructor' },
      { status: 500 },
    )
  }
}

// [PUT] Atualizar um instrutor pelo ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params
    const body = await req.json()

    const updatedInstructor = await prisma.instructor.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(updatedInstructor, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update instructor' },
      { status: 500 },
    )
  }
}

// [DELETE] Deletar um instrutor pelo ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params

    await prisma.instructor.delete({ where: { id } })

    return NextResponse.json(
      { message: 'Instructor deleted successfully' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete instructor' },
      { status: 500 },
    )
  }
}
