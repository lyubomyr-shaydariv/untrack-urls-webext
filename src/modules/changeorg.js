import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("change.org");
	const excluding = __.EXCLUDING("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
