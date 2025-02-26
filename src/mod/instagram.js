import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('igshid', 'ig_rid'),
	RULE()
		.AT().DOMAIN('instagram.com')
		.FROM().QUERY_ENTRY_KEYS()
		// TODO is it `saved-by` or `saved_by`?
		.DO().REMOVE('e', 'g', 'igsh', /^saved[-_]by$/),
	RULE()
		.AT().DOMAIN('l.instagram.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
