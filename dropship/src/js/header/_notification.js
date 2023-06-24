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
    notifcationToggle(productAddedNotif)
    productAddedNotif.classList.toggle("alertOn")
})
