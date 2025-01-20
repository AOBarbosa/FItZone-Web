'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Instructor } from '@prisma/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InstructorType } from '@/models/instructors'
import { InstructorService } from '@/services/instructors'

interface RegisterStudentFormProps {
  setIsListUpdated?: Dispatch<SetStateAction<boolean>>
  instructor: Instructor
}

const registerStudentFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  email: z.string().email('E-mail inválido.'),
  phone: z.string().min(10, 'O telefone deve ter no mínimo 10 dígitos.'),
  cpf: z.string().length(11, 'O CPF deve conter exatamente 11 caracteres.'),
  cref: z
    .string()
    .length(6, 'O CREF deve conter exatamente 6 caracteres.')
    .optional(),
  role: z.string(),
  birthdate: z.string(),
})

// const registerStudentFormSchema = z.object({
//   name: z.string().min(1, 'O nome é obrigatório.'),
//   email: z.string().email('E-mail inválido.'),
//   phone: z.string().min(10, 'O telefone deve ter no mínimo 10 dígitos.'),
//   cpf: z.string().length(11, 'O CPF deve conter exatamente 11 caracteres.'),
//   birthdate: z.string(),
// })

type RegisterStudentFormSchema = z.infer<typeof registerStudentFormSchema>

export function ViewStudentForm({
  setIsListUpdated,
  instructor,
}: RegisterStudentFormProps) {
  const form = useForm<RegisterStudentFormSchema>({
    resolver: zodResolver(registerStudentFormSchema),
  })
  const instructorService = new InstructorService()
  const [currentInstructor, setCurrentInstructor] = useState<Instructor | null>(
    null,
  )

  async function getStudentData() {
    const theInstructor = await instructorService.findByID(instructor.id)

    return theInstructor
  }

  useEffect(() => {
    async function fetchStudentData() {
      const currentStudent = await getStudentData()
      setCurrentInstructor(currentStudent)
    }
    fetchStudentData()
  }, [currentInstructor])

  async function submitForm(data: RegisterStudentFormSchema) {
    console.log(JSON.stringify(data, null, 2))
    // await instructorService.update(data)
    if (setIsListUpdated) {
      setIsListUpdated(true)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitForm)}
        className="grid gap-4 py-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.name}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.email}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.phone}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.cpf}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.role}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {form.getValues('role') !== InstructorType.INTERN &&
          form.getValues('role') !== '' && (
            <FormField
              control={form.control}
              name="cref"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CREF</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      defaultValue={currentInstructor?.cref}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento</FormLabel>
              <FormControl>
                <Input
                  disabled
                  defaultValue={currentInstructor?.birthdate}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
