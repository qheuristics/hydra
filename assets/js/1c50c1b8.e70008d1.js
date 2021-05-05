(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(8),o=(n(0),n(268)),i=n(275),c={id:"defaults",title:"Selecting default configs"},s={unversionedId:"tutorials/basic/your_first_app/defaults",id:"tutorials/basic/your_first_app/defaults",isDocsHomePage:!1,title:"Selecting default configs",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/docs/tutorials/basic/your_first_app/5_defaults.md",slug:"/tutorials/basic/your_first_app/defaults",permalink:"/docs/next/tutorials/basic/your_first_app/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/your_first_app/5_defaults.md",version:"current",lastUpdatedBy:"Olivier Delalleau",lastUpdatedAt:1620241358,formattedLastUpdatedAt:"5/5/2021",sidebar:"docs",previous:{title:"Grouping config files",permalink:"/docs/next/tutorials/basic/your_first_app/config_groups"},next:{title:"Putting it all together",permalink:"/docs/next/tutorials/basic/your_first_app/composition"}},u=[{value:"Config group defaults",id:"config-group-defaults",children:[]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],l={toc:u};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{to:"examples/tutorials/basic/your_first_hydra_app/5_defaults",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",Object(o.b)("inlineCode",{parentName:"p"},"+db=mysql")," every time you run your application."),Object(o.b)("p",null,"You can add a ",Object(o.b)("strong",{parentName:"p"},"Default List")," to your config file.\nA ",Object(o.b)("strong",{parentName:"p"},"Defaults List")," is a list telling Hydra how to compose the final config object.\nBy convention, it is the first item in the config."),Object(o.b)("h3",{id:"config-group-defaults"},"Config group defaults"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),Object(o.b)("p",null,"Remember to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("p",null,"When you run the updated application, MySQL is loaded by default."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(o.b)("p",null,"You can have multiple items in the defaults list, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n - db: mysql\n - db/mysql/engine: innodb\n")),Object(o.b)("p",null,"The defaults are ordered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins. "),Object(o.b)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),Object(o.b)("h4",{id:"overriding-a-config-group-default"},"Overriding a config group default"),Object(o.b)("p",null,"You can still load PostgreSQL, and override individual values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(o.b)("p",null,"You can remove a default entry from the defaults list by prefixing it with ~:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py ~db\n{}\n")),Object(o.b)("h3",{id:"non-config-group-defaults"},"Non-config group defaults"),Object(o.b)("p",null,"Sometimes a config file does not belong in any config group.\nYou can still load it by default. Here is an example for ",Object(o.b)("inlineCode",{parentName:"p"},"some_file.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),Object(o.b)("p",null,"Config files that are not part of a config group will always be loaded. They cannot be overridden.",Object(o.b)("br",{parentName:"p"}),"\n","Prefer using a config group."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For more information about the Defaults List see ",Object(o.b)("a",{parentName:"p",href:"../../../advanced/defaults_list"},"Reference Manual/The Defaults List"),"."))))}f.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,b=f["".concat(i,".").concat(p)]||f[p]||d[p]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},270:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(11),i=n(269),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(271),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,b=e.href,g=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),D=p||b,N=Object(i.a)(D),A=null==D?void 0:D.replace("pathname://",""),_=void 0!==A?(n=A,h&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,x=Object(r.useRef)(!1),P=d?o.e:o.c,V=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&N&&window.docusaurus.prefetch(_),function(){V&&f&&f.disconnect()}}),[_,V,N]);var L=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,C=!_||!N||L;return _&&N&&!L&&!v&&w.collectLink(_),C?a.a.createElement("a",Object.assign({href:_},D&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(P,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(_),x.current=!0)},innerRef:function(e){var t,n;V&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(_)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:_||""},d&&{isActive:m,activeClassName:g}))}},271:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(10),a=n(269);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},272:function(e,t,n){try{e.exports=n(273)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),o=n(274);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getDocVersionSuggestions(n,a)}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,o,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(a=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),o=n.n(a),i=n(270),c=n(10),s=n(272);function u(e){return o.a.createElement(i.a,Object(r.a)({},e,{to:(t=e.to,a=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(u,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);