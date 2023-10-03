import { Sidebar } from './view/components/Sidebar'
import { Header } from './view/components/Header'
import { Sales } from './view/components/Sales'
import { UsersCard } from './view/components/UsersCard'

export function App() {
  return (
    <div className="grid-cols-app grid min-h-screen bg-zinc-200">
      <Sidebar />

      <main className="bg-greys-300 col-start-2">
        <Header />

        <div className="grid-cols-card grid gap-8 p-8">
          <Sales />

          <UsersCard />
        </div>
      </main>
    </div>
  )
}
