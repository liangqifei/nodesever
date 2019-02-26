# 蚂蚁分工版本功能迭代文档

<p align="center">
  <img width="500" src="http://www.lgstatic.com/thumbnail_600x360/i/image2/M00/04/D4/CgotOVnE4XKANwFLAAOVpfKlnVw762.png" alt="蚂蚁分工">
</p>

---

## <i class="icon-share"></i> 2019-02-25 


#### <i class="icon-share"></i> 更新功能说明
 
- [x]  回滚 FormItem 占位符以修复额外高度的问题。[#14937](https://github.com/ant-design/ant-design/pull/14937)
- [x]  调整 Input 样式以支持 `text-align: inherit`。[#14912](https://github.com/ant-design/ant-design/pull/14912)
- [x]  修复 Sider 在右侧收缩时，图标位置不正确的问题。[#14446](https://github.com/ant-design/ant-design/pull/14446)
- [x]  修复 Table 在某些情况下丢失顶部边框的问题。[#14922](https://github.com/ant-design/ant-design/pull/14922)
- [x]  修复 TypeScript 类型定义。[#14903](https://github.com/ant-design/ant-design/pull/14903)


#### <i class="icon-share"></i> 更新文件列表

```
├─ant_pc_new
│  ├─components
│  │  │─task //任务详情组件
│  │  │  │─discuss  //讨论日志模块
│  │  │  │  ├─index.js //讨论日志
│  │  │  │  └─publish.js //发布以及@功能
│  │  │  │─middleDetails
│  │  │  │  ├─childList.js 
│  │  │  │  ├─coopList.js
│  │  │  │  ├─fileList.js
│  │  │  │  └─taskSilder.js
│  │  │  └─TaskLayout.js
│  │  └─newtag.js //标签组件
│  ├─core
│  │  │─service
│  │  │  └─task.service.js //新增获取@人员列表接口
│  │  └─utils
│  │     └─util.js //新增绘制icon方法，判断操作系统方法
│  ├─pages
│  │  │─pc_task.js //更换任务页的任务详情组件
│  │  ├─pc_projectDetails.js //更换项目详情页的任务详情组件
│  │  └─document.js //更换icon地址
│  │─static
│  │  │─font //增加新的iconfont字体
│  │  └─common.css //增加详情头部任务状态对应颜色方法
│  │─styles
│  │  │─components
│  │  │  │─task //新增任务详情功能css
│  │  │  │  │─discuss 
│  │  │  │  │  ├─index.scss
│  │  │  │  │─middleDetails
│  │  │  │  │  ├─childList.scss
│  │  │  │  │  ├─coopList.scss
│  │  │  │  │  ├─fileList.scss
│  │  │  │  │  └─taskSilder.scss
│  │  │  │  └─taskDetail.scss
│  │  │─view 
│  │  │  ├─projectDetails.scss //修复详情页面显示问题
```
---

## 什么是 Markdown

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 _斜体_ 某些文字，更棒的是，它还可以
