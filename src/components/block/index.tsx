'use client'
import { useInView } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'

interface IBlock {
  children: ReactNode
  time?: number
  direction?: string
}
const Block: FC<IBlock> = ({ children, time = 0.9, direction = 'y' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : `translate${direction}(50px)`,
        opacity: isInView ? 1 : 0,
        transition: `all ${time}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
      }}
    >
      {children}
    </div>
  )
}

export default Block
