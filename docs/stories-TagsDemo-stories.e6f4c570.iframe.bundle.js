"use strict";(self.webpackChunkguestbell_forms=self.webpackChunkguestbell_forms||[]).push([[263],{"./src/stories/TagsDemo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TagsDemo_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./src/lib/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const existingTags=[{id:1,name:"Food"},{id:2,name:"Drink"},{id:3,name:"Beer"},{id:4,name:"Wine"},{id:5,name:"Gluten free"},{id:6,name:"Fruit"}];function TagsDemo(props){const[tags,setTags]=react.useState([]);return(0,jsx_runtime.jsx)(lib.$G,{title:"Tags suggestions",label:"Choose or create tags",fetchExistingTags:startsWith=>new Promise((resolve=>setTimeout((()=>resolve(existingTags.filter((e=>e.name.includes(startsWith))))),1e3))),suggestionsEmptyComponent:"Not found",tags,onTagsChanged:setTags,filterExistingTags:(t,tags)=>tags,allowNew:!0})}TagsDemo.displayName="TagsDemo";try{TagsDemo.displayName="TagsDemo",TagsDemo.__docgenInfo={description:"",displayName:"TagsDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/TagsDemo.tsx#TagsDemo"]={docgenInfo:TagsDemo.__docgenInfo,name:"TagsDemo",path:"src/stories/TagsDemo.tsx#TagsDemo"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const TagsDemo_stories={title:"Example/Tags",component:TagsDemo,parameters:{layout:"fullscreen"}},Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});const __namedExportsOrder=["Default"]}}]);