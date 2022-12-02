"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3525],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,h=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return m},T:function(){return d}});var a=t(87462),r=t(67294),i=t(39960),o=t(52263),l=t(80907);function m(e){return r.createElement(i.default,(0,a.Z)({},e,{to:(n=e.to,m=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==m?void 0:m.name)?t:"current"]+n),target:"_blank"}));var n,t,m}function d(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(m,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},34452:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],m={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},d=void 0,p={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"version-1.2/tutorials/basic/running_your_app/multi-run",title:"Multi-run",description:"Sometimes you want to run the same application with multiple different configurations.",source:"@site/versioned_docs/version-1.2/tutorials/basic/running_your_app/2_multirun.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/1.2/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/tutorials/basic/running_your_app/2_multirun.md",tags:[],version:"1.2",lastUpdatedBy:"lgtm-com[bot]",lastUpdatedAt:1670020300,formattedLastUpdatedAt:"12/2/2022",sidebarPosition:2,frontMatter:{id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},sidebar:"docs",previous:{title:"Putting it all together",permalink:"/docs/1.2/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/1.2/tutorials/basic/running_your_app/working_directory"}},s=[{value:"Configure <code>hydra.mode</code> (new in Hydra 1.2)",id:"configure-hydramode-new-in-hydra-12",children:[],level:3},{value:"<code>--multirun (-m)</code> from the command-line",id:"--multirun--m-from-the-command-line",children:[],level:3},{value:"Sweeping via <code>hydra.sweeper.params</code>",id:"sweeping-via-hydrasweeperparams",children:[],level:3},{value:"Additional sweep types",id:"additional-sweep-types",children:[],level:3},{value:"Sweeper",id:"sweeper",children:[],level:3},{value:"Launcher",id:"launcher",children:[],level:3}],u={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Sometimes you want to run the same application with multiple different configurations.",(0,i.mdx)("br",{parentName:"p"}),"\n","E.g. running a performance test on each of the databases with each of the schemas."),(0,i.mdx)("p",null,"You can multirun a Hydra application via either commandline or configuration:"),(0,i.mdx)("h3",{id:"configure-hydramode-new-in-hydra-12"},"Configure ",(0,i.mdx)("inlineCode",{parentName:"h3"},"hydra.mode")," (new in Hydra 1.2)"),(0,i.mdx)("p",null,"You can configure ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode")," in any supported way. The legal values are ",(0,i.mdx)("inlineCode",{parentName:"p"},"RUN")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"MULTIRUN"),".\nThe following shows how to override from the command-line and sweep over all combinations of the dbs and schemas.\nSetting ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode=MULTIRUN")," in your input config would make your application multi-run by default."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py hydra.mode=MULTIRUN db=mysql,postgresql schema=warehouse,support,school"',title:'"$',python:!0,"my_app.py":!0,"hydra.mode":"MULTIRUN",db:"mysql,postgresql",schema:'warehouse,support,school"'},"[2021-01-20 17:25:03,317][HYDRA] Launching 6 jobs locally\n[2021-01-20 17:25:03,318][HYDRA]        #0 : db=mysql schema=warehouse\n[2021-01-20 17:25:03,458][HYDRA]        #1 : db=mysql schema=support\n[2021-01-20 17:25:03,602][HYDRA]        #2 : db=mysql schema=school\n[2021-01-20 17:25:03,755][HYDRA]        #3 : db=postgresql schema=warehouse\n[2021-01-20 17:25:03,895][HYDRA]        #4 : db=postgresql schema=support\n[2021-01-20 17:25:04,040][HYDRA]        #5 : db=postgresql schema=school\n")),(0,i.mdx)("p",null,"The printed configurations have been omitted for brevity."),(0,i.mdx)("h3",{id:"--multirun--m-from-the-command-line"},(0,i.mdx)("inlineCode",{parentName:"h3"},"--multirun (-m)")," from the command-line"),(0,i.mdx)("p",null,"You can achieve the above from command-line as well:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python my_app.py --multirun db=mysql,postgresql schema=warehouse,support,school\n")),(0,i.mdx)("p",null,"or "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python my_app.py -m db=mysql,postgresql schema=warehouse,support,school\n")),(0,i.mdx)("p",null,"You can access ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode")," at runtime to determine whether the application is in RUN or MULTIRUN mode. Check ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/configure_hydra/intro"},"here"),"\non how to access Hydra config at run time."),(0,i.mdx)("p",null,"If conflicts arise (e.g., ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode=RUN")," and the application was run with ",(0,i.mdx)("inlineCode",{parentName:"p"},"--multirun"),"), Hydra will determine the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode"),"\nat run time. The following table shows what runtime ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.mode")," value you'd get with different input configs and commandline combinations."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null}),(0,i.mdx)("th",{parentName:"tr",align:null},"No multirun commandline flag"),(0,i.mdx)("th",{parentName:"tr",align:null},"--multirun ( -m)"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"hydra.mode=RUN"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.RUN"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.MULTIRUN (with UserWarning)")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"hydra.mode=MULTIRUN"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.MULTIRUN"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.MULTIRUN")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"hydra.mode=None (default)"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.RUN"),(0,i.mdx)("td",{parentName:"tr",align:null},"RunMode.MULTIRUN")))),(0,i.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Hydra composes configs lazily at job launching time. If you change code or configs after launching a job/sweep, the final\ncomposed configs might be impacted."))),(0,i.mdx)("h3",{id:"sweeping-via-hydrasweeperparams"},"Sweeping via ",(0,i.mdx)("inlineCode",{parentName:"h3"},"hydra.sweeper.params")),(0,i.mdx)(o.T,{to:"examples/tutorials/basic/running_your_hydra_app/5_basic_sweep",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"You can also define sweeping in the input configs by overriding\n",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.params"),". Using the above example, the same multirun could be achieved via the following config."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  sweeper:\n    params:\n      db: mysql,postgresql\n      schema: warehouse,support,school\n")),(0,i.mdx)("p",null,"The syntax are consistent for both input configs and commandline overrides.\nIf a sweep is specified in both an input config and at the command line,\nthen the commandline sweep will take precedence over the sweep defined\nin the input config. If we run the same application with the above input config and a new commandline override:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py -m db=mysql"',title:'"$',python:!0,"my_app.py":!0,"-m":!0,db:'mysql"'},"[2021-01-20 17:25:03,317][HYDRA] Launching 3 jobs locally\n[2021-01-20 17:25:03,318][HYDRA]        #0 : db=mysql schema=warehouse\n[2021-01-20 17:25:03,458][HYDRA]        #1 : db=mysql schema=support\n[2021-01-20 17:25:03,602][HYDRA]        #2 : db=mysql schema=school\n")),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The above configuration methods only apply to Hydra's default ",(0,i.mdx)("inlineCode",{parentName:"p"},"BasicSweeper")," for now. For other sweepers, please check out the\ncorresponding documentations."))),(0,i.mdx)("h3",{id:"additional-sweep-types"},"Additional sweep types"),(0,i.mdx)("p",null,"Hydra supports other kinds of sweeps, e.g.:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"x=range(1,10)                  # 1-9\nschema=glob(*)                 # warehouse,support,school\nschema=glob(*,exclude=w*)      # support,school\n")),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/advanced/override_grammar/extended"},"Extended Override syntax")," for details."),(0,i.mdx)("h3",{id:"sweeper"},"Sweeper"),(0,i.mdx)("p",null,"The default sweeping logic is built into Hydra. Additional sweepers are available as plugins.\nFor example, the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),(0,i.mdx)("h3",{id:"launcher"},"Launcher"),(0,i.mdx)("p",null,"By default, Hydra runs your multi-run jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}c.isMDXComponent=!0}}]);