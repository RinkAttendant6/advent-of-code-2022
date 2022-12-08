I=require('fs').readFileSync(process.argv[2],`utf8`).split`
`.map(x=>x.split``)
for($=_=i=0;i<I[L=`length`];++i)for(j=0;j++<(q=I[i])[L];)$+=(a=[q[S=`slice`](0,j).reverse(),q[S](j+1),I.map(r=>r[j])[S](0,i).reverse(),I.map(r=>r[j])[S](i+1)]).some(t=>t.every(v=>v<q[j])),_=Math.max(_,a.reduce((p,w)=>p*(w.findIndex(v=>v>=q[j])+1||w[L]),1))
console.log($,_)