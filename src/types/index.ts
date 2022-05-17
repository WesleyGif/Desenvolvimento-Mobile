export interface Product {
  id: string,
  title: string,
  price: number,
  oldPrice?: number,
  amount?: number,
  imageURL?: string,
  isFavorite?: boolean,
  rating?: number
}
