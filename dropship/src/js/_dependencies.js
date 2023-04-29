// Search box related properties
const searchForm = document.querySelector('.search-form')
const clearBtn = document.querySelector('.clearButton')
const idSearchBtn = document.querySelector('#searchButton')
const searchInput = document.querySelector('.search-bar')
const suggestionsCard = document.querySelector(".search-suggestions")
const suggestionsUl = document.querySelector(".suggestions-items")
const searchContainer = document.querySelector(".search-bar-container")

// CATEGORIES

const categoriesBtn = document.querySelector(".categoriesButton")
const categoryDropDown = document.querySelector(".ctDropDown")
const ctLiDt = document.querySelectorAll(".ctLiDt")
const electronics = document.querySelector("#electronics")
const ctButtonSf = document.querySelector("#ctButtonSf")
const subCategoryList = document.querySelector('.sub-categories-ul')
const subCategoryItems = subCategoryList.querySelectorAll('li')

let blurTimeout;
let timeOut;
let prevLength = 0
let toggle = true

let dimeArray = [{ // Mock array for testing
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "type": 'Product',
    "price": 109.95,
    "stock": 3
},
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "type": 'Product',
    "stock": 0
},
{
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "type": 'Product',
    "stock": 12
},
{
    "id": 4,
    "title": "Pet accesories",
    "type": 'Category',
},
{
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "type": 'Product',
    "stock": 0
},
{
    "id": 6,
    "title": "Jewlery",
    "price": 168,
    "type": 'Category',
},
{
    "id": 7,
    "title": "Gadgets",
    "type": 'Category',
},
{
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "type": 'Product',
    "stock": 5
},
{
    "id": 9,
    "title": "Clothing",
    "type": 'Category',
},
{
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "type": 'Product',
    "stock": 13
},
{
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "type": 'Product',
    "stock": 234
},
{
    "id": 12,
    "title": "Electronics",
    "type": 'Category',
}]

function suggestionsAnimate(origin, amount) { // Animating the searchbox
    if (origin === 'blur') {
        suggestionsCard.animate({
            height: `0rem`
        }, { duration: 300, easing: 'ease-in-out', fill: 'forwards', })
        timeOut = setTimeout(() => {
            suggestionsCard.classList.remove("opCtSg")
            searchContainer.classList.remove("opSg")
        }, 300)
        return
    }
    suggestionsCard.animate({
        height: `${amount}rem`
    }, { duration: 300, easing: 'ease-in-out', fill: 'forwards', })
}

const classSwitcher = { // Handling class switches for searchContainer and the suggestionsCard
    keyUPblur: () => {
        clearBtn.classList.remove('visible')
        idSearchBtn.classList.remove('visible')
        suggestionsAnimate('blur')
    },
    keyUPContinue: () => {
        clearTimeout(timeOut)
        searchContainer.classList.add("opSg")
        suggestionsCard.classList.add("opCtSg")
        idSearchBtn.classList.remove('visible')
        clearBtn.classList.add('visible')
    },
    clearButtonClick: () => {
        searchInput.value = ''
        idSearchBtn.classList.remove('visible')
        suggestionsAnimate('blur')
        clearBtn.classList.remove('visible')
    },
    focusBlur: () => {
        suggestionsAnimate('blur')
        searchContainer.classList.remove('active')
        if (searchInput.value === '') return
        idSearchBtn.classList.add('visible')
    },
    focus: () => {
        searchContainer.classList.add('active')
        if (searchInput.value === '') return
        clearBtn.classList.add('visible')
    },
    ctOff: () => {
        searchContainer.classList.remove('opCt')
        suggestionsCard.classList.remove('opCt')
        suggestionsCard.classList.remove('opCtS2g')
        classSwitcher.focusBlur()
        categoryDropDown.animate([
            { transform: 'translateY(100vh)', opacity: 0 },
        ], { duration: 300, easing: 'ease-in-out', fill: 'forwards'})
        setTimeout(() => {
            categoryDropDown.style.display = 'none'
        }, 500)
        ctButtonSf.innerHTML = 'category'
        toggle = true
    },
    ctOn: () => {
        searchContainer.classList.add('opCt')
        suggestionsCard.classList.add('opCt')
        categoryDropDown.style.display = 'flex'
        setTimeout(() => {
            categoryDropDown.animate(
                [
                    { transform: 'translateY(0)', opacity: 1 }
                ]
                , { duration: 300, easing: 'ease-in-out', fill: 'forwards'})
        }, 200)
        suggestionsCard.classList.add('opCtS2g')
        classSwitcher.focusBlur()
        categoryDropDown.classList.add('activeDp')
        ctButtonSf.innerHTML = 'close_fullscreen'
        toggle = false
    }
}

