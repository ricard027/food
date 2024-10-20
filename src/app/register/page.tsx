'use client'

import { RegisterModel } from './registerModel'
import RegisterView from './registerView'

const RegisterPage = () => {
  const { errors, handleSubmit, handleSubmitForm, register } = RegisterModel()

  return (
    <RegisterView
      errors={errors}
      register={register}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
    />
  )
}
export default RegisterPage
