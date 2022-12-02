"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2630],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return p},MDXProvider:function(){return l},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),d=function(e){return function(n){var r=u(n.components);return t.createElement(e,a({},n,{components:r}))}},u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),l=o,f=d["".concat(i,".").concat(l)]||d[l]||m[l]||a;return r?t.createElement(f,c(c({ref:n},p),{},{components:r})):t.createElement(f,c({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10602:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"changes_to_sweeper_config",title:"Changes to configuring sweeper's search space",hide_title:!0},s=void 0,p={unversionedId:"upgrades/1.1_to_1.2/changes_to_sweeper_config",id:"version-1.2/upgrades/1.1_to_1.2/changes_to_sweeper_config",title:"Changes to configuring sweeper's search space",description:"Hydra 1.2 introduces hydra.sweeper.params. All Hydra Sweepers (BasicSweeper and HPOs) search",source:"@site/versioned_docs/version-1.2/upgrades/1.1_to_1.2/changes_to_sweeper_config.md",sourceDirName:"upgrades/1.1_to_1.2",slug:"/upgrades/1.1_to_1.2/changes_to_sweeper_config",permalink:"/docs/1.2/upgrades/1.1_to_1.2/changes_to_sweeper_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/upgrades/1.1_to_1.2/changes_to_sweeper_config.md",tags:[],version:"1.2",lastUpdatedBy:"lgtm-com[bot]",lastUpdatedAt:1670020300,formattedLastUpdatedAt:"12/2/2022",frontMatter:{id:"changes_to_sweeper_config",title:"Changes to configuring sweeper's search space",hide_title:!0},sidebar:"docs",previous:{title:"Changes to job's runtime working directory",permalink:"/docs/1.2/upgrades/1.1_to_1.2/changes_to_job_working_dir"},next:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/1.2/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"}},d=[{value:"Optuna",id:"optuna",children:[],level:3}],u={toc:d};function l(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Hydra 1.2 introduces ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.params"),". All Hydra Sweepers (BasicSweeper and HPOs) search\nspace will be defined under this config node."),(0,a.mdx)("h3",{id:"optuna"},"Optuna"),(0,a.mdx)("p",null,"For migration, move search space definition from ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.search_space")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.params"),". Change the search space\ndefinition to be consistent with how you'd override a value from commandline. For example:"),(0,a.mdx)("div",{className:"row"},(0,a.mdx)("div",{className:"col col--6"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Hydra 1.1"',title:'"Hydra','1.1"':!0},"hydra:\n  sweeper:\n    search_space:\n      search_space:\n        x:\n          type: float\n          low: -5.5\n          high: 5.5\n          step: 0.5\n        'y':\n          type: categorical\n          choices:\n          - -5\n          - 0\n          - 5\n"))),(0,a.mdx)("div",{className:"col  col--6"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="Hydra 1.2"',title:'"Hydra','1.2"':!0},"hydra:\n  sweeper:\n    params:\n      x: range(-5.5, 5.5, step=0.5)\n      y: choice(-5, 0, 5)\n\n\n\n\n\n\n\n\n\n\n")))),(0,a.mdx)("p",null,"Check out ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.2/plugins/optuna_sweeper"},"Optuna Sweeper")," for more info."))}l.isMDXComponent=!0}}]);