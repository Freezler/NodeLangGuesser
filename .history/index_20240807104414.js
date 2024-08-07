import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('l ijn', 3);
const language = langs.where("3", langCode);

if (!language) {
	console.log("Language not found it's ji");
	process.exit(1);
}
else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}

else {	
console.log(`langcode: ${langCode}, language: ${language.name}`);
}
