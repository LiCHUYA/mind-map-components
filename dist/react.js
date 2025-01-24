// src/react/MyComponent.jsx
import React from "react";
var containerStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  flexDirection: "column"
};
var contentStyle = {
  flex: 1,
  width: "100%",
  height: "100%",
  border: "none"
};
var ViewDist = ({
  useIframe = true,
  url = "https://lichuya.github.io/vue3-mindmap/",
  content = ""
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    style: containerStyle,
    className: "advance-mind-map-container"
  }, useIframe ? /* @__PURE__ */ React.createElement("iframe", {
    src: url,
    frameBorder: "0",
    style: contentStyle
  }) : /* @__PURE__ */ React.createElement("div", {
    style: contentStyle,
    className: "advance-mind-map-content",
    dangerouslySetInnerHTML: { __html: content }
  }));
};
var MyComponent_default = ViewDist;
export {
  MyComponent_default as default
};
