'use client'

import { auth } from '@/config/firebaseconfig'
import { IUser } from '@/types/user'
import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser
} from 'firebase/auth'
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

  const mapUserData = (user: FirebaseUser): IUser => {
    const providerId = user.providerData[0]?.providerId

    return {
      id: user.uid,
      name: user.displayName || 'Usuário',
      email: user.email || '',
      creationTime: user.metadata.creationTime || '',
      provider: providerId === 'google.com' ? 'Google' : 'Email/Password',
      profileImage: user.photoURL || undefined
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(mapUserData(user))
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
