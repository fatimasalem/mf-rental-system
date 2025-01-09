import {
  AreaChartComponent,
  RadialChartComponent,
} from "@/components/ui/charts"

import {
  Table
} from "@/components/elements"

const pageAlignment = [
  {
    id: 1,
    component: AreaChartComponent,
    style: 'sm:col-span-2'
  },
  {
    id: 2,
    component: RadialChartComponent,
    style: 'lg:col-span-1 col-span-2'
  },
  {
    id: 3,
    component: Table,
    style: 'lg:col-span-3 sm:col-span-2 mb-28 md:mb-0'
  }
]

const Dashboard = () => {
  return (
    <div className='w-full p-3'>
      <div className="mt-14 md:mt-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-2'>
        {pageAlignment.map((item, index) => (
          <div key={index} className={item.style}>
            <item.component height="max-h-[395px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;

