import readline from 'readline';
import { franc }  from 'franc';
import langs from 'langs';

const sentence = readline.createInterface({

	input: process.stdin,
	output: process.stdout
});

const input = sentence;
const langCode = franc(input);

const language = langs.where("3", langCode);
console.log(language.name)