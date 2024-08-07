<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
import { franc } from 'franc';
import langs from 'langs';
import chalk from 'chalk';

const input = process.argv[2];
const language = langs.where('3', input);

const langCode = franc(input);

if (langCode === 'und' || typeof langCode === 'undefined') {
	console.log("Sorry, I don't know that language");
} else {
} else {	
	const language = langs.where('3', langCode);
	console.log(chalk.bgYellowBright.greenBright(`Our best guess is: ${language}`));
	
}


<<<<<<<  229c321a-fd87-44a3-b839-cea2fac1f5b0  >>>>>>>