"use strict";(self.webpackChunkguestbell_forms=self.webpackChunkguestbell_forms||[]).push([[828],{"./src/stories/Schedule.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Schedule_stories});var moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./src/lib/index.ts"),utils=__webpack_require__("./src/lib/components/bookingCalendar/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const Schedule=()=>{const[{from,till},setRange]=react.useState({from:moment_default()().startOf("day").subtract(0,"day"),till:moment_default()().startOf("day").add(7,"days")}),bookings=react.useMemo((()=>function(from,till){let count=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;const width=till.valueOf()-from.valueOf(),startMs=from.valueOf();return new Array(count).fill(0).map(((_,index)=>{const _from=randomIntFromInterval(0,till.valueOf()-startMs)+startMs,_width=randomIntFromInterval(width/100,width/50);return{id:index,from:moment_default()(_from),till:moment_default()(_from).add(_width,"ms"),laneKey:1===randomIntFromInterval(1,3)?void 0:randomIntFromInterval(1,3)}}))}(from.clone().subtract(10,"day"),till.clone().add(10,"day"))),[]),items=react.useMemo((()=>bookings.filter((b=>(0,utils.Jq)(b,{from,till})))),[from,till,bookings]),onSelection=react.useCallback(((items,_from,_till,e)=>{console.log(items),e.ctrlKey&&setRange({from:_from,till:_till})}),[]);return(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsx)(lib.wT,{bookings:items,from,till,step:(0,moment.duration)(1,"day"),onRangeChange:setRange,onSelection,selectionContent:"Hold CTRL to zoom",lanesSource:new Array(3).fill(0).map(((_,index)=>({laneKey:index,data:{data:"test"},rowClassName:"test"}))),zoomLevels:[{step:(0,moment.duration)(1,"day"),label:"Day"},{step:(0,moment.duration)(1,"week"),label:"Week"}]})})};Schedule.displayName="Schedule";var _Default$parameters,_Default$parameters2,_Default$parameters2$;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Schedule_stories={title:"Example/Schedule",component:Schedule,parameters:{}},Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});const __namedExportsOrder=["Default"]}}]);