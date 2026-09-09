const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const EXPECT = '9a7e8a3b9f5ae913736d3ff1be837db9b57c60e85a77bf369c55caebe25b0ed9';
let b64 = fs.readFileSync('payload.gz.b64', 'utf8').trim();
// Repair single-char paste corruption from MCP upload if present
b64 = b64.replace('CymDO7USWaNH2', 'CymDO7UsWaNH2');
const html = zlib.gunzipSync(Buffer.from(b64, 'base64'));
const sha = crypto.createHash('sha256').update(html).digest('hex');
if (sha !== EXPECT) { console.error('SHA mismatch', sha); process.exit(1); }
fs.mkdirSync('originals', { recursive: true });
fs.mkdirSync('public', { recursive: true });
['index.html', 'DrNtetaSkinApp.html', 'originals/DrNtetaSkinApp-2.html', 'public/index.html', 'public/DrNtetaSkinApp.html'].forEach(p => fs.writeFileSync(p, html));
console.log('assembled', html.length, sha);
