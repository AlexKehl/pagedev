import { Role } from './Constants'
import { ImageForGallery } from './ConsumerData'

export interface BaseResponse {
  success: boolean
}

export interface GalleryCategoryResponse extends BaseResponse {
  images: ImageForGallery[]
}

export interface User {
  email: string
  roles: Role[]
}

export interface LoginResponse extends BaseResponse {
  user: User
}
