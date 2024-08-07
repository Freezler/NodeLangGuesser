import { franc } from 'franc';
import langs from 'langs';
import chalk from 'chalk';
const langCode = franc(input);
const language = langs.where('3', langCode);
const input = process.argv[2];

if (langCode === 'und' || typeof langCode === 'undefined') {
	console.log("Sorry, I don't know that language");
} else {
	
	console.log(chalk.bgYellowBright.greenBright(`Our best guess is: ${language.name}`));
}

