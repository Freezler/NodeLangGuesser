import { franc } from 'franc';
import langs from 'langs';
const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
return `the input is in ${language.name} and its code is ${langCode}`);