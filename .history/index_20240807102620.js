import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('leven de republiek');
const language = langs.where("T2", langCode);

console.log(``langCode, ${language.name};

