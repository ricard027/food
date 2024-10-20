import { UserSchema } from '@/schema/registerschema'
import { CreateUserService } from '@/service/createUserService'
import { SignUpService } from '@/service/signUpservice'
import { zodResolver } from '@hookform/resolvers/zod'
import { getAuth } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const RegisterModel = () => {
  type CreateUserType = z.infer<typeof UserSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserType>({ resolver: zodResolver(UserSchema) })

  console.log(errors)

  const handleSubmitForm = async (data: CreateUserType) => {
    try {
      const response = await SignUpService({
        auth: getAuth(),
        email: data.email,
        password: data.password
      })
      if (response?.user?.metadata?.creationTime) {
        CreateUserService({
          name: data.firstName,
          email: data.email,
          creationTime: response?.user.metadata.creationTime,
          provider: response.operationType,
          id: response?.user?.uid
        })
      }
    } catch (error) {
      console.log(
        JSON.stringify(error, null, 2),
        'erro ao tentar criar a conta'
      )
    }
  }

  return {
    register,
    handleSubmit,
    handleSubmitForm,
    errors
  }
}
