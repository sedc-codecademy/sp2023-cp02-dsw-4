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


