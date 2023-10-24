const currentProdCard = document.querySelector(".currentProductCard")

const productBtn = document.querySelector("#productButton")
const closeProductBtn = document.querySelector(".closeProductButton")

let rgOn = false
let LDP = false

let productTimeouts = { closeTimeout: null, showTimeout: null };

const productStates = {
    openTime: 100,
    closeTime: 500,

    enableProduct: () => {
        currentProdCard.showModal()
    },
    showProduct: () => {
        currentProdCard.style.display = 'flex'
    },
    hideProduct: () => {
        currentProdCard.close()
    },
    disableProduct: () => {
        currentProdCard.style.display = 'none';
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeElement(productTimeouts, productStates.closeTime, productStates.hideProduct, productStates.disableProduct)
})

async function fillProduct(container, product) {
    const subCategoriesArray = await fetchJSON("./mock/new-sub-categories.json")
    let flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

    container.innerHTML = ''
    const closeButton = document.createElement('button')

    closeButton.innerHTML = `<svg viewBox="0 0 64 64">
    <path
        d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
</svg>`
    closeButton.classList.add('closeProductButton')

    closeButton.addEventListener('click', (e) => { // Event for closing product button
        closeElement(productTimeouts, productStates.closeTime, productStates.hideProduct, productStates.disableProduct)
    })

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('imageContainer')
    const img = document.createElement('img')

    for (let i = 0; i < flattenedSubCategories.length; i++) {
        if (flattenedSubCategories[i].id === product.category.subcategoryid) {
            img.setAttribute("src", flattenedSubCategories[i].image.slice(1))
            imageContainer.appendChild(img) // Append Image when its found
        }
    }

    container.appendChild(closeButton)
    container.appendChild(imageContainer)

    const ul = document.createElement('ul')

    const liOne = document.createElement('li')
    liOne.classList.add('singleProductTitle')
    liOne.innerHTML = `<p>${product.title}</p>`

    ul.appendChild(liOne)

    const liTwo = document.createElement('li')
    liTwo.classList.add('starsProductContainer')
    const divOne = document.createElement("div")
    createStars(divOne, product.id)
    fillStars(product.rating.rate, divOne, product.id)
    liTwo.appendChild(divOne)

    ul.appendChild(liTwo)

    const liThree = document.createElement('li')
    liThree.classList.add('baseProductCost')
    liThree.id = `baseCost-${product.id}`
    liThree.innerHTML = `<p>Cost</p>
    <h3>${product.price}</h3>`

    ul.appendChild(liThree)

    const liFour = document.createElement('li')
    liFour.classList.add("productShipping")
    if (product.shipping.price) {
        liFour.innerHTML = `<p>Shipping</p>
        <h3>${product.shipping.price}</h3>`
    } else {
        liFour.innerHTML = `<p>Shipping</p>
        <h3>$${getRandomNumber()}</h3>`
    }

    ul.appendChild(liFour)

    const liFourTwo = document.createElement('li')
    liFourTwo.classList.add("productDiscount")
    liFourTwo.id = `productDiscount-${product.id}`
    if (product.sale) {
        liFourTwo.innerHTML = `<p>Discount</p>
        <h3></h3>`
        ul.appendChild(liFourTwo)
    } 

    const liFive = document.createElement('li')
    liFive.classList.add("totalProductAmount")
    liFive.id = `totalCost-${product.id}`
    if (product.sale) {
        liFive.innerHTML = `<p>Total</p> <h2>${(product.price - product.price * (product.sale / 100).toFixed(2)).toFixed(2)}</h2>
        `
    } else{
        liFive.innerHTML = `<p>Total</p> <div><h2>${(product.price).toFixed(2)}</h2></div>
        `
    }

    ul.appendChild(liFive)

    const liSix = document.createElement('li')
    liSix.classList.add("buyerProcContainer")
    liSix.innerHTML = `<h4 class="buyerproc">
    <span class="material-symbols-outlined">
        verified_user
    </span>
    C&S+ buyer protection
</h4>
<p>We guarantee that you will receive your order or get your money back. <a href="">Learn More</a>
</p>`

    ul.appendChild(liSix)
    const liSeven = document.createElement('li')
    liSeven.classList.add("productButtonsContainer")

    ///////////

    // Amount Number
    const amountNumber = document.createElement("h2")
    amountNumber.classList.add("amountProduct")
    amountNumber.id = `amountNumber-${product.id}`
    amountNumber.textContent = `${product.amount || "1"}`

    // Minus Button
    const minusButton = document.createElement("button")
    minusButton.innerHTML = `<span class="material-symbols-outlined">arrow_downward</span>`
    minusButton.classList.add("amountProductBtn")
    minusButton.id = `minusProductBtn-${product.id}`
    minusButton.addEventListener("click", () => {
        decreaseAmount(amountNumber, product, liFour)
    })

    // Plus Button
    const plusButton = document.createElement("button")
    plusButton.innerHTML = `<span class="material-symbols-outlined">arrow_upward</span>`
    plusButton.classList.add("amountProductBtn")
    plusButton.id = `plusProductBtn-${product.id}`
    plusButton.addEventListener("click", () => {
        increaseAmount(amountNumber, product, liFour, plusButton)
    })

    liSeven.appendChild(minusButton)
    liSeven.appendChild(amountNumber)
    liSeven.appendChild(plusButton)

    //////////

    const buyNowButton = document.createElement('button')
    buyNowButton.innerHTML = `buy now`
    buyNowButton.classList.add("buyNowButton")
    buyNowButton.addEventListener("click", () => {
        if (isInCart(product.id)) return alert("Product already added to cart")
        addToCart(product, amountNumber.textContent, liFour)
        closeElement(productTimeouts, productStates.closeTime, productStates.hideProduct, productStates.disableProduct)
        if (document.querySelector(".cart").classList.contains("currentMain")) {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }, 100)
            openCart()
            return
        }
        switchMain(document.querySelector(".cart"), "flex") /// turn on cart 
        openCart() // should remove from here and redo switchMain()
    })

    liSeven.appendChild(buyNowButton)

    const addToCartButton = document.createElement('button')
    addToCartButton.innerHTML = `<span class="material-symbols-outlined"> add_shopping_cart </span>`
    addToCartButton.classList.add("addToCartButton")
    addToCartButton.addEventListener("click", () => {
        // SHOULD ADD ITEM TO CART LOCAL STORAGE
        if (isInCart(product.id)) return alert("Product already added to cart")
        addToCart(product, amountNumber.textContent, liFour)
        if (document.querySelector(".cart").classList.contains("currentMain")) {
            openCart()
        }
    })

    liSeven.appendChild(addToCartButton)

    ul.appendChild(liSeven)

    const details = document.createElement('details')
    details.innerHTML = `<summary>
    <h3>Shipping Details</h3>
</summary>
<div>
    <h4>Weight:</h4>
    <p>${product.shipping.weight}</p>
</div>
<div>
    <h4>Dimensions:</h4>
    <p>${product.shipping.dimensions}</p>
</div>
<div>
    <h4>Region:</h4>
    <p>${product.shipping.region}</p>
</div>
<div>
    <h4>Subregion: </h4>
    <p>${product.shipping.subregion}</p>
</div>`


    ul.appendChild(details)
    container.appendChild(ul)
    updateDisplayTwo(product, liFour, amountNumber)
}

