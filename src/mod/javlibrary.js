import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('javlibrary.com').PATHNAME(/\/[a-z]+\/redirect\.php/)
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
