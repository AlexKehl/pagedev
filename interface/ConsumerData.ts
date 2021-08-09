import { Role } from './Constants'
import { GalleryImageMeta } from './GalleryImages'

export type ImageForGallery = { url: string } & GalleryImageMeta

export interface UserResponse {
  email: string
  roles: Role[]
}
