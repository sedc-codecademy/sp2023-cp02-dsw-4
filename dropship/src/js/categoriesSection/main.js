console.log("Test test")
const selectedCategory = document.getElementById("selectedCategory")
const subCategoriesDiv = document.getElementById("subCategories");
console.log(subCategoriesDiv)
const productsDiv = document.getElementById("products");
const singleProductDiv = document.getElementById("singleProduct");

const filterBtn = document.getElementById("filterBtn");
const filters = document.getElementById("filters");

filters.style.display = "none"

const sortBtn = document.getElementById("sortBtn");
const sortingSection = document.getElementById("sortingSection")
sortingSection.style.display = "none"
const highestRatingBtn = document.getElementById("highest-rating");
const highestPriceBtn = document.getElementById("highest-price");
const lowestPriceBtn = document.getElementById("lowest-price");

// Left and Right buttons
const leftScrollSubButton = document.querySelector('#leftSubScrollButton')
const rightScrollSubButton = document.querySelector('#rightSubScrollButton')

let displayedProducts = [];
let filteredProducts = [];
let filterByPrice = [];

async function setSubCatsTwoCtTab(ID, element) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const products = await fetchJSON('./mock/new-products.json')

    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)
    const flattenedProducts = flattenObjectArrays(products)


    displayedProducts = [];

    for (let i = 0; i < flattenedSubCategories.length; i++) {
        if (flattenedSubCategories[i].id === ID) {
            for (let j = 0; j < flattenedProducts.length; j++) {
                if (flattenedSubCategories[i].products.includes(flattenedProducts[j].id)) {
                    displayedProducts.push(flattenedProducts[j])
                }
            }
            break
        }
    }

    printProducts(displayedProducts, element)

    console.log(displayedProducts)
}

function printProducts(arrayOfProducts, elemetToPrint) {
    elemetToPrint.innerHTML = "";
    arrayOfProducts.forEach(product => {
        // let a = document.createElement("a");
        // a.style.color = 'green'
        // a.addEventListener("click", () => {
        //     console.log(product.id)
        //     printProduct(product, singleProductDiv)
        // })

        // a.innerHTML += `
        //     <h3>${product.title}</h3>
        //     <p>${product.description}</p>
        //     <p>Price: ${product.price}$</p>
        //     <p>Rating: ${product.rating.rate}</p>
        //     `

        let section = document.createElement("section")
        let img = document.createElement("img")
        img.setAttribute("src", getRandomImgPath(imgPaths).slice(1))

        let a = document.createElement("a")
        a.innerHTML = `${product.title}`
        a.setAttribute("href", "javascript:void(0)")
        a.addEventListener("click", (e) => {
            // Product clicked
            console.log(product.id)
            printProduct(product, singleProductDiv)
        })

        let h4 = document.createElement("h4")
        let h4discount = document.createElement("h4")

        if (product.sale) {
            // If the product has a sale, calculate the discounted price and display the discount percentage
            let discountPercentage = product.sale
            let discountedPrice = (
                product.price -
                product.price * (discountPercentage / 100)
            ).toFixed(2)
            let originalPrice = product.price

            h4discount.innerHTML = `$${originalPrice}`
            h4.innerHTML = `$${discountedPrice}`
            h4discount.classList.add("discount-price")
        } else {
            // If the product does not have a sale, display the original price without any discount information
            h4.innerHTML = `$${product.price}`
        }

        section.appendChild(img)
        section.appendChild(a)
        section.appendChild(h4discount)
        section.appendChild(h4)

        elemetToPrint.appendChild(section)
    })
}

function printProduct(product, element) {

    element.innerHTML = "";

    let a = document.createElement("a");
    a.style.color = 'pink'
    a.innerHTML += `
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>${product.description}</p>
        <p>Rating: ${product.rating.rate}</p>
        <p>In Stock: ${product.stock}</p>
        `
    element.appendChild(a);

    //needs to call a function on click for adding a product to a cart and buy now
    element.innerHTML += `
          <button value="${product.id}" onclick="addToCart(this, xxx)"> Add To Cart </button>     
          <button value="${product.id}" onclick="buyNow(this, xxx)"> Buy Now </button> `

}


