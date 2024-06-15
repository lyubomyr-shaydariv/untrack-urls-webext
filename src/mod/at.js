import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('at_campaign', /^at_custom.*/, 'at_medium', 'at_recipient_id', 'at_recipient_list')
];
