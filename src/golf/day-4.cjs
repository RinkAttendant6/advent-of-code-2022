$=_=0
require('fs').readFileSync(process.argv[2],`utf8`).split`
`.map(x=>{[a,b,c,d]=x.split(/,|-/);$+=(+a<=c&&+b>=d)||(+c<=a&&+d>=b),_+=+b>=c&&+a<=d})
console.log($,_)