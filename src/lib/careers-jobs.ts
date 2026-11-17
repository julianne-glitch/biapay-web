export type CareerJob={id:string;title:string;department:string;location:string;type:string;summary:string;applyUrl:string|null;createdAt:string;status:"draft"|"published"};
const owner="julianne-glitch",repo="biapay-web",file="content/jobs.json";
export const githubFileUrl=`https://api.github.com/repos/${owner}/${repo}/contents/${file}`;
export async function getCareerJobs():Promise<CareerJob[]>{try{const r=await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/${file}`,{cache:"no-store",signal:AbortSignal.timeout(5000)});if(!r.ok)return [];const v:unknown=await r.json();return Array.isArray(v)?v.filter((j):j is CareerJob=>Boolean(j&&typeof j==="object"&&typeof j.id==="string"&&typeof j.title==="string"&&typeof j.status==="string")):[]}catch{return []}}
