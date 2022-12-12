G=new(require(`node-dijkstra`))
I=require(`fs`).readFileSync(process.argv[2],`utf8`).split`
`
W=I[0].length
I.map((r,i)=>[...r].map((c,j)=>c=='S'?(S=i*W+j,'a'):c=='E'?(E=i*W+j,'z'):c)).map((r,i,a)=>r.map((c,j)=>(e=new Map(),[[1,0],[0,1],[-1,0],[0,-1]].map(([v,h])=>a[i+v]?.[j+h]?.[C=`charCodeAt`]()<=c[C]()+1&&e.set((i+v)*W+j+h,1)),G.addNode(i*W+j,e))))
console.log(G.path(S,E).length-1,Math.min(...[...I.flat().join``].map((c,i)=>c<'b'?G.path(i,E)?.length??9e9:9e9))-1)