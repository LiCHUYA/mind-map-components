# advance-mind-map
## 安装
``` js
npm install advance-mind-map

pnpm install advance-mind-map
```
## 使用

### Vue3
```vue
<template>
  <AdvanceVue3MindMap />
</template>

<script setup>
import { AdvanceVue3MindMap } from 'advance-mind-map'
</script>

<template>
  <AdvanceVue3MindMap />
</template>
```

### React
```jsx
import { AdvanceReactMindMap } from 'advance-mind-map'

function App() {
  return (
    <AdvanceReactMindMap />
  )
}
```
jsmind、Mind-elixir、my-mind、blink-mind、remind、vue3-mindmap、ZMindMap、mindmaptree...

这些开源的思维导图也都不错，各有各的特点，但是它们也都有一定缺点，比如停止更新、界面美观度一般、功能比较少、依赖某个框架等等。

为了这个需求 我试了全部市面上的思维导图的库,最后选择了 `simple-mind-map` ,它非常棒,非常简单,自己有示例,我对示例进行大量的样式调整,最后使用iframe进行组件封装,如果觉得卡,可以自己部署后 然后在Vue/react组件上传递url参数
``` js
      <AdvanceReactMindMap  url="xxx"/>
```

## 项目预览

整体

![image-20250121155503197](https://pan.suyanw.cn/view.php/0a463e785abc6ab28933b721b075cd16.png)

配置侧边栏

![image-20250121155518744](https://pan.suyanw.cn/view.php/a32d23e3b97c913bc779e985a26bda3e.png)

搜索

![image-20250121155653151](https://pan.suyanw.cn/view.php/361644e283ceda3b290a547500eecc9c.png)

### 项目地址：

## 特性

- [x] 插件化架构，除核心功能外，其他功能作为插件提供，按需使用，减小整体体积
- [x] 支持逻辑结构图、思维导图、组织结构图、目录组织图、时间轴（横向、竖向）、鱼骨图等结构
- [x] 内置多种主题，允许高度自定义样式，支持注册新主题
- [x] 节点内容支持文本（普通文本、富文本）、图片、图标、超链接、备注、标签、概要
- [x] 支持画布拖动、缩放
- [x] 支持右键按住多选
- [x] 节点支持拖拽（拖拽移动、自由调整）、多种节点形状，支持使用 DDM 完全自定义节点内容
- [x] 支持鼠标按键拖动选择和Ctrl+左键两种多选节点方式
- [x] 支持导出为json、png、svg、pdf、markdown、xmind，支持从json、xmind、markdown导入
- [x] 支持快捷键、前进后退、关联线、搜索替换、小地图、水印
- [x] 提供丰富的配置，满足各种场景各种使用习惯

## 工具库介绍
1.`simple-mind-map`
思维导图工具库，框架无关，`Vue`、`React`等框架或无框架都可以使用。

2.使用`simple-mind-map`工具库，基于`vue3.2`、`ElementPlus`搭建的在线思维导图。特性：

- [x] 工具栏，支持插入节点、删除节点；编辑节点图片、图标、超链接、备注、标签、概要

- [x] 侧边栏，基础样式设置面板、节点样式设置面板、大纲面板、主题选择面板、结构选择面板

- [x] 导入导出功能；数据默认保存在浏览器本地存储，也支持直接创建、打开、编辑电脑本地文件

- [x] 右键菜单，支持展开、收起、整理布局等操作

- [x] 底部栏，支持节点数量、字数统计；支持切换编辑和只读模式；支持放大缩小；支持全屏切换；支持小地图

# 特别说明

本项目较粗糙，未进行完整测试，功能尚不是很完善，性能也存在一些问题，仅用于学习和参考，请勿用于实际项目。

本项目基于https://github.com/wanglin2/mind-map  和 https://github.com/huangyuanyin/hyy-vue3-mindMap 上重构vue3 + elementplus版本。

项目内置的主题和图标来自于：

[百度脑图](https://naotu.baidu.com/)

[知犀思维导图](https://www.zhixi.com/)
