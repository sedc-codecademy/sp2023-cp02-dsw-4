const threeDee = document.querySelector(".footerLogo")
const footer = document.querySelector("footer")

footer.onpointermove = e => {
    const { clientX, clientY } = e
    rotateElement(clientX, clientY, threeDee)
}

footer.onmouseleave = () => {
    threeDee.animate({
        transform: `rotateY(${0}deg) rotateX(${0}deg)`
    }, { duration: 1500, fill: "forwards", easing: "ease-in-out" })
}

// 3D Photo

function rotateElement(x, y, element) {
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((x - middleX) / middleX) * 30
    const offsetY = -1 * (((y - middleY) / middleY) * 30)

    element.animate({
        transform: `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`
    }, { duration: 1500, fill: "forwards", easing: "ease-in-out" })
}

// Header logo remove if mobile logo is there

// // Get the target and observed elements
// const targetElement = document.querySelector('.mobileLogo');
// const observedElement = document.querySelector('.mobileLogoHidden');

// // Define the intersection observer options
// const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 0.5, // Trigger when 50% of the observed element is visible
// };

// // Create the intersection observer
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             // When the observed element intersects with the target element
//             targetElement.style.opacity = '0';
//         } else {
//             // When the observed element is not intersecting with the target element
//             targetElement.style.opacity = '1';
//         }
//     });
// }, options);

// // Start observing the observed element
// observer.observe(observedElement);

// Get the target and observed elements
const mobileLogoHeader = document.querySelector('.logo')
const mobileLogoFooter = document.querySelector('.mobileLogoHidden')
const standardFooterLogo = document.querySelector('.footerHero')

const observedElements = [mobileLogoFooter, standardFooterLogo]

// Define the intersection observer options
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the observed element is visible
}

// Create the intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
            // When the observed element intersects with the target element
            mobileLogoHeader.style.opacity = '0'
        } else {
            // When the observed element is not intersecting with the target element
            mobileLogoHeader.style.opacity = '1'
        }
    })
}, options)

// Start observing the observed elements
observedElements.forEach((element) => {
    observer.observe(element)
})


