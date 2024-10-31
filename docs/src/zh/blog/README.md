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
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
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
