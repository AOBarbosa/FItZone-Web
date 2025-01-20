'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Student } from '@prisma/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { StudentService } from '@/services/student'

interface RegisterStudentFormProps {
  setIsListUpdated?: Dispatch<SetStateAction<boolean>>
  student: Student
}

const registerStudentFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  id: z.string().min(1, 'O ID é obrigatório.'),
  email: z.string().email('E-mail inválido.'),
  phone: z.string().min(10, 'O telefone deve ter no mínimo 10 dígitos.'),
  cpf: z.string().length(11, 'O CPF deve conter exatamente 11 caracteres.'),
  birthdate: z.string(),
  active: z.string(),
  feeStatus: z.string().min(1, 'O status de taxa é obrigatório.'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// const registerStudentFormSchema = z.object({
//   name: z.string().min(1, 'O nome é obrigatório.'),
//   email: z.string().email('E-mail inválido.'),
//   phone: z.string().min(10, 'O telefone deve ter no mínimo 10 dígitos.'),
//   cpf: z.string().length(11, 'O CPF deve conter exatamente 11 caracteres.'),
//   birthdate: z.string(),
// })

type RegisterStudentFormSchema = z.infer<typeof registerStudentFormSchema>

export function EditStudentForm({
  setIsListUpdated,
  student,
}: RegisterStudentFormProps) {
  const form = useForm<RegisterStudentFormSchema>({
    resolver: zodResolver(registerStudentFormSchema),
  })
  const studentService = new StudentService()
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null)

  async function getStudentData() {
    const theStudent = await studentService.findByID(student.id)

    return theStudent
  }

  useEffect(() => {
    async function fetchStudentData() {
      const currentStudent = await getStudentData()
      setCurrentStudent(currentStudent)
    }
    fetchStudentData()
  }, [currentStudent])

  async function submitForm(data: RegisterStudentFormSchema) {
    console.log(JSON.stringify(data, null, 2))
    await studentService.update(data)
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
                  required
                  defaultValue={currentStudent?.name}
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
                  required
                  defaultValue={currentStudent?.email}
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
                  required
                  defaultValue={currentStudent?.phone}
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
                <Input required defaultValue={currentStudent?.cpf} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento</FormLabel>
              <FormControl>
                <Input
                  required
                  type="date"
                  defaultValue={currentStudent?.birthdate}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* <DialogClose asChild>
          <Button type="submit">Cadastrar</Button>
        </DialogClose> */}
      </form>
    </Form>
  )
}
