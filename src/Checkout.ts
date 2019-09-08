





export interface PricingRule  {
  code: string,
  name: string,
  price: number  
}


export interface PricingRuleState extends PricingRule {
  count: number,
  currentDiscount: number,
  [key: string]: any;
}

export type DiscountFuncProps = {
  code: number,
  price: number
}

export type Discount = {
  code: string,
  discountFunc: (props: DiscountFuncProps) => number;
}


export interface PricingRuleProps {
  pricingRules: Array<PricingRule>,
  discounts: Array<Discount>
}

interface CheckoutState {
  items: Array<string>;
  pricingRules?: PricingRuleState;
  discounts: Array<Discount>;
}


export const Checkout = (pricingRulesProps: PricingRuleProps) => {

  const checkoutState: CheckoutState | any = {};


  const init = () => {
    try {
      const { pricingRules, discounts } = pricingRulesProps;


      checkoutState.discounts = discounts;

      checkoutState.pricingRules = pricingRules
        && pricingRules.reduce(
          (total, current) =>
            ({ ...total, [current.code]: { count: 0, currentDiscount: 0, ...current } }),
          {},
        );

    } catch (e) {
      console.error(e.message);
      throw e.message;
    }

    return checkoutMethods;
  };


  const scan = (code: string) => {
    const pricingRule = checkoutState.pricingRules[code];

    if (pricingRule) {
      checkoutState.items.push(code)

      pricingRule.count++;    

      const discounts = checkoutState.discounts.filter((discount:Discount) => discount.code === code) || [];

      pricingRule.currentDiscount = _applyDiscounts(discounts);
    }

    return checkoutMethods;
  };


  const _applyPricingRule = (sum: number, { code, discountFunc }: any): number => {
    const pricingRule = checkoutState.pricingRules[code];
    return pricingRule && pricingRule.count > 0 ? sum + discountFunc(pricingRule) : sum;
  };


  const _applyDiscounts = (discounts:any): number => discounts && discounts.reduce(_applyPricingRule, 0);

  const total = (): string => {
    const totalWithDiscount:number = Object.values(checkoutState.pricingRules).reduce(
      (accum:number, { count, price, currentDiscount }:any) => {       

        return accum + count * price - currentDiscount;

      }, 0);


    return `Items: ${checkoutState.items.join(', ')}
           Total: ${totalWithDiscount.toFixed(2)}€`;
  };



  const checkoutMethods = {
    scan,
    total,
  };

  return init();

};
