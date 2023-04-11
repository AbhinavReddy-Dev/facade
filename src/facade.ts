import { Product, CartItem } from "./types";
import { ProductCatalog } from "./product";
import { ShoppingCart } from "./cart";

// Facade Class
class ShoppingFacade {
  private productCatalog: ProductCatalog;
  private shoppingCart: ShoppingCart;

  constructor() {
    this.productCatalog = new ProductCatalog();
    this.shoppingCart = new ShoppingCart();
  }

  // returns the product catalog
  public getProductList(): Product[] {
    return this.productCatalog.getProducts();
  }

  // adds the product to the cart if it exists and
  // reduces the product quantity in product catalog
  public addToCart(productId: number): void {
    const product = this.productCatalog.getProductById(productId);
    if (product !== undefined) {
      this.shoppingCart.addItem(product);
    }
  }

  // removes item from cart
  public removeFromCart(productId: number, quantity: number): void {
    this.shoppingCart.removeItem(productId, quantity);
  }

  // returns items in the cart
  public getCartItems(): CartItem[] {
    return this.shoppingCart.getItems();
  }

  // cart checkout
  public checkout(): void {
    this.shoppingCart.checkout();
    this.shoppingCart.getItems().forEach((item: CartItem): void => {
      this.productCatalog.decrementProductQuantityById(
        item.product.id,
        item.quantity
      );
    });
  }
} // End of ShoppingFacade

export { ShoppingFacade };
