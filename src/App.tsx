import { Sidebar } from './view/components/Sidebar'
import { Header } from './view/components/Header'
import { Sales } from './view/components/Sales'
import { UsersCard } from './view/components/UsersCard'
import { TargetCard } from './view/components/TargetCard'
import { CustomerCard } from './view/components/CustomerCard'
import { TopSellersCard } from './view/components/TopSellersCard'

export function App() {
  return (
    <div className="grid-cols-app grid min-h-screen bg-zinc-200">
      <Sidebar />

      <main className="bg-greys-300 col-start-2">
        <Header />

        <div className="grid-cols-card grid gap-8 p-8">
          <Sales />

          <UsersCard />

          <TargetCard />

          <CustomerCard />

          <div className="col-span-full">
            <TopSellersCard />
          </div>
        </div>
      </main>
    </div>
  )
}
