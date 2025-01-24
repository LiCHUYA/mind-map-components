<template>
  <div class="advance-mind-map-container">
    <iframe 
      v-if="useIframe"
      :src="url"
      frameborder="0"
      style="width: 100%; height: 100%; border: none; display: block;"
    ></iframe>
    <div v-else class="advance-mind-map-content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'AdvanceMindMap',
  props: {
    // 是否使用iframe展示
    useIframe: {
      type: Boolean,
      default: true
    },
    // 直接传入的HTML内容
    url: {
      type: String,
      default: 'https://lichuya.github.io/vue3-mindmap/'
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.advance-mind-map-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.advance-mind-map-container iframe,
.advance-mind-map-container .advance-mind-map-content {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
}
</style> 