async function printResults(element, ID) { //// NEEDS ID PARAM DOESNT NEED SUBCAT PARAM
    // SHOULD DO SOMETHING SIMILAR LIKE IN PRINT PRODUCTS USING FLATTENED SUBCATEGORIES FETCH *** LOOK TO LINE 35 in dependecies File for fetch

    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const categories = await fetchJSON('./mock/categories.json')
    const products = await fetchJSON('./mock/products.json')
    const flattenedProducts = flattenObjectArrays(products)
    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

    element.innerHTML = "";
    selectedCategory.innerHTML = "";
    let tempCats = []
    displayedProducts = []

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === ID) {
            selectedCategory.innerHTML = `Category: ${categories[i].title}`
            for (let j = 0; j < flattenedSubCategories.length; j++) {
                if (categories[i].sub.includes(flattenedSubCategories[j].id)) {
                    tempCats.push(flattenedSubCategories[j])
                }
            }
            break
        }
    }

    for (let i = 0; i < flattenedProducts.length; i++) {
        if (flattenedProducts[i].category.categoryid === ID) {
            displayedProducts.push(flattenedProducts[i])
        }
    }

    printProducts(displayedProducts, productsDiv)

    // tempCats.forEach((subCategory) => {
    //     //  if (subCategory.id === ID) { //// WILL ONLY SHOW CHOSEN CATEGORY
    //     let a = document.createElement("a");
    //     a.addEventListener("click", () => {
    //         console.log(subCategory.id)
    //         setSubCatsTwoCtTab(subCategory.id, productsDiv)
    //     })

    //     a.innerHTML += `
    //         <h3>${subCategory.title}</h3>
    //         <p>${subCategory.description}</p>
    //         <p>${subCategory.categoryTitle}</p>`

    //     element.appendChild(a);
    //     // } //// END OF IF

    // })


    // Resets the arrays and html each time we choose a new category
    document.querySelector(".subCatsScrollUL").innerHTML = ''
    scrollSubCatsLists = []
    hiddenLeftSubCats = []
    hiddenRightSubCats = []
    shownMiddleSubCats = []

    // Calls fill Categories to create the li's for each sub category and also sets an event listener using the callback
    fillCategoriesScrollList(document.querySelector(".subCatsScrollUL"), tempCats, callBackCategories, 'scrollCatLiTwo')

    scrollSubCatsLists = document.querySelectorAll('.scrollCatLiTwo')
    setButtonsOnStart()
}

// Callback for subcategories clicked
function callBackCategories(e) {
    setSubCatsTwoCtTab(e.id, productsDiv)
}
// Makes arrays at start for further use
let scrollSubCatsLists = []
let hiddenLeftSubCats = []
let hiddenRightSubCats = []
let shownMiddleSubCats = []

function setButtonsOnStart() {
    for (let i = 0; i < scrollSubCatsLists.length; i++) {
        const element = scrollSubCatsLists[i]
        if (i < 5) {
            shownMiddleSubCats.push(element)
        } else {
            hiddenRightSubCats.push(element)
        }
    }

    updateButtonStates(scrollSubCatsLists, leftScrollSubButton, rightScrollSubButton)
}


function handleLeftScrollToButtonClick() {
    updateButtonStates(scrollSubCatsLists, leftScrollSubButton, rightScrollSubButton)

    if (leftScrollSubButton.disabled) {
        return // Do nothing if the button is disabled
    }

    [hiddenLeftSubCats, hiddenRightSubCats, shownMiddleSubCats] = getFromLeft(hiddenLeftSubCats, hiddenRightSubCats, shownMiddleSubCats)
    changeLeft(shownMiddleSubCats, hiddenRightSubCats)

    updateButtonStates(scrollSubCatsLists, leftScrollSubButton, rightScrollSubButton)
    // Update button states after scroll function
}

function handleRightScrollToButtonClick() {
    updateButtonStates(scrollSubCatsLists, leftScrollSubButton, rightScrollSubButton)

    if (rightScrollSubButton.disabled) {
        return // Do nothing if the button is disabled
    }

    [hiddenLeftSubCats, hiddenRightSubCats, shownMiddleSubCats] = getFromRight(hiddenLeftSubCats, hiddenRightSubCats, shownMiddleSubCats)
    changeRight(shownMiddleSubCats, hiddenLeftSubCats)
    updateButtonStates(scrollSubCatsLists, leftScrollSubButton, rightScrollSubButton)
    // Update button states after scroll function
}

// Add event listeners to the buttons
leftScrollSubButton.addEventListener('click', handleLeftScrollToButtonClick)
rightScrollSubButton.addEventListener('click', handleRightScrollToButtonClick)

// FILTERS

let filterHelper = {
    price: null,
    size: null,
    region: null
}

console.log(filterHelper)

