(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{319:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],isValidKey=function(key){return-1!==validEvents.indexOf(key)},bindHandlers=function(initEvent,listeners,editor){Object.keys(listeners).filter(isValidKey).forEach((function(key){var handler=listeners[key];"function"==typeof handler&&("onInit"===key?handler(initEvent,editor):editor.on(key.substring(2),(function(e){return handler(e,editor)})))}))};exports.bindHandlers=bindHandlers;var bindModelHandlers=function(ctx,editor){var modelEvents=ctx.$props.modelEvents?ctx.$props.modelEvents:null,normalizedEvents=Array.isArray(modelEvents)?modelEvents.join(" "):modelEvents;ctx.$watch("value",(function(val,prevVal){editor&&"string"==typeof val&&val!==prevVal&&val!==editor.getContent()&&editor.setContent(val)})),editor.on(normalizedEvents||"change keyup undo redo",(function(){ctx.$emit("input",editor.getContent({format:ctx.$props.outputFormat}))}))};exports.bindModelHandlers=bindModelHandlers;exports.initEditor=function(initEvent,ctx,editor){var value=ctx.$props.value?ctx.$props.value:"",initialValue=ctx.$props.initialValue?ctx.$props.initialValue:"";editor.setContent(value||initialValue),ctx.$listeners.input&&bindModelHandlers(ctx,editor),bindHandlers(initEvent,ctx.$listeners,editor)};var unique=0;exports.uuid=function(prefix){var time=Date.now();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)};exports.isTextarea=function(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))};exports.isNullOrUndefined=function(value){return null==value}},322:function(module,exports,__webpack_require__){__webpack_require__(323),__webpack_require__(506),module.exports=__webpack_require__(507)},361:function(module,exports){},507:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(321);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(693)}),module)}.call(this,__webpack_require__(508)(module))},693:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=__webpack_require__(126),Editor_1=__webpack_require__(694),apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",content='\n<h2 style="text-align: center;">\n  TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.\n</h2>\n<p style="text-align: center;">\n  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you\'re building, TinyMCE has got you covered.</span></span></strong>\n</p>';vue_1.storiesOf("tinymce-vue",module).add("Iframe editor",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:content}},template:'\n        <editor\n          api-key="'+apiKey+'"\n          :init="{height: 300}"\n          v-model="content"\n        />'}}),{notes:"Iframe editor."}).add("Inline editor",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:content}},template:'\n        <div style="padding-top: 100px;">\n          <editor\n            api-key="'+apiKey+'"\n            v-model="content"\n            inline\n          />\n        </div>\n      '}}),{notes:"Inline editor."}).add("Controlled input",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:content}},methods:{log:function(e,editor){return console.log(e)}},template:'\n        <div>\n          <editor\n            api-key="'+apiKey+'"\n            :init="{height: 300}"\n            v-model="content"\n            @onBlur="log"\n          />\n          <textarea\n            style="width: 100%;\n            height:200px;"\n            v-model="content"\n          ></textarea>\n          <div v-html="content"></div>\n        </div>\n      '}}),{notes:"Example of usage as as a controlled component."}).add("Disable button",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:content,disabled:!0}},methods:{toggleDisabled:function(e){this.disabled=!this.disabled}},template:"\n        <div>\n          <button @click=\"toggleDisabled\">{{ disabled ? 'enable' : 'disable' }}</button>\n          <editor\n            api-key=\""+apiKey+'"\n            v-bind:disabled="disabled"\n            :init="{height: 300}"\n            v-model="content"\n          />\n        </div>\n      '}}),{notes:"Example with setting the editor into readonly mode using the disabled prop."}).add("cloudChannel set to 5-dev",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:content}},methods:{log:function(e,editor){return console.log(e)}},template:'\n        <editor\n          api-key="'+apiKey+'"\n          cloudChannel="5-dev"\n          :init="{height: 300}"\n          v-model="content"\n        />\n      '}}),{notes:"Editor with cloudChannel set to 5-dev, please make sure to reload page to load TinyMCE 5."})}).call(this,__webpack_require__(68)(module))},694:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var ScriptLoader_1=__webpack_require__(695),TinyMCE_1=__webpack_require__(696),Utils_1=__webpack_require__(319),EditorPropTypes_1=__webpack_require__(697),initialise=function(ctx){return function(){var finalInit=__assign(__assign({},ctx.$props.init),{readonly:ctx.$props.disabled,selector:"#"+ctx.elementId,plugins:Utils_1.mergePlugins(ctx.$props.init&&ctx.$props.init.plugins,ctx.$props.plugins),toolbar:ctx.$props.toolbar||ctx.$props.init&&ctx.$props.init.toolbar,inline:ctx.inlineEditor,setup:function(editor){ctx.editor=editor,editor.on("init",(function(e){return Utils_1.initEditor(e,ctx,editor)})),ctx.$props.init&&"function"==typeof ctx.$props.init.setup&&ctx.$props.init.setup(editor)}});Utils_1.isTextarea(ctx.element)&&(ctx.element.style.visibility=""),TinyMCE_1.getTinymce().init(finalInit)}};exports.Editor={props:EditorPropTypes_1.editorProps,created:function(){this.elementId=this.$props.id||Utils_1.uuid("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==TinyMCE_1.getTinymce())initialise(this)();else if(this.element&&this.element.ownerDocument){var channel=this.$props.cloudChannel?this.$props.cloudChannel:"5",apiKey=this.$props.apiKey?this.$props.apiKey:"no-api-key",scriptSrc=Utils_1.isNullOrUndefined(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+apiKey+"/tinymce/"+channel+"/tinymce.min.js":this.$props.tinymceScriptSrc;ScriptLoader_1.ScriptLoader.load(this.element.ownerDocument,scriptSrc,initialise(this))}},beforeDestroy:function(){null!==TinyMCE_1.getTinymce()&&TinyMCE_1.getTinymce().remove(this.editor)},render:function(h){return this.inlineEditor?function(h,id,tagName){return h(tagName||"div",{attrs:{id:id}})}(h,this.elementId,this.$props.tagName):function(h,id){return h("textarea",{attrs:{id:id},style:{visibility:"hidden"}})}(h,this.elementId)}}},695:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var state,Utils_1=__webpack_require__(319),createState=function(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoaded:!1}},ScriptLoader=(state=createState(),{load:function(doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.referrerPolicy="origin",scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.src=url;var handler=function(){scriptTag.removeEventListener("load",handler),callback()};scriptTag.addEventListener("load",handler),doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,(function(){state.listeners.forEach((function(fn){return fn()})),state.scriptLoaded=!0})))},reinitialize:function(){state=createState()}});exports.ScriptLoader=ScriptLoader},696:function(module,exports,__webpack_require__){"use strict";(function(global){Object.defineProperty(exports,"__esModule",{value:!0});var getGlobal=function(){return"undefined"!=typeof window?window:global};exports.getTinymce=function(){var global=getGlobal();return global&&global.tinymce?global.tinymce:null}}).call(this,__webpack_require__(19))},697:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.editorProps={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(prop){return"html"===prop||"text"===prop}}}}},[[322,1,2]]]);
//# sourceMappingURL=main.802edfe3b0b2b9a31097.bundle.js.map