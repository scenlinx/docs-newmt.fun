import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import { head, markdown, nav, localSearchOptions, algoliaSearchOptions, sidebar, socialLinks, transformPageData } from './configs'

const currentYear = new Date().getFullYear()

export default defineConfig({
  // 站点名称
  title: 'DOCS.NewMT',

  // 站点语言
  lang: 'zh-Hans',

  // 站点介绍
  description:
    '专注AI软件与大模型应用、副业赚钱实战（网盘拉新/流量卡代理）、新媒体运营（短视频/直播）的干货分享！提供最新行业趋势、变现技巧与工具推荐，助你快速入门高收益领域，玩转AI+副业+新媒体矩阵！',
  // 网站头部
  head,

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 是否将 meta 信息提取为单独的 chunk
  metaChunk: true,

  // 站点地图
  sitemap: { hostname: 'https://docs.newmt.fun' },

  // markdown-it插件配置
  markdown,

  // 动态生成 meta 标签和 JSON-LD 数据
  transformPageData,

  // 源目录
  srcDir: 'content',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // vue 配置
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  // vite 配置
  vite: {
    plugins: [
      // @ts-ignore: 使用 rolldown-vite 时类型不兼容 vite，但运行正常
      groupIconVitePlugin({
        customIcon: {
          debian: 'vscode-icons:file-type-debian',
          bun: 'logos:ubuntu',
          centos: 'logos:centos-icon',
          windows: 'logos:microsoft-windows-icon',
          homebrew: 'logos:homebrew',
          mac: 'logos:apple',
          linux: 'logos:linux-tux',
          rhel: 'logos:redhat-icon',
          android: 'logos:android-icon'
        }
      }), // @ts-ignore
      llmstxt({})
    ]
  },

  themeConfig: {
    // logo
    logo: {
      src: '/avatar.webp',
      width: 24,
      height: 24,
      alt: 'avatar',
      fetchpriority: 'high'
    },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于'
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    skipToContentLabel: '跳转到内容',

    // markdown 外部链接图标
    externalLinkIcon: true,

    // 语言切换
    langMenuLabel: '切换语言',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 搜索配置（二选一）
    search: {
      // provider: 'algolia',
      // options: algoliaSearchOptions,
      // 本地离线搜索
      provider: 'local',
      options: localSearchOptions
    },

    // 页脚
    footer: {
      message: '📚 持续更新优质内容 · 助力个人成长与副业创收',
      copyright: `Copyright © 2020-${currentYear} 百万知识库 - 探索AI/新媒体/副业赚钱最新玩法`
    },

    // 404 配置
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
