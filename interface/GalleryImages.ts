import { Category } from './Constants'

export interface GalleryImageMeta {
  category: Category
  description?: string
  id?: string
  isForSell: boolean
  name: string
  price?: number
  width: number
  height: number
}
