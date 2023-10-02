import { Sidebar } from './view/components/Sidebar'
import { Header } from './view/components/Header'

export function App() {
  return (
    <div className="grid-cols-app grid min-h-screen bg-zinc-200">
      <Sidebar />

      <main className="lg:col-start-2 lg:px-8 lg:pt-8">
        <Header />
      </main>
    </div>
  )
}
