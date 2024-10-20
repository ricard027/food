'use client'

import useUser from '@/hook/useUser'

import { LoginModel } from './loginModel'

import LoginView from './loginView'

import IF from '@/components/IF'

const LoginPage = () => {
  const { isAuthenticated } = useUser()
  const { errors, handleSubmitForm, LoginWithGoogle, handleSubmit, register } =
    LoginModel()

  return (
    <IF condition={!isAuthenticated} withRedirect='/'>
      <LoginView
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        handleSubmitForm={handleSubmitForm}
        LoginWithGoogle={LoginWithGoogle}
      />
    </IF>
  )
}

export default LoginPage
