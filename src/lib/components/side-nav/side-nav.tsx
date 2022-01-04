import React, { useEffect, useState } from 'react'
import { IoLogoEdge } from 'react-icons/io5'
import { RiSettings4Fill } from 'react-icons/ri'
import { FaRegBell } from 'react-icons/fa'
import classNames from 'classnames'
import { ISideNavProps } from '@modal/sidenav.modal'
import { useLocation } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'

import '../../../index.scss'
import { Link } from 'react-router-dom'

const Sidebar = ({ navigationData }: ISideNavProps): JSX.Element => {
  const location = useLocation()
  const [currentRoute, setCurrentRoute] = useState<string>('')
  useEffect(() => {
    setCurrentRoute(location.pathname)
  }, [location])

  return (
    <nav className="bg-gray-100 fixed left-0 top-0 bottom-0 z-50 w-14 bg-white flex flex-col h-screen justify-between items-center py-6 rounded-tr-4xl ">
      <span className="text-4xl text-gray-800">
        <IoLogoEdge />
      </span>
      <ul className="flex flex-col items-center w-full">
        {navigationData.map((element: any, index: number) => (
          <li
            key={index}
            className={classNames([
              'text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer',
              currentRoute === element.path && 'text-blue-600 hover:text-blue-700',
              'group',
            ])}
          >
            <Link to={element.path}>
              {element.icon}
              <span
                className={classNames([
                  'absolute w-auto min-w-max left-16 text-base font-medium hidden',
                  'group-hover:inline',
                ])}
              >
                {element.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-between items-center">
        {/* <div className=" w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center text-gray-800 text-lg relative mb-4"> */}
        {/* <span className="h-5 w-5 flex justify-center items-center text-white absolute -top-1 -right-1 bg-red-500 text-xs rounded-full">
            24
          </span>
          <FaRegBell />
        </div>
        <span className="text-3xl text-gray-400 hover:text-gray-800 cursor-pointer">
          <RiSettings4Fill />
        </span> */}
        <span className="text-3xl mt-2 text-gray-400 hover:text-gray-800 cursor-pointer">
          <LogoutIcon />
          <span
            className={classNames([
              'absolute w-auto min-w-max left-16 text-base font-medium hidden',
              'group-hover:inline',
            ])}
          >
            Log Out
          </span>
        </span>
      </div>
    </nav>
  )
}

export default Sidebar
