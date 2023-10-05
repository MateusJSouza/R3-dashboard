import { Logo } from './Logo'
import { NavItem } from './NavItem'

import { GraphIcon } from '../icons/GraphIcon'
import { LeaderboardIcon } from '../icons/LeaderboardIcon'
import { OrderIcon } from '../icons/OrderIcon'
import { ProductsIcon } from '../icons/ProductsIcon'
import { MessagesIcon } from '../icons/MessagesIcon'
import { SalesReportIcon } from '../icons/SalesReportIcon'
import { SettingsIcon } from '../icons/SettingsIcon'
import { SignoutIcon } from '../icons/SignoutIcon'

export function Sidebar() {
  return (
    <aside className="bg-greys-50 flex flex-col px-12 py-10">
      <div className="mb-12 flex items-center gap-6">
        <Logo />
        <p className="text-greys-900 text-3xl font-semibold leading-[150%]">
          Site
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <NavItem icon={GraphIcon} title="Dashboard" />
        <NavItem icon={LeaderboardIcon} title="Leaderboard" />
        <NavItem icon={OrderIcon} title="Order" />
        <NavItem icon={ProductsIcon} title="Products" />
        <NavItem icon={SalesReportIcon} title="Sales Report" />
        <NavItem icon={MessagesIcon} title="Messages" />
        <NavItem icon={SettingsIcon} title="Settings" />
      </div>

      <div className="mt-auto flex cursor-pointer items-center gap-6">
        <SignoutIcon />
        <p className="text-lg leading-normal text-red-900">Sign Out</p>
      </div>
    </aside>
  )
}
