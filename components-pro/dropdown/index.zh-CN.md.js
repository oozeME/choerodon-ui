webpackJsonp([261],{2228:function(t,e){t.exports={content:["section",["p","向下弹出的列表。"],["h2","何时使用"],["p","当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。"]],meta:{category:"Pro Components",subtitle:"下拉菜单",type:"Navigation",title:"Dropdown",filename:"components-pro/dropdown/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","属性如下"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","disabled"],["td","菜单是否禁用"],["td","boolean"],["td","-"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"示例"]],["td","Function(triggerNode)"],["td",["code","() => document.body"]]],["tr",["td","overlay"],["td","菜单"],["td",["a",{title:null,href:"/components/menu"},"Menu"]],["td","-"]],["tr",["td","placement"],["td","菜单弹出位置：",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","String"],["td",["code","bottomLeft"]]],["tr",["td","trigger"],["td","触发下拉的行为"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td",["code","['click', 'focus']"]]],["tr",["td","hidden"],["td","菜单是否隐藏"],["td","boolean"],["td","-"]],["tr",["td","onHiddenChange"],["td","菜单显示状态改变时调用，参数为 hidden"],["td","Function(hidden)"],["td","-"]],["tr",["td","onOverlayClick"],["td","点击菜单时调用，参数为 event"],["td","Function(event)"],["td","-"]]]],["p",["code","overlay"]," 菜单使用 ",["a",{title:null,href:"/components/menu/"},"Menu"],"，还包括菜单项 ",["code","Menu.Item"],"，分割线 ",["code","Menu.Divider"],"。"]]}}});