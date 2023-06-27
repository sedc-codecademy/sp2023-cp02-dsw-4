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
    // checkoutClassSwicther.toChekout()
    toCheckout()
    console.log("dime")
})

toPaymentBtn.addEventListener("click", () => {
    // checkoutClassSwicther.toPayment()
    toPayment()
})

stageTwoBtn.addEventListener("click", () => {
    // checkoutClassSwicther.toPayment()
    toPayment()
    console.log("dime")
})

toReviewBtn.addEventListener("click", () => {
    toReview()
    // checkoutClassSwicther.toReview()
})

stageThreeBtn.addEventListener("click", () => {
    toReview()
    // checkoutClassSwicther.toReview()
    console.log("dime")
})

backToCartBtn.addEventListener("click", () => {
    checkoutClassSwicther.backToCart()
})

purchaseBtn.addEventListener("click", () => {
    confirmationBox.showModal()
})



