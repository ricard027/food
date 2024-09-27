import Image from 'next/image'
import { FC } from 'react'

interface Iproduct {
  src: string
  name: string
  price: number
  description: string
}

const Product: FC<Iproduct> = ({ src, name, price, description }) => {
  return (
    <div className='flex flex-col justify-between bg-[#f1f1f1] gap-6 shadow-lg  rounded-lg flex-1 items-center relative '>
      <div className='p-6 pb-0 relative overflow-hidden w-full flex items-center justify-center'>
        <Image width={150} height={150} alt={name} src={src} />
      </div>
      <div className='flex flex-col gap-6 p-4 w-full items-center bg-white rounded-b-lg rounded-t-3xl'>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className='flex justify-between w-full'>
          <p>R${price}</p>
          <span>fav</span>
        </div>
      </div>
    </div>
  )
}

export default Product
