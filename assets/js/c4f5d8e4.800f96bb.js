"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{79337:(e,t,s)=>{s.d(t,{Z:()=>n});s(67294);var i=s(85893);function n(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return(0,i.jsxs)("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{},children:[e.children,e.src?(0,i.jsx)("img",{src:e.src,alt:e.alt}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"},children:e.caption}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{},children:e.subcaption})]})}},74342:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(67294);var i=s(90512),n=s(33692),a=s(52263),r=s(37293),l=s(85893),h=s(11151);function c(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,h.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{align:"center",children:[(0,l.jsx)(t.h1,{id:"phillygpt",children:"PhillyGPT"}),(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues",children:(0,l.jsx)(t.img,{src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})}),"\n",(0,l.jsx)(t.a,{href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml",children:(0,l.jsx)(t.img,{src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})}),"\n",(0,l.jsx)(t.a,{href:"https://applebaumian.github.io/tu-cis-4398-docs-template/",children:(0,l.jsx)(t.img,{src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})})]})]}),"\n",(0,l.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(t.p,{children:"Section 02, Natural Language Processing, Databases, SQL, Node.js, Web Application, Python, Javascript, React, Philadelphia Public Data, OpenAI, SQL Query Generation"}),"\n",(0,l.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,l.jsx)(t.p,{children:"PhillyGPT is a web application that provides data from SQL databases to users in an easy to read format without having to write a single line of code. This application will provide easy access to information that may otherwise only be accessible with technological expertise. Our hosted databases contain information about public safety, food availability, education, and health.\nA user types a question into an input box and submits their question. OpenAI\u2019s GPT 3.5 large language model (LLM) translates the question into a valid SQL query based on the databases we have cloned from the OpenDataPhilly program. Then the query is executed in our databases. After being processed, the answer to the user\u2019s question is displayed in an easy to read format. The data may be displayed as a formatted table, a few sentences, or alongside a map."}),"\n",(0,l.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,l.jsx)(t.p,{children:"This project will have a web-based application architecture with respective frontend and a backend. The frontend will be developed with the React framework utilizing Javascript and Typescript where necessary to create a responsive interface. The backend will be implemented with Flask and written in Python."}),"\n",(0,l.jsx)(t.p,{children:"Both the frontend and the backend will be hosted on an AWS Elastic Compute Cloud (EC2) instance running Linux. Alongside the EC2 instance, there will be a MySQL server running through AWS' Relational Database Service (RDS)."}),"\n",(0,l.jsx)(t.p,{children:"Users will visit the website and enter a question into the search bar. Once they press enter the query is sent to the Flask backend where it will be properly processed. Then the request will be sent to OpenAI using its API for the  GPT 3.5 large language model, and a SQL statement will be generated. This will be returned as a JSON response and checked by the backend to ensure it is a valid SQL query for the respective database."}),"\n",(0,l.jsx)(t.p,{children:"If the query is not valid, then the user will be asked to enter a new question. On the other hand if the query is valid, then the query is executed on the MySQL server. Then the query results are sent to the frontend where they are tabularized or formatted and properly displayed."}),"\n",(0,l.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,l.jsx)(t.p,{children:"There is a project called San Francisco GPT. They also have another project called Census GPT. Both of these projects utilize the respective datasets for their specific domains. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project is abandoned. The only inputs that are functioning is a limited number of pre-recorded responses."}),"\n",(0,l.jsx)(t.p,{children:"Aside from this, there are no similar projects for other cities around the world. Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. PhillyGPT will not be a fork of the project. PhillyGPT will be simpler user interface with easy to read data formatting for users."}),"\n",(0,l.jsx)(t.p,{children:"OpenDataPhilly is a phenomenal resource that has an abundance of data pertaining to the City of Philadelphia. All of this data could be useful to the city's residents, but the information is stored in large CSV and JSON files. This is not very accessible. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming."}),"\n",(0,l.jsx)(t.p,{children:"With PhillyGPT, the user can query various databases with ease, and with fewer steps. Allowing them to find answers to their questions without having to page through thousands of entities in hundreds of databases."}),"\n",(0,l.jsx)(t.h2,{id:"required-resources",children:"Required Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Linux"}),"\n",(0,l.jsx)(t.li,{children:"Python"}),"\n",(0,l.jsx)(t.li,{children:"Flask"}),"\n",(0,l.jsx)(t.li,{children:"AWS EC2"}),"\n",(0,l.jsx)(t.li,{children:"AWS RDS"}),"\n",(0,l.jsx)(t.li,{children:"MySQL"}),"\n",(0,l.jsx)(t.li,{children:"OpenAI GPT-3.5 API"}),"\n",(0,l.jsx)(t.li,{children:"CSS Tailwind"}),"\n",(0,l.jsx)(t.li,{children:"React"}),"\n",(0,l.jsx)(t.li,{children:"Javascript"}),"\n",(0,l.jsx)(t.li,{children:"Typescript"}),"\n",(0,l.jsx)(t.li,{children:"Google Maps API"}),"\n",(0,l.jsx)(t.li,{children:"Node.js"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"collaborators",children:"Collaborators"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/andrewto30",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/28883218?v=4",width:"100;",alt:"andrewto30"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Andrew To"})})]})}),(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/princegeutler",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/46353482?v=4",width:"100;",alt:"princegeutler"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Prince Geutler"})})]})}),(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/alishahidd",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/76089708?v=4",width:"100;",alt:"alishahidd"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Ali Shahid"})})]})}),(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/zyij99",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/91389500?v=4",width:"100;",alt:"zyij99"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Brandon Zheng"})})]})}),(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/tul58767",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/111989897?v=4",width:"100;",alt:"tul58767"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Quynh Cao"})})]})}),(0,l.jsx)("td",{align:"center",children:(0,l.jsxs)("a",{href:"https://github.com/AidanScharnikow",children:[(0,l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/111991905?v=4",width:"100;",alt:"AidanScharnikow"}),(0,l.jsx)("br",{}),(0,l.jsx)("sub",{children:(0,l.jsx)("b",{children:"Aidan Scharnikow"})})]})})]})})]})}function o(e={}){const{wrapper:t}={...(0,h.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}function d(){return(0,l.jsx)("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"},children:(0,l.jsx)(o,{})})}const u={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var A=s(66706);function b(){const{siteConfig:e}=(0,a.Z)();return(0,l.jsx)("header",{className:(0,i.Z)("hero hero--primary",u.heroBanner),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:"hero__title",children:e.title}),(0,l.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,l.jsx)("div",{className:u.buttons,children:(0,l.jsx)(n.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro",children:"Docusaurus Tutorial - 5min \u23f1\ufe0f"})})]})})}function p(){const{siteConfig:e}=(0,a.Z)();return(0,l.jsxs)(r.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,l.jsx)(b,{}),(0,l.jsx)("main",{children:(0,l.jsx)(A.Z,{children:(0,l.jsx)(d,{})})})]})}},66706:(e,t,s)=>{s.d(t,{Z:()=>a});s(67294);var i=s(69483),n=s(85893);function a(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{...e})})}},56922:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(67294),n=s(79337),a=s(49676);const r={React:i,...i,Figure:n.Z,dinosaur:a.Z}},49676:(e,t,s)=>{s.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);