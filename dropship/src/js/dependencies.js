// Search box related properties
const searchForm = document.querySelector('.search-form')
const clearBtn = document.querySelector('#clearButton')
const idSearchBtn = document.querySelector('#searchButton')
const searchInput = document.querySelector('.search-bar')
const suggestionsCard = document.querySelector(".search-suggestions")
const searchContainer = document.querySelector(".search-bar-container")

//////////// ALL JSON FILES FETCH

// const categories = await fetchJSON('./mock/categories.json')
// const subCategories = await fetchJSON('./mock/subCategories.json')
// const products = await fetchJSON('./mock/products.json')

/////////// SUB CATEGORIES AND OBJECTS FLATTENED IF NEEDED

// const flattenedSubCategories = flattenObjectArrays(subCategories)
// const flattenedProducts = flattenObjectArrays(products)

// Fetches with async await
async function fetchJSON(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching JSON:', error)
        throw error
    }
}

// Removes the parent object and puts all products in one array
function flattenObjectArrays(object) {
    const newArray = []
    for (let key in object) {
        if (Array.isArray(object[key])) {
            newArray.push(...object[key])
        }
    }
    return newArray
}

// Paths if need a random image
const imgPaths = [
    '../imgs/cat/tech/sub/pc.png',
    '../imgs/cat/tech/sub/phone.png',
    '../imgs/cat/tech/sub/printer.png',
    '../imgs/cat/tech/sub/xbox.png',
    '../imgs/cat/tech/sub/switch.png',
    '../imgs/cat/tech/sub/audiovideo.png',
    '../imgs/cat/tech/sub/smartwatch.png',
    '../imgs/cat/tech/sub/vr-headset.png',
    '../imgs/cat/tech/sub/proffcamera.png',
    '../imgs/cat/tech/sub/charger.png',
    '../imgs/cat/jewels/sub/necklase.png',
    '../imgs/cat/jewels/sub/bracelet.png',
    '../imgs/cat/jewels/sub/earrings.png',
    '../imgs/cat/jewels/sub/ring.png',
    '../imgs/cat/jewels/sub/anklet.png',
    '../imgs/cat/jewels/sub/brooch.png',
    '../imgs/cat/jewels/sub/charm.png',
    '../imgs/cat/jewels/sub/jewlsets.png',
    '../imgs/cat/jewels/sub/bodyjewl.png',
    '../imgs/cat/jewels/sub/jewlwatch.png',
    '../imgs/cat/mWear/sub/stripe-shirt.png',
    '../imgs/cat/mWear/sub/mboots.png',
    '../imgs/cat/mWear/sub/mpants.png',
    '../imgs/cat/mWear/sub/cap.png',
    '../imgs/cat/mWear/sub/suit.png',
    '../imgs/cat/mWear/sub/mjeans.png',
    '../imgs/cat/mWear/sub/sweater.png',
    '../imgs/cat/mWear/sub/leatherjacket.png',
    '../imgs/cat/mWear/sub/dress-shirt.png',
    '../imgs/cat/mWear/sub/hoodies.png',
    '../imgs/cat/fWear/sub/dress.png',
    '../imgs/cat/fWear/sub/wBoots.png',
    '../imgs/cat/fWear/sub/purse.png',
    '../imgs/cat/fWear/sub/wJeans.png',
    '../imgs/cat/fWear/sub/wSweater.png',
    '../imgs/cat/fWear/sub/wTops.png',
    '../imgs/cat/fWear/sub/skirt.png',
    '../imgs/cat/fWear/sub/wJacket.png',
    '../imgs/cat/fWear/sub/activewear.png',
    '../imgs/cat/fWear/sub/lingerie.png',
    '../imgs/cat/books/sub/romancebooks.png',
    '../imgs/cat/books/sub/childrensbook.png',
    '../imgs/cat/books/sub/sciencefiction.png',
    '../imgs/cat/books/sub/fantasybooks.png',
    '../imgs/cat/books/sub/cookbooks.png',
    '../imgs/cat/books/sub/biographybook.png',
    '../imgs/cat/books/sub/historybooks.png',
    '../imgs/cat/books/sub/travelbook.png',
    '../imgs/cat/books/sub/selfhelpbook.png',
    '../imgs/cat/books/sub/visualartbook.png',
    '../imgs/cat/kAndA/sub/babycare.png',
    '../imgs/cat/kAndA/sub/babyfood.png',
    '../imgs/cat/kAndA/sub/kidsclothes.png',
    '../imgs/cat/kAndA/sub/toysandgames.png',
    '../imgs/cat/kAndA/sub/doll.png',
    '../imgs/cat/kAndA/sub/childcarseat.png',
    '../imgs/cat/kAndA/sub/boyclothes.png',
    '../imgs/cat/kAndA/sub/girlsclothes.png',
    '../imgs/cat/beauty/sub/makeup.png',
    '../imgs/cat/beauty/sub/skincare.png',
    '../imgs/cat/beauty/sub/haircare.png',
    '../imgs/cat/beauty/sub/fragrance.png',
    '../imgs/cat/beauty/sub/bathandbody.png',
    '../imgs/cat/beauty/sub/mensgroom.png',
    '../imgs/cat/beauty/sub/beautytools.png',
    '../imgs/cat/beauty/sub/personalcare.png',
    '../imgs/cat/beauty/sub/suncare.png',
    '../imgs/cat/beauty/sub/wellness.png',
    '../imgs/cat/auto/sub/carcover.png',
    '../imgs/cat/auto/sub/carmat.png',
    '../imgs/cat/auto/sub/seatcover.png',
    '../imgs/cat/auto/sub/carstorage.png',
    '../imgs/cat/auto/sub/carphonemount.png',
    '../imgs/cat/auto/sub/carcharger.png',
    '../imgs/cat/auto/sub/cleaningkit.png',
    '../imgs/cat/auto/sub/airfreshener.png',
    '../imgs/cat/auto/sub/carlight.png',
    '../imgs/cat/auto/sub/carspoiler.png',
    '../imgs/cat/sports/sub/athleticapparel.png',
    '../imgs/cat/sports/sub/waterbottle.png',
    '../imgs/cat/sports/sub/gearsport.png',
    '../imgs/cat/sports/sub/campinggear.png',
    '../imgs/cat/sports/sub/fitnessgear.png',
    '../imgs/cat/sports/sub/bicycle.png',
    '../imgs/cat/sports/sub/scooter.png',
    '../imgs/cat/sports/sub/watergear.png',
    '../imgs/cat/sports/sub/golfgear.png',
    '../imgs/cat/sports/sub/wintergear.png',
    '../imgs/cat/hAndG/sub/furniture.png',
    '../imgs/cat/hAndG/sub/cookware.png',
    '../imgs/cat/hAndG/sub/homedecor.png',
    '../imgs/cat/hAndG/sub/gardening.png',
    '../imgs/cat/hAndG/sub/petsupplies.png',
    '../imgs/cat/hAndG/sub/homeimprove.png',
    '../imgs/cat/hAndG/sub/bathessentials.png',
    '../imgs/cat/hAndG/sub/storageorg.png',
    '../imgs/cat/hAndG/sub/lighting.png',
    '../imgs/cat/hAndG/sub/laundry.png'
]

