import { db } from '@/config/firebaseconfig'
import { LoginSchema } from '@/schema/loginschema'
import { CreateUserService } from '@/service/createUserService'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

export const LoginModel = () => {
  type LoginUserType = z.infer<typeof LoginSchema>
  type formdata = {
    email: string
    password: string
    auth?: Auth
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginUserType>({ resolver: zodResolver(LoginSchema) })

  const handleSubmitForm = async (data: formdata) => {
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      console.log(error, 'Erro ao tentar efetuar o login')
    }
  }

  const LoginWithGoogle = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()

      provider.setCustomParameters({
        prompt: 'select_account'
      })

      const { user } = await signInWithPopup(auth, provider)

      if (user?.email) {
        const _query = query(
          collection(db, 'users'),
          where('id', '==', user?.uid)
        )

        const querySnapshot = await getDocs(_query)

        const userData = querySnapshot.docs[0]?.data()

        if (!userData) {
          return CreateUserService({
            creationTime: user?.metadata?.creationTime ?? '',
            email: user?.email ?? '',
            id: user.uid,
            provider: 'google.com',
            name: user?.displayName ?? ''
          })
        }
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
    }
  }

  return {
    errors,
    register,
    handleSubmit,
    LoginWithGoogle,
    handleSubmitForm
  }
}
