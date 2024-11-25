import { ThemeToggle } from '@/components/theme-toggle'
import { ToastDemo } from '@/components/toast-demo'

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8">
      <div>
        <h1>FIT ZONE</h1>
        <ThemeToggle />
      </div>

      <div>
        <ToastDemo />
      </div>
    </div>
  )
}
