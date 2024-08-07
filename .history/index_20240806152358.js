import { franc, francAll } from 'franc';
import langs from 'langs';

const text = 'hoi, goedemiddag';
const language =
const codes = francAll(text);

console.log(franc('goeiemiddag', langs));

export default function (text) {
	return franc(text, { only: langs });
}