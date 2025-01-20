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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InstructorType } from '@/models/instructors'
import { InstructorService } from '@/services/instructors'

interface RegisterStudentFormProps {
  setIsListUpdated: Dispatch<SetStateAction<boolean>>
  // newStudentCounter: number
  // setNewStudentCounter: Dispatch<SetStateAction<number>>
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

type RegisterStudentFormSchema = z.infer<typeof registerStudentFormSchema>

export function RegisterInstructorDialog({
  setIsListUpdated,
}: RegisterStudentFormProps) {
  const form = useForm<RegisterStudentFormSchema>({
    resolver: zodResolver(registerStudentFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      birthdate: '',
      cref: '',
      role: '',
    },
  })

  async function submitForm(data: RegisterStudentFormSchema) {
    const instructorService = new InstructorService()

    await instructorService.create({
      ...data,
      cref: data.cref || '',
    })
    form.reset()
    // setNewStudentCounter(newStudentCounter + 1)
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função do instrutor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={InstructorType.INTERN}>
                    Estagiário
                  </SelectItem>
                  <SelectItem value={InstructorType.TEACHER}>
                    Professor
                  </SelectItem>
                  <SelectItem value={InstructorType.PERSONAL}>
                    Personal
                  </SelectItem>
                </SelectContent>
              </Select>

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
                      required
                      placeholder="Informe o CREF do aluno"
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
