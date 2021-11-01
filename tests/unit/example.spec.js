import { mount } from "@vue/test-utils";

import App from "@/App.vue";

const wrapper = mount(App);

console.log(wrapper.element);
