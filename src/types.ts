interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProduct {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: CartProduct;
  quantity: number;
}

export { Product, CartProduct, CartItem };
