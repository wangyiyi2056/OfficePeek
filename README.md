# OfficePeek - 在线文档预览系统

一个基于 Vue 3 + TypeScript + Vite 构建的在线文档预览系统，支持多种办公文档格式的在线预览。

## 功能特点

- 支持多种文档格式预览：
  - Excel (.xlsx, .xls)
  - Word (.docx, .doc)
  - PDF (.pdf)
  - PowerPoint (.pptx, .ppt)
- 现代化的用户界面
- 响应式设计
- 简单易用的文件上传
- 实时预览功能

## 技术栈

- Vue 3
- TypeScript
- Vite
- Element Plus
- Vue Router
- @vue-office 系列组件

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/yourusername/OfficePeek.git
cd OfficePeek
```

2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

4. 构建生产版本
```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

## 使用说明

1. 在首页选择要预览的文档类型
2. 点击对应的文件上传按钮
3. 选择本地文件
4. 系统会自动预览选中的文件

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项

- 文件预览基于浏览器能力，不会上传到服务器
- 建议使用较新版本的浏览器以获得最佳体验
- 大文件预览可能需要一定加载时间

## License

[MIT](LICENSE)
