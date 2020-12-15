(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),i=(a(0),a(243)),l={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},c={unversionedId:"plugins/submitit_launcher",id:"plugins/submitit_launcher",isDocsHomePage:!1,title:"Submitit Launcher plugin",description:"PyPI",source:"@site/docs/plugins/submitit_launcher.md",slug:"/plugins/submitit_launcher",permalink:"/docs/next/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/submitit_launcher.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1608058447,sidebar_label:"Submitit Launcher plugin",sidebar:"docs",previous:{title:"RQ Launcher plugin",permalink:"/docs/next/plugins/rq_launcher"},next:{title:"Ax Sweeper plugin",permalink:"/docs/next/plugins/ax_sweeper"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:u};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-submitit-launcher/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-submitit-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-submitit-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-submitit-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-submitit-launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-submitit-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The Submitit Launcher plugin provides a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://slurm.schedmd.com/documentation.html"}),"SLURM ")," Launcher based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit"),"."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-submitit-launcher --upgrade\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_slurm")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: submitit_slurm\n")),Object(i.b)("p",null,"Note that this plugin expects a valid environment in the target host. usually this means a shared file system between\nthe launching host and the target host."),Object(i.b)("p",null,"Submitit actually implements 2 different launchers: ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_slurm")," to run on a SLURM cluster, and ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_local")," for basic local tests."),Object(i.b)("p",null,"You can discover the SLURM Launcher parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=submitit_slurm --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"submitit_slurm","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),"# @package hydra.launcher\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SlurmLauncher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: 1\ngpus_per_node: 0\ntasks_per_node: 1\nmem_gb: 4\nnodes: 1\nname: ${hydra.job.name}\npartition: null\ncomment: null\nconstraint: null\nexclude: null\nsignal_delay_s: 120\nmax_num_timeout: 0\nadditional_parameters: {}\narray_parallelism: 256\n\n")),Object(i.b)("p",null,"Similarly, you can discover the local launcher parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python example/my_app.py hydra/launcher=submitit_local --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"example/my_app.py":!0,"hydra/launcher":"submitit_local","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),"# @package hydra.launcher\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.LocalLauncher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: 1\ngpus_per_node: 0\ntasks_per_node: 1\nmem_gb: 4\nnodes: 1\nname: ${hydra.job.name}\n")),Object(i.b)("p",null,"You can set all these parameters in your configuration file and/or override them in the commandline: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"python foo.py --multirun hydra/launcher=submitit_slurm hydra.launcher.timeout_min=3\n")),Object(i.b)("p",null,"For more details, including descriptions for each parameter, check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_submitit_launcher/hydra_plugins/hydra_submitit_launcher/config.py"}),"config file"),". You can also check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit documentation"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Caution"),": use of ",Object(i.b)("inlineCode",{parentName:"p"},"--multirun")," is required for the launcher to be picked up."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 --multirun")," (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/running_your_app/multi-run"}),"Multi-run")," for details) will launch 3 executions (you can override the launcher to run locally for testing by adding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_local"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py task=1,2,3 --multirun\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),Object(i.b)("p",null,"You will be able to see the output of the app in the output dir:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}o.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=o(a),m=n,h=s["".concat(l,".").concat(m)]||s[m]||b[m]||i;return a?r.a.createElement(h,c(c({ref:t},p),{},{components:a})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);