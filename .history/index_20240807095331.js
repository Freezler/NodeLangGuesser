<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
import readline from 'readline';
import { franc } from 'franc';
import { franc }  from 'franc';
import langs from 'langs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  translate(sentence);
  rl.close();
	translate(sentence);
	rl.close();
});
const input = sentence;
const langCode = franc(input);

async function translate(input) {
  const langCode = franc(input);
  const language = langs.where('3', langCode);
  console.log(language.name);
}
const language = langs.where("3", langCode);
console.log(language.name)
<<<<<<<  ea20cf42-db83-46d5-b905-4e0cc7c2a78a  >>>>>>>