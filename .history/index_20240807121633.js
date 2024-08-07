import { franc, francAll } from 'franc';
import langs from 'langs';
import chalk from 'chalk';


const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
if (!input) {
	console.log("Please provide an input");
	process.exit(1);
}

if (!language) {
	console.log("Language not found");
	process.exit(1);
}
else if (langCode === "fra") {
	console.log(chalk.blue.bgWhite`langcode: ${langCode}, language: French`);
}
else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}


else {	
	console.log(chalk.bgCyanBright(`langcode: ${chalk.bold(langCode)}, language: ${chalk.whiteBright.bold(language)}`), chalk.bgCyanBright(`langcode: ${chalk.bold(langCode)}, language: ${chalk.whiteBright.bold(language.name)}`));
	
}

