import { FieldErrors, SubmitHandler, UseFormRegister } from 'react-hook-form'

import Link from 'next/link'

import InputComponent from '@/components/input/input'

interface IRegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface IRegisterView {
  errors: FieldErrors<IRegisterData>
  register: UseFormRegister<IRegisterData>
  handleSubmit: (
    callback: SubmitHandler<IRegisterData>
  ) => (event?: React.BaseSyntheticEvent) => Promise<void>
  handleSubmitForm: (data: IRegisterData) => Promise<void>
}

const RegisterView = ({
  register,
  handleSubmitForm,
  handleSubmit,
  errors
}: IRegisterView) => {
  return (
    <section>
      <div className='min-h-screen grid grid-cols-2'>
        <div className='md:flex sm:hidden xs:hidden flex items-center justify-center'>
          <div className='max-w-lg  min-h-96'>
            <h1 className='text-3xl py-4'>Cadastre-se</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut
              omnis corporis impedit eum mollitia est eos alias cumque, aliquid,
              voluptates hic dicta accusantium error. Blanditiis totam
              perspiciatis molestias. Porro.
            </p>
          </div>
        </div>
        <div className='p-6 bg-primary flex justify-center items-center flex-col md:col-span-1 sm:col-span-2 xs:col-span-2'>
          <div className='flex justify-center items-center flex-col gap-4 max-w-sm w-full'>
            <div className='flex gap-6 sm:flex-row xs:flex-col w-full'>
              <InputComponent
                legend='Name'
                messageError={errors?.firstName?.message ?? ''}
                placeholder='Your  name'
                name='firstName'
                register={register}
              />

              <InputComponent
                legend='Last name'
                messageError={errors?.lastName?.message ?? ''}
                placeholder=' Your lastname'
                name='lastName'
                register={register}
              />
            </div>
            <InputComponent
              legend='Email'
              messageError={errors?.email?.message ?? ''}
              placeholder='Your email'
              name='email'
              type='email'
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
              Already have an account?{' '}
              <Link href={'/login'} className='underline text-accent'>
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterView
