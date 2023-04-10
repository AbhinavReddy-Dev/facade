import { Product, CartItem } from "./types";

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
} // End of ProductCatalog

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

// without Facade Class
console.log("\n\nWithout Facade Class");
const productCatalog = new ProductCatalog();
const shoppingCart = new ShoppingCart();

// Get list of products
const _products = productCatalog.getProducts();
console.log("\nProduct Catalog: ", _products);

// *******
// The process of reducing the quantity from
// the product in the catalog can be encapsulated in a Facade Class
// *******

// Add product to cart
const product = productCatalog.getProductById(1);
if (product) {
  shoppingCart.addItem(product);
  product.quantity--;
}

// Add product to cart
const product_2 = productCatalog.getProductById(2);
if (product_2) {
  shoppingCart.addItem(product_2);
  product_2.quantity--;
}

// Add product to cart
const product_1 = productCatalog.getProductById(1);
if (product_1) {
  shoppingCart.addItem(product_1);
  product_1.quantity--;
}

// Get items in cart
const ShoppingCartItems = shoppingCart.getItems();
console.log("\nShopping Cart: ", ShoppingCartItems);

// Checkout
shoppingCart.checkout();

// const _products = productCatalog.getProducts();
console.log("\nProduct Catalog: ", _products);

//
console.log(
  "__________________________________________________________________________"
);
//

// Facade Class
class MobileShoppingFacade {
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
      product.quantity--;
    }
  }

  // returns items in the cart
  public getCartItems(): CartItem[] {
    return this.shoppingCart.getItems();
  }

  // cart checkout
  public checkout(): void {
    this.shoppingCart.checkout();
  }
}

console.log("\nFacade Class");

const mobileShoppingFacade = new MobileShoppingFacade();

// Get list of products
const products = mobileShoppingFacade.getProductList();
console.log("\nProduct Catalog: ", products);

// Add product to cart
mobileShoppingFacade.addToCart(1);

// Add product to cart
mobileShoppingFacade.addToCart(2);

// Add product to cart
mobileShoppingFacade.addToCart(1);

// Get items in cart
const cartItems = mobileShoppingFacade.getCartItems();
console.log("\nShopping Cart: ", cartItems);

// Checkout
mobileShoppingFacade.checkout();

console.log("\nProduct Catalog: ", products);
