import { franc } from 'franc';
import langs from 'langs';
n
const langCode = franc('leven de republiek');

const language = langs.where("3", langCode);

console.log(language.name);

