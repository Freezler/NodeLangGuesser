import { franc, francAll } from 'franc';
import langs from 'langs';
const languageCode = franc('gekkenhuis');

if (languageCode === 'und') {
	console.log('Could not determine language');
} else {
	const language = langs.where('3', languageCode);
	console.log(language);
}

console.log(franc('gekkenhuis', lang));

console.log