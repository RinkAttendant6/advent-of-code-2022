console.log(z=(t=(require(`fs`).readFileSync(process.argv[2],`utf8`)).split`

`.map(g=>g.split`
`.reduce((a,x)=>+x+a,0)).sort((a,b)=>b-a))[0],z+t[1]+t[2])