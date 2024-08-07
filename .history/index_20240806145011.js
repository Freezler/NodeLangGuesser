const  franc = require('franc');
const langs = require('langs');
const fs = require('fs');
const path = require('path');
const nGram = require('n-gram');
const collapseWhiteSpace = require('collapse-white-space');	

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');