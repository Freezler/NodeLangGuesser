import { franc, francAll } from 'franc';
import langs from 'langs';
const langCode = franc('Alle menslike word vry');

const language = langs.where("3", langCode);
console.log(language)