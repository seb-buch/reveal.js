/**
 * Handles toggling a grid over the slide to help user to put/resize content.
 *
 * @author Sébastien Buchoux <sebastien.buchoux@gmail.com>
 */

(function(){
    var dom = {};
    var grid = document.getElementById('grid');
    var jsFileLocation = document.querySelector('script[src$="grid.js"]').src;  // this js file path
    jsFileLocation = jsFileLocation.replace(/grid\.js(\?.*)?$/, '');   // the js folder path

    // add grid if not present
    if( !grid ) {
        grid = document.createElement("div");
        grid.id = "grid";
        grid.style.position = "relative";
        grid.style.height = "740px";
        grid.style.width = "1000px";
        grid.style.top = "-20px";
        grid.style.left = "-40px";
        grid.style.backgroundImage = "url('"+jsFileLocation+"grid.svg')";
        grid.style.display = "none";
        dom.wrapper = document.querySelector( '.reveal .slides' );
        dom.wrapper.appendChild(grid);
    }

    document.addEventListener( 'keydown', function( event ) {
        if( event.keyCode === 71 ) {
            event.preventDefault();

            // Toggle visibility of the grid
            if( grid.style.display === "none" )
                grid.style.display = "block";
            else
                grid.style.display = "none";
        }
    } );

})();