"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[382],{21062:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(85893),t=i(11151);const r={title:"Frontend API Usage",sidebar_position:2},o="Frontend API Usage",a={id:"api-specification/Front End API",title:"Frontend API Usage",description:"This page provides detailed information on how APIs are integrated and utilized in the React frontend of the application, focusing on both external API services and internal context APIs.",source:"@site/docs/api-specification/Front End API.md",sourceDirName:"api-specification",slug:"/api-specification/Front End API",permalink:"/project-phillygpt/docs/api-specification/Front End API",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/edit/main/documentation/docs/api-specification/Front End API.md",tags:[],version:"current",lastUpdatedBy:"Ali Shahid",sidebarPosition:2,frontMatter:{title:"Frontend API Usage",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Backend API Useage",permalink:"/project-phillygpt/docs/api-specification/API Class Documentation"},next:{title:"design-api-intro",permalink:"/project-phillygpt/docs/api-specification/design-api-intro"}},d={},l=[{value:"External APIs",id:"external-apis",level:2},{value:"<code>useJsApiLoader</code>",id:"usejsapiloader",level:3},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Object config",id:"object-config",level:4},{value:"Returns",id:"returns",level:4},{value:"Object state",id:"object-state",level:4},{value:"<code>axios</code>",id:"axios",level:3},{value:"Description",id:"description-1",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Context API",id:"context-api",level:2},{value:"<code>responseCtx</code> and <code>LoadingContext</code>",id:"responsectx-and-loadingcontext",level:3},{value:"Description",id:"description-2",level:4},{value:"Provided Values",id:"provided-values",level:4}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"frontend-api-usage",children:"Frontend API Usage"}),"\n",(0,s.jsx)(n.p,{children:"This page provides detailed information on how APIs are integrated and utilized in the React frontend of the application, focusing on both external API services and internal context APIs."}),"\n",(0,s.jsx)(n.h2,{id:"external-apis",children:"External APIs"}),"\n",(0,s.jsx)(n.h3,{id:"usejsapiloader",children:(0,s.jsx)(n.code,{children:"useJsApiLoader"})}),"\n",(0,s.jsxs)(i,{open:"True",children:[(0,s.jsx)("summary",{children:"Responsible for loading the Google Maps JavaScript API dynamically. It ensures that the Google Maps services are properly loaded before attempting to render maps on the frontend."}),(0,s.jsx)(n.h4,{id:"description",children:"Description"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This hook is part of the ",(0,s.jsx)(n.code,{children:"@react-google-maps/api"})," library and is crucial for initializing Google Maps in React applications. It manages the script loading and provides a flag to indicate when the API is ready for use."]}),"\n"]}),(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"object-config",children:"Object config"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"id"}),": Identifier for the script tag."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"googleMapsApiKey"}),": The API key for accessing Google Maps services."]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"object-state",children:"Object state"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"isLoaded"}),": Boolean indicating whether the Google Maps API has finished loading."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"loadError"}),": Contains error information if the API fails to load."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"axios",children:(0,s.jsx)(n.code,{children:"axios"})}),"\n",(0,s.jsxs)(i,{open:"True",children:[(0,s.jsx)("summary",{children:"Utilized for making HTTP requests to various backend services. This library facilitates communication between the frontend and the backend by handling network requests."}),(0,s.jsx)(n.h4,{id:"description-1",children:"Description"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Axios is a HTTP client for the browser and Node.js. In the context of this application, it is used to send user queries and receive responses from our backend."}),"\n"]}),(0,s.jsx)(n.h4,{id:"example-usage",children:"Example Usage"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST request"}),": Used to submit user input and receive a corresponding response from the backend."]}),"\n"]}),(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"url"}),": Endpoint to which the request is sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"data"}),": Payload of the request, typically containing user input or parameters."]}),"\n"]}),(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Promise"}),": Represents the eventual completion or failure of the HTTP request, containing the response or error data."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"context-api",children:"Context API"}),"\n",(0,s.jsxs)(n.h3,{id:"responsectx-and-loadingcontext",children:[(0,s.jsx)(n.code,{children:"responseCtx"})," and ",(0,s.jsx)(n.code,{children:"LoadingContext"})]}),"\n",(0,s.jsxs)(i,{open:"True",children:[(0,s.jsx)("summary",{children:"Custom React contexts defined in the application to manage and distribute SQL response data and loading states across components."}),(0,s.jsx)(n.h4,{id:"description-2",children:"Description"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["These contexts are used to provide and manage data related to SQL queries and API responses, as well as UI loading states across different components. They are accessed using the ",(0,s.jsx)(n.code,{children:"useContext"})," hook."]}),"\n"]}),(0,s.jsx)(n.h4,{id:"provided-values",children:"Provided Values"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"responseCtx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"responseDataSQL"}),": The raw SQL response data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resultDataSQL"}),": Processed SQL data ready for display."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LoadingContext"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"isLoading"}),": Boolean flag indicating whether an API call is in progress."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"setLoading"}),": Function to update the loading state."]}),"\n"]}),"\n"]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(67294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);