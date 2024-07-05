import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('steamcommunity.com').PATHNAME('/linkfilter/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
