---
home: true

title: 博客主页
icon: blog
layout: BlogHome

bgImage: /image/blog/bg-image.jpg

heroFullScreen: true
# heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroText: 五十色の葉
tagline: 保持年轻，保持好奇，保持理性，永远都不要停止思考

projects:
  - icon: project
    name: Project Name
    desc: Project description
    link: https://你的项目链接

  - icon: link
    name: Link Name
    desc: Link Detailed Description
    link: https://链接地址

  - icon: book
    name: Book Title
    desc: Book Detailed Description
    link: https://你的书籍链接

  - icon: article
    name: Article Title
    desc: Article Detailed Description
    link: https://你的文章链接

  - icon: friend
    name: Partner Name
    desc: Partner Detailed Introduction
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: Custom Project
    desc: Customized detailed introduction
    link: https://你的自定义链接
---

<script setup lang="ts">
  import FireFlyFactory from '@util/firefly.ts'

  import { onMounted, onUnmounted } from 'vue'

  let fireFlyFactory: string = null;

  onMounted(() => {
    fireFlyFactory = new FireFlyFactory();
  })

  onUnmounted(() => {
    fireFlyFactory.destroye()
  })
</script>
