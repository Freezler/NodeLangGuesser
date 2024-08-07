import readline from 'readline';
import { franc } from 'franc';
import langs from 'langs';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
	translate(sentence);
	rl.close();
});

async function translate(input) {
	console.log('input:', input);
	const langCode = franc(input);
	console.log('langCode:', langCode);
	const language = langs.where('T3', langCode);
	if (language) {
		console.log(language.name);
	} else {
		console.log('No language found for langCode:', langCode);
	}
}