function getRandomElement(arr) { // Get random element from array
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

function shuffle(array) { // Shuffle Array function
    let tempArray = array;
    for (let i = tempArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return tempArray;
}

const categoriesBtn = document.querySelector(".categoriesButton")
const categoryDropDown = document.querySelector(".ctDropDown")
const ctButtonSf = document.querySelector("#ctButtonSf")

let blurTimeout;
let timeOut;
let prevLength = 0
let toggle = true

function suggestionsAnimate(origin) { // Animating the searchbox
    if (origin === 'blur') {
        suggestionsCard.animate({
            gridTemplateRows: `0fr`
        }, { duration: 400, easing: 'cubic-bezier(0.42, 0, 0.58, 1)', fill: 'forwards', })
        return
    }
    suggestionsCard.animate({
        gridTemplateRows: `1fr`,
    }, { duration: 500, easing: 'cubic-bezier(0.42, 0, 0.58, 1)', fill: 'forwards', })
}

let closeCtTimeout;
let showCtTimeout;

const classSwitcher = { // Handling class switches for searchContainer and the suggestionsCard
    keyUPblur: () => {
        clearBtn.classList.remove('visible')
        idSearchBtn.classList.remove('visible')
        suggestionsAnimate('blur')
    },
    keyUPContinue: () => {
        searchContainer.classList.add("opSg")
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
        clearTimeout(showCtTimeout)

        searchContainer.classList.remove('opCt')
        suggestionsCard.classList.remove('opCt')
        suggestionsCard.classList.remove('opCtS2g')
        classSwitcher.focusBlur()
        categoryDropDown.classList.remove('ctDropDownOn')
        ctButtonSf.innerHTML = 'category'
        toggle = true

        closeCtTimeout = setTimeout(() => {
            categoryDropDown.style.display = 'none'
        }, 200)
    },

    ctOn: () => {
        clearTimeout(closeCtTimeout)
        categoryDropDown.style.display = 'flex'

        showCtTimeout = setTimeout(() => {
            searchContainer.classList.add('opCt')
            suggestionsCard.classList.add('opCt')
            suggestionsCard.classList.add('opCtS2g')
            classSwitcher.focusBlur();
            categoryDropDown.classList.add('ctDropDownOn')
            ctButtonSf.innerHTML = 'close_fullscreen'
            toggle = false
        }, 100)

    }
}

// Notificaions

const themeDropDown = document.querySelector(".themeSelector") // Theme Selector
const productAddedNotif = document.querySelector('.productAddedNotification') // Product added notifcation

const notificationArray = [themeDropDown, productAddedNotif]

function tabSelect(element, origin) { // Removing tabbing from notification hidden notification cards
    const children = element.querySelectorAll("*")
    if (origin) {
        element.setAttribute("tabindex", "-1", "autofocus")
        children.forEach((child) => {
            child.setAttribute("tabindex", "-1")
        })
        return
    }

    element.removeAttribute("tabindex")
    children.forEach((child) => {
        child.removeAttribute("tabindex")
    })
}

function notifcationToggle(currentItem) { // Toggling which notification card is currently shown
    for (let i = 0; i < notificationArray.length; i++) {
        if (notificationArray[i] !== currentItem) {
            if (notificationArray[i].classList.contains("alertOn")) {
                notificationArray[i].classList.toggle("alertOn")
                tabSelect(notificationArray[i], true)
            }
        } else {
            tabSelect(notificationArray[i], false)
        }
    }
}

function closeElement(timeouts, time, callbackClose, callbackCloseTwo, main) { // Transition function  for closing element that needs display none
    clearTimeout(timeouts.showTimeout)
    callbackClose(main)
    timeouts.closeTimeout = setTimeout(() => {
        callbackCloseTwo(main)
    }, time)
}

function showElement(timeouts, time, callbackOpen, callbackOpenTwo, main) { // Transition function for showing element that is display none
    clearTimeout(timeouts.closeTimeout)
    callbackOpen(main)
    timeouts.showTimeout = setTimeout(() => {
        callbackOpenTwo(main)
    }, time)
}

//////////// MAIN TOGGLE //////////////////

const allMains = document.querySelectorAll(".mainMain")

function switchMain(mainToTurnOn, display) { // Function fro changing "page"
    if (mainToTurnOn.classList.contains('currentMain')) {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, 100)
        return
    }
    if (mainToTurnOn === document.querySelector('.homePage')) {
        document.querySelector('header').classList.remove('smallHeader')
    } else if (!document.querySelector('header').classList.contains('smallHeader')) {
        document.querySelector('header').classList.add('smallHeader')
    }
    for (let i = 0; i < allMains.length; i++) {
        if (mainToTurnOn !== allMains[i]) {
            if (allMains[i].classList.contains("currentMain")) {
                allMains[i].classList.remove("currentMain")
                allMains[i].style.display = "none"
            }
        } else {
            mainToTurnOn.style.display = display
            mainToTurnOn.classList.add("currentMain")
        }
    }
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, 100)
}

const homeBtn = document.querySelector(".homeButton")

homeBtn.addEventListener("click", (e) => { // Home button event listenr
    e.preventDefault()
    switchMain(document.querySelector('.homePage'), "block") /// turn on home 
})

////////// END OF MAIN TOGGLE /////////////////

document.body.addEventListener('click', (e) => { // Event listener for turning off categories and loosing focus on searchInput
    if (!searchForm.contains(e.target)) classSwitcher.ctOff()
})