import { ChevronDown } from 'lucide-react'
import notificationIcon from '../../assets/notification.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-9 py-8">
      <p className="text-greys-900 text-3xl font-semibold leading-[140%]">
        Dashboard
      </p>

      <div className="flex gap-3">
        <div className="relative flex cursor-pointer items-center justify-center rounded-lg bg-yellow-400/10 p-3">
          <img src={notificationIcon} className="h-6 w-6" alt="" />
          <div className="absolute right-3 top-2 h-2 w-2 rounded-full bg-red-500" />
        </div>
        <div className="cursor-pointer">
          <p className="text-greys-900 font-medium leading-6">User</p>
          <span className="text-sm leading-5 text-gray-500">Admin</span>
        </div>
        <ChevronDown className="h-3 w-3 text-blue-950" />
      </div>
    </header>
  )
}
