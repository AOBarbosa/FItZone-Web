import { faker } from '@faker-js/faker'

import { prisma } from '@/lib/prisma'

async function main() {
  console.log('Seeding data...')

  // Seed Students
  const students = Array.from({ length: 10 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'national' }), // '(961) 770-7727'
    cpf: faker.string.numeric(11),
    active: faker.datatype.boolean(),
    feeStatus: faker.datatype.boolean(),
  }))

  await prisma.student.createMany({ data: students })

  // Seed Instructors
  const instructors = Array.from({ length: 5 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'national' }), // '(961) 770-7727'
    cpf: faker.string.numeric(11),
    role: faker.helpers.arrayElement(['Math', 'Science', 'History', 'PE']),
    active: faker.datatype.boolean(),
  }))

  await prisma.instructor.createMany({ data: instructors })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error('Error during seeding', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
