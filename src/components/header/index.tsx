'use client'

import Image from 'next/image'
import Link from 'next/link'

import ProfileMenu from './menu'
import CartSidebar from '../cart'
import { usePathname } from 'next/navigation'

const HeaderComponent = () => {
  const URLS_SHOLD_NOT_USE = ['login','register']
  
  const router = usePathname()

  if(URLS_SHOLD_NOT_USE.includes(router.replace('/',''))){
    return <></>
  }

  return (
    <>
      <header className='z-50 fixed left-0 top-0 flex w-screen items-center justify-center bg-secondary sm:px-6 xs:px-6 md:px-0'>
        <div className='container m-auto flex max-w-6xl items-center justify-between py-4  px-4'>
          <Link className='flex items-baseline gap-1' href={'/'}>
            <Image src='/logo.svg' alt='image logo' width={30} height={30} />
            <p className='md:text-lg sm:text-sm xs:text-sm  font-semibold'>
              Lets Flavorly
            </p>
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
          <div className='flex gap-2'>
            <ProfileMenu />
            <CartSidebar />
          </div>
        </div>
      </header>
      <div className='mt-[72px] w-full'></div>
    </>
  )
}
export default HeaderComponent
