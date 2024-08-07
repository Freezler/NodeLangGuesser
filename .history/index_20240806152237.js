import { franc, francAll } from 'franc';
import langs from 'langs';

const text = 'Hello World';
const code = franc(text);
const codes = francAll(text);

console.log(franc('goeiemiddag',);

export default function (text) {
	return franc(text, { only: langs });
}