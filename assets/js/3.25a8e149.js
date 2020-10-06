(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{397:function(t,s,a){t.exports=a.p+"assets/img/image-20200920213159058.dfa200cc.png"},398:function(t,s,a){t.exports=a.p+"assets/img/image-20200922104712384.310ab32c.png"},399:function(t,s,a){t.exports=a.p+"assets/img/image-20200922113304889.4dbb10aa.png"},400:function(t,s,a){t.exports=a.p+"assets/img/image-20200922115915366.d65c0964.png"},401:function(t,s,a){t.exports=a.p+"assets/img/image-20200922112239767.6afea15d.png"},418:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原理"}},[t._v("#")]),t._v(" 浏览器原理")]),t._v(" "),n("h2",{attrs:{id:"前置概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置概念"}},[t._v("#")]),t._v(" 前置概念")]),t._v(" "),n("h3",{attrs:{id:"cpu-和-gpu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cpu-和-gpu"}},[t._v("#")]),t._v(" CPU  和 GPU")]),t._v(" "),n("p",[t._v("CPU（Central Process Unit），又名中央处理器，相当于电脑的大脑，处理各种计算任务。")]),t._v(" "),n("p",[t._v("GPU（Graphic Process Unit）,又名显卡，与CPU不同，GPU擅长处理简单任务，但同时跨多个内核。顾名思义，它最初是为处理图形而开发的。")]),t._v(" "),n("h3",{attrs:{id:"进程和线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),n("p",[t._v("进程(Process)是计算机执行任务的基本单位。线程是更小的调度单位，存于进程中。")]),t._v(" "),n("p",[t._v("一个进程至少包含一个线程(Thread)。进程通过 IPC（"),n("strong",[t._v("I")]),t._v("nter "),n("strong",[t._v("P")]),t._v("rocess "),n("strong",[t._v("C")]),t._v("ommunication ） 通信。")]),t._v(" "),n("h2",{attrs:{id:"现代浏览器的架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器的架构"}},[t._v("#")]),t._v(" 现代浏览器的架构")]),t._v(" "),n("p",[t._v("现代浏览器的架构是多进程架构，下面是 Chrome 的架构图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(397),alt:"image-20200920213159058"}})]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("进程及其控制")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Browser( 浏览器进程)")]),t._v(" "),n("td",[t._v("控制应用程序的“ chrome”部分，包括地址栏，书签，后退和前进按钮。 还处理Web浏览器中看不见的特权部分，例如网络请求和文件访问。浏览器进程负责与其他进程协调，起调度作用。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Renderer(渲染进程)")]),t._v(" "),n("td",[t._v("控制显示网站的标签内的所有内容。将 HTML、CSS、Javascript解析执行后生成图形显示在屏幕上。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Plugin(插件进程)")]),t._v(" "),n("td",[t._v("控制网站使用的所有插件，例如Flash。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("GPU")]),t._v(" "),n("td",[t._v("与其他进程隔离处理GPU任务。由于GPU处理来自多个应用程序的请求并将它们绘制在同一表面上，因此将其分为不同的过程。")])])])]),t._v(" "),n("p",[t._v("Chrome浏览器至少有上面四个进程。")]),t._v(" "),n("h2",{attrs:{id:"浏览器的导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的导航"}},[t._v("#")]),t._v(" 浏览器的导航")]),t._v(" "),n("p",[t._v("经典面试题：在浏览器中输入URL到显示页面，中间发生了什么？")]),t._v(" "),n("ol",[n("li",[t._v("处理输入")]),t._v(" "),n("li",[t._v("DNS 解析获得服务器的 ip 和端口")]),t._v(" "),n("li",[t._v("进行网络请求获得网页")]),t._v(" "),n("li",[t._v("浏览器下载解析，并渲染")])]),t._v(" "),n("h3",{attrs:{id:"输入处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输入处理"}},[t._v("#")]),t._v(" 输入处理")]),t._v(" "),n("p",[t._v("在地址栏中输入内容（URL或者关键字）时，将由浏览器进程中的 UI 线程解析是否是 URL，若是 URL 则走通过 IPC 调起网络进程 进行 DNS 解析，网络请求等步骤，若是关键字，则发给默认的搜索引擎处理，返回搜索结果。")]),t._v(" "),n("h3",{attrs:{id:"dns-解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[t._v("#")]),t._v(" DNS 解析")]),t._v(" "),n("p",[t._v("DNS是做什么？")]),t._v(" "),n("p",[t._v("DNS 步骤")]),t._v(" "),n("h3",{attrs:{id:"网络请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[t._v("#")]),t._v(" 网络请求")]),t._v(" "),n("h3",{attrs:{id:"网页渲染流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网页渲染流程"}},[t._v("#")]),t._v(" 网页渲染流程")]),t._v(" "),n("p",[n("img",{attrs:{src:a(398),alt:"image-20200922104712384"}})]),t._v(" "),n("ol",[n("li",[n("h4",{attrs:{id:"构建dom树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建dom树"}},[t._v("#")]),t._v(" 构建DOM树")]),t._v(" "),n("p",[t._v("HTML解析涉及到 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList",target:"_blank",rel:"noopener noreferrer"}},[t._v("tokenization"),n("OutboundLink")],1),t._v(" 和树的构造。HTML标记包括开始和结束标记，以及属性名和值。 如果文档格式良好，则解析它会简单而快速。解析器将标记化的输入解析到文档中，构建文档树。")]),t._v(" "),n("p",[t._v("比如下面一段html 的代码：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Hello,"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("web performance"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("students\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("上述代码生成的构造树大概是这样的：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(399),alt:"image-20200922113304889"}})])]),t._v(" "),n("li",[n("h4",{attrs:{id:"构建cssom树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建cssom树"}},[t._v("#")]),t._v(" 构建CSSOM树")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:a(400),alt:"image-20200922115915366"}})])]),t._v(" "),n("li",[n("h4",{attrs:{id:"生成render-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成render-tree"}},[t._v("#")]),t._v(" 生成render tree")]),t._v(" "),n("p",[n("img",{attrs:{src:a(401),alt:"image-20200922112239767"}})]),t._v(" "),n("p",[t._v("将DOM和CSSOM组合成一个Render树，计算样式树或渲染树从DOM树的根开始构建，遍历每个可见节点。")]),t._v(" "),n("p",[t._v("像"),n("code",[t._v("<head>")]),t._v("和它的子节点以及任何具有"),n("code",[t._v("display: none")]),t._v("样式的结点，这些标签将不会显示，也就是它们不会出现在Render树上。具有"),n("code",[t._v("visibility: hidden")]),t._v("的节点会出现在Render树上，因为它们会占用空间。由于我们没有给出任何指令来覆盖用户代理默认值，因此上面代码示例中的script节点将不会包含在Render树中。")]),t._v(" "),n("p",[t._v("渲染树标识显示哪些节点（即使不可见）及其计算样式，"),n("strong",[t._v("但不标识每个节点的尺寸或位置")]),t._v("。")])]),t._v(" "),n("li",[n("h4",{attrs:{id:"布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),n("p",[t._v("布局是确定呈现树中所有节点的宽度、高度和位置，以及确定页面上每个对象的"),n("strong",[t._v("大小和位置")]),t._v("的过程，浏览器从渲染树的根开始遍历它。回流是对页面的任何部分或整个文档的任何后续大小和位置的确定。")]),t._v(" "),n("p",[t._v("**第一次确定节点的大小和位置称为布局。随后对节点大小和位置的重新计算称为回流（也叫重排）。**所以只要页面有动态交互，改变元素的位置，大小，就会产生回流。")]),t._v(" "),n("p",[t._v("影响布局的 CSS 属性有：")])]),t._v(" "),n("li",[n("h4",{attrs:{id:"绘制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绘制"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),n("p",[t._v("生成布局树后，开始绘制。在绘制或光栅化阶段，浏览器将在布局阶段计算的每个框转换为屏幕上的实际像素。绘画包括将元素的每个可视部分绘制到屏幕上，"),n("strong",[t._v("包括文本、颜色、边框、阴影和替换的元素（如按钮和图像）")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("第一次确定节点的文本，颜色，边框，阴影等外观属性称为绘制。随后对节点的外观属性重新计算称为重绘")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("回流（重排）一定会引起重绘，所以开销比较大。重绘不会引起回流（重排），开销相对较少。")])]),t._v(" "),n("p",[t._v("影响绘制的属性有：")])]),t._v(" "),n("li",[n("h4",{attrs:{id:"合成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),n("p",[t._v("图层")])])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("我们为什么需要知道浏览器工作原理？")]),t._v(" "),n("p",[t._v("因为熟悉了浏览器工作原理，我们能更好的的进行性能优化。")]),t._v(" "),n("p",[t._v("该如何进行性能优化，请看 "),n("RouterLink",{attrs:{to:"/frontend-primitive/Web性能优化.html"}},[t._v("Web 性能优化")]),t._v("。")],1),t._v(" "),n("p",[t._v("参考：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google dev | 深入了解现代 Web 浏览器"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN|浏览器工作原理"),n("OutboundLink")],1)]),t._v(" "),n("Vssue",{attrs:{title:"我是一个Issue"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);