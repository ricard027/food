import { db } from '@/config/firebaseconfig'
import { IUser } from '@/types/user'
import { doc, setDoc } from 'firebase/firestore'

export const CreateUserService = async (formData: IUser) => {
  try {
    const userRef = doc(db, 'users', formData.id)
    await setDoc(userRef, formData)
    return 
  } catch (error) {
    console.log(error, 'Erro ao tentar efetuar o cadastro!')
  }
}
