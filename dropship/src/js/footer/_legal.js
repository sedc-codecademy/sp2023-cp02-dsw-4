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

function scaleElement(e, scale, direction) {
    // Apply scaling transformation
    e.style.transformOrigin = direction;
    e.style.transform = `scaleX(${scale})`;
}

// Function to handle mouseenter event
function handleMouseEnter(event, e) {
    let div = e.getElementsByTagName("div")[0]

    // Get the coordinates of the mouse pointer
    const mouseX = event.clientX

    // Get the position and width of the element
    const eRect = e.getBoundingClientRect()
    const eX = eRect.left
    const eWidth = eRect.width

    // Calculate the distance from the mouse pointer to each side of the element
    const distanceLeft = mouseX - eX
    const distanceRight = eX + eWidth - mouseX

    // Determine from which side the mouse entered the element
    if (distanceLeft < distanceRight) {
        scaleElement(div, 1, 'left')
    } else {
        scaleElement(div, 1, 'right')
    }
}


// Function to handle mouseleave event
function handleMouseLeave(event, e) {
    let div = e.getElementsByTagName("div")[0]
    // Get the X-coordinate of the mouse pointer
    const mouseX = event.clientX

    // Get the position and width of the element
    const eRect = e.getBoundingClientRect()
    const eX = eRect.left
    const eWidth = eRect.width

    // Determine from which side the mouse left the element
    if (mouseX < eX) {
        scaleElement(div, 0, 'left')
        return
    }

    if (mouseX > eX + eWidth) {
        scaleElement(div, 0, 'right')
        return
    }

    scaleElement(div, 0, 'center')
}
