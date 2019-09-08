export interface PricingRule {
    code: string;
    name: string;
    price: number;
}
export interface PricingRuleState extends PricingRule {
    count: number;
    currentDiscount: number;
    [key: string]: any;
}
export declare type DiscountFuncProps = {
    code: number;
    price: number;
};
export declare type Discount = {
    code: string;
    discountFunc: (props: DiscountFuncProps) => number;
};
export interface PricingRuleProps {
    pricingRules: Array<PricingRule>;
    discounts: Array<Discount>;
}
export declare const Checkout: (pricingRulesProps: PricingRuleProps) => {
    scan: (code: string) => any;
    total: () => string;
};
