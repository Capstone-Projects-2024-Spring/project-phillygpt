"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{98379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),a=r(3905);const i={sidebar_position:1},s="System Overview",o={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-phillygpt/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Brandon Zheng",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-phillygpt/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-phillygpt/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}];function d(e){const t={h1:"h1",h2:"h2",p:"p",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,n.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,n.jsx)(t.p,{children:"This project aims to create a web application where users can input questions about Philadelphia and with OpenAI's API\u2019s, translate the question into an SQL query. These queries will retrieve data from a number of distinct databases available through OpenDataPhilly, each accessible via Carto's SQL API. Databases include and are not limited to information on public safety, education, and real estate. The question to the user\u2019s answer will then be displayed in an easy to read format, whether a simple sentence or table with a detailed map. The application's core functionality includes an interface for question input, a backend for query generation, execution, and displaying database responses for the user to understand. By integrating NLP with database management, this project seeks to provide data-driven answers to a wide array of queries about the city, ranging from demographic statistics to public service information"}),"\n",(0,n.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,n.jsx)(t.p,{children:"This project will have a web-based application architecture with respective frontend and a serverless backend. The frontend will be developed with Python Flask to create a responsive interface. On the serverless backend (AWS Lambda) we will need to use Python to connect to one of OpenAI\u2019s API\u2019s to generate SQL queries based on user prompts. We can use an AWS EC2 instance to host the frontend. The serverless backend will construct an HTTP request with the SQL query and send it to Carto\u2019s SQL API. Carto's will then retrieve the requested information from the database that contains the requested information and return it in JSON format. The EC2 instance will then use the data to display the results in the front-end. Error handling will also need to be considered for any queries that do not produce valid results."}),"\n",(0,n.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(t.p,{children:"There is a project called San Francisco GPT. They also have another demo called Census GPT. Both of these projects utilize the respective datasets for their specific domains. Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. Philly GPT will not be a fork of the project, but will be simpler and light weight. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project may be abandoned. They only output pre-recorded responses.\nOpenDataPhilly is also a phenomenal resource that has very insightful metrics across many categories. Although the information is stored in large CSV and JSON files. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming. With PhillyGPT the user can query the various databases with ease. Allowing them to find answers to their questions without having to page through hundreds of entities in a database."})]})}function u(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);