import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const filter = __.EXCLUDE_BY_STARTS_WITH("ns_");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
