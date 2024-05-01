"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5066],{77579:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=s(85893),i=s(11151);const r={sidebar_position:1},o="Backend API Useage",c={id:"api-specification/API Class Documentation",title:"Backend API Useage",description:"Here are the API's we created and implemented for use in our backend.",source:"@site/docs/api-specification/API Class Documentation.md",sourceDirName:"api-specification",slug:"/api-specification/API Class Documentation",permalink:"/project-phillygpt/docs/api-specification/API Class Documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/api-specification/API Class Documentation.md",tags:[],version:"current",lastUpdatedBy:"AidanScharnikow",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-phillygpt/docs/category/api-specification"},next:{title:"Frontend API Usage",permalink:"/project-phillygpt/docs/api-specification/Front End API"}},a={},p=[{value:"<code>ProcessInput</code>",id:"processinput",level:3},{value:"<code>ProcessInputMap</code>",id:"processinputmap",level:3},{value:"<code>Reprompt</code>",id:"reprompt",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"backend-api-useage",children:"Backend API Useage"}),"\n",(0,t.jsx)(n.p,{children:"Here are the API's we created and implemented for use in our backend."}),"\n",(0,t.jsx)(n.h3,{id:"processinput",children:(0,t.jsx)(n.code,{children:"ProcessInput"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operations"}),": ",(0,t.jsx)(n.code,{children:"post()"}),", ",(0,t.jsx)(n.code,{children:"openai_request(user_input)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": This class is responsible for handling user inputs and generating SQL queries via OpenAI based on user prompts, and determining the appropriate database tables for queries."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"processinputmap",children:(0,t.jsx)(n.code,{children:"ProcessInputMap"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operations"}),": ",(0,t.jsx)(n.code,{children:"post()"}),", ",(0,t.jsx)(n.code,{children:"openai_request(user_input, marker_text)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Similar to ",(0,t.jsx)(n.code,{children:"ProcessInput"}),", this class handles POST requests and uses OpenAI to generate SQL queries but focuses on map-related inputs and interactions."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"reprompt",children:(0,t.jsx)(n.code,{children:"Reprompt"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operations"}),": ",(0,t.jsx)(n.code,{children:"post()"}),", ",(0,t.jsx)(n.code,{children:"generate_reprompt_suggestions(user_input, table_name)"}),", ",(0,t.jsx)(n.code,{children:"openai_reprompt_req(suggestion)"}),", ",(0,t.jsx)(n.code,{children:"refine_prompts(prompts)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Handles re-prompting logic when initial user inputs do not clearly correspond to database schema, using OpenAI to refine prompts and suggestions for better user interaction."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);