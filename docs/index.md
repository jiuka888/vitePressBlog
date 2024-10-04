---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "旧卡的文档网站"
  text: "好记性不如烂笔头"
  tagline: 持续学习，持续进步
  #https://img.picgo.net/2024/09/10/background38f143b852867a47.png
  image:  
  #/img/background.png
    src: https://img.picgo.net/2024/09/10/background38f143b852867a47.png
    alt: background.png
  actions:
    - theme: brand
      text: 建站原因
      link: /examples/reason
    - theme: alt
      text: 若依演示地址
      link: http://8.138.177.13:81

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

