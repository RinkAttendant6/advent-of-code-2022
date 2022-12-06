I=require('fs').readFileSync(process.argv[2])
F=u=>{for(i=u;new Set(I.slice(i-u,i)).size<u&&i<I.length;++i);return i}
console.log(F(4),F(14))