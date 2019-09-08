export interface PricingRule {
    pricingRules: Array<any>;
    discounts: Array<any>;
}
export declare const Checkout: (pricingRulesProps: PricingRule) => {
    scan: (code: string) => any;
    total: () => string;
};
