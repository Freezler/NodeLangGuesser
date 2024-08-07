import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('Alle mensen zullen vrij zijn', 3);
const language = langs.where("3", langCode);

if (!language) {
	console.log("Language not found");
	process.exit(1);
}
elseif (language === "und") {
	console.log("Language not found");
	process.exit(1);
}
elseif (language === "en") {
	
}
console.log(`langcode: ${langCode}, language: ${language.name}`);

