import { prisma } from '@/lib/prisma'

async function main() {
  // Verifica se já existe um administrador
  const adminExists = await prisma.user.findFirst({
    where: { role: 'ADMIN' },
  })

  if (adminExists) {
    console.log('Administrador já existe:', adminExists)
    return
  }

  // Cria o usuário administrador
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'ADMIN',
      image: 'https://github.com/AOBarbosa.png', // Opcional
    },
  })

  console.log('Administrador criado com sucesso:', admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
