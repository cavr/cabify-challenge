"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moreNDiscount = exports.nForOne = void 0;

var nForOne = function nForOne(n) {
  return function (_ref) {
    var count = _ref.count,
        price = _ref.price;
    return n > 0 ? Math.floor(count / n) * price : 0;
  };
};

exports.nForOne = nForOne;

var moreNDiscount = function moreNDiscount(n, newValue) {
  return function (_ref2) {
    var count = _ref2.count,
        price = _ref2.price;
    return count >= n ? (price - newValue) * count : 0;
  };
};

exports.moreNDiscount = moreNDiscount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXNjb3VudHMudHMiXSwibmFtZXMiOlsibkZvck9uZSIsIm4iLCJjb3VudCIsInByaWNlIiwiTWF0aCIsImZsb29yIiwibW9yZU5EaXNjb3VudCIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsQ0FBRDtBQUFBLFNBQWM7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxXQUEyQkYsQ0FBQyxHQUFHLENBQUosR0FBUUcsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssR0FBR0QsQ0FBbkIsSUFBd0JFLEtBQWhDLEdBQXdDLENBQW5FO0FBQUEsR0FBZDtBQUFBLENBQWhCOzs7O0FBRUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxDQUFELEVBQVdNLFFBQVg7QUFBQSxTQUErQjtBQUFBLFFBQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVDLEtBQVYsU0FBVUEsS0FBVjtBQUFBLFdBQTJCRCxLQUFLLElBQUlELENBQVQsR0FBYSxDQUFDRSxLQUFLLEdBQUdJLFFBQVQsSUFBcUJMLEtBQWxDLEdBQTBDLENBQXJFO0FBQUEsR0FBL0I7QUFBQSxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuRm9yT25lID0gKG46bnVtYmVyKSA9PiAoeyBjb3VudCwgcHJpY2UgfTphbnkpID0+IChuID4gMCA/IE1hdGguZmxvb3IoY291bnQgLyBuKSAqIHByaWNlIDogMCk7XG5cbmV4cG9ydCBjb25zdCBtb3JlTkRpc2NvdW50ID0gKG46bnVtYmVyLCBuZXdWYWx1ZTpudW1iZXIpID0+ICh7IGNvdW50LCBwcmljZSB9OmFueSkgPT4gKGNvdW50ID49IG4gPyAocHJpY2UgLSBuZXdWYWx1ZSkgKiBjb3VudCA6IDApO1xuIl19