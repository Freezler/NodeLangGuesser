import readline from 'readline';
import { franc } from 'franc';
import langs from 'langs';

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
		console.log(`Confidence: ${language[2]}`);
	} else {
		console.log("Language not found");
	}

	rl.close();
});