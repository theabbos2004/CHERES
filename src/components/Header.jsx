import { Menu } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Logo from ".././assets/Logo-1.jpg"
import { MenuList } from '../constans';
export default function Header() {
  const location = useLocation();
  return (
    <header className='w-full h-[70px] border-b-1 border-[var(--color-black-1)]'>
      <div className='container mx-auto flex justify-between h-full'>
        <div className='w-[20%] py-2'>
          <img
            alt='logo'
            src={Logo}
            className='h-full'
          />
        </div>
        <Menu
          mode="horizontal" 
          className="w-[80%] h-full !bg-transparent items-center !border-none flex justify-end"
          items={MenuList?.map((item)=>({
                  ...item,
                  label:item?.label(),
                  className:`!leading-[70px] !text-gray-500 hover:after:!border-b-[0.3px] hover:after:!border-[var(--color-black)] ${location?.pathname === item.key && "after:!border-b-[0.3px] after:!border-[var(--color-black)]"}`,
          }))}
          />
      </div>
    </header>
  )
}
