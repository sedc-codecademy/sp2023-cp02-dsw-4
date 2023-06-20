const cartContainer = document.querySelector(".cart")
const confirmationBox = document.querySelector(".purchaseConfirmation")

// Summary buttons
const toCheckoutBtn = document.querySelector(".proceedToCheckout")
const backToCartBtn = document.querySelector(".backToCart")
const purchaseBtn = document.querySelector(".makePurchase")

// Checkout buttons 
const toPaymentBtn = document.querySelector(".toPayment")
const toReviewBtn = document.querySelector(".toReview")

// Stage Buttons
const stageOneBtn = document.querySelector(".stageOne")
const stageTwoBtn = document.querySelector(".stageTwo")
const stageThreeBtn = document.querySelector(".stageThree")

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

const checkoutClassSwicther = { // Handling class switches for cartContainer
    backToCart: () => {
        for (let i = 0; i < cartStages.length; i++) {
            cartContainer.classList.remove(cartStages[i])
        }
        toggleCheckout("checkout")
    },
    toChekout: () => {
        if (!cartContainer.classList.contains("checkoutOn") && !checkoutOn || localStorage.getItem("checkoutOn") === "true") {
            cartContainer.classList.add(cartStages[0])
            stageOneBtn.classList.add("currentStage")
            toggleCheckout("checkin")
        }
        if (cartContainer.classList.contains(cartStages[1])) {
            stageTwoBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[1])
        }
        if (cartContainer.classList.contains(cartStages[2])) {
            stageThreeBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[2])
        }
    },
    toPayment: () => {
        if (!cartContainer.classList.contains("checkoutOn") && !checkoutOn || localStorage.getItem("checkoutOn") === "true") {
            cartContainer.classList.add(cartStages[1])
            stageTwoBtn.classList.add("currentStage")
            toggleCheckout("checkin")
        }
        if (cartContainer.classList.contains(cartStages[0])) {
            stageOneBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[0])
        }
        if (cartContainer.classList.contains(cartStages[2])) {
            stageThreeBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[2])
        }
    },
    toReview: () => {
        if (!cartContainer.classList.contains("checkoutOn") && !checkoutOn || localStorage.getItem("checkoutOn") === "true") {
            cartContainer.classList.add(cartStages[2])
            stageThreeBtn.classList.add("currentStage")
            toggleCheckout("checkin")
        }
        if (cartContainer.classList.contains(cartStages[0])) {
            stageOneBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[0])
        }
        if (cartContainer.classList.contains(cartStages[1])) {
            stageTwoBtn.classList.remove("currentStage")
            cartContainer.classList.remove(cartStages[1])
        }
    },
}

toCheckoutBtn.addEventListener("click", () => {
    checkoutClassSwicther.toChekout()
})

stageOneBtn.addEventListener("click", () => {
    checkoutClassSwicther.toChekout()
})

toPaymentBtn.addEventListener("click", () => {
    checkoutClassSwicther.toPayment()
})

stageTwoBtn.addEventListener("click", () => {
    checkoutClassSwicther.toPayment()
    console.log("dime")
})

toReviewBtn.addEventListener("click", () => {
    checkoutClassSwicther.toReview()
})

stageThreeBtn.addEventListener("click", () => {
    checkoutClassSwicther.toReview()
})

backToCartBtn.addEventListener("click", () => {
    checkoutClassSwicther.backToCart()
})

purchaseBtn.addEventListener("click", () => {
    confirmationBox.showModal()
})