function getRandomNumber() {
    return Math.floor(Math.random() * 21).toFixed(2)
}

function increaseAmount(amounth2, product, li) {
    tempAmount = amounth2.textContent

    if (tempAmount < product.stock) {
        tempAmount++
        amounth2.textContent = tempAmount
        updateDisplayTwo(product, li, amounth2)
    }
}

function decreaseAmount(amounth2, product, li) {
    tempAmount = amounth2.textContent
    if (tempAmount > 1) {
        tempAmount--
        amounth2.textContent = tempAmount
        updateDisplayTwo(product, li, amounth2)
    }
}

function updateDisplayTwo(product, li, amountNumber) {
    const plusBtnTemp = document.querySelector(`#plusProductBtn-${product.id}`)
    const minusBtnTemp = document.querySelector(`#minusProductBtn-${product.id}`)

    if (amountNumber.textContent >= product.stock) {
        plusBtnTemp.classList.add("disabledAmountProductBtn")
        plusBtnTemp.disabled = true
        minusBtnTemp.classList.remove("disabledAmountProductBtn")
    } else {
        plusBtnTemp.classList.remove("disabledAmountProductBtn")
        plusBtnTemp.disabled = false
    }

    if (amountNumber.textContent <= 1) {
        plusBtnTemp.classList.remove("disabledAmountProductBtn")
        minusBtnTemp.disabled = true
        minusBtnTemp.classList.add("disabledAmountProductBtn")
    } else {
        minusBtnTemp.disabled = false
        minusBtnTemp.classList.remove("disabledAmountProductBtn")
    }
    if (product.stock === 1) {
        plusBtnTemp.classList.add("disabledAmountProductBtn")
        plusBtnTemp.disabled = true
        minusBtnTemp.classList.add("disabledAmountProductBtn")
        minusBtnTemp.disabled = true
    }

    document.querySelector(`#baseCost-${product.id}`).querySelector("h3").textContent = `$${(product.price * amountNumber.textContent).toFixed(2)}`
    document.querySelector(`#totalCost-${product.id}`).querySelector("h2").textContent = `$${((product.price - product.price * (product.sale / 100) + Number(li.querySelector('h3').textContent.slice(1))) * amountNumber.textContent).toFixed(2)}`
    document.querySelector(`#productDiscount-${product.id}`).querySelector("h3").textContent = `-$${(((product.price * product.sale) / 100) * amountNumber.textContent).toFixed(2)}`
}

function isInCart(ID) {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == ID) {
            return true
        }
    }
    return false
}

function addToCart(product, amount, li) {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    let tempProduct = {
        "title": product.title,
        "price": product.price,
        "shipping": Number(li.querySelector('h3').textContent.slice(1)),
        "stock": product.stock,
        "id": product.id,
        "sale": product.sale,
        "amount": Number(amount) || 1,
        "category": product.category,
        "rating": product.rating,
        "totalPrice": 0
    }
    cart.push(tempProduct)
    localStorage.setItem("cart", JSON.stringify(cart))
}