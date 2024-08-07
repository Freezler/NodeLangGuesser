import { franc, francAll } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = franc(input);
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
<<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>

else if (langCode === "fra") {
	console.log(`langcode: ${langCode}, language: French`);
}
<<<<<<<  6fe45c1f-60cc-49f7-b052-0d2ef38871bc  >>>>>>>