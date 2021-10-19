import { Category } from './Constants'
import { GalleryImageMeta } from './GalleryImages'

export interface GalleryImageDto extends GalleryImageMeta {
  image: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  email: string
  password: string
}

export interface DeleteGalleryImageDto {
  category: Category
  id: GalleryImageMeta['id']
}

export interface ConfirmEmailDto {
  token: string
}

export interface BuyImageDto {
  id: GalleryImageMeta['id']
  price: number
}

export type Dto =
  | GalleryImageDto
  | LoginDto
  | RegisterDto
  | DeleteGalleryImageDto
  | ConfirmEmailDto
  | BuyImageDto
