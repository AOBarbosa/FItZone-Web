import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

// Buscar usuário por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado.' },
        { status: 404 },
      )
    }

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar o usuário.', details: error.message },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

// Atualizar usuário por ID
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json()

    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        name: body.name,
        email: body.email,
        role: body.role,
        image: body.image,
      },
    })

    return NextResponse.json({ user })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Usuário não encontrado.' },
        { status: 404 },
      )
    }
    return NextResponse.json(
      { error: 'Erro ao atualizar o usuário.', details: error.message },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

// Deletar usuário por ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const user = await prisma.user.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Usuário deletado com sucesso.', user })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Usuário não encontrado.' },
        { status: 404 },
      )
    }
    return NextResponse.json(
      { error: 'Erro ao deletar o usuário.', details: error.message },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
