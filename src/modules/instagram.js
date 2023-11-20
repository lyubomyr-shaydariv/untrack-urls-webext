import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("u"),
		__.MAP_TO_URL()
	),
	__.AT_HOSTNAME("l.instagram.com")
));

{
	const excluding = __.EXCLUDING("igshid");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
