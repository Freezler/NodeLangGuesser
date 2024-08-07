import { franc, francAll } from 'franc';
import langs from 'langs';
const languageCode = franc('gekkenhuis');

for (lang of langs) {
	if (languageCode === lang) {
		return lang;
	}
}

console.log(retfranc('gekkenhuis', lang));

console.log