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
  var checkoutState = {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DaGVja291dC50cyJdLCJuYW1lcyI6WyJDaGVja291dCIsInByaWNpbmdSdWxlc1Byb3BzIiwiY2hlY2tvdXRTdGF0ZSIsImluaXQiLCJwcmljaW5nUnVsZXMiLCJkaXNjb3VudHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJjb2RlIiwiY291bnQiLCJjdXJyZW50RGlzY291bnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImNoZWNrb3V0TWV0aG9kcyIsInNjYW4iLCJwcmljaW5nUnVsZSIsIml0ZW1zIiwicHVzaCIsImZpbHRlciIsImRpc2NvdW50IiwiX2FwcGx5RGlzY291bnRzIiwiX2FwcGx5UHJpY2luZ1J1bGUiLCJzdW0iLCJkaXNjb3VudEZ1bmMiLCJ0b3RhbFdpdGhEaXNjb3VudCIsIk9iamVjdCIsInZhbHVlcyIsImFjY3VtIiwicHJpY2UiLCJqb2luIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBMENPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLGlCQUFELEVBQXlDO0FBRS9ELE1BQU1DLGFBQWtDLEdBQUcsRUFBM0M7O0FBR0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFJO0FBQUEsVUFDTUMsWUFETixHQUNrQ0gsaUJBRGxDLENBQ01HLFlBRE47QUFBQSxVQUNvQkMsU0FEcEIsR0FDa0NKLGlCQURsQyxDQUNvQkksU0FEcEI7QUFJRkgsTUFBQUEsYUFBYSxDQUFDRyxTQUFkLEdBQTBCQSxTQUExQjtBQUVBSCxNQUFBQSxhQUFhLENBQUNFLFlBQWQsR0FBNkJBLFlBQVksSUFDcENBLFlBQVksQ0FBQ0UsTUFBYixDQUNELFVBQUNDLEtBQUQsRUFBUUMsT0FBUjtBQUFBLGlDQUNRRCxLQURSLHVDQUNnQkMsT0FBTyxDQUFDQyxJQUR4QjtBQUNpQ0MsVUFBQUEsS0FBSyxFQUFFLENBRHhDO0FBQzJDQyxVQUFBQSxlQUFlLEVBQUU7QUFENUQsV0FDa0VILE9BRGxFO0FBQUEsT0FEQyxFQUdELEVBSEMsQ0FETDtBQU9ELEtBYkQsQ0FhRSxPQUFPSSxDQUFQLEVBQVU7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQUMsQ0FBQ0csT0FBaEI7QUFDQSxZQUFNSCxDQUFDLENBQUNHLE9BQVI7QUFDRDs7QUFFRCxXQUFPQyxlQUFQO0FBQ0QsR0FwQkQ7O0FBdUJBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNSLElBQUQsRUFBa0I7QUFDN0IsUUFBTVMsV0FBVyxHQUFHaEIsYUFBYSxDQUFDRSxZQUFkLENBQTJCSyxJQUEzQixDQUFwQjs7QUFFQSxRQUFJUyxXQUFKLEVBQWlCO0FBQ2ZoQixNQUFBQSxhQUFhLENBQUNpQixLQUFkLENBQW9CQyxJQUFwQixDQUF5QlgsSUFBekI7QUFFQVMsTUFBQUEsV0FBVyxDQUFDUixLQUFaO0FBRUEsVUFBTUwsU0FBUyxHQUFHSCxhQUFhLENBQUNHLFNBQWQsQ0FBd0JnQixNQUF4QixDQUErQixVQUFDQyxRQUFEO0FBQUEsZUFBdUJBLFFBQVEsQ0FBQ2IsSUFBVCxLQUFrQkEsSUFBekM7QUFBQSxPQUEvQixLQUFpRixFQUFuRztBQUVBUyxNQUFBQSxXQUFXLENBQUNQLGVBQVosR0FBOEJZLGVBQWUsQ0FBQ2xCLFNBQUQsQ0FBN0M7QUFDRDs7QUFFRCxXQUFPVyxlQUFQO0FBQ0QsR0FkRDs7QUFpQkEsTUFBTVEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELFFBQXNEO0FBQUEsUUFBdENoQixJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxRQUFoQ2lCLFlBQWdDLFFBQWhDQSxZQUFnQztBQUM5RSxRQUFNUixXQUFXLEdBQUdoQixhQUFhLENBQUNFLFlBQWQsQ0FBMkJLLElBQTNCLENBQXBCO0FBQ0EsV0FBT1MsV0FBVyxJQUFJQSxXQUFXLENBQUNSLEtBQVosR0FBb0IsQ0FBbkMsR0FBdUNlLEdBQUcsR0FBR0MsWUFBWSxDQUFDUixXQUFELENBQXpELEdBQXlFTyxHQUFoRjtBQUNELEdBSEQ7O0FBTUEsTUFBTUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDbEIsU0FBRDtBQUFBLFdBQTJCQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQmtCLGlCQUFqQixFQUFvQyxDQUFwQyxDQUF4QztBQUFBLEdBQXhCOztBQUVBLE1BQU1qQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFjO0FBQzFCLFFBQU1vQixpQkFBd0IsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMzQixhQUFhLENBQUNFLFlBQTVCLEVBQTBDRSxNQUExQyxDQUMvQixVQUFDd0IsS0FBRCxTQUF5RDtBQUFBLFVBQXhDcEIsS0FBd0MsU0FBeENBLEtBQXdDO0FBQUEsVUFBakNxQixLQUFpQyxTQUFqQ0EsS0FBaUM7QUFBQSxVQUExQnBCLGVBQTBCLFNBQTFCQSxlQUEwQjtBQUV2RCxhQUFPbUIsS0FBSyxHQUFHcEIsS0FBSyxHQUFHcUIsS0FBaEIsR0FBd0JwQixlQUEvQjtBQUVELEtBTDhCLEVBSzVCLENBTDRCLENBQWpDO0FBUUEsNEJBQWlCVCxhQUFhLENBQUNpQixLQUFkLENBQW9CYSxJQUFwQixDQUF5QixJQUF6QixDQUFqQixpQ0FDZ0JMLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixDQUExQixDQURoQjtBQUVELEdBWEQ7O0FBZUEsTUFBTWpCLGVBQWUsR0FBRztBQUN0QkMsSUFBQUEsSUFBSSxFQUFKQSxJQURzQjtBQUV0QlYsSUFBQUEsS0FBSyxFQUFMQTtBQUZzQixHQUF4QjtBQUtBLFNBQU9KLElBQUksRUFBWDtBQUVELENBM0VNIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBQcmljaW5nUnVsZSAge1xuICBjb2RlOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgcHJpY2U6IG51bWJlciAgXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBQcmljaW5nUnVsZVN0YXRlIGV4dGVuZHMgUHJpY2luZ1J1bGUge1xuICBjb3VudDogbnVtYmVyLFxuICBjdXJyZW50RGlzY291bnQ6IG51bWJlcixcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBEaXNjb3VudEZ1bmNQcm9wcyA9IHtcbiAgY29kZTogbnVtYmVyLFxuICBwcmljZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIERpc2NvdW50ID0ge1xuICBjb2RlOiBzdHJpbmcsXG4gIGRpc2NvdW50RnVuYzogKHByb3BzOiBEaXNjb3VudEZ1bmNQcm9wcykgPT4gbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2luZ1J1bGVQcm9wcyB7XG4gIHByaWNpbmdSdWxlczogQXJyYXk8UHJpY2luZ1J1bGU+LFxuICBkaXNjb3VudHM6IEFycmF5PERpc2NvdW50PlxufVxuXG5pbnRlcmZhY2UgQ2hlY2tvdXRTdGF0ZSB7XG4gIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuICBwcmljaW5nUnVsZXM/OiBQcmljaW5nUnVsZVN0YXRlO1xuICBkaXNjb3VudHM6IEFycmF5PERpc2NvdW50Pjtcbn1cblxuXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSAocHJpY2luZ1J1bGVzUHJvcHM6IFByaWNpbmdSdWxlUHJvcHMpID0+IHtcblxuICBjb25zdCBjaGVja291dFN0YXRlOiBDaGVja291dFN0YXRlIHwgYW55ID0ge307XG5cblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHByaWNpbmdSdWxlcywgZGlzY291bnRzIH0gPSBwcmljaW5nUnVsZXNQcm9wcztcblxuXG4gICAgICBjaGVja291dFN0YXRlLmRpc2NvdW50cyA9IGRpc2NvdW50cztcblxuICAgICAgY2hlY2tvdXRTdGF0ZS5wcmljaW5nUnVsZXMgPSBwcmljaW5nUnVsZXNcbiAgICAgICAgJiYgcHJpY2luZ1J1bGVzLnJlZHVjZShcbiAgICAgICAgICAodG90YWwsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICAoeyAuLi50b3RhbCwgW2N1cnJlbnQuY29kZV06IHsgY291bnQ6IDAsIGN1cnJlbnREaXNjb3VudDogMCwgLi4uY3VycmVudCB9IH0pLFxuICAgICAgICAgIHt9LFxuICAgICAgICApO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZS5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja291dE1ldGhvZHM7XG4gIH07XG5cblxuICBjb25zdCBzY2FuID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByaWNpbmdSdWxlID0gY2hlY2tvdXRTdGF0ZS5wcmljaW5nUnVsZXNbY29kZV07XG5cbiAgICBpZiAocHJpY2luZ1J1bGUpIHtcbiAgICAgIGNoZWNrb3V0U3RhdGUuaXRlbXMucHVzaChjb2RlKVxuXG4gICAgICBwcmljaW5nUnVsZS5jb3VudCsrOyAgICBcblxuICAgICAgY29uc3QgZGlzY291bnRzID0gY2hlY2tvdXRTdGF0ZS5kaXNjb3VudHMuZmlsdGVyKChkaXNjb3VudDpEaXNjb3VudCkgPT4gZGlzY291bnQuY29kZSA9PT0gY29kZSkgfHwgW107XG5cbiAgICAgIHByaWNpbmdSdWxlLmN1cnJlbnREaXNjb3VudCA9IF9hcHBseURpc2NvdW50cyhkaXNjb3VudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja291dE1ldGhvZHM7XG4gIH07XG5cblxuICBjb25zdCBfYXBwbHlQcmljaW5nUnVsZSA9IChzdW06IG51bWJlciwgeyBjb2RlLCBkaXNjb3VudEZ1bmMgfTogYW55KTogbnVtYmVyID0+IHtcbiAgICBjb25zdCBwcmljaW5nUnVsZSA9IGNoZWNrb3V0U3RhdGUucHJpY2luZ1J1bGVzW2NvZGVdO1xuICAgIHJldHVybiBwcmljaW5nUnVsZSAmJiBwcmljaW5nUnVsZS5jb3VudCA+IDAgPyBzdW0gKyBkaXNjb3VudEZ1bmMocHJpY2luZ1J1bGUpIDogc3VtO1xuICB9O1xuXG5cbiAgY29uc3QgX2FwcGx5RGlzY291bnRzID0gKGRpc2NvdW50czphbnkpOiBudW1iZXIgPT4gZGlzY291bnRzICYmIGRpc2NvdW50cy5yZWR1Y2UoX2FwcGx5UHJpY2luZ1J1bGUsIDApO1xuXG4gIGNvbnN0IHRvdGFsID0gKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdG90YWxXaXRoRGlzY291bnQ6bnVtYmVyID0gT2JqZWN0LnZhbHVlcyhjaGVja291dFN0YXRlLnByaWNpbmdSdWxlcykucmVkdWNlKFxuICAgICAgKGFjY3VtOm51bWJlciwgeyBjb3VudCwgcHJpY2UsIGN1cnJlbnREaXNjb3VudCB9OmFueSkgPT4geyAgICAgICBcblxuICAgICAgICByZXR1cm4gYWNjdW0gKyBjb3VudCAqIHByaWNlIC0gY3VycmVudERpc2NvdW50O1xuXG4gICAgICB9LCAwKTtcblxuXG4gICAgcmV0dXJuIGBJdGVtczogJHtjaGVja291dFN0YXRlLml0ZW1zLmpvaW4oJywgJyl9XG4gICAgICAgICAgIFRvdGFsOiAke3RvdGFsV2l0aERpc2NvdW50LnRvRml4ZWQoMil94oKsYDtcbiAgfTtcblxuXG5cbiAgY29uc3QgY2hlY2tvdXRNZXRob2RzID0ge1xuICAgIHNjYW4sXG4gICAgdG90YWwsXG4gIH07XG5cbiAgcmV0dXJuIGluaXQoKTtcblxufTtcbiJdfQ==