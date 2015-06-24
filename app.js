$(document).ready(function() {
    
//  Part I
//  Create an HTML page with a button.
//  Add a click event handler so that when you cick the button a message is printed to the console.
//  Change the behavior of the click handler to append some text to the body element.
//  Add another button with a click handler that appends an h1 element with some text to the body element.
//  Add another button with a click handler that append an unordered list with three list items to the body element.
    
$('.print-to-console').on('click', function() {
    console.log('This is a message printed to the console on click event.');
});

$('.append-to-body').on('click', function() {
    $('body').append('This is some text appended to the body');
});
    
$('.append-h1').on('click', function() {
    $('body').append('<h1>Appended Heading Here!</h1>');
});
    
$('.append-ul').on('click', function() {
    $('body').append('<ul><li>First List Item</li><li>Second List Item</li><li>Third List Item</li></ul>');
});

    
    
//Part II
//Create an HTML page with some filler content including some paragraphs, headings, and links.
//When a paragraph is moused over, turn the text of that paragraph pink.
//Add an exclamation point to the end of each heading.
//When a link is clicked, confirm that the user wants to navigate to that url. If the user clicks OK, allow the default behavior of the link to be executed. If the user clicks cancel, cancel the default browser behavior by specifying return false;.
//When a link is clicked and the user chooses not to go to the url, remove the link from the DOM.

$('p').on('mouseover', function(){
    $(this).css('color','pink');
});
    
$(':header').append('!');

$('a').on('click', function(evt) {
    var confirmation = confirm('Are you sure you want to follow that link?');
    if (confirmation !== true) {
        evt.preventDefault();
        $(this).remove();
    }
});
    
    
    
//Part III
//Create an HTML page with one, giant button in the center.
//When the giant button is clicked, a 'popup' is created. The popup is simply a div containing some HTML content, which has a class applied making it appear with position: fixed in the middle of the page. The popup should not exist in your HTML page. It is created entirely with jQuery.
//Add a close button to the popup. When clicked, the popup should be removed from the DOM.
//Make sure the giant button still works to create a popup even after one is opened and closed.

$('.giant-button').on('click', function() {
    $('body').append('<div class="popup"><h2>I am a giant popup!</h2></div>');
    $('.popup').append('<button>Close the Popup</button>').on('click', function() {
        $('.popup').remove();
    });
});

}); // End Document Ready