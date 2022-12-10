$=p=y=0
X=1
_=``
require(`fs`).readFileSync(process.argv[2],`utf8`).split`
`.map(v=>{for(c=v[5]?2:1;c--;p%=40)$+=++y%40==20&&X*y,_+=Math.abs(p++-X)<2?`#`:`.`+(p%40?``:`
`)
X+=v.slice(5)|0})
console.log($,{_})