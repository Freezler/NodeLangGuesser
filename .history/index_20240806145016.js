const  franc = require('franc');
const langs = require('langs');
const fs = require('fs');
const path = require('path');
const nGram = require('n-gram');
const collapseWhiteSpace = require('collapse-white-space');	

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');
const lang = franc(text, { minLength: 3, maxLength: 5 });
const language = langs.where('3', lang);
console.log(language)