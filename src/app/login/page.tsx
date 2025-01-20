'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import loginImage from '@/../public/image-fit.jpg'
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { prisma } from '@/lib/prisma'

const formSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})
export default function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const router = useRouter()

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email: values.email,
    //   },
    // })

    // if (!user) {
    //   throw new Error('Invalid credentials.')
    // }

    console.log(values)
    await signIn('credentials', { redirectTo: 'dashboard/main' }, values).then(
      () => console.log(values),
    )
  }

  return (
    <div className="flex h-screen">
      <div className="relative w-1/2">
        <Image
          src={loginImage}
          alt="Login Image"
          layout="fill"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
          <h1 className="mb-8 text-center text-4xl font-bold text-black">
            FitZone
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="senha" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
