"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4170],{38101:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=n(85893),r=n(11151);const t={sidebar_position:5},c="Backend Class Diagram",d={id:"system-architecture/backend-class-diagram",title:"Backend Class Diagram",description:"Backend Diagram",source:"@site/docs/system-architecture/backend-class-diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/backend-class-diagram",permalink:"/project-phillygpt/docs/system-architecture/backend-class-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/system-architecture/backend-class-diagram.md",tags:[],version:"current",lastUpdatedBy:"Ali Shahid",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Database Diagrams",permalink:"/project-phillygpt/docs/system-architecture/database-diagram"},next:{title:"Frontend Class Diagram",permalink:"/project-phillygpt/docs/system-architecture/frontend-class-diagram"}},a={},o=[{value:"Classes and Descriptions",id:"classes-and-descriptions",level:2},{value:"<code>FlaskApp</code>",id:"flaskapp",level:3},{value:"<code>DatabaseConnection</code>",id:"databaseconnection",level:3},{value:"<code>SQLQueryExecution</code>",id:"sqlqueryexecution",level:3},{value:"<code>ProcessInput</code>",id:"processinput",level:3},{value:"<code>ProcessInputMap</code>",id:"processinputmap",level:3},{value:"<code>Reprompt</code>",id:"reprompt",level:3},{value:"<code>Sandbox</code>",id:"sandbox",level:3},{value:"<code>ValidateSQLQuery</code>",id:"validatesqlquery",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"backend-class-diagram",children:"Backend Class Diagram"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://www.mermaidchart.com/raw/7eb95f12-1886-496e-9d4f-ffad9fbf2619?theme=light&version=v0.1&format=svg",alt:"Backend Diagram"})}),"\n",(0,i.jsx)(s.h2,{id:"classes-and-descriptions",children:"Classes and Descriptions"}),"\n",(0,i.jsx)(s.h3,{id:"flaskapp",children:(0,i.jsx)(s.code,{children:"FlaskApp"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),": ",(0,i.jsx)(s.code,{children:"tunnel"}),", ",(0,i.jsx)(s.code,{children:"connection"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"initialize_connection()"}),", ",(0,i.jsx)(s.code,{children:"close_connection(exception)"}),", ",(0,i.jsx)(s.code,{children:"get_example1()"}),", ",(0,i.jsx)(s.code,{children:"get_example2()"}),", ",(0,i.jsx)(s.code,{children:"get_example3()"}),", ",(0,i.jsx)(s.code,{children:"get_example4()"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": This class defines the main Flask application, handling initialization of SSH tunnel and database connections, closing connections, and managing API routes."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"databaseconnection",children:(0,i.jsx)(s.code,{children:"DatabaseConnection"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"execute_function_cursor(func, args, kwargs)"}),", ",(0,i.jsx)(s.code,{children:"get_database_uri()"}),", ",(0,i.jsx)(s.code,{children:"get_schema_representation(cursor)"}),", ",(0,i.jsx)(s.code,{children:"getField(fieldname, table_name)"}),", ",(0,i.jsx)(s.code,{children:"execute_get_field(cursor, fieldname, table_name)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Manages database connections and SSH tunnels, provides utility methods for executing database operations with cursor support, and handles schema and field data retrieval."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sqlqueryexecution",children:(0,i.jsx)(s.code,{children:"SQLQueryExecution"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"execute_sql_query(sql_query)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Encapsulates the functionality to execute SQL queries through an established SSH tunnel connection, ensuring secure database interactions."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"processinput",children:(0,i.jsx)(s.code,{children:"ProcessInput"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"post()"}),", ",(0,i.jsx)(s.code,{children:"openai_request(user_input)"}),", ",(0,i.jsx)(s.code,{children:"determine_proper_table(user_input)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": This class is responsible for handling user inputs, generating SQL queries via OpenAI based on user prompts, and determining the appropriate database tables for queries."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"processinputmap",children:(0,i.jsx)(s.code,{children:"ProcessInputMap"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"post()"}),", ",(0,i.jsx)(s.code,{children:"openai_request(user_input, marker_text)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Similar to ",(0,i.jsx)(s.code,{children:"ProcessInput"}),", this class handles POST requests and uses OpenAI to generate SQL queries but focuses on map-related inputs and interactions."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"reprompt",children:(0,i.jsx)(s.code,{children:"Reprompt"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"post()"}),", ",(0,i.jsx)(s.code,{children:"generate_reprompt_suggestions(user_input, table_name)"}),", ",(0,i.jsx)(s.code,{children:"openai_reprompt_req(suggestion)"}),", ",(0,i.jsx)(s.code,{children:"refine_prompts(prompts)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Handles re-prompting logic when initial user inputs do not clearly correspond to database schema, using OpenAI to refine prompts and suggestions for better user interaction."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sandbox",children:(0,i.jsx)(s.code,{children:"Sandbox"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"geocode_address(address)"}),", ",(0,i.jsx)(s.code,{children:"main()"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Provides utility functions like geocoding addresses and a main function for processing geocoding and database updates based on geocoded results."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"validatesqlquery",children:(0,i.jsx)(s.code,{children:"ValidateSQLQuery"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Operations"}),": ",(0,i.jsx)(s.code,{children:"validate_sql_query(sql_query)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Ensures that SQL queries generated by the system or received from user inputs are safe and free from SQL injection vulnerabilities through pattern matching and validation logic."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var i=n(67294);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);