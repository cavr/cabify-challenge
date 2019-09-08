"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Checkout = function Checkout(pricingRulesProps) {
  var checkoutState = {
    items: [],
    pricingRules: {},
    discounts: []
  };

  var init = function init() {
    try {
      var pricingRules = pricingRulesProps.pricingRules,
          discounts = pricingRulesProps.discounts;
      checkoutState.discounts = discounts;
      checkoutState.pricingRules = pricingRules && pricingRules.reduce(function (total, current) {
        return _objectSpread({}, total, (0, _defineProperty2["default"])({}, current.code, _objectSpread({
          count: 0,
          currentDiscount: 0
        }, current)));
      }, {});
    } catch (e) {
      console.error(e.message);
      throw e.message;
    }

    return checkoutMethods;
  };

  var scan = function scan(code) {
    var pricingRule = checkoutState.pricingRules[code];

    if (pricingRule) {
      checkoutState.items.push(code);
      pricingRule.count++;
      var discounts = checkoutState.discounts.filter(function (discount) {
        return discount.code === code;
      }) || [];
      pricingRule.currentDiscount = _applyDiscounts(discounts);
    }

    return checkoutMethods;
  };

  var _applyPricingRule = function _applyPricingRule(sum, _ref) {
    var code = _ref.code,
        discountFunc = _ref.discountFunc;
    var pricingRule = checkoutState.pricingRules[code];
    return pricingRule && pricingRule.count > 0 ? sum + discountFunc(pricingRule) : sum;
  };

  var _applyDiscounts = function _applyDiscounts(discounts) {
    return discounts && discounts.reduce(_applyPricingRule, 0);
  };

  var total = function total() {
    var totalWithDiscount = Object.values(checkoutState.pricingRules).reduce(function (accum, _ref2) {
      var count = _ref2.count,
          price = _ref2.price,
          currentDiscount = _ref2.currentDiscount;
      return accum + count * price - currentDiscount;
    }, 0);
    return "Items: ".concat(checkoutState.items.join(', '), "\n           Total: ").concat(totalWithDiscount.toFixed(2), "\u20AC");
  };

  var checkoutMethods = {
    scan: scan,
    total: total
  };
  return init();
};

