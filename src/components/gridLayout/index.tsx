import { FC, ReactNode } from 'react'

const GridLayout: FC<{children:ReactNode}> = ({ children }) => {
  return (
    <section className='max-w-6xl grid sm:grid-cols-3  xs:grid-cols-1 flex-col gap-4 lg:grid-cols-4  md:grid-cols-3 m-auto'>
      {children}
    </section>
  )
}

export default GridLayout
