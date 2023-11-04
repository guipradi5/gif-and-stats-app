import { shallowMount } from "@vue/test-utils";
import Loader from "@/components/Loader.vue";

const component = () => {
  return shallowMount(Loader, {})
}

describe("Loader.vue", () => {
  it('Loader should mount', () => {
    const wrapper = component()
    expect(wrapper.vm).toBeTruthy()
  })

  it('Loader should render', async () => {
    const wrapper = await component()
    expect(wrapper.html()).toMatchSnapshot()
  })
});
