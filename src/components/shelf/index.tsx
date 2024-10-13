import shelfModel from './shelf.model'
import ShelfView from './shelf.view'

const Shelf = async () => {
  const product = await shelfModel()
  const data = product.data

  if (!data?.length) return

  return <ShelfView data={data as any} />
}

export default Shelf
