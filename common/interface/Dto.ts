import { Category } from "../../server/common/interface/Constants";
import { ImageSize } from "./GalleryImages";

export interface GalleryImageDto {
  category: Category;
  description?: string;
  image: string;
  isForSell: boolean;
  name: string;
  price?: number;
  size: ImageSize;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface DeleteGalleryImageDto {
  category: Category;
  name: string;
}
