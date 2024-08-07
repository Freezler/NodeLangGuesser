import { franc } from 'franc';
import langs from 'langs';

const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);

if (language) {
	console.log(`Language Name: ${language.name}`);
	console.log(`Language Code: ${langCode}`);
} else {
	console.log("Language not found");
}