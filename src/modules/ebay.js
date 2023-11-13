addRule((function() {
	const filter = createFilterByConstantKeys("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?ebay\.[^.]+$/.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
