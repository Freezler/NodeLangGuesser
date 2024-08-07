import { franc, francAll } from 'https://esm.sh/franc@6?bundle'
import langs from 'langs';

const text = 'Hello World';
const code = franc(text);
const codes = francAll(text);

export default function (text) {
	return franc(text, { only: langs });
}