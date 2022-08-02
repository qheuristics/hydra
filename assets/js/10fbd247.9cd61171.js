"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9670],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return f},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,p=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(p,c(c({ref:t},l),{},{components:n})):r.createElement(p,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return l}});var r=n(87462),a=n(67294),i=n(39960),o=n(52263),c=n(80907);function s(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(t=e.to,s=(0,c.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},56052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(93899),c=["components"],s={id:"static_schema",title:"Static schema with many configs"},l=void 0,u={unversionedId:"tutorials/structured_config/static_schema",id:"version-1.0/tutorials/structured_config/static_schema",title:"Static schema with many configs",description:"We have seen that if the name of the config file matches the name of a configs stored in the ConfigStore it will be used to validate the config file automatically.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/6_static_schema_many_configs.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/static_schema",permalink:"/docs/1.0/tutorials/structured_config/static_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/6_static_schema_many_configs.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1659458642,formattedLastUpdatedAt:"8/2/2022",sidebarPosition:6,frontMatter:{id:"static_schema",title:"Static schema with many configs"},sidebar:"version-1.0/docs",previous:{title:"Structured config schema",permalink:"/docs/1.0/tutorials/structured_config/schema"},next:{title:"Dynamic schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/dynamic_schema"}},m=[],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{to:"examples/tutorials/structured_configs/6_static_schema_many_configs",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"We have seen that if the name of the config file matches the name of a configs stored in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ConfigStore")," it will be used to validate the config file automatically.\nThis is useful if there is a one-to-one mapping between the Structured Configs and the YAML files.\nSuch convenient mapping does not exist when we have many config files and just one schema."),(0,i.mdx)("p",null,"If the config has a static structure, You can define it using Structured Configs.\nAny config merged into this config structure will be validated against the schema you define."),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", \n            config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n\n\n\n'))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 prod.yaml\n    \u251c\u2500\u2500 qa.yaml\n    \u2514\u2500\u2500 staging.yaml\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: staging\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/staging.yaml"',title:'"db/staging.yaml"'},"# @package _group_\ndriver: mysql\nhost: mysql001.staging\nuser: root\npassword: root\n")))),(0,i.mdx)("p",null,"In the above example, the 3 yaml files has the structure compatible with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Config")," dataclass.\nYou can have as many such configs as you want."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py db=prod\ndb:\n  driver: mysql\n  host: mysql001.prod\n  user: root\n  password: '1234'\n")))}d.isMDXComponent=!0}}]);