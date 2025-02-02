import { FC } from 'react'
import { PiBowlFoodThin } from 'react-icons/pi'

const Ingredients: FC<{ ingredients: string[] }> = ({ ingredients }) => {
  return (
    <section className='my-6'>
      <div className=' border-b-2 pb-2 mb-4 flex items-center gap-2'>
        <PiBowlFoodThin size={20} className='text-accent' />
        <h3 className='text-lg font-semibold py-2'>ingredients</h3>
      </div>
      <div className='flex flex-wrap gap-2'>
        {ingredients.map((ingredient: string) => {
          if (!!ingredient) {
            return (
              <span key={ingredient} className='p-2 rounded-md bg-gray-50'>
                {ingredient}
              </span>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Ingredients