const subElectronics = {
    id: 'electronics',
    cats: [{
        title: `Personal Computers`,
        description: `Get pc's, the latest components, pc accesories and everything else related to pc's.`,
        image: '../imgs/cat/tech/sub/pc.png'
    },
    {
        title: `Mobile Telephony`,
        description: `The latest mobile phones, cases and mobile phone accesories at amaizng prices!`,
        image: '../imgs/cat/tech/sub/phone.png'
    },
    {
        title: `Home Appliance`,
        description: `Stoves, washing machines, refrigerators and everthing else you can think of new or used.`,
        image: '../imgs/cat/tech/sub/wmachine.png'
    },
    {
        title: `Entertainment Appliances`,
        description: `Tv's, blu-rays, video game consoles and even older entertainment appliances all at a very cheap price!`,
        image: '../imgs/cat/tech/sub/xbox.png'
    },
    {
        title: `HandHeld entertainment`,
        description: `Tablets, and other stuff.`,
        image: '../imgs/cat/tech/sub/switch.png'
    }]
}

const subJewlery = {
    id: 'jewellery',
    cats: [{
        title: `Neck wear`,
        description: `Necklaces, and other neck wear in gold silver and diamond linen.`,
        image: '../imgs/cat/jewels/sub/necklase.png'
    },
    {
        title: `Hand wear`,
        description: `Bracelets, rings, wedding rings other stuff in gold silver and diamond linen.`,
        image: '../imgs/cat/jewels/sub/ring.png'
    },
    {
        title: `Pearcings`,
        description: `All kinds of pearcings in gold silver and diamond linen`,
        image: '../imgs/cat/jewels/sub/pearcing.png'
    },
    {
        title: `Some other stuff`,
        description: `A lot of other stuff in gold silver and diamond linen`,
        image: '../imgs/cat/jewels/sub/rings.png'
    },
    {
        title: `Even more stuff`,
        description: `An abundance of other stuff in gold silver and diamond linen`,
        image: '../imgs/cat/sub/teddy.png'
    }]
}

const subMClothes = {
    id: 'mensWear',
    cats: [{
        title: `Shirts`,
        description: `Polos, long-sleeved, short-sleeved, long-sleeved polos and all other shirts`,
        image: '../imgs/cat/mWear/sub/stripe-shirt.png'
    },
    {
        title: `Foot Wear`,
        description: `Boots, jordans, sketchers adidas, nike and everyhing inbetween.`,
        image: '../imgs/cat/mWear/sub/mboots.png'
    },
    {
        title: `Leg wear`,
        description: `Jeans, pants, joggers and every other kind of leg wear.`,
        image: '../imgs/cat/mWear/sub/mjeans.png'
    },
    {
        title: `Head wear`,
        description: `Head wear, all kinds of hats. Stay protected in the summer and warm in the winter!`,
        image: '../imgs/cat/mWear/sub/cap.png'
    },
    {
        title: `Space Suits`,
        description: `For when you want to go to the moon or even mars`,
        image: '../imgs/cat/mWear/sub/spaceSuit.png'
    }]
}

const subWClothes = {
    id: 'womensWear',
    cats: [{
        title: `Dresses`,
        description: `All kinds of dresses and in all the colors they come in. We even have wedding dresses!`,
        image: '../imgs/cat/fwear/sub/dress.png'
    },
    {
        title: `Foot wear`,
        description: `Every kind of shue you can think of at great prices.`,
        image: '../imgs/cat/fwear/sub/wboots.png'
    },
    {
        title: `Carry-ons`,
        description: `All the purses you can think of at great prices.`,
        image: '../imgs/cat/fwear/sub/purse.png'
    },
    {
        title: `Leg wear`,
        description: `Jeans, pants, joggers and every other kind of leg wear, but for women`,
        image: '../imgs/cat/fwear/sub/wjeans.png'
    },
    {
        title: `Accessories`,
        description: `All kinds of accessories you could ever need or want.`,
        image: '../imgs/cat/sub/teddy.png'
    }]
}

let subCtArray = [subElectronics, subJewlery, subMClothes, subWClothes]

document.body.addEventListener('click', (e) => { // Event listener for turning off categories adn loosing focus on searchInput
    if (!searchForm.contains(e.target)) classSwitcher.ctOff()
})