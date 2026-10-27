import {mkdir,copyFile,readFile} from 'node:fs/promises';
import {Script} from 'node:vm';
const assets=['index.html','styles.css','app.js','favicon.svg','robots.txt','sitemap.xml'];
const html=await readFile('index.html','utf8');
for(const id of ['home','solutions','projects','about','contact'])if(!html.includes('id="'+id+'"'))throw new Error('Missing section: '+id);
new Script(await readFile('app.js','utf8'));
await mkdir('dist',{recursive:true});
for(const asset of assets) await copyFile(asset,'dist/'+asset);
console.log('Built dist/: 5 sections, validated JavaScript, 6 static assets. No dependencies required.');