filterBtn.addEventListener("click", () => {
    if (filters.style.display == "block") {
        filters.style.display = "none"
    } else {
        filters.style.display = "block"
    }
    const prices = displayedProducts.map(o => o.price)
    console.log(prices)
    let maxValue = Math.max(...prices)
    console.log(maxValue);
    slider.setAttribute("max", maxValue.toString())
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let size = document.getElementById("size")
let applyFiltersBtn = document.getElementById("applyFilters")
let origin = document.getElementById("region")
console.log(displayedProducts)


output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    if (this.value > 1) {
        filterHelper.price = this.value;
    }
}

size.addEventListener("change", (e) => {
    let chosenOption = e.target.value;
    if (chosenOption !== "all") {
        filterHelper.size = chosenOption;
    } else {
        filterHelper.size = null
    }
    console.log(chosenOption);
    console.log(filterHelper.size);
})

origin.addEventListener("change", (e) => {
    let chosenOption = e.target.value;
    if (chosenOption !== "all") {
        filterHelper.region = chosenOption;
    } else {
        filterHelper.region = null
    }
    console.log(chosenOption);
    console.log(filterHelper.region);
})

applyFiltersBtn.addEventListener("click", () => {
    console.log("Price", filterHelper.price)
    console.log("Size", filterHelper.size)
    console.log("Region", filterHelper.region)
    filteredProducts = displayedProducts
    // if (filterHelper.price !== null && filterHelper.size !== null) {
    //     for (product of displayedProducts) {
    //         for (let i = 0; i < product.variants.size; i++) {
    //             if (product.variants.size[i].option === filterHelper.size) {
    //                 filteredProducts = displayedProducts.filter(product => product.price < filterHelper.price && product.variants.size[i].option === filterHelper.size)
    //             }
    //             return
    //         }

    //     }

    //     //filteredProducts = displayedProducts.filter(product => product.price < filterHelper.price).filter(product => product.variants.size.includes(filterHelper.size))
    //     //filteredProducts = displayedProducts.filter(product => product.price < filterHelper.price && product.variants.size.includes(filterHelper.size))

    // }

    if (filterHelper.price !== null) {
        filteredProducts = filteredProducts.filter(product => product.price <= filterHelper.price)
    }

    if (filterHelper.size !== null) {
        let productsWithSelectedSize = [];

        filteredProducts.forEach((product) => {
            if (product.variants && product.variants.size && product.variants.size.length > 0) {
                let hasSelectedSize = product.variants.size.some((size) => {
                    return size.option === filterHelper.size
                })

                if (hasSelectedSize) {
                    productsWithSelectedSize.push(product)
                }
            }
        })
        filteredProducts = productsWithSelectedSize
    }

    if(filterHelper.region !== null) {
        filteredProducts = filteredProducts.filter(product => product.shipping.region === filterHelper.region)
    }
    printProducts(filteredProducts, productsDiv)
    console.log(filteredProducts)
})

// priceRange.addEventListener("click", (e) => {

//     let chosenOption = e.target.value;
//     console.log(chosenOption);

//     if (chosenOption === "0-50") {
//         if (filteredProducts.length === 0) {
//             filteredProducts = displayedProducts.filter(product => product.price <= 50)
//         } else {
//             filteredProducts = filteredProducts.filter(product => product.price <= 50)
//         }
//         // return filteredProducts
//     } else if (chosenOption === "51-100") {
//         if (filteredProducts.length === 0) {
//             filteredProducts = displayedProducts.filter(product => product.price > 50 && product.price <= 100)

//         } else {
//             filteredProducts = filteredProducts.filter(product => product.price > 50 && product.price <= 100)
//         }
//     } else if (chosenOption === "101-200") {
//         if (filteredProducts.length === 0) {
//             filteredProducts = displayedProducts.filter(product => product.price > 100 && product.price <= 200)
//         } else {
//             filteredProducts = filteredProducts.filter(product => product.price > 100 && product.price <= 200)
//         }
//     } else if (chosenOption === "200+") {
//         if (filteredProducts.length === 0) {
//             filteredProducts = displayedProducts.filter(product => product.price > 200)
//         } else {
//             filteredProducts = filteredProducts.filter(product => product.price > 200)
//         }
//     } else {
//         if (filteredProducts.length === 0) {
//             filteredProducts = displayedProducts
//         }
//     }

//     printProducts(filteredProducts, productsDiv)
//     console.log("Displayed Products", displayedProducts)
//     console.log("Filtered products", filteredProducts)
// })


// SORTING
sortBtn.addEventListener("click", () => {
    if (sortingSection.style.display == "block") {
        sortingSection.style.display = "none"
    } else {
        sortingSection.style.display = "block"
    }
})

function sortByLowestPrice() {

    let lowestPriceSort = [];
    if(filteredProducts.length  != 0) {
        filteredProducts.sort((a, b) => {
            return a.price - b.price;
        })
        lowestPriceSort = filteredProducts;
    } else {
        displayedProducts.sort((a, b) => {
            return  a.price - b.price;
        })
        lowestPriceSort = displayedProducts;
    }

    printProducts(lowestPriceSort, productsDiv);
}

function sortByHighestPrice() { // Should check fitlered first

    let highestPriceSort = [];
    if(filteredProducts.length  != 0) {
        filteredProducts.sort((a, b) => {
            return b.price - a.price;
        })
        highestPriceSort = filteredProducts;
    } else {
        displayedProducts.sort((a, b) => {
            return  b.price - a.price;
        })
        highestPriceSort = displayedProducts;
    }

    printProducts(highestPriceSort, productsDiv);
}

function sortByHighestRating() {

    let highestRatingSort = [];
    if(filteredProducts.length  != 0) {
        filteredProducts.sort((a, b) => {
            return b.rating.rate - a.rating.rate;
        })
        highestRatingSort = filteredProducts;
    } else {
        displayedProducts.sort((a, b) => {
            return  b.rating.rate - a.rating.rate;
        })
        highestRatingSort = displayedProducts;
    }

    printProducts(highestRatingSort, productsDiv);
}

lowestPriceBtn.addEventListener("click", () => {
    sortByLowestPrice();
})

highestPriceBtn.addEventListener("click", () => {
    sortByHighestPrice();
})

highestRatingBtn.addEventListener("click", () => {
    sortByHighestRating();
})