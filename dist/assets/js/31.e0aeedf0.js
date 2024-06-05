(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{623:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"登录自己的npm账号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录自己的npm账号"}},[s._v("#")]),s._v(" 登录自己的NPM账号")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里按顺序操作输入账号和密码")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"新模块发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新模块发布"}},[s._v("#")]),s._v(" 新模块发布")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在自己的模块的根目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证账号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发布")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"模块权限管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块权限管理"}},[s._v("#")]),s._v(" 模块权限管理")]),s._v(" "),n("blockquote",[n("p",[s._v("name是用户名或者邮箱   demo是你的npm模块名称")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看权限用户列表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" owner "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" demo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一个发布者")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" owner "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" name demo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个发布者")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" owner "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" name demo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"更新版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新版本"}},[s._v("#")]),s._v(" 更新版本")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("发布稳定版本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新版本号（major | minor | patch | premajor | preminor | prepatch | prerelease）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 大版本并且不向下兼容时，使用 major")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有新功能且向下兼容时，使用 major")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修复一些问题、优化等，使用 patch")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面比如更新一个 patch 小版本号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("预发布版本")]),s._v(" "),n("blockquote",[n("p",[s._v("很多时候一些新改动，并不能直接发布到稳定版本上（稳定版本的意思就是使用 "),n("code",[s._v("npm install demo")]),s._v(" 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布一个 prelease 版本，tag=beta")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version prerelease\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish --tag beta\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("比如原来的版本号是 "),n("code",[s._v("1.0.1")]),s._v("，那么以上发布后的版本是 "),n("code",[s._v("1.0.1-0")]),s._v("，用户可以通过 "),n("code",[s._v("npm install demo@beta")]),s._v(" 或者 "),n("code",[s._v("npm install demo@1.0.1-0")]),s._v(" 来安装。")])]),s._v(" "),n("li",[n("p",[s._v("将预发布版本设置为稳定版本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" dist-tag "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 1.0.1-1 版本为稳定版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" dist-tag "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" demo@1.0.1-1 latest\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者通过 tag 来设置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" dist-tag "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" demo@beta latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"查看模块的信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看模块的信息"}},[s._v("#")]),s._v(" 查看模块的信息")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" info\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);