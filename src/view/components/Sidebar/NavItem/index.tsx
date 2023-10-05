import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex w-full items-center gap-6 rounded-2xl px-6 py-4 transition-colors hover:bg-indigo-600 hover:shadow-[0px_20px_50px_0px_rgba(55,69,87,0.10)]"
    >
      <Icon className="h-8 w-8" />
      <span className="text-greys-700 text-lg font-medium transition-colors group-hover:font-semibold group-hover:text-white">
        {title}
      </span>
    </a>
  )
}
