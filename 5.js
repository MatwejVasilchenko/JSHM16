function getAllPropValues(arr, prop) {
  const values = [];
  
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i][prop];
    if (value !== undefined) {
      values.push(value);
    }
  }
  
  return values;
}

const products = [
  { id: 1, name: 'Apple', price: 1.25 },
  { id: 2, name: 'Orange', price: 0.9 },
  { id: 3, name: 'Banana', price: 0.6 },
  { id: 4, name: 'Grapes', price: 2.5 },
];

const prices = getAllPropValues(products, 'price');
console.log(prices);
