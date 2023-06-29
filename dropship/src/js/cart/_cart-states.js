const cartStages = ["shippingstage", "paymentStage", "finalStage"]
let checkoutOn = false

function toggleCheckout(origin) {
    if (origin === "checkout") {
        cartContainer.classList.remove("checkoutOn")
        localStorage.setItem("checkoutOn", false)
        checkoutOn === false
        return
    }
    if (origin === "checkin") {
        cartContainer.classList.add("checkoutOn")
        localStorage.setItem("checkoutOn", true)
        checkoutOn === true
        return
    }
}

function updateCartStage(stageIndex) {
    const stageBtns = [stageOneBtn, stageTwoBtn, stageThreeBtn]

    if (!cartContainer.classList.contains("checkoutOn") && !checkoutOn || localStorage.getItem("checkoutOn") === "true") {
        toggleCheckout("checkin")
        for (let i = 0; i < cartStages.length; i++) {
            if (i === stageIndex) {
                cartContainer.classList.add(cartStages[i])
                stageBtns[i].classList.add("currentStage")
                stageBtns[i].disabled = true
            } else {
                cartContainer.classList.remove(cartStages[i])
                stageBtns[i].classList.remove("currentStage")
                stageBtns[i].disabled = false
            }
        }
    }
}

function backToCart() {
    for (let i = 0; i < cartStages.length; i++) {
        cartContainer.classList.remove(cartStages[i])
    }
    toggleCheckout("checkout")
}

function toCheckout() {
    updateCartStage(0)
}

function toPayment() {
    updateCartStage(1)
}

function toReview() {
    updateCartStage(2)
}


toCheckoutBtn.addEventListener("click", () => toCheckout())

stageOneBtn.addEventListener("click", () => {
    toCheckout()
})

toPaymentBtn.addEventListener("click", () => {
    toPayment()
})

stageTwoBtn.addEventListener("click", () => {
    toPayment()
})

toReviewBtn.addEventListener("click", () => {
    toReview()
})

stageThreeBtn.addEventListener("click", () => {
    toReview()
})

backToCartBtn.addEventListener("click", () => {
    backToCart()
})

purchaseBtn.addEventListener("click", () => {
    confirmationBox.showModal()
})



