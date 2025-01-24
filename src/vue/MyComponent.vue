<template>
  <div class="view-dist-container">
    <iframe 
      v-if="useIframe"
      :src="url"
      frameborder="0"
      style="width: 100%; height: 100%; border: none; display: block;"
    ></iframe>
    <div v-else class="dist-content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'ViewDist',
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
.view-dist-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.view-dist-container iframe,
.view-dist-container .dist-content {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
}
</style> 