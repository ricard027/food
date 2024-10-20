import { db } from '@/config/firebaseconfig'
import { IUser } from '@/types/user'
import { addDoc, collection } from 'firebase/firestore'

export const CreateUserService = async (formData: IUser) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), formData)
    return docRef
  } catch (error) {
    console.log(error, 'Erro ao tentar efetuar o cadastro!')
  }
}
