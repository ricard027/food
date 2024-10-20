import { FC, ReactNode } from 'react'
import { GoAlert } from 'react-icons/go'
interface IErrorProps {
  children: ReactNode
}
const ErrorMessage: FC<IErrorProps> = ({ children }) => {
  return (
    <span className='flex items-center gap-1 text-red-500 text-sm my-1 whitespace-nowrap line-clamp-1'>
      <GoAlert size={10} />
      {children}
    </span>
  )
}

export default ErrorMessage
