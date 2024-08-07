import readline from 'readline';
import { franc }  from 'franc';
import langs from 'langs';

const input = process.argv[2];
const langCode = franc('hoerenoon');
const language = langs.where("3", langCode);
console.log(language.name)