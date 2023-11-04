import { COUPON_TYPES, getTypeQuantity, getTypeData, getRetailersData } from "@/assets/js/coupons";
const coupons = require('../../../../public/json/coupons.json').coupons;

describe("coupons.js", () => {
  test('getTypeData', async () => {
    expect(getTypeData(coupons, COUPON_TYPES.percentOff)).toStrictEqual({"average": "18.36", "maxValue": 80, "minValue": 8})
  });
  test('getTypeQuantity', async () => {
    expect(getTypeQuantity(coupons, COUPON_TYPES.percentOff)).toBe(89)
  });
  test('getRetailersData', async () => {
    expect(getRetailersData(coupons)).toStrictEqual({"macys": {"dollarOff": {"average": "17.22", "count": 9, "maxValue": 50, "minValue": 10}, "name": "macys", "percentOff": {"average": "25.00", "count": 1, "maxValue": 25, "minValue": 25}}, "nike": {"dollarOff": {"average": "75.00", "count": 2, "maxValue": 150, "minValue": 150}, "name": "nike", "percentOff": {"average": "0.00", "count": 1, "maxValue": 0, "minValue": null}}, "nordstrom": {"dollarOff": {"average": "75.00", "count": 3, "maxValue": 150, "minValue": 75}, "name": "nordstrom", "percentOff": {"average": "0.00", "count": 1, "maxValue": 0, "minValue": null}}})
  });
});