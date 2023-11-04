import { shallowMount } from "@vue/test-utils";
import GifListElement from "@/components/GifListElement.vue";

const defaultProps = {
  element: {content_description: "Desc"}
}
const component = (props) => {
  return shallowMount(GifListElement, {
    props: props || defaultProps
  })
}

describe("GifListElement.vue", () => {
  it('GifListElement should mount', () => {
    const wrapper = component()
    expect(wrapper.vm).toBeTruthy()
  })

  it('GifListElement should render', async () => {
    const wrapper = await component()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('GifListElement should emit event', async () => {
    const wrapper = await component()
    wrapper.vm.$emit('select', defaultProps.element)
    expect(wrapper.emitted().select).toBeTruthy()
    expect(wrapper.emitted().select[0]).toEqual([defaultProps.element])

  })
});
