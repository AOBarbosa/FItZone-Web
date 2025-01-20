'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction } from 'react'
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
  setIsListUpdated: Dispatch<SetStateAction<boolean>>
  newStudentCounter: number
  setNewStudentCounter: Dispatch<SetStateAction<number>>
}

const registerStudentFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  email: z.string().email('E-mail inválido.'),
  phone: z.string().min(10, 'O telefone deve ter no mínimo 10 dígitos.'),
  cpf: z.string().length(11, 'O CPF deve conter exatamente 11 caracteres.'),
  birthdate: z.string(),
})

type RegisterStudentFormSchema = z.infer<typeof registerStudentFormSchema>

export function RegisterStudentForm({
  setIsListUpdated,
  newStudentCounter,
  setNewStudentCounter,
}: RegisterStudentFormProps) {
  const form = useForm<RegisterStudentFormSchema>({
    resolver: zodResolver(registerStudentFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      birthdate: '',
    },
  })

  async function submitForm(data: RegisterStudentFormSchema) {
    const studentService = new StudentService()

    await studentService.create(data)
    form.reset()
    setNewStudentCounter(newStudentCounter + 1)
    setIsListUpdated(true)
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
                  placeholder="Informe o nome do aluno"
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
                  placeholder="Informe o e-mail do aluno"
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
                  placeholder="Informe o celular do aluno"
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
                  required
                  placeholder="Informe o cpf do aluno"
                  {...field}
                />
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
                  placeholder="Informe a data de nascimento do aluno"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <DialogClose asChild>
          <Button type="submit">Cadastrar</Button>
        </DialogClose>
      </form>
    </Form>
  )
}
