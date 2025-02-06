import { FieldErrors, UseFormRegister, SubmitHandler } from 'react-hook-form'
import { IoLogoGoogle } from 'react-icons/io'
import { Auth } from 'firebase/auth'

import Link from 'next/link'

import InputComponent from '@/components/input/input'
import Image from 'next/image'

interface ILoginForm {
  email: string
  password: string
  auth?: Auth
}

interface ILoginView {
  errors: FieldErrors<ILoginForm>
  register: UseFormRegister<ILoginForm>
  handleSubmit: (
    callback: SubmitHandler<ILoginForm>
  ) => (event?: React.BaseSyntheticEvent) => Promise<void>
  handleSubmitForm: (data: ILoginForm) => Promise<void>
  LoginWithGoogle: () => void
}

const LoginView = ({
  errors,
  register,
  handleSubmit,
  handleSubmitForm,
  LoginWithGoogle
}: ILoginView) => {
  return (
    <main>
      <section className='grid grid-cols-2 pb-6'>
        <div className='relative max-h-screen h-full'>
          <img
            className=' object-cover w-full h-full'
            alt='banner'
            src='https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <span className='absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,.7)] opacity-50'></span>
        </div>
        <div className='p-6 flex justify-center items-center flex-col md:col-span-1 sm:col-span-2 xs:col-span-2 min-h-screen relative'>
          <div className='w-full max-w-sm pb-6'>
            <div className=' py-4'>
              <img src='/logo.svg' alt='Logo' />
            </div>
            <h2 className='text-2xl font-semibold'>Enter with your acccount</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4 max-w-sm w-full'>
            <InputComponent
              legend='Email'
              messageError={errors?.email?.message ?? ''}
              placeholder='Your email'
              name='email'
              register={register}
            />
            <InputComponent
              legend='Password'
              messageError={errors?.password?.message ?? ''}
              placeholder='Your password'
              name='password'
              type='password'
              register={register}
            />
            <button
              className='bg-accent text-white py-2 px-4 w-full rounded-md'
              onClick={handleSubmit(handleSubmitForm)}
            >
              SIGN UP
            </button>
            <span className='text-sm'>
              Dont have an account?{' '}
              <Link href={'/register'} className='underline text-accent'>
                create account
              </Link>
            </span>
            <button
              className='bg-white text-black py-2 px-4 w-full rounded-md flex items-center justify-center gap-4 border border-separate'
              onClick={() => LoginWithGoogle()}
            >
              Enter with Google <IoLogoGoogle size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginView
