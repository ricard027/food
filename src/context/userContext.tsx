'use client'

import { auth } from '@/config/firebaseconfig'
import { GetUserService } from '@/service/getUserService'
import { IUser } from '@/types/user'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'

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
    } catch (error) {
      console.error('Erro ao deslogar:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userResult = (await GetUserService(user)) as IUser
        setUserData(userResult)
        console.log('Usuário autenticado:', user)
      } else {
        setUserData(null)
        console.log('Nenhum usuário autenticado')
      }
    })

    return () => unsubscribe()
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
