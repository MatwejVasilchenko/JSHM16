function calculateTotalPrice(allProducts, productName) {
    // В інтернеті щоб знайти продук по імені використали цей метод не памятаю чи ми його вже вчили
    const product = allProducts.find(({ name }) => name === productName);
  
    if (!product) { //подивився в інтернеті там пишуть це так але я е дуже розумію що це значить ( я про цей рядок)
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
  