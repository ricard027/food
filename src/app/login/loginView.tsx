'use client'

import { FieldErrors, UseFormRegister, SubmitHandler } from 'react-hook-form'
import { IoLogoGoogle } from 'react-icons/io'
import { Auth } from 'firebase/auth'

import Link from 'next/link'

import InputComponent from '@/components/input/input'

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
      <div className='p-6 bg-primary flex justify-center items-center flex-col md:col-span-1 sm:col-span-2 xs:col-span-2 min-h-screen'>
        <div className='flex justify-center items-center flex-col gap-4 max-w-sm w-full'>
          <InputComponent
            legend='Email'
            messageError={errors?.email?.message ?? ''}
            placeholder='Your email'
            name='email'
            register={register}
          />
          <InputComponent
            legend='Senha'
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
            className='bg-white text-black py-2 px-4 w-full rounded-md flex items-center justify-center gap-4'
            onClick={() => LoginWithGoogle()}
          >
            Enter with Google <IoLogoGoogle size={20} />
          </button>
        </div>
      </div>
    </main>
  )
}

export default LoginView
