import Image from 'next/image'

import { BsBoxArrowLeft } from 'react-icons/bs'
import { FaPenToSquare } from 'react-icons/fa6'
import { IUser } from '@/types/user'
import Link from 'next/link'
import { navigation } from './links'
import { usePathname } from 'next/navigation'

interface IMenuLateral {
  userData: IUser
}

const MenuLateral = ({ userData }: IMenuLateral) => {
  const path = usePathname()
  return (
    <aside className='sm:hidden xs:hidden flex-col bg-gray-50 text-center p-6 mb-2 rounded-md md:flex'>
      <div>
        <div className='bg-gray-200 inline-block rounded-full w-20 h-20 relative'>
          <span className='absolute bottom-0 right-1 bg-gray-100 p-1 r  ounded-md cursor-pointer'>
            <FaPenToSquare size={15} />
          </span>
          {userData?.profileImage ? (
            <Image
              src={userData?.profileImage ?? ''}
              alt='imagem'
              width={80}
              height={80}
            />
          ) : (
            <></>
          )}
        </div>
        <p className='max-w-36 h-16'>
          Hello, <span className='font-medium'>{userData?.name}</span>
        </p>
      </div>
      <nav className='mt-6 menulateral'>
        <ul className='flex flex-col gap-2'>
          {navigation.map(({ url, text, icon: Icon }) => {
            const IS_CURRENT_LINK = path === url

            return (
              <Link
                data-actived={IS_CURRENT_LINK}
                href={url}
                key={url}
                className='w-full p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'
              >
                <span className='block'>
                  <Icon size={20} />
                </span>
                {text}
              </Link>
            )
          })}

          <button className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
            <BsBoxArrowLeft size={20} />
            Logout
          </button>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuLateral
