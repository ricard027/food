import Image from 'next/image'
import { FC } from 'react'

interface Icard {
  src: string
  title: string
  text: string
}
const Card: FC<Icard> = ({ src, title, text }) => {
  return (
    <div className='flex-1 flex flex-col items-center gap-6 p-2 text-center'>
      <Image width={120} height={120} src={src} alt={text} />
      <p className='font-semibold text-2xl'>{title}</p>
      <p className='text-textLight text-lg'>{text}</p>
    </div>
  )
}
export default Card
