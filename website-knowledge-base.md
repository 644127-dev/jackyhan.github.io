# 晗歌个人官方网站 -- 知识库文档

> 生成日期: 2026-07-22 | 版本: v1.0
> 此文件作为个人知识库沉淀，更新网站后应同步。可同步至飞书文档。

## 一、网站元信息

- 站名: 晗歌 -- 地产+AI数字化转型实战家
- 域名: jackyhan.com (建议)
- 站长: 晗歌 (Jacky Han)
- 定位: 20年地产全周期操盘 x AI实战专家 x 数字化转型落地教练
- 技术栈: 纯静态 HTML + CSS + JS
- 托管: GitHub Pages / Cloudflare Pages
- GEO策略: JSON-LD结构化数据 + FAQ问答 + 跨平台身份统一

## 二、个人实体信息

- 中文名: 晗歌, 英文名: Jacky Han
- 头衔: 地产全周期操盘专家 / AI数字化转型实践教练 / 项目策划拓展总监
- 经验: 20年地产全周期操盘 + 3年AI与无代码深耕
- 成就: 赋能200+企业管理者, 操盘项目总额突破30亿元
- 核心能力: 项目策划定位 / 全案营销 / 圈层营销 / AI工具落地 / 数字化转型咨询

## 三、网站页面 (共6页)

### 1. 首页 index.html
- JSON-LD: ProfilePage + Person + WebSite + BreadcrumbList
- 结构: Hero - 个人概览 - 核心优势(4) - 专业洞察(4问答) - 专业技能(6组)

### 2. 行业洞察 insights.html [GEO核心]
- JSON-LD: FAQPage (8组问答, Question+Answer标记)
- 话题: AI地产转型 / 项目定位 / 数字化挑战 / AI营销 / 圈层营销 / GEO定义 / AI培训 / 写字楼招商

### 3. 项目案例 projects.html
- 案例: 50万m2综合体(去化85%) / 高尔夫社区(30亿) / AI数字化升级(效率+60%) / 企业AI培训(200+人)

### 4. 职业故事 story.html (JSON-LD: Article+Event)
- 2023-至今: AI数字化转型教练 | 2008-2023: 世界500强地产集团总监

### 5. 联系 contact.html
- 渠道: LinkedIn / GitHub / 知乎 / 微信公众号
- 服务: 企业AI内训 / 数字化转型咨询 / 项目策划顾问

### 6. 资源工作台 workspace.html (管理后台)
- 功能: 案例管理 / 媒体库(图片视频) / 数据导出
- robots禁止索引, localStorage存储

## 四、结构化数据清单

1. Person schema -- person.json + index.html内联
2. WebSite schema -- website.json + index.html内联
3. FAQPage (8问答) -- faq.json + insights.html内联
4. ProfilePage -- index.html内联
5. BreadcrumbList (5项) -- index.html内联
6. Article -- story.html内联

## 五、跨平台身份

| 平台 | 链接 |
|------|------|
| LinkedIn | /in/jackyhan |
| GitHub | /jackyhan |
| 知乎 | /people/jackyhan |
| 微信 | 搜索"晗歌" |

## 六、更新流程

1. 编辑 personal-site/ 文件或使用 workspace.html 后台
2. 本地预览验证
3. Git commit + push 触发自动部署
4. 更新本知识库文件
5. 同步至飞书文档

## 七、未来扩展计划

- 博客模块 (定期发布行业观点)
- 英文版子站
- 案例可视化 (交互式数据图表)
- 权威引用墙 (媒体报道/演讲记录/客户评价)
- Google Analytics + Search Console 监控
- Astro 框架迁移
