import {
  AreaChartComponent,
} from "@/components/ui/charts"

import {
  Table
} from "@/components/elements"

export default function Home() {
  return (
    <div className='w-full p-3'>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-2'>
        <section className="col-span-2">
          <AreaChartComponent />
        </section>
        <section>
          <Table />
        </section>
      </div>
    </div>
  )
}