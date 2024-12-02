'use client'

import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <div>
        <h1>FIT ZONE</h1>
        <ThemeToggle />
      </div>
    </div>
  )
}
