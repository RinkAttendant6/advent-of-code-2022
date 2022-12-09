I=require(`fs`).readFileSync(process.argv[2],`utf8`)
F=(t,w={L:[-1,0],R:[1,0],U:[0,1],D:[0,-1]},r=Array(1+t).fill([0,0]),v=new Set)=>(I.split`
`.map(u=>{for(i=u.slice(2);i--;v.add(r[t].join` `))for(r[0][0]+=w[u[0]][0],r[0][j=1]+=w[u[0]][1];j<r.length;){[a,b]=r[j-1];[c,d]=r[j];while((M=Math).abs(c-a)>1|M.abs(d-b)>1)c+=M.sign(a-c),d+=M.sign(b-d);r[j++]=[c,d]}}),v.size)
console.log(F(1),F(9))