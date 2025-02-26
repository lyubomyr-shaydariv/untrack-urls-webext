import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('mailpanion.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('destination').TO_URL()
		.DO().REDIRECT()
];
