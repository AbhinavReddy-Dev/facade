import { CartItem } from "./types";
import { ProductCatalog } from "./product";
import { ShoppingCart } from "./cart";
import { ShoppingFacade } from "./facade";

// without Facade Class
console.log("\n\nWithout Facade Class");
const productCatalog = new ProductCatalog();
const shoppingCart = new ShoppingCart();

// Get list of products
const _products = productCatalog.getProducts();
console.log("\nProduct Catalog: ", _products);

// *******
// The process of reducing the quantity from the product catalog,
// adding item from product catalog to shopping cart
// can be encapsulated in a Facade Class
// *******

// Add product to cart
const product_0 = productCatalog.getProductById(1);
if (product_0) {
  shoppingCart.addItem(product_0);
}

// Add product to cart
const product_2 = productCatalog.getProductById(2);
if (product_2) {
  shoppingCart.addItem(product_2);
}

// Add product to cart
const product_1 = productCatalog.getProductById(1);
if (product_1) {
  shoppingCart.addItem(product_1);
}

// Get items in cart
const shoppingCartItems = shoppingCart.getItems();
console.log("\nShopping Cart: ", shoppingCartItems);

// removing an item from the cart
shoppingCart.removeItem(1, 1);

// Checkout
shoppingCart.checkout();

shoppingCart.getItems().forEach((item: CartItem): void => {
  productCatalog.decrementProductQuantityById(item.product.id, item.quantity);
});

// const _products = productCatalog.getProducts();
console.log("\nProduct Catalog: ", _products);

//
console.log(
  "__________________________________________________________________________"
);
//

console.log("\nFacade Class");

const mobileShoppingFacade = new ShoppingFacade();

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

// Remove an item
mobileShoppingFacade.removeFromCart(1, 1);
// Checkout
mobileShoppingFacade.checkout();

console.log("\nProduct Catalog: ", products);
