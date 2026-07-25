const fs = require('fs');
const path = require('path');

const dir = 'c:\\HOC-TAP\\Vareno\\tanphamgia\\frontend\\src\\assets\\images\\logos';

const renames = [
  { from: 'CHUAXACDINH_fa9ba542.png', to: 'zero-waste.png' },
  { from: 'hinhan-bank-3.png', to: 'shinhan-bank.png' },
  { from: 'vanhanhmail.png', to: 'van-hanh-mall.png' },
  { from: 'viettcomback.png', to: 'vietcombank.png' },
  { from: 'Logo_vincom.png', to: 'vincom.png' },
  { from: 'Logo_Bidv.png', to: 'bidv-full.png' }, // prevent collision
  { from: 'bia-sai-gon_TRUNGLAP-4x.png', to: 'bia-sai-gon.png' },
  { from: 'VFM (1).png', to: 'vfm.png' },
  { from: 'Vivant-4x.png', to: 'vivant.png' },
  { from: 'Bosch-logo.svg.png', to: 'bosch.png' },
  { from: 'logo-hanwha-vinadesign.png', to: 'hanwha-life.png' },
  { from: 'logo-techcombank.png', to: 'techcombank.png' },
  { from: 'lotte-mart-logo.png', to: 'lotte-mart-temp.png' }, // prevent collision
  { from: 'bvsg.png', to: 'bv-rang-ham-mat-sg.png' },
];

const deletes = [
  'lotte-mart.png',
  'bidv.png',
  'bienvien.png'
];

for (const file of deletes) {
  try {
    fs.unlinkSync(path.join(dir, file));
    console.log(`Deleted ${file}`);
  } catch (e) {
    console.log(`Failed to delete ${file}: ${e.message}`);
  }
}

for (const r of renames) {
  try {
    fs.renameSync(path.join(dir, r.from), path.join(dir, r.to));
    console.log(`Renamed ${r.from} to ${r.to}`);
  } catch (e) {
    console.log(`Failed to rename ${r.from} to ${r.to}: ${e.message}`);
  }
}

try { fs.renameSync(path.join(dir, 'bidv-full.png'), path.join(dir, 'bidv.png')); } catch (e) {}
try { fs.renameSync(path.join(dir, 'lotte-mart-temp.png'), path.join(dir, 'lotte-mart.png')); } catch (e) {}
