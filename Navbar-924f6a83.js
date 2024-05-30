import{r as n,j as e}from"./index-e6be4366.js";function c(){const a=localStorage.getItem("theme")==="dark",[t,l]=n.useState(a),d=()=>{const o=!t;l(o),localStorage.setItem("theme",o?"dark":"light"),o?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return n.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:d}),e.jsxs("span",{className:"slider round",children:[e.jsx("span",{className:"icon sun-icon",children:e.jsx("svg",{enableBackground:"new 0 0 512 512",height:"20",id:"Layer_1",version:"1.1",viewBox:"0 0 512 512",width:"20",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:e.jsx("g",{children:e.jsx("g",{children:e.jsx("path",{d:"M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z",fill:"#f8ce41"})})})})}),e.jsx("span",{className:"icon moon-icon",children:"🌙"})]})]})}function x(){const[r,a]=n.useState(!1),t=()=>{a(!r)},l=()=>{a(!1)};return e.jsx(e.Fragment,{children:e.jsxs("nav",{className:"nav flex bg-slate-100 shadow-lg dark:bg-slate-950 dark:dark-mode-shadow sticky top-0 mx-auto p-5 z-50",children:[e.jsxs("h3",{className:"w-2/6 text-sm md:text-xl font-bold text-black dark:text-slate-200 cursor-pointer relative pt-3 max-sm:hidden",children:["Miguel Brandão ",e.jsx("span",{className:"text-sm font-thin",children:"| Web Developer"})]}),e.jsxs("div",{className:"flex w-4/6 justify-end gap-5 pr-[1%] max-sm:hidden",children:[e.jsx("li",{className:"text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative",children:e.jsx("a",{href:"#about-me",onClick:s,children:"About Me"})}),e.jsx("li",{className:"text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative",children:e.jsx("a",{href:"#projects",onClick:s,children:"Projects"})}),e.jsx("li",{className:"text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative",children:e.jsx("a",{href:"#extra-works",onClick:s,children:"Extra Projects"})}),e.jsx("li",{className:"text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative mr-10",children:e.jsx("a",{href:"#socials",onClick:s,children:"Contacts"})}),e.jsx("li",{children:e.jsx(c,{})})]}),e.jsx("button",{onClick:t,className:"text-black hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-dark-text float-right sm:hidden",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),e.jsxs("h3",{className:"w-1/1 text-sm md:text-xl font-bold text-black dark:text-slate-200 cursor-pointer relative pt-1 mx-auto sm:hidden",children:["Miguel Brandão | ",e.jsx("span",{className:"tracking-tight text-sm font-thin",children:"Web Developer"})]}),e.jsxs("div",{className:`${r?"translate-x-0 ease-out":"-translate-x-full ease-in"} transform transition-transform duration-300 sm:hidden absolute top-0 left-0 w-screen h-screen bg-white dark:bg-slate-950 dark:dark-mode-shadow flex flex-col justify-center items-center`,children:[e.jsx("li",{children:e.jsx("button",{onClick:l,className:"text-black hover:text-gray-200 absolute top-4 right-4 focus:outline-none dark:text-dark-text",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})}),e.jsx("li",{className:"text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative",children:e.jsx("a",{href:"#about-me",onClick:s,children:"About Me"})}),e.jsx("li",{className:"text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative",children:e.jsx("a",{href:"#projects",onClick:s,children:"Projects"})}),e.jsx("li",{className:"text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative",children:e.jsx("a",{href:"#extra-works",onClick:s,children:"Extra Projects"})}),e.jsx("li",{className:"text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative",children:e.jsx("a",{href:"#contacts",onClick:s,children:"Contacts"})}),e.jsx("li",{className:"mt-24",children:e.jsx(c,{})})]})]})})}const s=r=>{r.preventDefault();const a=r.currentTarget.getAttribute("href").substring(1),t=document.getElementById(a);t&&t.scrollIntoView({behavior:"smooth"})};export{x as default};
