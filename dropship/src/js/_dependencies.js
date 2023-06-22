// Search box related properties
const searchForm = document.querySelector('.search-form')
const clearBtn = document.querySelector('.clearButton')
const idSearchBtn = document.querySelector('#searchButton')
const searchInput = document.querySelector('.search-bar')
const suggestionsCard = document.querySelector(".search-suggestions")
const searchContainer = document.querySelector(".search-bar-container")

// Fetches with async await
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error;
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

//////////// ALL JSON FILES FETCH

// const categories = await fetchJSON('./mock/categories.json')
// const subCategories = await fetchJSON('./mock/subCategories.json')
// const products = await fetchJSON('./mock/products.json')

/////////// SUB CATEGORIES AND OBJECTS FLATTENED IF NEEDED

// const flattenedSubCategories = flattenObjectArrays(subCategories)
// const flattenedProducts = flattenObjectArrays(products)


function switchMain(mainToTurnOff, mainToTurnOn) {
    mainToTurnOff.style.display = "none"
    mainToTurnOn.style.display = "block"
} ///// SHOULD CALL WHEN TRANSITIONING FROM ONE MAIN TO THE OTHER *** NOT DONE DONT USE

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

document.body.addEventListener('click', (e) => { // Event listener for turning off categories adn loosing focus on searchInput
    if (!searchForm.contains(e.target)) classSwitcher.ctOff()
})