(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{616:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"lerna是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna是什么"}},[s._v("#")]),s._v(" lerna是什么？")]),s._v(" "),t("blockquote",[t("p",[s._v("A tool for managing JavaScript projects with multiple packages.")]),s._v(" "),t("p",[s._v("用于管理具有多个包的 JavaScript 项目的工具。")])]),s._v(" "),t("p",[s._v("lerna是由Babel团队出的一个多包管理工具。使用了monorepo的概念，现在React,Vue,Babel,Angular,Jest都在使用这个工具来管理包。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/lerna/lerna#how-it-works",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"lerna解决了什么痛点以及原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna解决了什么痛点以及原理"}},[s._v("#")]),s._v(" lerna解决了什么痛点以及原理？")]),s._v(" "),t("p",[t("strong",[s._v("疑问")]),s._v("（为了模块或者组件的复用，开发npm包）")]),s._v(" "),t("ol",[t("li",[s._v("多个npm包是需要多个仓库地址吗？")]),s._v(" "),t("li",[s._v("包构建的时候每个都需要独立打包配置吗？")]),s._v(" "),t("li",[s._v("如果包有依赖关系，一个包变动之后，依赖它的包如何知道？")]),s._v(" "),t("li",[s._v("发布的时候版本号如果更新？手动更改吗？")])]),s._v(" "),t("p",[s._v("在最初开开发package的时候，还属于一种刀耕火种的阶段。没有什么自动化的工具。发布package的时候，都是手动修改版本号。如果packages数量不多还可以接受。但是当数量逐渐增多的时候，且这些packages之间还有依赖关系的时候，对开发人员来说，就很痛苦了。工作不仅繁琐，而且需要用掉不少时间。")]),s._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"什么是monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是monorepo"}},[s._v("#")]),s._v(" 什么是monorepo？")]),s._v(" "),t("p",[s._v("monorepo是比较于multi-package的。multi-package就是建立多个仓库，每个包建立一个仓库。而monorepo是建立一个仓库，多个包都在这个仓库中管理，这样可以有两个好处：")]),s._v(" "),t("ol",[t("li",[s._v("各个包之间的沟通更加的方便，如果multi-package的话，系统内其中一个包修改，需要单独发版，而且引用这个包的其他包都需要发版。使用lerna的话可以自动管理这些包的发版，很方便。")]),s._v(" "),t("li",[s._v("一些可以共用的配置，比如eslint,babel,rollup等，可以统一的管理这些开发配置(也可以单独配置)")])])]),s._v(" "),t("li",[t("h5",{attrs:{id:"lerna是如何解决这些痛点的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna是如何解决这些痛点的"}},[s._v("#")]),s._v(" lerna是如何解决这些痛点的")]),s._v(" "),t("blockquote",[t("p",[s._v("Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.")])]),s._v(" "),t("p",[s._v("翻译：")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Lerna")]),s._v(" 基于 "),t("strong",[s._v("GIT")]),s._v("(主要是 commit) 和 "),t("strong",[s._v("NPM")]),s._v("(工具链) 来"),t("strong",[s._v("辅助")]),s._v("和"),t("strong",[s._v("优化")]),s._v("开发者管理多包。")])]),s._v(" "),t("p",[s._v("lerna如何知道哪些包有改动 --- git commit")]),s._v(" "),t("p",[s._v("是否都需要发版 --- 可以配置")]),s._v(" "),t("p",[s._v("版本号如何更新 --- npm semver")]),s._v(" "),t("p",[s._v("如何实现软链 --- fs.symlinkSync")])])]),s._v(" "),t("h3",{attrs:{id:"lerna的工作机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna的工作机制"}},[s._v("#")]),s._v(" lerna的工作机制")]),s._v(" "),t("p",[s._v("lerna对于包的管理，有两种模式：固定模式(fixed)、独立模式(independent)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("固定模式")]),s._v(" "),t("blockquote",[t("p",[s._v("所有包是统一的版本号，每次升级，所有包版本统一更新，不管这个包内容改变与否")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lerna.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("'\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("独立模式")]),s._v(" "),t("blockquote",[t("p",[s._v("每个包是单独的版本号，每次lerna 触发发布命令，每个包的版本都会单独变化")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lerna.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"independent"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("p",[s._v("两种模式使用的场景，当前项目里面的子包是否需要独立发布，需不需要让外部可以独立使用，如果可以就是独立模式，如果只是本项目内部使用，就是固定模式。")]),s._v(" "),t("h3",{attrs:{id:"lerna的目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna的目录结构"}},[s._v("#")]),s._v(" lerna的目录结构")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v("lerna-demo\n├── lerna.json\n├── package.json\n├── packages\n│   ├── p1\n│   │   ├── README.md\n│   │   ├── "),t("span",{pre:!0,attrs:{class:"token bold"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("__")]),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("tests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("__")])]),s._v("\n│   │   ├── lib\n│   │   ├── package-lock.json\n│   │   └── package.json\n│   └── p2\n│       ├── README.md\n│       ├── "),t("span",{pre:!0,attrs:{class:"token bold"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("__")]),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("tests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("__")])]),s._v("\n│       ├── lib\n│       └── package.json\n└\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"配置文件-lerna-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-lerna-json"}},[s._v("#")]),s._v(" 配置文件---lerna.json")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包所在的目录   array    如果你启用了yarn workspaces   这个选项将失效")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/*"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"independent"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模式   独立还是固定")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useWorkspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将启用yarn 的workspaces机制 和后面的npmClient 结合使用")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npmClient"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认的包管理工具")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重新配置你的命令")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publish"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreChanges"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignored-file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.md"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chore(release): publish"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://npm.pkg.github.com"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bootstrap"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignore"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"component-*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npmClientArgs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--no-package-lock"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"lerna-如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-如何使用"}},[s._v("#")]),s._v(" Lerna 如何使用")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g lerna\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("初始化")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna init "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\nlerna init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("independent "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 独立模式")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("添加子包")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkgName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("添加依赖")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna add "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("moduleName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有子包都添加这个依赖")]),s._v("\nlerna add "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("moduleName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkgName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给scope后的包添加依赖")]),s._v("\nlerna add "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkgName1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkgName2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给pkgName2中添加pkgName1，包内的互相引用，会复制pkgName1到pkgName2中")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除所有node_modules")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("所有包安装、更新依赖")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna bootstrap\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or ")]),s._v("\nyarn install "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于 lerna bootstrap --npm-client yarn --use-workspaces")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("为所有包创建软链（如果a依赖了b可以在a的package.json里面添加b之后执行如下命令）")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna link\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("发布包")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发布所有包")]),s._v("\nlerna publish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("force"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("publish "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pkgName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强制发布 指定的一个或多个软件包（以逗号分隔）或使用 * 表示所有软件包（对于修改过的软件包跳过 git diff 检查）。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("打tag")]),s._v(" "),t("p",[s._v("上传git")]),s._v(" "),t("p",[s._v("上传npm")]),s._v(" "),t("p",[s._v("// 在lerna version 基础上多了一个发布的功能")])]),s._v(" "),t("p",[s._v("如果你的包是带scope的私有包 想要发布为公有 需要设置package.json")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("标记版本")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("执行script命令")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行所有包的script命令")]),s._v("\nlerna run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("scope "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行某个包的script命令")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("执行外部命令")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行所有包的script命令 lerna exec -- npm link")]),s._v("\nlerna exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("scope "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pkg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行某个包的外部命令 lerna exec --scope package-a -- npm link")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("标记已更新的包")]),s._v(" "),t("p",[s._v("提示输入新版本号")]),s._v(" "),t("p",[s._v("提交这些更改")]),s._v(" "),t("p",[s._v("push到仓库")])])]),s._v(" "),t("li",[t("p",[s._v("其它命令")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("lerna list "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包列表")]),s._v("\nlerna diff "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pkgName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上次tag后的所有变化")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("p",[s._v("​    如果想要将包发布到私有服务器上需要在根目录的package.json配置")]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"项目的gitlib地址"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"私服地址"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"构建-rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建-rollup"}},[s._v("#")]),s._v(" 构建（rollup）")]),s._v(" "),t("h3",{attrs:{id:"demo演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo演示"}},[s._v("#")]),s._v(" Demo演示")]),s._v(" "),t("p",[s._v("为了规范我们的代码，也可以使用husky结合lint-staged和commitlint来约束我们的代码提交")]),s._v(" "),t("h3",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")])])}),[],!1,null,null,null);a.default=e.exports}}]);