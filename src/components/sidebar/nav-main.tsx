'use client'

import { type LucideIcon } from 'lucide-react'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { DatePickerWithRange } from '../date-range-picker'

export function NavMain({
  items,
}: {
  items: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton tooltip={item.name}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Relatórios</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton tooltip={'Gerar relatório'}>
              <CalendarArrowUp />
              <span>Gerar relatório</span>

              </SidebarMenuButton> */}
            <DatePickerWithRange />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
