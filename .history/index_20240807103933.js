import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('Alle mensen zullen vrij zijn', 3);
const language = langs.where("3", langCode);

if (!language) {
	console.log("Language not found");
	process.exit(1);
}
else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}
else if (language === "Dutch") {
	console.log("Dutch is the best language EVER!");

}
else {	
return `langcode: ${langCode}, language: ${lang}`;
}
