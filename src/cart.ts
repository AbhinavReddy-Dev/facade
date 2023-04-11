import { Product, CartItem } from "./types";

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
      this.items.push({ product, quantity: 1 });
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
  }

  // returns all items in the cart
  public getItems(): CartItem[] {
    const finalItems = this.items.map((item: CartItem) => {
      // deep cloning cart item
      const _item = JSON.stringify(item);
      const __item: CartItem = JSON.parse(_item);
      delete __item.product.quantity;
      return __item;
    });
    return finalItems;
  }

  // acknowledges checkout
  public checkout(): void {
    console.log("\nChecking out items: ", this.getItems());
    console.log("\nCheckout complete!");
  }
} // End of ShoppingCart

export { ShoppingCart };
