export const nForOne = (n:number) => ({ count, price }:any) => (n > 0 ? Math.floor(count / n) * price : 0);

export const moreNDiscount = (n:number, newValue:number) => ({ count, price }:any) => (count >= n ? (price - newValue) * count : 0);
