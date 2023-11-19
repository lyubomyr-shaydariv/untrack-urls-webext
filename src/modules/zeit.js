import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const filter = __.EXCLUDE("wt_mc", "wt_zmc");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
