import { moreNDiscount, nForOne } from '../discounts';


export const discounts = [
  { code: 'TSHIRT', discountFunc: moreNDiscount(3, 19) },
  {
    code: 'VOUCHER',
    discountFunc: nForOne(2),
  },
];

export const pricingRules:Array<any> = [
  {
    code: 'VOUCHER',
    name: 'Cabify Voucher',
    price: 5,
  },
  {
    code: 'TSHIRT',
    name: 'Cabify T-Shirt',
    price: 20,
  },
  {
    code: 'MUG',
    name: 'Cafify Coffee Mug',
    price: 7.5,
  },
];
