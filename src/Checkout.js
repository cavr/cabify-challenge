/**
 *
 *
 * @export
 * @class Checkout
 * 
 * items // Items that have been added
 * totalCounts //Price at the moment
 * pricingRules //Map of Key => Code and Value => {code,name, price, count}
 * discounts //Array to discounts to apply [{code, discoutnFunc}]
 *
 * 
 * 
 */
export class Checkout {
  /**
   *Creates an instance of Checkout.
   * @param {*} pricingRulesProps Object that contains 
   * {pricingRules: [{code, name, price}], discounts:[{code, discountFunc}]
   * @memberof Checkout
   */


  constructor(pricingRulesProps) {
    this.totalCount = 0;
    this.items = [];
    try {
      const { pricingRules = [], discounts = [] } = pricingRulesProps;

      this.discounts = discounts;

      this.pricingRules = pricingRules
        && pricingRules.reduce(
          (total, current) => ({ ...total, [current.code]: { count: 0, ...current } }),
          {},
        );
    } catch (e) {
      console.error(e);
      this.discounts = [];
      this.pricingRules = {};
    }
  }

  /**
   *
   *
   * @param {*} code Product to scan 
   * @returns the instance Object
   * @memberof Checkout Update the total count and add a new item to items
   */
  scan(code) {
    const pricingRule = this.pricingRules[code];

    if (!pricingRule) {
      return this;
    }

    this.items.push(code);

    this.totalCount = this.totalCount += pricingRule.price;

    pricingRule.count++;

    return this;
  }

  /**
   *
   *
   * @param {*} sum (Acumulator of discounts)
   * @param {*} { code, discountFunc } Code of Product and discount to apply
   * @returns Apply the discount to a particular code and return the sum of discounts
   * @memberof Checkout
   */
  applyPricingRule(sum, { code, discountFunc }) {
    const pricingRule = this.pricingRules[code];
    return pricingRule && pricingRule.count > 0 ? sum + discountFunc(pricingRule) : sum;
  }


  /**
   *
   *
   * @returns Discount to apply based on the discounts 
   * @memberof Checkout
   */
  applyDiscounts() {
    return this.discounts.reduce(this.applyPricingRule.bind(this), 0);
  }


  /**
   *
   *
   * @returns An string which containts the items of products and the total with a discount
   * based on discounts rules
   * @memberof Checkout
   */
  total() {
    const totalWithDiscount = this.totalCount - this.applyDiscounts();
    return `Items: ${this.items.join(', ')}
           Total: ${parseFloat(totalWithDiscount).toFixed(2)}€`;
  }
}
