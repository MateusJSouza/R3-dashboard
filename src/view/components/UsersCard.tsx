import { PieChart } from './Charts/PieChart'
import { convertedData } from '../../utils/convertedData'
import { cn } from '../../utils/cn'
import { mockPieData } from '../../mocks/mockData'

export function UsersCard() {
  return (
    <div className="rounded-20 bg-white px-10 py-6">
      <div className="flex flex-col">
        <p className="text-primary-900 text-xl font-semibold leading-8">
          Users
        </p>
        <span className="text-sm font-medium leading-5 text-[#222B45]">
          4,209
        </span>
      </div>

      <div className="w-full h-[280px] flex flex-row-reverse items-center justify-center">
        <PieChart />
        <ul className="space-y-6">
          {mockPieData.map(item => (
            <li key={item.id} className="flex gap-2">
              <div className={cn(
                'w-5 h-3 rounded-sm',

                `${item.label === 'New' && 'bg-[#497AF9]'}`,
                `${item.label === 'Returning' && 'bg-[#789DFB]'}`,
                `${item.label === 'Inactive' && 'bg-[#789DFB]'}`,
              )} />

              <span className="text-[10px] leading-4 w-20">{`${convertedData(item.value)}% ${item.label}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
