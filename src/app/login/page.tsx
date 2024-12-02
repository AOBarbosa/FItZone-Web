'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import loginImage from '@/../public/image-fit.jpg'

export default function Login() {
  const router = useRouter()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push('/dashboard/main')
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

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <label
                htmlFor="registerID"
                className="block text-sm font-medium text-gray-700"
              >
                Número da Matrícula
              </label>
              <input
                type="text"
                id="registerID"
                name="registerID"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Insira sua matrícula"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Insira sua senha"
              />
            </div>

            <div>
              <button
                type="submit"
                // onClick={() => router.push('/dashboard/main')}
                className="w-full rounded-md border border-transparent bg-[#D1F561] px-4 py-2 text-black shadow-sm hover:bg-[#a7c44d] focus:outline-none focus:ring-2 focus:ring-[#D1F561] focus:ring-offset-2"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
