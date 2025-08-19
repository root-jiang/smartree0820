import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SmarTree",
  description: "SmarTree帮助文档",

  base:'/SmarTreePage/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基础操作',
        items: [
          { text: '构建门节点', link: '/markdown-examples' },
          { text: '构建故障树', link: '/api-examples' },
          { text: '属性编辑', link: '/markdown-examples' }
        ]
      },
            {
        text: '定量/定性分析',
        items: [
          { text: '计算概率', link: '/guide/calculate' },
          { text: '生成最小割集', link: '/api-examples' }
        ]
      },
      {
        text: '本地与协作',
        items:[{ text: '离线操作', link: '/markdown-examples' },
          { text: '在线操作', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
