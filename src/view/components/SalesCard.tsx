import { Card } from './Card'
import { ExportIcon } from './icons/ExportIcon'
import { ProductSoldIcon } from './icons/ProductSoldIcon'
import { TotalOrderIcon } from './icons/TotalOrderIcon'
import { TotalSalesIcon } from './icons/TotalSalesIcon'

export function SalesCard() {
  return (
    <div className="rounded-20 bg-white px-[30px] pb-8 pt-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.50)]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary-900 text-xl font-semibold leading-8">
            Today&lsquo;s Sales
          </h1>
          <span className="text-greys-700 leading-[1.875rem]">
            Sales Summery
          </span>
        </div>

        <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#C3D3E2] px-4 py-[10px]">
          <ExportIcon />
          <p className="text-sm font-medium leading-5 text-[#0F3659]">Export</p>
        </div>
      </div>

      <div className="mt-11 flex gap-8 flex-grow">
        <Card
          className="bg-red-100 flex-grow"
          icon={TotalSalesIcon}
          percentage="8"
          title="Total Sales"
          value="$1k"
        />

        <Card
          className="bg-yellow-100 flex-grow"
          icon={TotalOrderIcon}
          percentage="5"
          title="Total Order"
          value="300"
        />

        <Card
          className="bg-green-100 flex-grow"
          icon={ProductSoldIcon}
          percentage="1,2"
          title="Product Sold"
          value="5"
        />
      </div>
    </div>
  )
}
