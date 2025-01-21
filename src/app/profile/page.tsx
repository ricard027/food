'use client'

import BreadCrumb from '@/components/breadcrumb'
import useUser from '@/hook/useUser'
import Image from 'next/image'

import { GrFavorite } from 'react-icons/gr'
import { IoLocationOutline } from 'react-icons/io5'
import { BsBoxArrowLeft, BsCart2 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FaPenToSquare } from 'react-icons/fa6'

const ProfilePage = () => {
  const { userData } = useUser()
  console.log(userData, 'dads')
  return (
    <main className='min-h-screen'>
      <div className='max-w-6xl m-auto '>
        <BreadCrumb />
        <div className='flex gap-8'>
          <aside className='flex flex-col bg-gray-50 text-center p-6 mb-2 rounded-md'>
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
            <nav className='mt-6'>
              <ul className='flex flex-col gap-2'>
                <li className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
                  <AiOutlineUser size={20} />
                  Profile
                </li>
                <li className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
                  <GrFavorite size={20} />
                  Wishlist
                </li>
                <li className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
                  <BsCart2 size={20} />
                  Orders
                </li>
                <li className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
                  <IoLocationOutline size={20} />
                  addresses
                </li>
                <li className='p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-2'>
                  <BsBoxArrowLeft size={20} />
                  Logout
                </li>
              </ul>
            </nav>
          </aside>
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <label className='flex flex-col gap-2'>
                <legend>Name</legend>
                <input
                  defaultValue={userData?.name}
                  placeholder='User name'
                  className='bg-gray-100 p-4 rounded-md'
                />
              </label>
              <label className='flex flex-col gap-2'>
                <legend>Email</legend>
                <input
                  defaultValue={userData?.email}
                  placeholder='email@homail.com'
                  className='bg-gray-100 p-4 rounded-md'
                />
              </label>
              <label className='flex flex-col gap-2'>
                <legend>Provider</legend>
                <input
                  defaultValue={userData?.provider}
                  placeholder='Account provider'
                  disabled
                  className='bg-gray-100 p-4 rounded-md'
                />
              </label>
              <label className='flex flex-col gap-2'>
                <legend>Cpf</legend>
                <input
                  defaultValue=''
                  placeholder='xxx.xxx.xxx-xx'
                  disabled
                  className='bg-gray-100 p-4 rounded-md'
                />
              </label>
              <label className='flex flex-col gap-2'>
                <legend>Phone number</legend>
                <input
                  defaultValue=''
                  placeholder='(22) 99999-9999'
                  disabled
                  className='bg-gray-100 p-4 rounded-md'
                />
              </label>
              <label className='flex flex-col gap-2'>
                <legend>Recovery password</legend>
                <button className='p-4 rounded-md bg-primary w-full'>
                  Send code
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
