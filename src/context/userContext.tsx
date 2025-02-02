'use client'

import { auth } from '@/config/firebaseconfig'
import { GetUserService } from '@/service/getUserService'
import { IUser } from '@/types/user'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebaseconfig'

interface IUserContext {
  userData: IUser | null
  isAuthenticated: boolean
  handleLogoutUser: () => Promise<void>
}

export const UserContext = createContext<IUserContext | null>(null)

interface UserContextProviderProps {
  children: ReactNode
}

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUser | null>(null)

  const handleLogoutUser = async () => {
    try {
      await signOut(auth)
      window.location.href = '/login'
    } catch (error) {
      console.error('Erro ao deslogar:', error)
    }
  }

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userResult = (await GetUserService(user)) as IUser
        setUserData(userResult)

        const userDocRef = doc(db, 'users', user.uid)
        const unsubscribeFirestore = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            setUserData(doc.data() as IUser)
          }
        })

        return () => unsubscribeFirestore()
      } else {
        setUserData(null)
      }
    })

    return () => unsubscribeAuth()
  }, [])

  return (
    <UserContext.Provider
      value={{ isAuthenticated: !!userData, userData, handleLogoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
