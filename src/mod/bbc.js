import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('xtor', /at_[a-z_]+/),
		AT.DOMAIN('bbc.com')
	)
];