exports.Checkout = Checkout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DaGVja291dC50cyJdLCJuYW1lcyI6WyJDaGVja291dCIsInByaWNpbmdSdWxlc1Byb3BzIiwiY2hlY2tvdXRTdGF0ZSIsIml0ZW1zIiwicHJpY2luZ1J1bGVzIiwiZGlzY291bnRzIiwiaW5pdCIsInJlZHVjZSIsInRvdGFsIiwiY3VycmVudCIsImNvZGUiLCJjb3VudCIsImN1cnJlbnREaXNjb3VudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2hlY2tvdXRNZXRob2RzIiwic2NhbiIsInByaWNpbmdSdWxlIiwicHVzaCIsImZpbHRlciIsImRpc2NvdW50IiwiX2FwcGx5RGlzY291bnRzIiwiX2FwcGx5UHJpY2luZ1J1bGUiLCJzdW0iLCJkaXNjb3VudEZ1bmMiLCJ0b3RhbFdpdGhEaXNjb3VudCIsIk9iamVjdCIsInZhbHVlcyIsImFjY3VtIiwicHJpY2UiLCJqb2luIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsaUJBQUQsRUFBb0M7QUFFMUQsTUFBTUMsYUFBNEIsR0FBRztBQUNuQ0MsSUFBQUEsS0FBSyxFQUFFLEVBRDRCO0FBRW5DQyxJQUFBQSxZQUFZLEVBQUUsRUFGcUI7QUFHbkNDLElBQUFBLFNBQVMsRUFBRTtBQUh3QixHQUFyQzs7QUFPQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUk7QUFBQSxVQUNNRixZQUROLEdBQ2tDSCxpQkFEbEMsQ0FDTUcsWUFETjtBQUFBLFVBQ29CQyxTQURwQixHQUNrQ0osaUJBRGxDLENBQ29CSSxTQURwQjtBQUdGSCxNQUFBQSxhQUFhLENBQUNHLFNBQWQsR0FBMEJBLFNBQTFCO0FBRUFILE1BQUFBLGFBQWEsQ0FBQ0UsWUFBZCxHQUE2QkEsWUFBWSxJQUNwQ0EsWUFBWSxDQUFDRyxNQUFiLENBQ0QsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSO0FBQUEsaUNBQ1FELEtBRFIsdUNBQ2dCQyxPQUFPLENBQUNDLElBRHhCO0FBQ2lDQyxVQUFBQSxLQUFLLEVBQUUsQ0FEeEM7QUFDMkNDLFVBQUFBLGVBQWUsRUFBRTtBQUQ1RCxXQUNrRUgsT0FEbEU7QUFBQSxPQURDLEVBR0QsRUFIQyxDQURMO0FBT0QsS0FaRCxDQVlFLE9BQU9JLENBQVAsRUFBVTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsQ0FBQyxDQUFDRyxPQUFoQjtBQUNBLFlBQU1ILENBQUMsQ0FBQ0csT0FBUjtBQUNEOztBQUVELFdBQU9DLGVBQVA7QUFDRCxHQW5CRDs7QUFzQkEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ1IsSUFBRCxFQUFrQjtBQUM3QixRQUFNUyxXQUFXLEdBQUdqQixhQUFhLENBQUNFLFlBQWQsQ0FBMkJNLElBQTNCLENBQXBCOztBQUVBLFFBQUlTLFdBQUosRUFBaUI7QUFDZmpCLE1BQUFBLGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQmlCLElBQXBCLENBQXlCVixJQUF6QjtBQUVBUyxNQUFBQSxXQUFXLENBQUNSLEtBQVo7QUFFQSxVQUFNTixTQUFTLEdBQUdILGFBQWEsQ0FBQ0csU0FBZCxDQUF3QmdCLE1BQXhCLENBQStCLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNaLElBQVQsS0FBa0JBLElBQXRCO0FBQUEsT0FBdkMsS0FBc0UsRUFBeEY7QUFFQVMsTUFBQUEsV0FBVyxDQUFDUCxlQUFaLEdBQThCVyxlQUFlLENBQUNsQixTQUFELENBQTdDO0FBQ0Q7O0FBRUQsV0FBT1ksZUFBUDtBQUNELEdBZEQ7O0FBaUJBLE1BQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxRQUFzRDtBQUFBLFFBQXRDZixJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxRQUFoQ2dCLFlBQWdDLFFBQWhDQSxZQUFnQztBQUM5RSxRQUFNUCxXQUFXLEdBQUdqQixhQUFhLENBQUNFLFlBQWQsQ0FBMkJNLElBQTNCLENBQXBCO0FBQ0EsV0FBT1MsV0FBVyxJQUFJQSxXQUFXLENBQUNSLEtBQVosR0FBb0IsQ0FBbkMsR0FBdUNjLEdBQUcsR0FBR0MsWUFBWSxDQUFDUCxXQUFELENBQXpELEdBQXlFTSxHQUFoRjtBQUNELEdBSEQ7O0FBTUEsTUFBTUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDbEIsU0FBRDtBQUFBLFdBQTJCQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsTUFBVixDQUFpQmlCLGlCQUFqQixFQUFvQyxDQUFwQyxDQUF4QztBQUFBLEdBQXhCOztBQUVBLE1BQU1oQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFjO0FBQzFCLFFBQU1tQixpQkFBd0IsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMzQixhQUFhLENBQUNFLFlBQTVCLEVBQTBDRyxNQUExQyxDQUMvQixVQUFDdUIsS0FBRCxTQUF5RDtBQUFBLFVBQXhDbkIsS0FBd0MsU0FBeENBLEtBQXdDO0FBQUEsVUFBakNvQixLQUFpQyxTQUFqQ0EsS0FBaUM7QUFBQSxVQUExQm5CLGVBQTBCLFNBQTFCQSxlQUEwQjtBQUV2RCxhQUFPa0IsS0FBSyxHQUFHbkIsS0FBSyxHQUFHb0IsS0FBaEIsR0FBd0JuQixlQUEvQjtBQUVELEtBTDhCLEVBSzVCLENBTDRCLENBQWpDO0FBUUEsNEJBQWlCVixhQUFhLENBQUNDLEtBQWQsQ0FBb0I2QixJQUFwQixDQUF5QixJQUF6QixDQUFqQixpQ0FDZ0JMLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixDQUExQixDQURoQjtBQUVELEdBWEQ7O0FBZUEsTUFBTWhCLGVBQWUsR0FBRztBQUN0QkMsSUFBQUEsSUFBSSxFQUFKQSxJQURzQjtBQUV0QlYsSUFBQUEsS0FBSyxFQUFMQTtBQUZzQixHQUF4QjtBQUtBLFNBQU9GLElBQUksRUFBWDtBQUVELENBOUVNIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGludGVyZmFjZSBQcmljaW5nUnVsZSB7XG4gIHByaWNpbmdSdWxlczogQXJyYXk8YW55PixcbiAgZGlzY291bnRzOiBBcnJheTxhbnk+XG59XG5cbmludGVyZmFjZSBDaGVja291dFN0YXRlIHtcbiAgaXRlbXM6IEFycmF5PHN0cmluZz4sXG4gIHByaWNpbmdSdWxlczogYW55LFxuICBkaXNjb3VudHM6IEFycmF5PGFueT4sXG59XG5cblxuZXhwb3J0IGNvbnN0IENoZWNrb3V0ID0gKHByaWNpbmdSdWxlc1Byb3BzOiBQcmljaW5nUnVsZSkgPT4ge1xuXG4gIGNvbnN0IGNoZWNrb3V0U3RhdGU6IENoZWNrb3V0U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIHByaWNpbmdSdWxlczoge30sXG4gICAgZGlzY291bnRzOiBbXSxcbiAgfTtcblxuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcHJpY2luZ1J1bGVzLCBkaXNjb3VudHMgfSA9IHByaWNpbmdSdWxlc1Byb3BzO1xuXG4gICAgICBjaGVja291dFN0YXRlLmRpc2NvdW50cyA9IGRpc2NvdW50cztcblxuICAgICAgY2hlY2tvdXRTdGF0ZS5wcmljaW5nUnVsZXMgPSBwcmljaW5nUnVsZXNcbiAgICAgICAgJiYgcHJpY2luZ1J1bGVzLnJlZHVjZShcbiAgICAgICAgICAodG90YWwsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICAoeyAuLi50b3RhbCwgW2N1cnJlbnQuY29kZV06IHsgY291bnQ6IDAsIGN1cnJlbnREaXNjb3VudDogMCwgLi4uY3VycmVudCB9IH0pLFxuICAgICAgICAgIHt9LFxuICAgICAgICApO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZS5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja291dE1ldGhvZHM7XG4gIH07XG5cblxuICBjb25zdCBzY2FuID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByaWNpbmdSdWxlID0gY2hlY2tvdXRTdGF0ZS5wcmljaW5nUnVsZXNbY29kZV07XG5cbiAgICBpZiAocHJpY2luZ1J1bGUpIHtcbiAgICAgIGNoZWNrb3V0U3RhdGUuaXRlbXMucHVzaChjb2RlKVxuXG4gICAgICBwcmljaW5nUnVsZS5jb3VudCsrOyAgICBcblxuICAgICAgY29uc3QgZGlzY291bnRzID0gY2hlY2tvdXRTdGF0ZS5kaXNjb3VudHMuZmlsdGVyKGRpc2NvdW50ID0+IGRpc2NvdW50LmNvZGUgPT09IGNvZGUpIHx8IFtdO1xuXG4gICAgICBwcmljaW5nUnVsZS5jdXJyZW50RGlzY291bnQgPSBfYXBwbHlEaXNjb3VudHMoZGlzY291bnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tvdXRNZXRob2RzO1xuICB9O1xuXG5cbiAgY29uc3QgX2FwcGx5UHJpY2luZ1J1bGUgPSAoc3VtOiBudW1iZXIsIHsgY29kZSwgZGlzY291bnRGdW5jIH06IGFueSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgcHJpY2luZ1J1bGUgPSBjaGVja291dFN0YXRlLnByaWNpbmdSdWxlc1tjb2RlXTtcbiAgICByZXR1cm4gcHJpY2luZ1J1bGUgJiYgcHJpY2luZ1J1bGUuY291bnQgPiAwID8gc3VtICsgZGlzY291bnRGdW5jKHByaWNpbmdSdWxlKSA6IHN1bTtcbiAgfTtcblxuXG4gIGNvbnN0IF9hcHBseURpc2NvdW50cyA9IChkaXNjb3VudHM6YW55KTogbnVtYmVyID0+IGRpc2NvdW50cyAmJiBkaXNjb3VudHMucmVkdWNlKF9hcHBseVByaWNpbmdSdWxlLCAwKTtcblxuICBjb25zdCB0b3RhbCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHRvdGFsV2l0aERpc2NvdW50Om51bWJlciA9IE9iamVjdC52YWx1ZXMoY2hlY2tvdXRTdGF0ZS5wcmljaW5nUnVsZXMpLnJlZHVjZShcbiAgICAgIChhY2N1bTpudW1iZXIsIHsgY291bnQsIHByaWNlLCBjdXJyZW50RGlzY291bnQgfTphbnkpID0+IHsgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGFjY3VtICsgY291bnQgKiBwcmljZSAtIGN1cnJlbnREaXNjb3VudDtcblxuICAgICAgfSwgMCk7XG5cblxuICAgIHJldHVybiBgSXRlbXM6ICR7Y2hlY2tvdXRTdGF0ZS5pdGVtcy5qb2luKCcsICcpfVxuICAgICAgICAgICBUb3RhbDogJHt0b3RhbFdpdGhEaXNjb3VudC50b0ZpeGVkKDIpfeKCrGA7XG4gIH07XG5cblxuXG4gIGNvbnN0IGNoZWNrb3V0TWV0aG9kcyA9IHtcbiAgICBzY2FuLFxuICAgIHRvdGFsLFxuICB9O1xuXG4gIHJldHVybiBpbml0KCk7XG5cbn07XG4iXX0=