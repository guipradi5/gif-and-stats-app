import {
  getGifs,
  getCouponsData,
  getGifClickCount,
  postGifClick,
} from "@/api/api";
import axios from "axios";

jest.mock("@/assets/js/coupons", () => ({
  ...jest.requireActual("@/assets/js/coupons"),
  getTypeData: () => "typeDate",
  getRetailersData: () => "retailers",
  getTypeQuantity: () => "quantity",
}));
jest.mock("@/assets/js/coupons");
jest.mock("axios");

const couponsData = [
  {
    coupon_id: 258643,
    promotion_type: "buy-one-get-one",
    value: null,
    webshop_id: "macys",
  },
  {
    coupon_id: 252399,
    promotion_type: null,
    value: null,
    webshop_id: "nordstrom",
  },
  {
    coupon_id: 258647,
    promotion_type: "dollar-off",
    value: 20,
    webshop_id: "macys",
  },
];

const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("api", () => {
  test("getGifs", async () => {
    axios.get.mockResolvedValue({ data: { results: "result" } });
    const result = await getGifs();
    expect(result).toBe("result");
  });

  test("getCouponsData", async () => {
    const axio = { data: { count: 3, coupons: couponsData } };
    axios.get.mockResolvedValue(axio);
    const result = await getCouponsData();
    expect(result).toStrictEqual({
      ...axio.data,
      dollarOffData: "typeDate",
      percentOffData: "typeDate",
      retailers: "retailers",
      typeCount: {
        buyOneGetOne: "quantity",
        dollarOff: "quantity",
        freeGift: "quantity",
        freeShipping: "quantity",
        percentOff: "quantity",
      },
    });
  });

  test("getGifClickCount", async () => {
    const spyGet = jest.spyOn(localStorage, "getItem");
    await getGifClickCount(1);
    expect(spyGet).toBeCalledWith(1);
  });

  test("postGifClick", async () => {
    const spySet = jest.spyOn(localStorage, "setItem");
    await postGifClick(15);
    expect(spySet).toBeCalledWith(15, 1);
  });
});
