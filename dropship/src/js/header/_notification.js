const cartButton = document.querySelector('#cartButton')

cartButton.addEventListener('click', (e) => {
    e.preventDefault()
    notifcationToggle(productAddedNotif)
    productAddedNotif.classList.toggle("alertOn")
    switchMain(document.querySelector('.cart'), "flex") /// turn on cart 
    openCart() // should remove from here and redo switchMain()
})