import readline from 'readline';
import { franc }  from 'franc';
import langs from 'langs';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
	translate(sentence);
	rl.close();
});
const input = sentence;
const langCode = franc(input);

const language = langs.where("3", langCode);
console.log(language.name)