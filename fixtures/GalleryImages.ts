import { ImageForGallery } from '../interface/ConsumerData'
import { GalleryImageDto } from '../interface/Dto'

export const galleryImageDto: GalleryImageDto = {
  id: 'someId',
  isForSell: true,
  description: 'This is a description',
  name: 'i-201.jpg',
  image: 'someBase64EncodedImage',
  width: 100,
  height: 100,
  category: 'acryl',
  price: 150,
}

export const imagesForGallery: ImageForGallery[] = [
  {
    name: 'foo.jpg',
    category: 'acryl',
    url: `/files/acryl/id124`,
    isForSell: true,
    id: 'id124',
    price: 50,
    description: 'This is a description',
    width: 100,
    height: 100,
  },
  {
    name: 'bar.jpg',
    category: 'oil',
    url: `/files/oil/id125`,
    isForSell: true,
    id: 'id125',
    price: 50,
    description: 'This is a description',
    width: 100,
    height: 100,
  },
]
