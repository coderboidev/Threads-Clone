import{r as o,_ as i,a as n,j as e,L as p,S as c}from"./index-ejOMQ5mP.js";import{u as l}from"./useMediaQuery-veD3v3SJ.js";import{T as r}from"./Typography-8tdXd-pp.js";import"./useEnhancedEffect-pF7N8rFg.js";const x=o.lazy(()=>i(()=>import("./Post-CN3aqfNf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),_=()=>{const{user:t}=n(s=>s.service);console.log(t);const a=l("(min-width:700px)");return e.jsx(o.Suspense,{fallback:e.jsx(p,{}),children:t?t.user?t.user.reposts.length>0?e.jsx(c,{flexDirection:"column",gap:2,mb:10,width:a?"800px":"90%",mx:"auto",children:t.user.reposts.map(s=>e.jsx(x,{e:s},s._id))}):e.jsx(r,{variant:"h6",textAlign:"center",children:"No Repost yet !"}):e.jsx(r,{variant:"h6",textAlign:"center",children:"No Repost yet !"}):e.jsx(r,{variant:"h6",textAlign:"center",children:"No Repost yet !"})})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Post-CN3aqfNf.js","assets/index-ejOMQ5mP.js","assets/index-AA6V2BOJ.css","assets/index.esm-kkkImSXi.js","assets/iconBase-4R61x3Rr.js","assets/useMediaQuery-veD3v3SJ.js","assets/useEnhancedEffect-pF7N8rFg.js","assets/Typography-8tdXd-pp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
