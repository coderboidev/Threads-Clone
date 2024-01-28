import{r as t,_ as o,a as i,j as r,L as n,S as u}from"./index-ejOMQ5mP.js";import{u as c}from"./useMediaQuery-veD3v3SJ.js";import{T as d}from"./Typography-8tdXd-pp.js";import"./useEnhancedEffect-pF7N8rFg.js";const p=t.lazy(()=>o(()=>import("./Post-CN3aqfNf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),_=()=>{const{user:e}=i(s=>s.service),a=c("(min-width:700px)");return r.jsx(t.Suspense,{fallback:r.jsx(n,{}),children:e&&e.user?e.user.threads.length>0?r.jsx(u,{flexDirection:"column",gap:2,mb:10,width:a?"800px":"90%",mx:"auto",children:e.user.threads.map(s=>r.jsx(p,{e:s},s._id))}):r.jsx(d,{variant:"h6",textAlign:"center",children:"No Thread yet !"}):""})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Post-CN3aqfNf.js","assets/index-ejOMQ5mP.js","assets/index-AA6V2BOJ.css","assets/index.esm-kkkImSXi.js","assets/iconBase-4R61x3Rr.js","assets/useMediaQuery-veD3v3SJ.js","assets/useEnhancedEffect-pF7N8rFg.js","assets/Typography-8tdXd-pp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
