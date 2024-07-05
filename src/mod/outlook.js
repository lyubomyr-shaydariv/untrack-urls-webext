import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('safelinks.protection.outlook.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
