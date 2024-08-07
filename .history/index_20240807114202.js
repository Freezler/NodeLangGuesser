import { franc, francAll } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
try {
	if (!input) {
		throw new Error("Please provide an input");
	}
if (!input) {
	console.log("Please provide an input");
	process.exit(1);
}

	if (!language) {
		throw new Error("Language not found");
	}
	else if (langCode === "fra") {
		console.log(`langcode: ${langCode}, language: French`);
	}
	else if (language === "und") {
		throw new Error("Language not found");
	}
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

	console.log(`langcode: ${langCode}, language: ${language.name}`);
} catch (error) {
	console.error(error.message);
	process.exit(1);

else {	
console.log(`langcode: ${langCode}, language: ${language.name}`);
}

<<<<<<<  f6afd132-e2e9-4287-99aa-a1b56515f4ec  >>>>>>>
