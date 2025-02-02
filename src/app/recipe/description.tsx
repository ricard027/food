'use client'

import { FC, useState } from 'react'
import { GrRestaurant } from 'react-icons/gr'

interface IDescription {
  strInstructions: string
}

const Description: FC<IDescription> = ({ strInstructions }) => {
  const [moreDecription, setMoreDescription] = useState(false)
  return (
    <div className='mt-4'>
      <div className=' border-b-2 pb-2 mb-4 flex items-center gap-2'>
        <GrRestaurant size={20} className='text-accent font-light' />
        <h3 className='text-lg font-semibold '>
          Description
        </h3>
      </div>

      <p
        className={`${!moreDecription ? 'line-clamp-4' : ' line-clamp-none'} text-textLight transition-all`}
      >
        {strInstructions}
      </p>
      <button
        className='p-4 bg-gray-100 rounded-md mt-2 font-semibold hover:underline'
        onClick={() => setMoreDescription((prev) => !prev)}
      >
        {!moreDecription ? 'View more' : 'View minus'}
      </button>
    </div>
  )
}

export default Description
