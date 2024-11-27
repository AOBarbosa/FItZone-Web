'use client'

import { useEffect, useState } from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { Separator } from '../ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from './app-sidebar'

export default function SideBar({ children }: { children: React.ReactNode }) {
  const [isLoginPage, setIsLoginPage] = useState(false)

  useEffect(() => {
    // console.log(typeof window)
    if (typeof window !== 'undefined') {
      setIsLoginPage(window.location.href.includes('login'))
    }
  }, [])

  return (
    <>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Geral</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </>
      )}
    </>
  )
}
