import { franc, francAll } from 'https://esm.sh/franc@6?bundle'
import langs from 'langs';

const

export default function (text) {
	return franc(text, { only: langs });
}