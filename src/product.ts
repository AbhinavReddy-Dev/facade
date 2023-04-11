import { Product } from "./types";

// Products Catalog
class ProductCatalog {
  private products: Product[];

  constructor() {
    this.products = [
      { id: 1, name: "iPhone 13", price: 999, quantity: 10 },
      { id: 2, name: "Samsung Galaxy S21", price: 899, quantity: 13 },
      { id: 3, name: "Google Pixel 6", price: 749, quantity: 9 },
    ];
  }

  // returns all products
  public getProducts(): Product[] {
    return this.products;
  }

  // finds and returns product by ID
  public getProductById(productId: number): Product | undefined {
    return this.products.find(
      (product) => product.id === productId && product.quantity > 0
    );
  }

  // decrement product quantity
  public decrementProductQuantityById(
    productId: number,
    quantity: number
  ): void {
    const product = this.products.find((product) => product.id === productId);
    if (product && quantity <= product.quantity) {
      product.quantity -= quantity;
    }
  }
} // End of ProductCatalog

export { ProductCatalog };
