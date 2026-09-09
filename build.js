const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const EXPECT = '9a7e8a3b9f5ae913736d3ff1be837db9b57c60e85a77bf369c55caebe25b0ed9';
const parts = [0,1,2,3].map(i => fs.readFileSync('restore-parts/gz' + i + '.b64', 'utf8').trim());
const b64 = parts.join('');
const html = zlib.gunzipSync(Buffer.from(b64, 'base64'));
const sha = crypto.createHash('sha256').update(html).digest('hex');
if (sha !== EXPECT) { console.error('SHA mismatch', sha); process.exit(1); }
fs.mkdirSync('originals', { recursive: true });
fs.mkdirSync('public', { recursive: true });
['index.html', 'DrNtetaSkinApp.html', 'originals/DrNtetaSkinApp-2.html', 'public/index.html', 'public/DrNtetaSkinApp.html'].forEach(p => fs.writeFileSync(p, html));
console.log('assembled', html.length, sha);
