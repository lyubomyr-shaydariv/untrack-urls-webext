import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('yadclid', 'yadordid', 'yclid', 'ymclid', 'ysclid', '_openstat'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?yandex\.[^.]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('lr', 'redircnt')
];
