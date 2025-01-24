// sfc-script:D:\study_project\mind-map-components\src\vue\MyComponent.vue?type=script
var MyComponent_default = {
  name: "AdvanceMindMap",
  props: {
    useIframe: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: "https://lichuya.github.io/vue3-mindmap/"
    },
    content: {
      type: String,
      default: ""
    }
  }
};

// sfc-template:D:\study_project\mind-map-components\src\vue\MyComponent.vue?type=template
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var _hoisted_1 = { class: "advance-mind-map-container" };
var _hoisted_2 = ["src"];
var _hoisted_3 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    $props.useIframe ? (_openBlock(), _createElementBlock("iframe", {
      key: 0,
      src: $props.url,
      frameborder: "0",
      style: { "width": "100%", "height": "100%", "border": "none", "display": "block" }
    }, null, 8, _hoisted_2)) : (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: "advance-mind-map-content",
      innerHTML: $props.content
    }, null, 8, _hoisted_3))
  ]);
}

// src/vue/MyComponent.vue
MyComponent_default.render = render;
MyComponent_default.__file = "src\\vue\\MyComponent.vue";
var MyComponent_default2 = MyComponent_default;
export {
  MyComponent_default2 as default
};
