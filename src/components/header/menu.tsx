import { useState } from 'react'
import { motion } from 'framer-motion'
import { PiSquaresFourLight } from 'react-icons/pi'
import { BsBoxArrowLeft, BsBoxArrowRight } from 'react-icons/bs'
import { navigation } from './links'

import IF from '../IF'
import useUser from '@/hook/useUser'
import Link from 'next/link'

export default function ProfileMenu() {
  const { handleLogoutUser, isAuthenticated } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.95 }
  }
  const defaultLinks = [...navigation.default.links]

  if (isAuthenticated) {
    defaultLinks.unshift(...navigation.authenticated.links)
  }

  return (
    <div className='relative  text-left'>
      <button
        onClick={toggleMenu}
        className='flex items-center space-x-2 focus:outline-none hover:bg-[rgb(0,0,0,0.04)] p-2 rounded-full'
      >
        <PiSquaresFourLight size={25} />
      </button>

      {isOpen && (
        <>
          <div
            style={{ display: isOpen ? 'block' : 'none' }}
            className='hover:bg-[rgb(0,0,0,0.04)]  w-full z-10 fixed left-0 h-screen top-0  backdrop-blur-sm'
            onClick={toggleMenu}
          />
          <motion.div
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className='absolute p-2 right-0 mt-2 w-48 origin-top-right rounded-md z-20 shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          >
            <div className='py-1 flex flex-col gap-2'>
              {defaultLinks.map(({ text, url, icon }, index) => (
                <Link
                  href={url}
                  key={index}
                  onClick={toggleMenu}
                  className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-2'
                >
                  {' '}
                  <span>{icon({ size: 15 })}</span>
                  {text}
                </Link>
              ))}
              <IF condition={isAuthenticated}>
                <button
                  onClick={handleLogoutUser}
                  className=' bg-primary px-4 w-full py-2 text-sm text-black text-start rounded-md flex items-center gap-2'
                >
                  <BsBoxArrowLeft size={15} />
                  Logout
                </button>
              </IF>
              <IF condition={!isAuthenticated}>
                <Link
                  href={'/login'}
                  onClick={toggleMenu}
                  className=' bg-primary px-4 w-full py-2 text-sm text-black text-start rounded-md flex items-center gap-2'
                >
                  <BsBoxArrowRight size={15} />
                  Login
                </Link>
              </IF>
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}
