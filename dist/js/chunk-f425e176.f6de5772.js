(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f425e176","chunk-2d0a3d24","chunk-2d0df024","chunk-2d0cf511"],{"048b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","drag-sort":"","keep-source":"",height:580,loading:e.loading,dataSource:e.dataSource,columns:e.columns},on:{valueChange:e.handleValueChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[a("a-button",{on:{click:e.handleTableCheck}},[e._v("表单验证")]),a("a-tooltip",{attrs:{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0}},[a("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])],1),a("a-tooltip",{attrs:{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0}},[a("a-button",{on:{click:e.handleTableSet}},[e._v("设置值")])],1)]},proxy:!0},{key:"action",fn:function(t){return[a("a",{on:{click:function(a){return e.handleCK(t)}}},[e._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(a){return e.handleDL(t)}}},[a("a",[e._v("删除")])])]}}])})},l=[],i=a("c1df"),o=a.n(i),r=a("ca00"),u=a("2475"),s={name:"JVxeDemo1",data:function(){return{loading:!1,columns:[{title:"不可编辑",key:"normal",type:u["b"].normal,width:"180px",fixed:"left",defaultValue:"normal-new"},{title:"单行文本",key:"input",type:u["b"].input,width:"180px",defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]*$/,message:"${title}必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler:function(e,t,a){var n=e.cellValue;e.row,e.column;"abc"===n?t(!1,"${title}不能是abc"):t(!0)},message:"${title}默认提示"}]},{title:"多行文本",key:"textarea",type:u["b"].textarea,width:"200px"},{title:"数字",key:"number",type:u["b"].inputNumber,width:"80px",defaultValue:32,statistics:["sum","average"]},{title:"下拉框",key:"select",type:u["b"].select,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowInput:!0,placeholder:"请选择"},{title:"下拉框_字典",key:"select_dict",type:u["b"].select,width:"180px",options:[],dictCode:"sex",placeholder:"请选择"},{title:"下拉框_多选",key:"select_multiple",type:u["b"].selectMultiple,width:"205px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"多选"},{title:"下拉框_搜索",key:"select_search",type:u["b"].selectSearch,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}]},{title:"日期时间",key:"datetime",type:u["b"].datetime,width:"200px",defaultValue:"2019-4-30 14:52:22",placeholder:"请选择"},{title:"复选框",key:"checkbox",type:u["b"].checkbox,width:"100px",customValue:["Y","N"],defaultChecked:!1},{title:"操作",key:"action",type:u["b"].slot,fixed:"right",minWidth:"100px",align:"center",slotName:"action"}],dataSource:[]}},created:function(){this.randomPage(0,20,!0)},methods:{handleCK:function(e){this.$message.success("请在控制台查看输出")},handleDL:function(e){e.target.removeRows(e.row)},handleValueChange:function(e){},handleTableCheck:function(){var e=this;this.$refs.vTable.validateTable().then((function(t){t?e.$message.error("验证未通过，请在控制台查看详细"):e.$message.success("验证通过")}))},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},handleTableSet:function(){this.randomPage(1,1e3,!0)},randomPage:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.loading=!0);for(var l=function(){var e=Object(r["l"])(1e3,9999999999999);return o()(new Date(e)).format("YYYY-MM-DD HH:mm:ss")},i=(e-1)*t,u=["string","int","double","boolean"],s=Date.now(),c=[],p=0;p<t;p++)c.push({id:Object(r["n"])(),normal:"normal-".concat(i+p+1),input:"text-".concat(i+p+1),textarea:"textarea-".concat(i+p+1),number:Object(r["l"])(0,233),select:u[Object(r["l"])(0,3)],select_dict:Object(r["l"])(1,2).toString(),select_multiple:function(){for(var e=Object(r["l"])(1,4),t=[],a=0;a<e;a++)Object(r["k"])(t,u[Object(r["l"])(0,3)]);return t}(),select_search:u[Object(r["l"])(0,3)],datetime:l(),checkbox:["Y","N"][Object(r["l"])(0,1)]});this.dataSource=c;var d=Date.now(),h=d-s;n&&h<t&&setTimeout((function(){a.loading=!1}),t-h)}}},c=s,p=a("2877"),d=Object(p["a"])(c,n,l,!1,null,"5d41efb4",null);t["default"]=d.exports},"62cb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",attrs:{toolbar:"","row-number":"","row-selection":"","keep-source":"",height:484,dataSource:e.dataSource,columns:e.columns,"linkage-config":e.linkageConfig}})},l=[],i=a("a34a"),o=a.n(i),r=a("2475"),u=a("0fea");function s(e,t,a,n,l,i,o){try{var r=e[i](o),u=r.value}catch(s){return void a(s)}r.done?t(u):Promise.resolve(u).then(n,l)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var i=e.apply(t,a);function o(e){s(i,n,l,o,r,"next",e)}function r(e){s(i,n,l,o,r,"throw",e)}o(void 0)}))}}var p={name:"JVxeDemo2",data:function(){return{linkageConfig:[{requestData:this.requestData,key:"s1"},{requestData:this.loadMenu,key:"menu1"}],columns:[{title:"性别",key:"sex",type:r["b"].select,dictCode:"sex",width:"180px",placeholder:"请选择${title}"},{title:"省/直辖市/自治区",key:"s1",type:r["b"].select,width:"180px",placeholder:"请选择${title}",linkageKey:"s2"},{title:"市",key:"s2",type:r["b"].select,width:"180px",placeholder:"请选择${title}",linkageKey:"s3"},{title:"县/区",key:"s3",type:r["b"].select,width:"180px",options:[],placeholder:"请选择${title}"},{title:"一级菜单",key:"menu1",type:r["b"].select,width:"180px",placeholder:"请选择${title}",linkageKey:"menu2"},{title:"二级菜单",key:"menu2",type:r["b"].select,width:"180px",placeholder:"请选择${title}",linkageKey:"menu3"},{title:"三级菜单",key:"menu3",type:r["b"].select,width:"180px",placeholder:"请选择${title}"}],dataSource:[{sex:"1",s1:"110000",s2:"110100",s3:"110101"},{sex:"2",s1:"130000",s2:"130300",s3:"130303"}],mockData:[{text:"北京市",value:"110000",parent:""},{text:"天津市",value:"120000",parent:""},{text:"河北省",value:"130000",parent:""},{text:"上海市",value:"310000",parent:""},{text:"北京市",value:"110100",parent:"110000"},{text:"天津市市",value:"120100",parent:"120000"},{text:"石家庄市",value:"130100",parent:"130000"},{text:"唐山市",value:"130200",parent:"130000"},{text:"秦皇岛市",value:"130300",parent:"130000"},{text:"上海市",value:"310100",parent:"310000"},{text:"东城区",value:"110101",parent:"110100"},{text:"西城区",value:"110102",parent:"110100"},{text:"朝阳区",value:"110105",parent:"110100"},{text:"和平区",value:"120101",parent:"120100"},{text:"河东区",value:"120102",parent:"120100"},{text:"河西区",value:"120103",parent:"120100"},{text:"黄浦区",value:"310101",parent:"310100"},{text:"徐汇区",value:"310104",parent:"310100"},{text:"长宁区",value:"310105",parent:"310100"},{text:"长安区",value:"130102",parent:"130100"},{text:"桥西区",value:"130104",parent:"130100"},{text:"新华区",value:"130105",parent:"130100"},{text:"路南区",value:"130202",parent:"130200"},{text:"路北区",value:"130203",parent:"130200"},{text:"古冶区",value:"130204",parent:"130200"},{text:"海港区",value:"130302",parent:"130300"},{text:"山海关区",value:"130303",parent:"130300"},{text:"北戴河区",value:"130304",parent:"130300"}]}},methods:{requestData:function(e){var t=this;return new Promise((function(a,n){var l=t.mockData.filter((function(t){return t.parent===e}));setTimeout((function(){a(l)}),500)}))},loadMenu:function(){var e=c(o.a.mark((function e(t){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t){e.next=6;break}return e.next=3,Object(u["c"])("/sys/permission/getSystemMenuList");case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,Object(u["c"])("/sys/permission/getSystemSubmenu",{parentId:t});case 8:a=e.sent;case 9:if(!a.success){e.next=11;break}return e.abrupt("return",a.result.map((function(e){return{value:e.id,text:e.name}})));case 11:return this.$message.warning("loadMenu失败："+a.message),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},d=p,h=a("2877"),b=Object(h["a"])(d,n,l,!1,null,"f5b4542e",null);t["default"]=b.exports},"87a0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","keep-source":"",height:484,loading:e.loading,dataSource:e.dataSource,columns:e.columns,pagination:e.pagination},on:{pageChange:e.handlePageChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[a("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])]},proxy:!0}])})},l=[],i=(a("c1df"),a("ca00")),o=a("2475"),r={name:"JVxeDemo2",data:function(){return{loading:!1,columns:[{title:"下拉框_字典表搜索",key:"select_dict_search",type:o["b"].selectDictSearch,width:"200px",dict:"sys_user,realname,username"},{title:"JPopup",key:"popup",type:o["b"].popup,width:"180px",popupCode:"demo",field:"name,sex,age",orgFields:"name,sex,age",destFields:"popup,popup_sex,popup_age"},{title:"JP-性别",key:"popup_sex",type:o["b"].select,dictCode:"sex",disabled:!0,width:"100px"},{title:"JP-年龄",key:"popup_age",type:o["b"].normal,width:"80px"},{title:"进度条",key:"progress",type:o["b"].progress,minWidth:"120px"},{title:"单选",key:"radio",type:o["b"].radio,width:"130px",options:[{text:"男",value:"1"},{text:"女",value:"2"}],allowClear:!0},{title:"上传",key:"upload",type:o["b"].upload,width:"180px",btnText:"点击上传",token:!0,responseName:"message",action:window._CONFIG["domianURL"]+"/sys/common/upload"},{title:"图片上传",key:"image",type:o["b"].image,width:"180px",token:!0},{title:"文件上传",key:"file",type:o["b"].file,width:"180px",token:!0}],dataSource:[],pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","100","200"],total:1e3}}},created:function(){this.randomPage(this.pagination.current,this.pagination.pageSize,!0)},methods:{handlePageChange:function(e){this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,this.randomPage(e.current,e.pageSize,!0)},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},randomPage:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.loading=!0);for(var l=Date.now(),o=[],r=0;r<t;r++){var u=Object(i["l"])(0,2);o.push({id:Object(i["n"])(),select_dict_search:["","admin","","jeecg",""][Object(i["l"])(0,4)],progress:Object(i["l"])(0,100),radio:u?u.toString():null})}this.dataSource=o;var s=Date.now(),c=s-l;n&&c<t&&setTimeout((function(){a.loading=!1}),t-c)}}},u=r,s=a("2877"),c=Object(s["a"])(u,n,l,!1,null,"7c114319",null);t["default"]=c.exports},f6e4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-tabs",[a("a-tab-pane",{key:"1",attrs:{tab:"基础示例",forceRender:""}},[a("j-vxe-demo1")],1),a("a-tab-pane",{key:"2",attrs:{tab:"高级示例",forceRender:""}},[a("j-vxe-demo2")],1),a("a-tab-pane",{key:"3",attrs:{tab:"联动示例",forceRender:""}},[a("j-vxe-demo3")],1)],1)],1)},l=[],i=a("048b"),o=a("87a0"),r=a("62cb"),u={name:"JVXETableDemo",components:{JVxeDemo2:o["default"],JVxeDemo1:i["default"],JVxeDemo3:r["default"]},data:function(){return{}},methods:{}},s=u,c=a("2877"),p=Object(c["a"])(s,n,l,!1,null,"de11f6b0",null);t["default"]=p.exports}}]);