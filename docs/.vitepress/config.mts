import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : '/'

export default defineConfig({
  lang: 'zh-CN',
  title: '伍班E站',
  description: '江苏省江都中学 2024 级高一（5）班',
  cleanUrls: true,
  base,
  themeConfig: {
    logo: '/image/logo.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '班级活动', link: '/moments' },
      { text: '教师团队', link: '/teachers' }
    ],
    footer: {
      message: '青春不散场，奋斗正当时。',
      copyright: '© 2026 伍班E站'
    }
  }
})
