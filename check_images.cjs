const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

const publicFiles = new Set(fs.readdirSync(publicDir));

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const srcFiles = walk(srcDir);
const imageRegex = /['"`/]([a-zA-Z0-9_\-\(\)\%\s]+\.(?:jpg|jpeg|png|webp|JPG))['"`\)]/g;
const referencedImages = new Set();

srcFiles.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      // Remove leading slash if present
      let imgName = match[1];
      if (imgName.startsWith('/')) {
        imgName = imgName.substring(1);
      }
      referencedImages.add(imgName);
    }
  }
});

const missing = [];
referencedImages.forEach(img => {
  if (!publicFiles.has(img)) {
    missing.push(img);
  }
});

console.log("Missing Images:");
missing.forEach(m => console.log(m));
