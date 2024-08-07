import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('Alle mensen zullen vrij zijn');
const language = langs.where("3", langCode);

console.log(language);

