import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("zanpid");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
