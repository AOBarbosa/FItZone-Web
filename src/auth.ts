import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/lib/prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)

        // logic to verify if the user exists
        user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        })

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error('Invalid credentials.')
        }

        // return user object with their profile data
        return user
      },
    }),
  ],
  // callbacks: {
  //   authorized: async ({ auth }) => {
  //     // Logged in users are authenticated, otherwise redirect to login page
  //     return !!auth
  //   },
  // },
})
