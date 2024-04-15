import React from 'react'

function Header()  {
  return (
    <div>
      <nav className="nav_bar w-full  fixed top-0  bg-[#F6FCFE] h-[110px]">
          <div className='bg-[#63C9EB] h-[10px] w-full'>
          </div>
          <div className="w-full flex flex-wrap items-center justify-between mx-auto px-[40px] pt-[25px]">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/images/logo.png" className="h-auto w-[10rem]" alt="" />
            </a>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <img src="/images/middle_logo.png" className="h-auto w-[15rem]" alt="" />
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header
