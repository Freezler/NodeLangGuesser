import readline from 'readline';
import { franc }  from 'franc';
import langs from 'langs';

const input = sentence;
const langCode = franc(input);

const language = langs.where("3", langCode);
console.log(language.name)