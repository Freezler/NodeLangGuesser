import { franc, francAll } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
try {
	if (!input) {
		throw new Error("Please provide an input");
	}

	if (!language) {
		throw new Error("Language not found");
	}

	else if (language === "und") {
		throw new Error("Language not found");
	}

	console.log(`langcode: ${langCode}, language: ${language.name}`);
} catch (error) {
	console.error(`error.message`.red);
	process.exit(1);
}

