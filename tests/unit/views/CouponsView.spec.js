import { shallowMount } from "@vue/test-utils";
import CouponsView from "@/views/CouponsView.vue";

jest.mock("@/api/api", () => ({
  ...jest.requireActual("@/api/api"),
  getCouponsData: () => {
    return {
      count: 3,
      coupons: ["coupon"],
      dollarOffData: { minValue: 55, maxValue: 234, average: 6 },
      percentOffData: { minValue: 1, maxValue: 5, average: 8 },
      retailers: {
        macys: {
          dollarOff: { average: "17.22", count: 9, maxValue: 50, minValue: 10 },
          name: "macys",
          percentOff: {
            average: "25.00",
            count: 1,
            maxValue: 25,
            minValue: 25,
          },
        },
        nike: {
          dollarOff: {
            average: "75.00",
            count: 2,
            maxValue: 150,
            minValue: 150,
          },
          name: "nike",
          percentOff: { average: "0.00", count: 1, maxValue: 0, minValue: 0 },
        },
        nordstrom: {
          dollarOff: {
            average: "75.00",
            count: 3,
            maxValue: 150,
            minValue: 75,
          },
          name: "nordstrom",
          percentOff: { average: "0.00", count: 1, maxValue: 0, minValue: 0 },
        },
      },
      typeCount: {
        buyOneGetOne: "3",
        dollarOff: "5",
        freeGift: "7",
        freeShipping: "9",
        percentOff: "4",
      },
    };
  },
}));

const component = () => {
  return shallowMount(CouponsView, {});
};

describe("CouponsView.vue", () => {
  it("CouponsView should mount", () => {
    const wrapper = component();
    expect(wrapper.vm).toBeTruthy();
  });

  it("CouponsView should render", async () => {
    const wrapper = await component();
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
