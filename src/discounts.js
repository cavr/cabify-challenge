export const nForOne = n => ({ count, price }) => (n > 0 ? Math.floor(count / n) * price : 0);

export const moreNDiscount = (n, newValue) => ({ count, price }) => (count >= n ? (price - newValue) * count : 0);
