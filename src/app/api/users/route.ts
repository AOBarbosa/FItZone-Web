import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

// Lista todos os usuários
export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json({ users })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar usuários.', details: (error as Error).message },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

// Cria um novo usuário
export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json(
        { error: 'Email é obrigatório!' },
        { status: 400 },
      )
    }

    const user = await prisma.user.create({
      data: {
        name: body.name || 'Usuário sem nome',
        email: body.email,
        role: body.role || 'INSTRUCTOR',
        image: body.image || null,
      },
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Já existe um usuário com este email.' },
        { status: 409 },
      )
    }
    return NextResponse.json(
      { error: 'Erro ao criar o usuário.', details: error.message },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
