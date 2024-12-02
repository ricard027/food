'use client'

import Image from 'next/image'
import Link from 'next/link'
import useUser from '@/hook/useUser'

import IF from '../IF'
import Button from '../button'
import ProfileMenu from './menu'
import CartSidebar from '../cart'

const HeaderComponent = () => {
  const { isAuthenticated } = useUser()
  return (
    <>
      <header className='z-50 fixed left-0 top-0 flex w-screen items-center justify-center bg-secondary sm:px-6 xs:px-6 md:px-0'>
        <div className='container m-auto flex max-w-6xl items-center justify-between py-4  px-4'>
          <Link className='flex items-baseline gap-1' href={'/'}>
            <p className='md:text-lg sm:text-sm xs:text-xs  font-semibold line-clamp-1'>Lets Food</p>
            <Image src='/logo.svg' alt='image logo' width={30} height={30} />
          </Link>
          <nav className='xs:hidden md:flex sm:hidden '>
            <ul className='flex items-center justify-between gap-4'>
              <li className='text-textLight flex-1 cursor-pointer px-4 py-2 font-medium hover:text-black'>
                <Link href={'/'}>Home</Link>
              </li>
              <li className='text-textLight flex-1 cursor-pointer px-4 py-2 font-medium hover:text-black'>
                <Link href={'/menu'}>Menu</Link>
              </li>
              <li className='text-textLight flex-1 cursor-pointer px-4 py-2 font-medium hover:text-black'>
                <Link href={'/about'}>About</Link>
              </li>
              <li className='text-textLight flex-1 cursor-pointer px-4 py-2 font-medium hover:text-black'>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className='flex gap-6'>
            <IF condition={!isAuthenticated}>
              <Link href={'/login'}>
                <Button
                  icon={
                    <Image
                      src='/login.svg'
                      alt='image logo'
                      width={15}
                      height={15}
                    />
                  }
                >
                  Entrar
                </Button>
              </Link>
            </IF>
            <IF condition={isAuthenticated}>
              <ProfileMenu />
            </IF>
            <CartSidebar />
          </div>
        </div>
      </header>
      <div className='mt-[72px] w-full'></div>
    </>
  )
}
export default HeaderComponent
