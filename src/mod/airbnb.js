import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/airbnb\.(com|ae|ca|co\.in|co\.nz|co\.uk|co\.za|com\.au|com\.mt|com\.sg|de|gy|ie)$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_set_bev_on_new_domain', 'federated_search_id', 'search_type', 'source', 'source_impression_id')
];
