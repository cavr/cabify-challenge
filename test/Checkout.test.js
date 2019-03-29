import { Checkout } from '../src/Checkout';
import { discounts, pricingRules } from '../data/pricingRules';

describe('Chechkout', () => {
  describe('Chechkout init()', () => {
    const setupTest = (codes) => {
      const checkout = new Checkout({ pricingRules, discounts });
      codes.forEach(code => checkout.scan(code));
      return checkout.total();
    };
    test("'VOUCHER', 'TSHIRT', 'MUG'", () => {
      const price = setupTest(['VOUCHER', 'TSHIRT', 'MUG']);
      const string = `Items: VOUCHER, TSHIRT, MUG
           Total: 32.50€`;
      expect(price).toBe(string);
    });
    test("'VOUCHER', 'TSHIRT', 'VOUCHER'", () => {
      const price = setupTest(['VOUCHER', 'TSHIRT', 'VOUCHER']);
      const string = `Items: VOUCHER, TSHIRT, VOUCHER
           Total: 25.00€`;
      expect(price).toBe(string);
    });
    test("'TSHIRT', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'TSHIRT'", () => {
      const price = setupTest(['TSHIRT', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'TSHIRT']);
      const string = `Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
           Total: 81.00€`;
      expect(price).toBe(string);
    });
    test(` 'VOUCHER',
    'TSHIRT',
    'VOUCHER',
    'VOUCHER',
    'MUG',
    'TSHIRT',
    'TSHIRT',`, () => {
      const price = setupTest([
        'VOUCHER',
        'TSHIRT',
        'VOUCHER',
        'VOUCHER',
        'MUG',
        'TSHIRT',
        'TSHIRT',
      ]);
      const string = `Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
           Total: 74.50€`;
      expect(price).toBe(string);
    });
    test('wrong checkout should display console.error', () => {
      console.error = jest.fn();
      const string = `Items: 
           Total: 0.00€`;
      expect(
        new Checkout()
          .scan('MUG')
          .scan('ijij')
          .total(),
      ).toBe(string);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
