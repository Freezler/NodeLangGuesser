import { franc, francAll } from 'franc';
import langs from 'langs';
const langCode = franc('Alle menslike word vry');

const language = langs.where("2T", langCode);
console.log(langCode,language[3])