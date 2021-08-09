import { Category } from "../../server/common/interface/Constants";

export interface ImageSize {
  width: number;
  height: number;
}

export interface GalleryImageMeta {
  category: Category;
  description?: string;
  id?: string;
  isForSell: boolean;
  name: string;
  price?: number;
  size: ImageSize;
}
