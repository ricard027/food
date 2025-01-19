import { IProduct } from '@/components/product'

export interface IMenuViewProps {
  products: IProduct[]
  categoryByParams: string
  filters: string[]
}
