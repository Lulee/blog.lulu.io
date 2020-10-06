(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{430:function(s,e,a){"use strict";a.r(e);var n=a(44),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"音乐播放器elvaplayer开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音乐播放器elvaplayer开发"}},[s._v("#")]),s._v(" 音乐播放器elvaPlayer开发")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("功能需求分析")]),s._v(" "),a("ul",[a("li",[s._v("播放器")]),s._v(" "),a("li",[s._v("快捷键操作")]),s._v(" "),a("li",[s._v("歌词滚动")]),s._v(" "),a("li",[s._v("正在播放")]),s._v(" "),a("li",[s._v("排行榜")]),s._v(" "),a("li",[s._v("歌单详情")]),s._v(" "),a("li",[s._v("搜索")]),s._v(" "),a("li",[s._v("播放历史")]),s._v(" "),a("li",[s._v("查看评论")]),s._v(" "),a("li",[s._v("同步网易云歌单")])])]),s._v(" "),a("li",[a("p",[s._v("技术栈")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Ecmascrpt 6/7")])]),s._v(" "),a("li",[a("p",[s._v("Vue2")])]),s._v(" "),a("li",[a("p",[s._v("Vue-cli 4")])]),s._v(" "),a("li",[a("p",[s._v("Vue-router")])]),s._v(" "),a("li",[a("p",[s._v("Element-UI")])]),s._v(" "),a("li",[a("p",[s._v("Mock.js")])]),s._v(" "),a("li",[a("p",[s._v("Axios")])]),s._v(" "),a("li",[a("p",[s._v("vuex")])])])])]),s._v(" "),a("h3",{attrs:{id:"项目环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目环境搭建"}},[s._v("#")]),s._v(" 项目环境搭建")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装 node")])]),s._v(" "),a("li",[a("p",[s._v("全局安装 vue-cli")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g @vue/cli\n\nvue --version  \n// @vue/cli "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v(".6\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("创建项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue create mplayer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("选 第一个，即vue2。")])]),s._v(" "),a("li",[a("p",[s._v("修改package.json中的 npm script")]),s._v(" "),a("p",[s._v("添加--open，自动打开浏览器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  "serve": "vue-cli-service serve --open"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("运行项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run serve\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"使用-vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-router"}},[s._v("#")]),s._v(" 使用 vue-router")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装 vue-router")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i vue-router -S\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置路由")]),s._v(" "),a("p",[s._v("在 src/router下新建 index.js, 代码如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue';\nimport Router from 'vue-router'\nVue.use(Router)\n\nconst routes = [\n\n]\n\nexport default new Router({\n    linkActiveClass: 'active',\n    linkExactActiveClass: 'active',\n    routes\n  })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("引入router")]),s._v(" "),a("p",[s._v("在 main.js中引入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("...\nimport router from './router'\n...\n\nnew Vue({\n  router,\n  render: h => h(App),\n}).$mount('#app')\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"使用-view-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-view-ui"}},[s._v("#")]),s._v(" 使用 view UI")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装 view UI")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install view-design --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("引入 view UI")]),s._v(" "),a("p",[s._v("在 main.js 中引入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("...\nimport ViewUI from 'view-design';\nimport 'view-design/dist/styles/iview.css';\n...\n\nVue.use(ViewUI);\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("按需引入")]),s._v(" "),a("p",[s._v("借助插件 "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel-plugin-import"),a("OutboundLink")],1),s._v("可以实现按需加载组件，减少文件体积。首先安装，并在文件 "),a("code",[s._v(".babelrc")]),s._v(" 中配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('npm install babel-plugin-import --save-dev\n\n// .babelrc\n{\n  "plugins": [["import", {\n    "libraryName": "view-design",\n    "libraryDirectory": "src/components"\n  }]]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后这样按需引入组件，就可以减小体积了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { Button, Table } from 'view-design';\nVue.component('Button', Button);\nVue.component('Table', Table);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("特别提醒")])]),s._v(" "),a("ul",[a("li",[s._v("按需引用仍然需要导入样式，即在 "),a("strong",[s._v("main.js")]),s._v(" 或根组件执行 "),a("code",[s._v("import 'view-design/dist/styles/iview.css';")])])])])]),s._v(" "),a("h3",{attrs:{id:"封装-axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装-axios"}},[s._v("#")]),s._v(" 封装 Axios")]),s._v(" "),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" Log")]),s._v(" "),a("p",[a("strong",[s._v("2020-9-23")])]),s._v(" "),a("ol",[a("li",[a("ul",[a("li",[s._v("[ ] 搭建项目框架\n"),a("ul",[a("li",[s._v("项目目录")]),s._v(" "),a("li",[s._v("运行项目")])])])])])]),s._v(" "),a("p",[a("strong",[s._v("2020-9-25")])]),s._v(" "),a("ul",[a("li",[s._v("[ ] 使用 vue-router")]),s._v(" "),a("li",[s._v("[ ] 使用 view UI")]),s._v(" "),a("li",[s._v("[ ] 封装axios")]),s._v(" "),a("li",[s._v("[ ]")])])])}),[],!1,null,null,null);e.default=t.exports}}]);