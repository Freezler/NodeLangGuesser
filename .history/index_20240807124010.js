import { franc } from 'franc';
import langs from 'langs';
import chalk from 'chalk';

const input = process.argv[2];
const language = langs.where('3', input);

const langCode = franc(input);
if (langCode === 'und' || langCode === null || langCode === '') {
	console.log("Sorry, I don't know that language");
} else {	
	const language = langs.where('3', langCode);
	console.log(chalk.bgYellowBright.greenBright(`Our best guess is: ${language}`));
	
}

