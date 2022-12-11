I=require(`fs`).readFileSync(process.argv[2],`utf8`)[P=`split`]`

`.map(w=>([_,a,b,c,d,e]=w[P]`
`,{i:a[S=`slice`](18)[P]`,`,o:'+'+b[S](18),d:+c[S](20),[!0]:+d[S](29),[!1]:+e[S](29),c:0}))
F=(a,d=1,r=1e4)=>{for(g=I.reduce((z,x)=>x.d*z,1);r--;)a.map(m=>m.i=m.i.map(old=>(++m.c,t=~~(eval(m.o)/d)%g,a[m[!(t%m.d)]].i.push(t)))&&[]);return a.map(x=>x.c).sort((a,b)=>b-a)}
[w,x]=F(structuredClone(I),3,20);[y,z]=F(I)
console.log(w*x,y*z)