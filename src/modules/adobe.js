registerModule(function() {
	function filter(k, vs) {
		return k !== "sc_cid" && k !== "mkt_tok" && k != "s_cid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
