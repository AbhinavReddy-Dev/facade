interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export { Product, CartItem };
