// ProfileMenu.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CiUser } from 'react-icons/ci'
import useUser from '@/hook/useUser'
import IF from '../IF'

export default function ProfileMenu() {
  const { handleLogoutUser, isAuthenticated, userData } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.95 }
  }

  return (
    <div className='relative inline-block text-left'>
      <div className='flex items-center gap-2'>
        <p className='text-sm'>
          Olá, <span className='font-semibold'>{userData?.name}</span>
        </p>
        <button
          onClick={toggleMenu}
          className='flex items-center space-x-2 focus:outline-none hover:bg-[rgb(0,0,0,.1)] p-2 rounded-full'
        >
          <CiUser size={20} />
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          transition={{ duration: 0.2 }}
          className='absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
        >
          <div className='py-1'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            >
              Meu Perfil
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            >
              Configurações
            </a>
            <IF condition={isAuthenticated}>
              <button
                onClick={handleLogoutUser}
                className='block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 text-start'
              >
                Sair
              </button>
            </IF>
          </div>
        </motion.div>
      )}
    </div>
  )
}
