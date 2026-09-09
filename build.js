const fs=require('fs');const z=require('zlib');
function fromGzip(){const b=Buffer.from(fs.readFileSync('payload.gz.b64','utf8'),'base64');return z.gunzipSync(b);}
const h=fromGzip();
fs.mkdirSync('public',{recursive:true});
fs.mkdirSync('originals',{recursive:true});
fs.writeFileSync('index.html',h);
fs.writeFileSync('DrNtetaSkinApp.html',h);
fs.writeFileSync('public/index.html',h);
fs.writeFileSync('public/DrNtetaSkinApp.html',h);
fs.writeFileSync('originals/DrNtetaSkinApp-2.html',h);
console.log('assembled',h.length);
