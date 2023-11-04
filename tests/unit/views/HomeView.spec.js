import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import GifListElement from "@/components/GifListElement";

jest.mock("@/api/api", () => ({
  ...jest.requireActual("@/api/api"),
  getGifs: () => [
    { id: 5, description: "gif" },
    { id: 6, description: "gif2" },
    { id: 7, description: "gif3" },
  ],
  getGifClickCount: () => 15,
}));

const component = () => {
  return shallowMount(HomeView, {});
};

describe("HomeView.vue", () => {
  it("HomeView should mount", () => {
    const wrapper = component();
    expect(wrapper.vm).toBeTruthy();
  });

  it("HomeView should render", async () => {
    const wrapper = await component();
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("HomeView should render", async () => {
    const wrapper = await component();
    await wrapper.vm.$nextTick();
    await wrapper
      .findAllComponents(GifListElement)
      .at(1)
      .trigger("select", { id: 6, description: "gif2" });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.selectedGif.clickCount).toBe(15);
  });
});
