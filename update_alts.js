const fs = require('fs');
const path = require('path');

const targetPhrase = ' - Baihar ka sabse acha school - Balaghat ka sabse acha school - बैहर का सबसे अच्छा स्कूल - बालाघाट का सबसे अच्छा स्कूल';

const filesToSearch = [
  'index.html',
  'src/pages/AnnualFunctionPage.jsx',
  'src/pages/TeachersPage.jsx',
  'src/pages/AcademicResultPage.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/AdmissionPage.jsx',
  'src/pages/PlaygroundPage.jsx',
  'src/pages/GalleryDetail.jsx',
  'src/pages/SchoolAssemblyPage.jsx',
  'src/pages/ExhibitionPage.jsx',
  'src/pages/ComputerLabPage.jsx',
  'src/pages/ArtEventGalleryPage.jsx',
  'src/pages/RepublicDayPage.jsx',
  'src/pages/PrePrimaryPage.jsx',
  'src/components/InstagramShowcase.jsx',
  'src/components/GalleryPreview.jsx',
  'src/components/Navbar.jsx',
  'src/components/About.jsx',
  'src/components/Hero.jsx'
];

let matchCount = 0;
let modifyCount = 0;

for (const file of filesToSearch) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  let hasChanges = false;

  // Regex to match alt="..." or alt: '...' or alt: "..."
  // This captures the opening quote, the content, and the closing quote.
  const regex = /(alt\s*(?:=|:)\s*)(["'])(.*?)\2/g;

  content = content.replace(regex, (match, prefix, quote, altText) => {
    matchCount++;
    // Exclude dynamic alts like alt={...} or if it already has the phrase
    if (altText.includes('Baihar ka sabse acha school') || altText.includes('Sabse Acha') || match.includes('{') || match.includes('`')) {
      return match;
    }
    
    // 50% chance to modify
    if (Math.random() < 0.5) {
      modifyCount++;
      hasChanges = true;
      return `${prefix}${quote}${altText}${targetPhrase}${quote}`;
    }
    
    return match;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}

console.log(`Total alt tags found: ${matchCount}`);
console.log(`Total modified (approx 50%): ${modifyCount}`);
