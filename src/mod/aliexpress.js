import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('aff_platform', 'aff_trace_key'),
	RULE()
		.AT().TLD('aliexpress')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('af', 'aff_request_id', 'algo_expid', 'algo_pvid', 'btsid', 'cv', 'dp', 'expid', 'gps-id', 'initiative_id', 'mall_affr', 'scm_id', 'sk', 'terminal_id', 'ws_ab_test'),
	RULE()
		.AT().HOSTNAME('aliexpress.com').PATHNAME(PREFIX('/item/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('algo_exp_id', 'curPageLogUid', 'pdp_npi')
];
