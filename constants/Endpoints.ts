export const Endpoints = {
  register: '/register',
  login: '/login',
  logout: '/logout',
  galleryUpload: '/file/gallery/upload',
  galleryDelete: '/file/gallery/delete',
  galleryCategoryList: '/files/:category',
  galleryGetImage: '/files/:category/:name',
  refreshAccessToken: '/refreshtoken',
}

export const staticEndPointPart = (endpoint: keyof typeof Endpoints) => {
  return Endpoints[endpoint].split(':')[0] as string
}
