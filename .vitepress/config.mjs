import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TamTam Knowledge",
  description: "逻辑学 / 嵌入式Linux / 计算机网络",
  lang: 'zh-CN',  // 设置语言为中文
  base: '/wiki/',

  themeConfig: {
    // 1. 顶部导航栏 (一直显示在最上面)
    nav: [
      { text: '首页', link: '/' },
      { text: '逻辑学', link: '/logic/logic1_2025-12-12' },
      { text: '嵌入式Linux', link: '/linux/rk3506' },
      { text: '计算机网络', link: '/network/gfw' }
    ],

    // 2. 侧边栏 (核心逻辑：进入不同文件夹，显示不同目录)
    sidebar: {
      // 当用户在 logic 文件夹下时：
      '/logic/': [
        {
          text: '逻辑学导论',
          items: [
            { text: '第一章：逻辑学基本概念', link: '/logic/logic1_2025-12-12' },
            { text: '第二章：逻辑学联系', link:'/logic/logic2_2025-12-17'},            
            // 以后在这里加：{ text: '第二章：定义', link: '/logic/chapter2' }
          ]
        }
      ],

      // 当用户在 linux 文件夹下时：
      '/linux/': [
        {
          text: 'RK3506 开发实战',
          items: [
            { text: '原理分析', link: '/linux/rk3506' },
            // 以后在这里加：{ text: '环境搭建', link: '/linux/env-setup' }
          ]
        }
      ],

      // 当用户在 network 文件夹下时：
      '/network/': [
        {
          text: '网络技术研究',
          items: [
            { text: '计算机网络基本', link: '/network/Computer Networking' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/blackrain55/' }
    ]
  }
})