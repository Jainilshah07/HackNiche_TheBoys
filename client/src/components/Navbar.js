import React, { useState } from 'react'
// import logo from '../assets/Logo.svg'
// import dropdown from '../assets/dropdown.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
  let [open, setOpen] = useState(true);
  let [open1, setOpen1] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-[1.5px] border-black p-2 text-[16px]">
      <Link to="/" className="mr-4 inline-flex items-center">
        {/* <img src={logo}></img> */}
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
          <Link to="/investment" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Investment</span>
          </Link>
          {/* <Link to="/" id="dropdown" className="relative block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8" onClick={() => setOpen1(!open1)}>
            <div className='flex'>
              <span className=''>Events</span>
              <img className='w-6 h-6 ml-1' src={dropdown} alt="" />
            </div>
            <div className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open1 ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
                <Link to="/" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-0">Events</Link>
                <Link to="/events/blogs/all" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-1">Blogs</Link>
              </div>
            </div>
          </Link> */}
          <Link to="/profile" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Budget</span>
          </Link>
          <Link to="/expense-tracking" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Expense-Tracker</span>
          </Link>
          <Link to="/portfolio" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Portfolio</span>
          </Link>
          <Link to="/beginner's-guide" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Beginner's Guide</span>
          </Link>
          
          {/* <Link to="/events/data-2-knowledge" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Data 2 Knowledge</span>
          </Link> */}
        </div>
        {location.pathname === "/login" ? "" :
          <div> 
            <Link to="/login" className={`inline-block text-sm py-4 px-6 leading-none border rounded-xl text-black bg-white border-black  hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light`}>Sign Out</Link>
          </div>}
      </div>
    </nav>
  )

}

export default Navbar