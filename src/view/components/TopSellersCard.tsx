import { Table } from "./Table";

export function TopSellersCard() {
  return (
    <div className="rounded-20 bg-white shadow-[0px_4px_20px_0px_rgba(238,238,238,0.50)]">
      <p className="text-primary-900 text-xl font-bold leading-8 px-8 pt-6">Top Sellers</p>

      <Table />
    </div>
  )
}