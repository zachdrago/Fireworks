// Setup the display properties for the widget (such as the container it must render in)
var displayOptions = {
    //The CSS selector of the element to embed the widget into. 
    //It is recommended that the container has it's height set to 250px and the width to 100%. 
    //The embed is set to occupy 100% width and height of the parent container.
    container: '.shopalyst-wrapper' 
};
// Call openBinWidget to display the BIN widget in the specified container
_shopalyst.openBinWidget('8712561977562', displayOptions);

// To open the bin widget on the click of a button, invoke it in the click handler of the desired element
button.addEventListener('click',function(){
    _shopalyst.openBinWidget('8712561977562', displayOptions);
});

