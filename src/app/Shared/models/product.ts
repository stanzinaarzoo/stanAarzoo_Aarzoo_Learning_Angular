export interface Product {
    id: number,
    productName: string,
    company: string,
    vendor: string,
    inStock?: boolean,
    price:number
  }