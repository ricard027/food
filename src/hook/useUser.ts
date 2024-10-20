import { useContext } from 'react'
import { UserContext } from '@/context/userContext'

const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserContextProvider')
  }

  return context
}

export default useUser
