import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex w-full items-center gap-6 rounded-2xl px-6 py-4 hover:bg-indigo-600"
    >
      <Icon className="h-8 w-8" />
      <span className="text-greys-700 text-lg font-medium group-hover:font-bold group-hover:text-white">
        {title}
      </span>
    </a>
  )
}
