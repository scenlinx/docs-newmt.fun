/// <reference types="vite/client" />
import type { EnhanceAppContext } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import {
  Notice,
  Links,
  Underline,
  Backtotop,
  Waline,
  umamiAnalytics
} from './types/index.js'
import { Waline_Data } from '../data'

import './style/all.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
      'doc-after': () => h('div', [
        h(Waline, { Waline_Data }),
        h(Backtotop)
      ])
    })
  },

  enhanceApp: ({ app }: EnhanceAppContext) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'docs.newmt.fun'
    })
    app.component('Home', Underline)
    app.component('Links', Links)
  },
}
