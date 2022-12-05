[r,m]=require(`fs`).readFileSync(process.argv[2],`utf8`).split`

`.map(g=>g.split`
`)
n=+r.pop(a=[],T=c=>c.map(w=>w[0]).join``).match(/\d+\s*$/)
for(z of r)for(j=0;j<n;++j)a[j]??='',a[j]+=z[4*j+1].trim()
s=[...a]
for(l of m)[q,f,g]=l.match(/\d+/g),s[--g]=[...s[--f].slice(0,q)].reverse().join``+s[g],s[f]=s[f].slice(q),a[g]=a[f].slice(0,q)+a[g],a[f]=a[f].slice(q)
console.log(T(s),T(a))