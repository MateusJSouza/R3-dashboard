import { MyResponsivePie } from './ResponsivePie'

import data from '../../mocks/data.json'

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

      <div className="mt-12 flex items-center justify-center gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-5 rounded-sm bg-[#497AF9]" />
            <span className="text-greys-700 w-20 text-[10px] leading-4">
              62% New
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-5 rounded-sm bg-[#789DFB]" />
            <span className="text-greys-700 w-20 text-[10px] leading-4">
              13% Returning
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-5 rounded-sm bg-[#E5E5E5]" />
            <span className="text-greys-700 w-20 text-[10px] leading-4">
              23% Inactive
            </span>
          </div>
        </div>

        <div className="h-80">
          <MyResponsivePie data={data} />
        </div>
      </div>
    </div>
  )
}
