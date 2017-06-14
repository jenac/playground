// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
    for(var i = 0; i<document.getElementsByTagName('h3').length; i++ ) {
        console.log(document.getElementsByTagName('h3')[i].innerText);
    }
	

})();