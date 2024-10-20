import { collection, getDocs, query, where } from 'firebase/firestore'
import { User as FirebaseUser } from 'firebase/auth'
import { db } from '@/config/firebaseconfig'

export const GetUserService = async (user: FirebaseUser) => {
  try {
    const _query = query(collection(db, 'users'), where('id', '==', user.uid))

    const querySnapshot = await getDocs(_query)

    const userData = querySnapshot!.docs[0]!.data()

    return userData
  } catch (error) {
    console.error(error, 'Erro ao tentar obter os dados do usuário')
  }
}
