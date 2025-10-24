# 📚 百万运营Pro - 个人知识库

基于最新版 VitePress 构建的轻量级文档网站，支持多平台部署和丰富的功能扩展。

![VitePress](https://img.shields.io/badge/VitePress-Latest-blue)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-teal)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 特性

- 🚀 **最新 VitePress**: 始终保持最新版本，享受最新特性
- 🏗️ **多平台部署**: 支持 Vercel、Netlify 等主流平台
- 💬 **Wali 评论**: 集成评论系统，增强用户互动
- 📌 **文章置顶**: 支持重要内容置顶功能
- 📖 **自动侧边栏**: 智能生成侧边栏导航
- 🎨 **主题定制**: 深色/浅色主题切换
- 🔍 **全文搜索**: 内置本地搜索功能
- 📱 **响应式设计**: 完美适配各种设备

## 🛠️ 技术栈

- **框架**: VitePress (最新版本)
- **部署**: Vercel / Netlify
- **评论**: Wali 评论系统
- **构建**: Vite
- **语言**: Vue 3, TypeScript, Markdown

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm (推荐)

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:5173

### 构建部署

```bash
# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 🌐 部署指南

### Vercel 部署

1. Fork 本项目
2. 在 [Vercel](https://vercel.com/) 中导入项目
3. 自动部署，无需额外配置

### Netlify 部署

1. 在 Netlify 中选择 "Deploy from Git"
2. 连接 GitHub 仓库
3. 构建设置：
   - Build Command: `pnpm build`
   - Publish Directory: `.vitepress/dist`

## ⚙️ 功能配置

### Wali 评论

在 Frontmatter 中启用评论：

```yaml
---
comment: true
---
```

### 文章置顶

在 Frontmatter 中设置置顶：

```yaml
---
pinned: true
---
```

### 自动侧边栏

侧边栏根据目录结构自动生成，支持多级嵌套。

## 📁 项目结构

```
.
├── content/              # 文档内容
├── .vitepress/          # VitePress 配置
│   ├── config.js        # 主配置
│   └── configs/         # 配置模块
├── public/              # 静态资源
└── package.json
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
