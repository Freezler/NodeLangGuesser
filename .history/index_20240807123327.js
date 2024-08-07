import { franc } from 'franc';
import langs from 'langs';
import chalk from 'chalk';


const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
	console.log("Sorry, I don't know that language");
}

const language = langs.where("3", langCode);
if (!language) {
	console.log("Language not found");

}

else if (language === "und") {
	console.log("Language not found");
	process.exit(1);
}

else {	
	console.log(chalk.bgCyanBright.green(`langcode: ${chalk.bold(chalk.bgBlue.bold(langCode))}, language: ${chalk.bgBlue.bold(language.name)}`));
	
}

