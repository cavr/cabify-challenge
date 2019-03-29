import { moreNDiscount, nForOne } from '../src/discounts';

const purchase = {
  count: 5,
  price: 5,
};

describe('moreNDiscount', () => {
  const newPrice = 4;
  test('n is 0', () => {
    const discount = moreNDiscount(0, newPrice)(purchase);
    expect(discount).toBe(5);
  });
  test('n is 2', () => {
    const discount = moreNDiscount(2, newPrice)(purchase);
    expect(discount).toBe(5);
  });
  test('n is -1', () => {
    const discount = moreNDiscount(2, newPrice)(purchase);
    expect(discount).toBe(5);
  });
  test('n is more than count', () => {
    const discount = moreNDiscount(purchase.count + 1, newPrice)(purchase);
    expect(discount).toBe(0);
  });
  test('n is equal than count', () => {
    const discount = moreNDiscount(purchase.count, newPrice)(purchase);
    expect(discount).toBe(5);
  });
});

describe('nForOne', () => {
  test('n is 0', () => {
    const discount = nForOne(0)(purchase);
    expect(discount).toBe(0);
  });
  test('n is 2', () => {
    const discount = nForOne(2)(purchase);
    expect(discount).toBe(10);
  });
  test('n is -1', () => {
    const discount = nForOne(-1)(purchase);
    expect(discount).toBe(0);
  });
  test('n is 5 buy 5 and one free (Discuount would be five)', () => {
    const discount = nForOne(5)(purchase);
    expect(discount).toBe(5);
  });
});
