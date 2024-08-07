import { franc } from 'franc';
import langs from 'langs';

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
	console.log("Language not found");
} else {
	const language = langs.where("3", langCode);
	if (language) {
		console.log(`Language Name: ${language.name}`);
		console.log(`Language Code: ${langCode}`);
	} else {
		console.log("Language not found");
	}
} const readline = require('readline');
const franc = require('franc');
const langs = require('langs');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a sentence: ', (input) => {
	const langCode = franc(input);
	const language = langs.where("3", langCode);

	if (language) {
		console.log(`Language Name: ${language.name}`);
		console.log(`Language Code: ${langCode}`);
	} else {
		console.log("Language not found");
	}

	rl.close();
});