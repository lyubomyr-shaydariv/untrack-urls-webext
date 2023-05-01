registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "l.instagram.com" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
});
registerModule(function() {
	function filter(k, vs) {
		return k !== "igshid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
