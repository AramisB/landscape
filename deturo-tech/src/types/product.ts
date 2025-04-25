export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'phones' | 'laptops' | 'gadgets';
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem extends Product {
  quantity: number;
} 