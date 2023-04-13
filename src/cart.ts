import { Product, CartProduct, CartItem } from "./types";

// Shopping Cart
class ShoppingCart {
  private items: CartItem[];

  constructor() {
    this.items = [];
  }

  // Increments quantity if the product is already in the cart,
  // else adds the product to the cart
  public addItem(product: Product): void {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const _item = JSON.stringify(product);
      const __item: Product = JSON.parse(_item);
      delete __item.quantity;
      const cartProduct: CartProduct = __item;
      this.items.push({ product: cartProduct, quantity: 1 });
    }
  }

  // remove item from cart
  public removeItem(cartItemId: number, quantity: number): void {
    const item = this.items.find((_item) => _item.product.id === cartItemId);
    if (item && quantity <= item.quantity) {
      item.quantity -= quantity;
    }
    // updating cart
    this.items = this.items.filter((_item) => _item.quantity > 0);
    console.log(`\nRemoved item from cart: ${item.product.name}.`);
  }

  // returns all items in the cart
  public getItems(): CartItem[] {
    return this.items;
  }

  // acknowledges checkout
  public checkout(): void {
    console.log("\nChecking out items: ", this.getItems());
    console.log("\nCheckout complete!");
  }
} // End of ShoppingCart

export { ShoppingCart };
