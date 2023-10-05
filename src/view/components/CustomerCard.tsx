import { LineChart } from "./Charts/LineChart"
import { CustomerSatisfactionIcon } from "./icons/CustomerSatisfactionIcon"

export function CustomerCard() {
  return (
    <div className="rounded-20 bg-white px-8 pb-8 pt-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.50)]">
      <p className="text-primary-900 text-xl font-bold leading-8">Customer Satisfaction</p>

      <div className="w-full h-40"><LineChart /></div>

      <div className="h-px w-full bg-[#EDF2F6] mb-4 mt-7" />

      <div className="flex justify-center items-start gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <CustomerSatisfactionIcon stroke={'#0080DA'} fill={'#0095FF'} />
            <p className="leading-[30px] text-[#96A5B8] w-24">Last Month</p>
          </div>
          <span className="text-sm font-medium leading-5 text-[#222B45]">$3,004</span>
        </div>


        <div className="h-6 w-px bg-[#BDC9D3]" />

        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <CustomerSatisfactionIcon stroke={'#05C283'} fill={'#07E098'} />
            <p className="leading-[30px] text-[#96A5B8] w-24">This Month</p>
          </div>
          <span className="text-sm font-medium leading-5 text-[#222B45]">$4,504</span>
        </div>
      </div>
    </div>
  )
}