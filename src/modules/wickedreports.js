import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("wickedid");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, excluding);
		}
	});
}
