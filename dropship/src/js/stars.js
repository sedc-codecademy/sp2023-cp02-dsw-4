function createStars(container, ID) {
    let starDiv = document.createElement('div')

    for (let i = 0; i < 5; i++) {
        const gradientId = `gradient${ID}${i + 1}`
        const starClass = `star${ID}`

        const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        starSvg.setAttribute('viewBox', '0 0 24 24')
        starSvg.setAttribute('fill', `url(#${gradientId})`)

        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
        gradient.setAttribute('id', gradientId);
        gradient.innerHTML = `<stop offset="0%" stop-color="currentColor" /> <stop offset="0%" stop-color="gray"/>`

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', 'M12 2L15.09 8.34L22 9.27L17 14.24L18.18 21L12 17.77L5.82 21L7 14.24L2 9.27L8.91 8.34L12 2Z')

        starSvg.appendChild(gradient)
        starSvg.appendChild(path)
        starSvg.classList.add(starClass)
        starDiv.classList.add('starDiv')
        starDiv.appendChild(starSvg)
    }
    container.appendChild(starDiv)
}

function fillStars(rating, container, ID) {
    const stars = container.querySelectorAll(`.star${ID}`)
    stars.forEach((star, index) => {
        if (index + 1 <= rating) {
            star.style.fill = 'currentColor'
        } else if (index < rating) {
            const percentage = (rating - Math.floor(rating)) * 100
            star.querySelector(`linearGradient stop:nth-child(1)`).setAttribute('offset', `${percentage}%`)
        } else {
            star.style.fill = 'gray'
        }
    })
}

// const rating = 3.9
// const starsContainerId = 'starsTest'
// const starsContainer = document.querySelector('.starsTest')
// // element.setAttribute('data-id', 'your-data-id-value');
// createStars(starsContainer, starsContainerId)
// fillStars(rating, starsContainer, starsContainerId)