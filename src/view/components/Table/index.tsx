export function Table() {
  return (
    <table className="mt-4 min-w-full divide-y divide-gray-200">
      <thead className="">
        <tr className="text-[#96A5B8] font-table text-table">
          <th scope="col" className="px-6 py-3 font-medium leading-4 text-center">#</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Name</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Popularity</th>
          <th scope="col" className="px-6 py-3 text-left font-medium leading-4">Sales</th>
        </tr>
      </thead >
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">01</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Name 1</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="w-64 h-2 bg-gray-200 rounded-full">
              <div className="w-3/4 h-full bg-blue-500 rounded-full" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <span className="inline-flex items-center px-5 py-1 rounded-lg text-xs font-medium border border-[#0095FF] bg-blue-50 text-[#0095FF]">
              45%
            </span>
          </td>
        </tr>
      </tbody>
    </table >
  )
}