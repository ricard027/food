'use client'

import AuthenticatedLayout from '@/components/authenticatedLayout'
import useUser from '@/hook/useUser'

const ProfilePage = () => {
  const { userData } = useUser()

  return (
    <AuthenticatedLayout>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
        <label className='flex flex-col gap-2 w-full'>
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
    </AuthenticatedLayout>
  )
}

export default ProfilePage
