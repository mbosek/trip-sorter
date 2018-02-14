export const priceDiscount = (price: number, percentage: number) => {
  const discount = price - price * percentage / 100;
  return percentage === 0 ? price : discount;
};
