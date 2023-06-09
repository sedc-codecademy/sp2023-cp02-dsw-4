// Get the element you want to track
const links = document.querySelectorAll('.legalLinks')

// Add event listeners
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', (event) => {
        handleMouseEnter(event, links[i])
    })
    links[i].addEventListener('mouseleave', (event) => {
        handleMouseLeave(event, links[i])
    })
}

function scaleElement(e, scale, coordinates) {
    // Apply scaling transformation
    e.style.setProperty('--origin', coordinates);
    e.style.setProperty('--scale', scale);
}

// Function to handle mouseenter event
function handleMouseEnter(event, e) {
    const rect = e.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const percentX = (mouseX / e.offsetWidth) * 100;
    const percentY = (mouseY / e.offsetHeight) * 100;
    const coordinates = `${percentX}% ${percentY}%`;
    scaleElement(e, 1, coordinates);
}

// Function to handle mouseleave event
function handleMouseLeave(event, e) {
    const rect = e.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Ensure mouseX and mouseY are within the element's boundaries
    const constrainedX = Math.max(0, Math.min(mouseX, e.offsetWidth));
    const constrainedY = Math.max(0, Math.min(mouseY, e.offsetHeight));

    const percentX = ((constrainedX / e.offsetWidth) * 100);
    const percentY = ((constrainedY / e.offsetHeight) * 100);

    const coordinates = `${percentX}% ${percentY}%`;
    scaleElement(e, 0, coordinates);
}



