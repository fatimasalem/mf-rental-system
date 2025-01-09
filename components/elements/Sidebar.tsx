'use client'
import React from 'react'

import {
  Button,
  User,

  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,

} from "@nextui-org/react"


import {
  IconUsersGroup,
  IconBuildings,
  IconCreditCardPay,
  IconCalendarDollar,
  IconHammer,
  IconChartHistogram
} from "@tabler/icons-react"
import Link from 'next/link'

const items = [
  {
    title: "Customer Management",
    icon: <IconUsersGroup/>,
    link: "/customer-management"
  },
  {
    title: "Property Management",
    icon: <IconBuildings/>,
    link: "/property-management"
  },
  {
    title: "Payments",
    icon: <IconCreditCardPay/>,
    link: "/payments"
  },
  {
    title: "Lease Agreements",
    icon: <IconCalendarDollar/>,
    link: "/lease-agreements"
  },
  {
    title: "Maintenance Requests",
    icon: <IconHammer/>,
    link: "/maintenance-requests"
  },
  {
    title: "Analytics Dashboard",
    icon: <IconChartHistogram/>,
    link: "/analytics-dashboard"
  },
]

const Sidebar = () => {
  return (
    <div>

      <div className='md:hidden flex'>
        <div className='p-4 fixed bottom-0 w-full z-10 backdrop-blur-lg border-t'>
          <div className='flex flex-wrap justify-center w-full'>
            {items.map((item, index) => (
              <Button variant='flat' key={index} className='bg-transparent'>
                <Link href={item.link}>
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className='md:hidden flex'>
        <div className='p-4 fixed top-0 w-full z-50 backdrop-blur-lg border-t'>
          <div className='w-full place-items-end'>
            <Dropdown className='border border-default-200'>
              <DropdownTrigger>
                <Button variant='flat' className='w-[13rem] flex justify-start bg-black'>
                  <User
                    name="Marwan Alsaadi"
                    description="Business Owner"
                    avatarProps={{
                      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
                      className:"w-7 h-7 outline outline-1 outline-gray-700 outline-offset-2 rounded-full"
                    }}
                    classNames={{
                      name: "text-white",
                      description: "text-gray-300"
                    }}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant='flat' className=''>
                <DropdownItem key="Profile" color='primary'>Profile</DropdownItem>
                <DropdownItem key="Settings" color='primary'>Settings</DropdownItem>
                <DropdownItem key="Logout" color='danger'>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className='md:flex hidden'>
        <div className='w-[15rem] h-screen py-3 fixed'>
          <div className=''>
            <div className='flex flex-row p-2 space-x-2'>
              <div className='bg-black p-1'></div>
              <h2 className='uppercase tracking-wider'>MF Rental</h2>
            </div>
          </div>

          {/* body */}
          <div className='px-2 py-10'>
            {items.map((item, index) => (
              <Button variant='flat' className='w-full my-2 border-none hover:text-blue-500 translate-x-1 transition duration-300 bg-transparent text-black' key={index}>
                <Link className='flex flex-row justify-between w-full place-items-center space-x-1' href={item.link}>
                  {item.icon}
                  <p className='w-full text-start'>{item.title}</p>
                </Link>
              </Button>
            ))}
          </div>

          {/* footer */}
          <div className='px-2 absolute w-[15rem] bottom-5'>
            <Dropdown className='border border-default-200'>
              <DropdownTrigger>
                <Button variant='flat' className='w-[13rem] flex justify-start bg-black'>
                  <User
                    name="Marwan Alsaadi"
                    description="Business Owner"
                    avatarProps={{
                      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
                      className:"w-7 h-7 outline outline-1 outline-gray-700 outline-offset-2 rounded-full"
                    }}
                    classNames={{
                      name: "text-white",
                      description: "text-gray-300"
                    }}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant='flat' className=''>
                <DropdownItem key="Profile" color='primary'>Profile</DropdownItem>
                <DropdownItem key="Settings" color='primary'>Settings</DropdownItem>
                <DropdownItem key="Logout" color='danger'>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar