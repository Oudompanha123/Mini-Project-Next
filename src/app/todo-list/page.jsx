import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

function page() {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <SidebarComponent/>
        </div>
        <div className='w-[80%]'>
            <NavbarComponent/>
        </div>
    </div>
  )
}

export default page
