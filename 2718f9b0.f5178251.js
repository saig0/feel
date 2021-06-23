(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{175:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(175)),i={id:"feel-expression",title:"Expressions"},c={unversionedId:"reference/language-guide/feel-expression",id:"reference/language-guide/feel-expression",isDocsHomePage:!1,title:"Expressions",description:"Path Expression",source:"@site/docs/reference/language-guide/feel-expression.md",slug:"/reference/language-guide/feel-expression",permalink:"/feel-scala/docs/reference/language-guide/feel-expression",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-expression.md",version:"current"},l=[{value:"Path Expression",id:"path-expression",children:[]},{value:"Comparison",id:"comparison",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"path-expression"},"Path Expression"),Object(o.b)("p",null,"Access a value by its name/path. For example, a given variable from the input/context."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"x + y\n")),Object(o.b)("p",null,"If the name or path contains any special character (e.g. whitespace, dash, etc.) then the name needs to be wrapped into single backquotes/backtick ",Object(o.b)("inlineCode",{parentName:"p"},"`foo bar`"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"`name with whitespace`.`name+operator`\n")),Object(o.b)("h3",{id:"comparison"},"Comparison"),Object(o.b)("p",null,"Any value can be compared with ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to check if it is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", or if it exists. Comparing ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to a value different from ",Object(o.b)("inlineCode",{parentName:"p"},"null")," results in ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". It returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the value, or the context entry (e.g. the property of a variable) is ",Object(o.b)("inlineCode",{parentName:"p"},"null")," or doesn't exist. The built-in function ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-boolean#is-defined"}),"is defined()")," can be used to differentiate between a value that is ",Object(o.b)("inlineCode",{parentName:"p"},"null")," and a value that doesn't exist. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'null = null\n// true\n\n"foo" = null\n// false\n\nx = null\n// true - if "x" is null or doesn\'t exist\n\nx.y = null\n// true - if "x" is null, "x" doesn\'t exist, \n//           "y" is null, or "x" has no property "y" \n')))}p.isMDXComponent=!0}}]);