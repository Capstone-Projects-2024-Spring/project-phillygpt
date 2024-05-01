"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{80134:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(85893),r=s(11151);const t={sidebar_position:4},l="Features and Requirements",a={id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-phillygpt/docs/requirements/features-and-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"AidanScharnikow",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-phillygpt/docs/requirements/general-requirements"},next:{title:"Use Cases",permalink:"/project-phillygpt/docs/requirements/use-case-descriptions"}},o={},c=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Nonfunctional Requirements",id:"nonfunctional-requirements",level:2}];function u(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"features-and-requirements",children:"Features and Requirements"}),"\n",(0,i.jsx)(n.h2,{id:"functional-requirements",children:"Functional Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"User Input"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users have the ability to input questions related to the city of Philadelphia and receive an accurate response."}),"\n",(0,i.jsx)(n.li,{children:"Must utilize NLP via OpenAI GPT-3.5 API."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SQL Query Generation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create database schemas."}),"\n",(0,i.jsx)(n.li,{children:"SQL queries generated based on user input."}),"\n",(0,i.jsx)(n.li,{children:"The generated SQL query must be valid and relavant to the user's question."}),"\n",(0,i.jsx)(n.li,{children:"Suggest user queries on the home page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Error Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When the user response is not clear, give a retry prompt to get the correct database query."}),"\n",(0,i.jsx)(n.li,{children:"When there are no results for the user's question, they may be asked to reprompt."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"User Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Develop a user-friendly interface utilizing React."}),"\n",(0,i.jsx)(n.li,{children:"Ensure that user interface remains consistent regardless of desktop screen size."}),"\n",(0,i.jsx)(n.li,{children:"A user must be notified when the data is loading during fetching operations."}),"\n",(0,i.jsx)(n.li,{children:"The result area must display the answers to the user's question in an easy to read format."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mapping"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When a user asks a question, if the answer pertains, a map should appear and display the geographical data about their question."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Malicous SQL Queries"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Malicous SQL queries such as: "DELETE, DROP, TRUNCATE, UPDATE, INSERT, ALTER, CREATE" are not allowed.'}),"\n",(0,i.jsx)(n.li,{children:"These malicous SQL queries need to be detected before execution to ensure data integrity in our databases."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"API Rate Limits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Must implement an API rate limit to prevent API abuse."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"nonfunctional-requirements",children:"Nonfunctional Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ease of Navigation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The core functionality of the program must be easily accessible without extensive navigation."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Logging System","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Logging system helps to debug any issues encountered."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Hosting","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilize AWS EC2 instance for hosting the whole project."}),"\n",(0,i.jsx)(n.li,{children:"Establish seamless communication between the frontend and backend of the project."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["API Integration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure smooth integration between the OpenAI API the application."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Performance","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Quick response times are necessary for query generation and data retrieval."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dark Mode and Light Mode","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dark mode and light mode ensure the application is pleasant to view."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var i=s(67294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);