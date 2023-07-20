function calculateTotalPrice(allProducts, productName) {
  let product = null;
  
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === productName) {
      product = allProducts[i];
      break;
    }
  }
  
  if (!product) {
    console.log(`Product with name "${productName}" not found.`);
    return 0; 
  }
  
  const { price, quantity } = product;
  const totalPrice = price * quantity;
  
  return totalPrice;
}

const products = [
  {
    name: 'Product 1',
    price: 10,
    quantity: 2,
  },
  {
    name: 'Product 2',
    price: 5,
    quantity: 4,
  },
  {
    name: 'Product 3',
    price: 8,
    quantity: 3,
  },
];

const productName = 'Product 2';
const totalPrice = calculateTotalPrice(products, productName);
console.log(totalPrice);
