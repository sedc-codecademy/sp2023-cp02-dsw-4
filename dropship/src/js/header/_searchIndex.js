const suggestionsUl = document.querySelector(".suggestions-items")
const results = suggestionsUl.querySelectorAll("a");

const options = { // Options for fuse.js, searcing based on the value for "title"
    shouldSort: true,
    threshold: 0.4,
    keys: ['title']
}

const subCategoriesArray2 = await fetchJSON("./mock/new-sub-categories.json")
let flattenedSubCategorie2s = flattenObjectArrays(subCategoriesArray2)

function getImage(subId) {
    let path = ''
    for (let i = 0; i < flattenedSubCategorie2s.length; i++) {
        if (flattenedSubCategorie2s[i].id === subId) {
            path = flattenedSubCategorie2s[i].image.slice(1)
        }
    }
    console.log(path)
    return path
}

const productsArray = await fetchJSON('./mock/products.json')

const flattenedProducts = flattenObjectArrays(productsArray)

const fuse = new Fuse(flattenedProducts, options) // Creating an instance of fuse for fuzzy search

clearBtn.addEventListener('click', (e) => { // Event listener for clicking the clear button
    e.preventDefault()
    classSwitcher.clearButtonClick()
})

searchInput.addEventListener('focus', function () { // Event listener for focusing on the search input 
    classSwitcher.focus()
})

clearBtn.addEventListener('mousedown', () => { // Event listener for fixing bug with clear button and loosing focus
    clearTimeout(blurTimeout)
})

idSearchBtn.addEventListener('click', () => { // Event listener for clicking the search button
    console.log("Search button")
}) // TODO

searchInput.addEventListener('keyup', (e) => { // Event listener for handling key press events in search input
    if (e.key === 'Enter') { // NEED TO DO SEARCH FUNCTION IN /CATEGORIE-SECTION/MAIN.JS
        console.log("enetr Has been pressed should search items")
        return
    }
    if (searchInput.value === '') {
        classSwitcher.keyUPblur()
        return
    }

    classSwitcher.keyUPContinue()
    const searchString = searchInput.value
    const filteredProducts = fuse.search(searchString)

    if (!filteredProducts?.length) {
        // classSwitcher.focusBlur()
        suggestionsAnimate('blur')
        return
    }
    suggestions(filteredProducts)
})

function suggestions(arr) {  // Filling suggestions function
    if (!arr.length) {
        suggestionsAnimate('blur')
        return
    }

    suggestionsUl.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        li.setAttribute("tabindex", 0)
        if (i < 6) {
            console.log(arr[i].item)
            li.innerHTML = `<div> <img src="${getImage(arr[i].item.category.subcategoryid)}"></img><p>${arr[i].item.title}</p></div>  <div><h6>${arr[i].item.category.subcategorytitle}</h6><div class="divider"></div><h5>${arr[i].item.category.categorytitle}</h5></div>`
            suggestionsUl.appendChild(li)
            li.addEventListener("click", () => {
                console.log(`Result ${arr[i].item.title} has been clicked`)
                showElement(productTimeouts, productStates.openTime, productStates.showProduct, productStates.enableProduct)
                fillProduct(currentProdCard, arr[i].item)
            })
            li.addEventListener("keydown", (e) => {
                if (e.key === 'Enter') {
                    console.log(`Result ${arr[i].item.title} has been clicked`)
                    showElement(productTimeouts, productStates.openTime, productStates.showProduct, productStates.enableProduct)
                    fillProduct(currentProdCard, arr[i].item)
                }
            })
            suggestionsAnimate('increase')
        } else {
            li.classList.add("viewAll")
            li.innerHTML = `View all`
            suggestionsUl.appendChild(li)
            li.addEventListener("click", () => {
                console.log("View all has been clicked")
            })
            li.addEventListener("keydown", (e) => {
                if (e.key === 'Enter') {
                    console.log("View all has been clicked")
                }
            })
            break
        }
    }
}