import Shelf from '@/components/shelf'
import { useProductShelf } from '@/hook/useProductsShelf'

const ProductShelfs = ({
  category,
  area
}: {
  category: string
  area: string
}) => {
  const productsCategory = useProductShelf({ category: category })
  const productsArea = useProductShelf({ area: area })

  if (!productsCategory || !productsArea) return

  return (
    <section>
      <div className='mt-6'>
        <h3 className='text-lg font-semibold border-b-2 pb-2 mb-4 '>
          Find out more at {category}
        </h3>
        <Shelf recipes={[...productsCategory[0].meals]} />
      </div>
      <div className='mt-6'>
        <h3 className='text-lg font-semibold border-b-2 pb-2 mb-4 '>
          You may also like
        </h3>
        <Shelf recipes={[...productsArea[0].meals]} />
      </div>
    </section>
  )
}

export default ProductShelfs
