import { BarChart } from "./Charts/BarChart";
import { RealitySalesIcon } from "./icons/RealitySalesIcon";
import { TargetSalesIcon } from "./icons/TargetSalesIcon";

export function TargetCard() {
  return (
    <div className="rounded-20 bg-white px-8 pb-8 pt-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.50)]">
      <p className="text-primary-900 text-xl font-semibold leading-8">Target vs Reality</p>

      <div className="w-full h-40">
        <BarChart />
      </div>

      <div className="flex items-center w-96">
        <RealitySalesIcon />
        <div>
          <p className="font-semibold leading-4 text-xs text-greys-900 text-center">Reality Sales</p>
          <span className="text-greys-700 text-[10px] leading-4">Global</span>
        </div>

        <p className="text-supportingColor-green text-sm font-medium leading-5 ml-auto">8.823</p>
      </div>

      <div className="mt-4 flex items-center w-96">
        <TargetSalesIcon />
        <div className="ml-7">
          <p className="font-semibold leading-4 text-xs text-greys-900 text-center">Reality Sales</p>
          <span className="text-greys-700 text-[10px] leading-4">Global</span>
        </div>

        <p className="text-supportingColor-yellow text-sm font-medium leading-5 ml-auto">12.122</p>
      </div>
    </div>
  )
}