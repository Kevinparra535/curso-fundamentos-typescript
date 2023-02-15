(() => {
  // Modo inferido
  let productPrice = 100;
  productPrice = 12;
  console.log("product price", productPrice);

  // Modo explicito
  let customerAge: number = 28;
  // customerAge += "1";
  customerAge += 1;
  console.log("customer Age", customerAge);

  let productsInStock: number;
  console.log("productsInStock", productsInStock); // da alerta sobre el valor de la variable

  if (productsInStock > 10) {
    console.log("Is greater");
  }

  let discount = parseInt("123");
  console.log("discount", discount);

  let hex = 0xffff;
  let bon = 0b1010;
})();
