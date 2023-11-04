import { shallowMount } from "@vue/test-utils";
import GifVisualizer from "@/components/GifVisualizer.vue";

const defaultProps = {
  element: {
    clickCount: 5,
    media: [{ gif: { url: "https://gif.com/gif", size: 34564 } }],
  },
};
const component = (props) => {
  return shallowMount(GifVisualizer, {
    props: props || defaultProps,
  });
};
describe("GifVisualizer.vue", () => {
  it("GifVisualizer should mount", () => {
    const wrapper = component();
    expect(wrapper.vm).toBeTruthy();
  });

  it("GifVisualizer should render", async () => {
    const wrapper = await component();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
