import { franc, francAll } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langs);

if (!language) {
	console.log("Language not found");
	process.exit(1);
}
else if (langCode === "fra") {
	console.log(`langcode: ${langCode}, language: French`);
}
else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}


else {	
console.log(`langcode: ${langCode}, language: ${language.name}`);
}

