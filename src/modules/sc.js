import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const filter = __.EXCLUDE("sc_campaign", "sc_channel", "sc_content", "sc_country", "sc_geo", "sc_medium", "sc_outcome");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
