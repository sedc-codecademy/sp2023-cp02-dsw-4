const alertCard = document.querySelector('.cartNotification')
const cartButton = document.querySelector('#cartButton')

cartButton.addEventListener('click', (e) => {
    e.preventDefault()
    // alertCard.animate({
    // }, { duration: 400, easing: 'ease-in-out', fill: 'forwards', })
    // setTimeout(function () {
    //     alertCard.animate({
    //         maxHeight: '0rem',
    //     }, { duration: 400, easing: 'ease-in-out', fill: 'forwards', })
    // }, 4500)
    alertCard.classList.toggle("alertOn")
})
