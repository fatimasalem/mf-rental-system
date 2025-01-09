import { Table } from '@/components/elements/customer-management'
import React from 'react'

const CustomerManagement = () => {
  return (
    <div className='w-full h-full mt-10 p-3 mb-28 md:mb-0'>
      <div className="mt-14 md:mt-10 mb-5">
        <h1 className="text-2xl font-bold">Customer Management</h1>
      </div>
      <div className='w-full h-full'>
        <Table />
      </div>
    </div>
  )
}

export default CustomerManagement