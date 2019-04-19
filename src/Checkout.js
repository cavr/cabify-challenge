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
export const Checkout = (pricingRulesProps) => {
  /**
   *Creates an instance of Checkout.
   * @param {*} pricingRulesProps Object that contains
   * {pricingRules: [{code, name, price}], discounts:[{code, discountFunc}]
   * @memberof Checkout
   */

  const _checkoutState = {
    _totalCount: 0,
    _items: [],
    _pricingRules: {},
    _discounts: [],
  };

  /**
   *
   *
   * @param {*} code Product to scan
   * @returns the instance Object
   * @memberof Checkout Update the total count and add a new item to items
   */
  const scan = (code) => {
    const pricingRule = _checkoutState._pricingRules[code];

    if (!pricingRule) {
      return checkoutMethods;
    }

    _checkoutState._items.push(code);

    _checkoutState._totalCount += pricingRule.price;

    pricingRule.count++;

    return checkoutMethods;
  };

  /**
   *
   *
   * @param {*} sum (Acumulator of discounts)
   * @param {*} { code, discountFunc } Code of Product and discount to apply
   * @returns Apply the discount to a particular code and return the sum of discounts
   * @memberof Checkout
   */
  const _applyPricingRule = (sum, { code, discountFunc }) => {
    const pricingRule = _checkoutState._pricingRules[code];
    return pricingRule && pricingRule.count > 0 ? sum + discountFunc(pricingRule) : sum;
  };

  /**
   *
   *
   * @returns Discount to apply based on the discounts
   * @memberof Checkout
   */
  const _applyDiscounts = () => _checkoutState._discounts.reduce(_applyPricingRule.bind(this), 0);

  /**
   *
   *
   * @returns An string which containts the items of products and the total with a discount
   * based on discounts rules
   * @memberof Checkout
   */
  const total = () => {
    const totalWithDiscount = _checkoutState._totalCount - _applyDiscounts();
    return `Items: ${_checkoutState._items.join(', ')}
           Total: ${parseFloat(totalWithDiscount).toFixed(2)}€`;
  };

  const constructor = () => {
    try {
      const { pricingRules, discounts } = pricingRulesProps;

      _checkoutState._discounts = discounts;

      _checkoutState._pricingRules = pricingRules
        && pricingRules.reduce(
          (total, current) => ({ ...total, [current.code]: { count: 0, ...current } }),
          {},
        );
    } catch (e) {
      console.error(e.message);
    }
  };

  constructor();

  const checkoutMethods = {
    scan,
    total,
  };

  return checkoutMethods;
};
