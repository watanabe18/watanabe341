/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */

var toggle = function() {

    console.log('About!');
    
    // Grab the html element with the ID “about”
    var el = document.getElementById('about');
	
	if(hasClass(el, 'show')) {
		// Remove the class “show” from the element.
		removeClass(el,'show');
	}
	else {
    	// Add the class “show” to the element.
    	addClass(el, 'show');
	}
};

var fetch = function() {
	
	var yr = document.getElementById('year');
	var val = yr.value;
	
	console.log(val);
	
	vizController(val);
	
}

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
    
    // Grab the 'Submit' button element, identified by the                                       
    // 'submit-btn' id.                                                                          
    button = document.getElementById('submit-btn');

    // From this point forward, when the button is clicked, the                                 
    // fetch function shall be invoked.                                                          
    button.onclick = fetch;

};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
