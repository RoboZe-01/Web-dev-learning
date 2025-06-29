// Get the rectangle element by its ID
var rect = document.querySelector("#centre");

// Add mousemove event listener to change color based on cursor position
rect.addEventListener('mousemove', function(details) {
    // Get the rectangle's position and dimensions
    var reactangleLocation = rect.getBoundingClientRect();
    
    // Calculate cursor position relative to the rectangle's left edge
    var insideRectVal = details.clientX - reactangleLocation.left;

    // Check if cursor is in the left half of the rectangle
    if (insideRectVal < reactangleLocation.width / 2) {
        // Map cursor position to red intensity (255 at left edge to 0 at center)
        var redColor = gsap.utils.mapRange(
            0,
            reactangleLocation.width / 2,
            255,
            0,
            insideRectVal
        );

        // Animate to red gradient
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });

    } 
    // Cursor is in the right half of the rectangle
    else {
        // Map cursor position to blue intensity (0 at center to 255 at right edge)
        var blueColor = gsap.utils.mapRange(
            reactangleLocation.width / 2,
            reactangleLocation.width,
            0,
            255,
            insideRectVal
        );

        // Animate to blue gradient
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});

// Reset color to white when mouse leaves the rectangle
rect.addEventListener('mouseleave', function() {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});