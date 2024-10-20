import { FC, ReactNode } from 'react'

interface IConditionalRender {
  condition: boolean
  withRedirect?: string
  children: ReactNode
}

const IF: FC<IConditionalRender> = ({ condition, children, withRedirect }) => {
  if (condition) {
    return <>{children}</>
  }
  if (withRedirect) {
    const route = withRedirect
    return (window.location.href = route)
  }
  return <></>
}

export default IF
