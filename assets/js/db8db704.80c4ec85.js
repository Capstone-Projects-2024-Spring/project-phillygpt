"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{99662:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(85893),r=n(11151);const i={sidebar_position:2,description:"What should be in this section."},l=void 0,a={id:"api-specification/design-api-intro",title:"design-api-intro",description:"What should be in this section.",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-phillygpt/docs/api-specification/design-api-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"Ali Shahid",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"What should be in this section."},sidebar:"docsSidebar",previous:{title:"Frontend API Usage",permalink:"/project-phillygpt/docs/api-specification/Front End API"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-phillygpt/docs/api-specification/openapi-spec"}},o={},c=[{value:"!!Probably going to delete this page as it does not relate to our final project!!",id:"probably-going-to-delete-this-page-as-it-does-not-relate-to-our-final-project",level:2},{value:"API Spec for Creating SQL Queries from User Prompts",id:"api-spec-for-creating-sql-queries-from-user-prompts",level:2},{value:"Classes/Exceptions",id:"classesexceptions",level:3},{value:"Functions",id:"functions",level:3},{value:"<code>make_default_message(schemas_str: str) -&gt; List[Dict[str, str]]</code>",id:"make_default_messageschemas_str-str---listdictstr-str",level:4},{value:"<code>make_msg_with_schema(natural_language_query: str) -&gt; str</code>",id:"make_msg_with_schemanatural_language_query-str---str",level:4},{value:"<code>is_read_only_query(sql_query: str) -&gt; bool</code>",id:"is_read_only_querysql_query-str---bool",level:4},{value:"<code>execute_sql(sql_query: str) -&gt; Dict</code>",id:"execute_sqlsql_query-str---dict",level:4},{value:"<code>text_to_sql_with_retry(natural_language_query: str, table_names: List[str], k: int = 2) -&gt; Tuple[Dict, str]</code>",id:"text_to_sql_with_retrynatural_language_query-str-table_names-liststr-k-int--2---tupledict-str",level:4}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"probably-going-to-delete-this-page-as-it-does-not-relate-to-our-final-project",children:"!!Probably going to delete this page as it does not relate to our final project!!"}),"\n",(0,t.jsx)(s.h1,{id:"design-document---part-ii-api",children:"Design Document - Part II API"}),"\n",(0,t.jsx)(s.h2,{id:"api-spec-for-creating-sql-queries-from-user-prompts",children:"API Spec for Creating SQL Queries from User Prompts"}),"\n",(0,t.jsx)(s.p,{children:"This document outlines the API specifications for how PhillyGPT interacts with ChatGPT for query generation and returning the JSON/Dictionary data from our databases. This solution is Carto agnostic."}),"\n",(0,t.jsx)(s.h3,{id:"classesexceptions",children:"Classes/Exceptions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"NotReadOnlyException:"})," Exception raised when a non-read-only SQL query is attempted."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(s.h4,{id:"make_default_messageschemas_str-str---listdictstr-str",children:(0,t.jsx)(s.code,{children:"make_default_message(schemas_str: str) -> List[Dict[str, str]]"})}),"\n",(0,t.jsx)(s.p,{children:"This function constructs an enriched prompt for the LLM by:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Providing context about available tables and their schemas (schemas_str)."}),"\n",(0,t.jsx)(s.li,{children:"Offering guidance on formulating syntactically correct SQL queries."}),"\n",(0,t.jsx)(s.li,{children:"Setting expectations about the response format and limitations."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"schemas_str"}),": A string containing the schemas of the available tables."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The enriched prompt."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"make_msg_with_schemanatural_language_query-str---str",children:(0,t.jsx)(s.code,{children:"make_msg_with_schema(natural_language_query: str) -> str"})}),"\n",(0,t.jsx)(s.p,{children:"This function returns a message prompting the LLM to rephrase the user's query in a more analytical way."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"natural_language_query"}),": The user's natural language query."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A string containing an improved prompt."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"is_read_only_querysql_query-str---bool",children:(0,t.jsx)(s.code,{children:"is_read_only_query(sql_query: str) -> bool"})}),"\n",(0,t.jsx)(s.p,{children:"This function checks if the provided SQL query is a read-only query."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sql_query"}),": The SQL query to be checked."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"True if the query is read-only, False otherwise."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"execute_sqlsql_query-str---dict",children:(0,t.jsx)(s.code,{children:"execute_sql(sql_query: str) -> Dict"})}),"\n",(0,t.jsx)(s.p,{children:"This function executes the provided SQL query and returns the results in a dictionary/JSON format."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sql_query"}),": The SQL query to be executed."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A dictionary containing the following keys:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"column_names"}),": A list of column names in the result."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"results"}),": A list of rows, where each row is a dictionary mapping column names to their corresponding values."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Raises:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"NotReadOnlyException"}),": If the query is not read-only."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"text_to_sql_with_retrynatural_language_query-str-table_names-liststr-k-int--2---tupledict-str",children:(0,t.jsx)(s.code,{children:"text_to_sql_with_retry(natural_language_query: str, table_names: List[str], k: int = 2) -> Tuple[Dict, str]"})}),"\n",(0,t.jsx)(s.p,{children:"This function attempts to generate a valid SQL query for the given natural language query, using an LLM (in our case GPT) and retrying up to k times if necessary."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"natural_language_query"}),": The user's natural language query."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"table_names"}),": A list of table names relevant to the query."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"k"})," (optional): The number of retries (defaults to 2)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A tuple containing:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A dictionary representing the SQL query results (same format as ",(0,t.jsx)(s.code,{children:"execute_sql"}),")."]}),"\n",(0,t.jsx)(s.li,{children:"The generated SQL query string. This can be used to create a new Carto Layer to allow us to display the map. However, this current solution does not make us tied to using Carto as Professor Applebaum requested."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Returns ",(0,t.jsx)(s.code,{children:"None, None"})," if the query could not be generated after k retries."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var t=n(67294);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);