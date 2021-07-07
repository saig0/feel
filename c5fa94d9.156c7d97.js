(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),s=(t(0),t(180)),i={id:"what-is-feel",title:"What is FEEL?"},o={unversionedId:"reference/what-is-feel",id:"reference/what-is-feel",isDocsHomePage:!1,title:"What is FEEL?",description:"FEEL (Friendly Enough Expression Language) is a part of",source:"@site/docs/reference/what-is-feel.md",slug:"/reference/what-is-feel",permalink:"/feel-scala/docs/reference/what-is-feel",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/what-is-feel.md",version:"current",sidebar:"Reference",previous:{title:"Get Started",permalink:"/feel-scala/docs/reference/"},next:{title:"Introduction",permalink:"/feel-scala/docs/reference/language-guide/language-guide-introduction"}},c=[{value:"Unary-Tests vs. Expressions",id:"unary-tests-vs-expressions",children:[{value:"Unary-Tests",id:"unary-tests",children:[]},{value:"Expressions",id:"expressions",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"FEEL (Friendly Enough Expression Language) is a part of\nthe ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.omg.org/spec/DMN/"}),"DMN specification")," of the OMG. It is designed to write\nexpressions for decision tables and literal expressions in a simple way what can easily understand\nby business professionals and developers."),Object(s.b)("h2",{id:"unary-tests-vs-expressions"},"Unary-Tests vs. Expressions"),Object(s.b)("p",null,"FEEL has two types of expressions for different use cases."),Object(s.b)("h3",{id:"unary-tests"},"Unary-Tests"),Object(s.b)("p",null,"A unary-tests expression is a special kind of boolean expression. It should be used for the input\nentries of a decision table (i.e. the conditions of a rule)."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'< 7                                                 \n// checks if the input value is less than 7\n\nnot(2,4)                                            \n// checks if the input value is neither 2 nor 4\n\n[date("2015-09-17")..date("2015-09-19")]            \n// checks if the input value is between \'2015-09-17\' and \'2015-09-19\'\n\n<= duration("P1D")                                  \n// checks if the input value is less than or equal to one day    \n')),Object(s.b)("p",null,"Learn ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/feel-scala/docs/reference/language-guide/feel-unary-tests"}),"more"),"."),Object(s.b)("h3",{id:"expressions"},"Expressions"),Object(s.b)("p",null,"General expressions that can return values of different types. They can be used everywhere, for\nexample, in a decision table as input expression or as output entry."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'applicant.monthly.income * 12                                           \n\nif applicant.maritalStatus in ("M","S") then "valid" else "not valid"    \n\nsum( [applicant.monthly.repayments, applicant.monthly.expenses] )        \n\nsum( credit_history[record_date > date("2011-01-01")].weight )           \n\nsome ch in credit_history satisfies ch.event = "bankruptcy"      \n')),Object(s.b)("p",null,"Learn ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/feel-scala/docs/reference/language-guide/feel-expressions-introduction"}),"more"),"."))}p.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||s;return t?a.a.createElement(b,o(o({ref:n},l),{},{components:t})):a.a.createElement(b,o({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);