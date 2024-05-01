"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{98379:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(85893),a=i(11151);const s={sidebar_position:1},r="System Overview",o={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-phillygpt/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Ali Shahid",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-phillygpt/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-phillygpt/docs/requirements/system-block-diagram"}},l={},d=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}];function c(e){const t={h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,n.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,n.jsx)(t.p,{children:"PhillyGPT is a web application that provides data from SQL databases to users in an easy to read format without having to write a single line of code. This application will provide easy access to information that may otherwise only be accessible with technological expertise. Our hosted databases contain information about public safety, food availability, education, and health."}),"\n",(0,n.jsx)(t.p,{children:"A user types a question into an input box and submits their question. OpenAI\u2019s GPT 3.5 large language model (LLM) translates the question into a valid SQL query based on the databases we have cloned from the OpenDataPhilly program. Then the query is executed in our databases. After being processed, the answer to the user\u2019s question is displayed in an easy to read format. The data may be displayed as a formatted table, a few sentences, or alongside a map."}),"\n",(0,n.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,n.jsx)(t.p,{children:"This project will have a web-based application architecture with respective frontend and a backend. The frontend will be developed with the React framework utilizing Javascript and Typescript where necessary to create a responsive interface. The backend will be implemented with Flask and written in Python."}),"\n",(0,n.jsx)(t.p,{children:"Both the frontend and the backend will be hosted on an AWS Elastic Compute Cloud (EC2) instance running Linux. Alongside the EC2 instance, there will be a MySQL server running through AWS' Relational Database Service (RDS)."}),"\n",(0,n.jsx)(t.p,{children:"Users will visit the website and enter a question into the search bar. Once they press enter the query is sent to the Flask backend where it will be properly processed. Then the request will be sent to OpenAI using its API for the  GPT 3.5 large language model, and a SQL statement will be generated. This will be returned as a JSON response and checked by the backend to ensure it is a valid SQL query for the respective database."}),"\n",(0,n.jsx)(t.p,{children:"If the query is not valid, then the user will be asked to enter a new question. On the other hand if the query is valid, then the query is executed on the MySQL server. Then the query results are sent to the frontend where they are tabularized or formatted and properly displayed."}),"\n",(0,n.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(t.p,{children:"There is a project called San Francisco GPT. They also have another project called Census GPT. Both of these projects utilize the respective datasets for their specific domains. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project is abandoned. The only inputs that are functioning is a limited number of pre-recorded responses."}),"\n",(0,n.jsx)(t.p,{children:"Aside from this, there are no similar projects for other cities around the world. Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. PhillyGPT will not be a fork of the project. PhillyGPT will be simpler user interface with easy to read data formatting for users."}),"\n",(0,n.jsx)(t.p,{children:"OpenDataPhilly is a phenomenal resource that has an abundance of data pertaining to the City of Philadelphia. All of this data could be useful to the city's residents, but the information is stored in large CSV and JSON files. This is not very accessible. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming."}),"\n",(0,n.jsx)(t.p,{children:"With PhillyGPT, the user can query various databases with ease, and with fewer steps. Allowing them to find answers to their questions without having to page through thousands of entities in hundreds of databases."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(67294);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);