import { franc, francAll } from 'franc';
import langs from 'langs';
import chalk from 'chalk';


const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
if (langCode === 'und') {
	console.log("Please provide an input");
	
}

if (!language) {
	console.log("Language not found");
	process.exit(1);
}

else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}

else {	
	console.log(chalk.bgCyanBright.green(`langcode: ${chalk.bold(chalk.bgBlue.bold(langCode))}, language: ${chalk.bgBlue.bold(language.name)}`));
	
}

