myLoc= window.location.href;
if(myLoc.startsWith("https://utdirect.utexas.edu/apps")){
	console.log("doing the replacement!");
	const replacelist = {
	  'HUTCHISON, COLEMAN':'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	  'HUTCHISON, C':'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	  'HOFMANN, JOHANN': 'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	  'HOFMANN, J': 'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	  'DALBY, KEVIN N':'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	  'DALBY, K':'https://www.scribd.com/document/442326249/OIE-Report-Findings-of-Violations-of-HOP-3-3031',
	};

	var tribuneURL = "https://www.texastribune.org/2020/01/09/ut-austin-acknowledges-17-cases-sexual-misconduct-employees/";
	var markup = document.documentElement.innerHTML;
	var allkeys = Object.keys(replacelist);
	allkeys.sort();
	for ( key of allkeys ) {
		var replace_val = ">"+key+"</td>"
		var value = replacelist[key];
		replacementShindig = '><a href="'+value+'" style="color:red" target="_blank">***'+key+"***</a></td>"
		markup = markup.replace(new RegExp(replace_val,'gi'),replacementShindig)
	}
	document.documentElement.innerHTML = markup	
}