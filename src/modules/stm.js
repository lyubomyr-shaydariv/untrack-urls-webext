registerModule(function() {
	function filter(k, vs) {
		return !k.startsWith("stm_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
