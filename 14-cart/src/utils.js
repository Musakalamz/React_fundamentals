export function getTotalAmount(cart) {
  console.log(cart);

  let totalAmount = 0;
  let totalCost = 0;

  // for (let item of cart.values()) {
  //   console.log(item);
  //   totalAmount += item.amount;
  //   totalCost += item.amount * item.price;
  // }
  // console.log(cart.values());

  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }

  return { totalAmount, totalCost };
}
