'use client'

import { FC, ReactNode } from 'react'
import BreadCrumb from '../breadcrumb'
import MenuLateral from '../menulateral'
import useUser from '@/hook/useUser'
import { usePathname } from 'next/navigation'

const AuthenticatedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { userData } = useUser()
  const path = usePathname()
  const titlePage = path.replace('/', '')
  return (
    <main className='min-h-screen'>
      <div className='max-w-6xl m-auto px-6'>
        <BreadCrumb />
        <div className='flex md:gap-8 xs:justify-center xs:items-start xs:gap-0 md:items-start md:justify-normal'>
          <MenuLateral userData={userData!} />
          <section>
            <h1 className='h1-page'>{titlePage}</h1>
            <div>{children}</div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default AuthenticatedLayout
