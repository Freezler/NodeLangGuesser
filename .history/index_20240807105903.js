import { franc, francAll } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = francAll(input);
const language = langs.where("3", langCode);

if (!language) {
	console.log("Language not found");
	process.exit(1);
}
else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}

else {	
console.log(`langcode: ${langCode}, language: ${language.name}`);
}