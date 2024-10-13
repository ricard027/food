import { MenuItem } from '@/service/getMenuItemService'

import Product from '../product'

const ShelfView = ({ data }: any) => {
  return (
    <div className='flex justify-between gap-4'>
      {data.map((product: MenuItem, index: number) => (
        <Product key={index} {...product} />
      ))}
    </div>
  )
}
export default ShelfView
