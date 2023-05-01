registerModule(function() {
	function filter(k, vs) {
		return k !== "position" && k !== "source";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "sourceforge.net" || url.hostname === "www.sourceforge.net" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
