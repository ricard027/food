'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'
import useUser from '@/hook/useUser'
import IF from '../IF'

const HeaderComponent = () => {
  const { handleLogoutUser, isAuthenticated } = useUser()

  return (
    <>
      <header className='z-50 fixed left-0 top-0 flex w-full items-center justify-center bg-secondary'>
        <div className='container m-auto flex max-w-6xl items-center justify-between py-4  px-4'>
          <Link className='flex items-baseline gap-1' href={'/'}>
            <p className='text-lg font-semibold'>Lets Food</p>
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
            <div className='flex items-center gap-6'>
              <span className='cursor-pointer'>
                <Image
                  src='/search.svg'
                  alt='image logo'
                  width={20}
                  height={20}
                />
              </span>
              <span className='cursor-pointer'>
                <Image
                  src='/cart.svg'
                  alt='image logo'
                  width={20}
                  height={20}
                />
              </span>
            </div>
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
              <button onClick={handleLogoutUser}>sair</button>
            </IF>
          </div>
        </div>
      </header>
      <div className='mt-[72px] w-full'></div>
    </>
  )
}
export default HeaderComponent
