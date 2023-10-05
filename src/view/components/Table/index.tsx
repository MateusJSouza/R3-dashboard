import { Badge } from "../Badge"
import { ProgressBar } from "../ProgressBar"
import { DataItem } from "../TopSellersCard"

interface TableProps {
  data: DataItem[]
}

export function Table({ data }: TableProps) {
  const slicedData = data.slice(0, 4)

  return (
    <table className="mt-4 min-w-full divide-y divide-gray-200">
      <thead className="">
        <tr className="text-[#96A5B8] font-table text-table">
          <th scope="col" className="px-6 py-3 font-medium leading-4 text-center">#</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Name</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Popularity</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Sales</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {slicedData.map((item, index) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
              {String(index + 1).padStart(2, "0")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <ProgressBar variant={index === 0 ? 'blue' : index === 1 ? 'green' : index === 2 ? 'orange' : 'purple'} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <Badge variant={index === 0 ? 'blue' : index === 1 ? 'green' : index === 2 ? 'orange' : 'purple'} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}