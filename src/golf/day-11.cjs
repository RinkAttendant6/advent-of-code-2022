I=require(`fs`).readFileSync(process.argv[g=2],`utf8`).split`

`.map(s=>{({i,o,d,t,f}=s.match(/s: (?<i>.+)\n.+?= (?<o>.+)\n.+?(?<d>\d+)\n.+?(?<t>\d+)\n.+?(?<f>\d+)/).groups),g*=d
return{i:i.split`,`,o:'+'+o,d,t,f,c:0}})
B=c=>c[0]*c[1]
F=(I,d=1,r=1e4)=>{for(;r--;)I.map(m=>m.i.map(old=>(m.c++,t=~~(eval(m.o)/d)%g,I[m[t%m.d?'f':'t']].i.push(t),m.i=[])));return I.map(x=>x.c).sort((a,b)=>b-a)}
console.log(B(F(structuredClone(I),3,20)),B(F(I)))