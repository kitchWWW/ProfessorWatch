myLoc = window.location.href;
if (myLoc.startsWith("https://utdirect.utexas.edu/apps")) {
	console.log("doing the replacement!");
	const GO_TO_URL = "https://utmisconduct.wordpress.com/";
	const titleNine = {
		'color': 'red',
		'url': GO_TO_URL
	}
	const replacelist = {
		'HUTCHISON, COLEMAN': titleNine,
		'HUTCHISON, C': titleNine,
		'HOFMANN, JOHANN': titleNine,
		'HOFMANN, J': titleNine,
		'DALBY, KEVIN N': titleNine,
		'DALBY, K': titleNine,
		'HUBBARD, THOMAS K': {
			'color': 'orange',
			'url': 'https://www.statesman.com/news/20191204/austin-students-want-professor-fired-for-writings-on-age-of-consent-ut-says-itrsquos-protected-speech'
		},
		'HUBBARD, T': {
			'color': 'orange',
			'url': 'https://www.statesman.com/news/20191204/austin-students-want-professor-fired-for-writings-on-age-of-consent-ut-says-itrsquos-protected-speech'
		},
		'SARKAR, SAHOTRA': titleNine,
		'SARKAR, S': titleNine,
		'NEMY, PHILLIP P': titleNine,
		'NEMY, P': titleNine,
		'BOISSEAU, JOHN R': titleNine,
		'BOISSEAU, J': titleNine,
		'REECE, ROBERT L': {
			'color': 'orange',
			'url': 'https://www.vox.com/2018/4/17/17215554/metoo-movement-robert-reece-ut-austin-sexual-misconduct'
		},
		'REECE, R': {
			'color': 'orange',
			'url': 'https://www.vox.com/2018/4/17/17215554/metoo-movement-robert-reece-ut-austin-sexual-misconduct'
		},
	};
	var markup = document.documentElement.innerHTML;
	var allkeys = Object.keys(replacelist);
	allkeys.sort();
	for (key of allkeys) {
		var replace_val = ">" + key + "</td>"
		var color_to_use = replacelist[key]['color']
		var url_to_use = replacelist[key]['url']
		replacementShindig = '><a href="' + url_to_use + '" style="color:' + color_to_use + '" target="_blank">***' + key + "***</a></td>"
		markup = markup.replace(new RegExp(replace_val, 'gi'), replacementShindig)
	}
	document.documentElement.innerHTML = markup
}