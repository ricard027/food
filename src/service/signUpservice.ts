import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'

export interface IRequestDataUser {
  email: string
  password: string
  auth: Auth
}

export const SignUpService = async ({
  auth,
  email,
  password
}: IRequestDataUser) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredentials
  } catch (error) {
    console.log(error)
  }
}
