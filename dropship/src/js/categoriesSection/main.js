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
        let a = document.createElement("a");
        a.style.color = 'green'
        a.addEventListener("click", () => {
            console.log(product.id)
            printProduct(product, singleProductDiv)
        })

        a.innerHTML += `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}$</p>
            <p>Rating: ${product.rating.rate}</p>
            `

        elemetToPrint.appendChild(a);
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

    tempCats.forEach((subCategory) => {
        //  if (subCategory.id === ID) { //// WILL ONLY SHOW CHOSEN CATEGORY
        let a = document.createElement("a");
        a.addEventListener("click", () => {
            console.log(subCategory.id)
            setSubCatsTwoCtTab(subCategory.id, productsDiv)
        })

        a.innerHTML += `
            <h3>${subCategory.title}</h3>
            <p>${subCategory.description}</p>
            <p>${subCategory.categoryTitle}</p>`

        element.appendChild(a);
        // } //// END OF IF

    })
}

// FILTERS

let filterHelper = {
    price: null,
    size: null,
    origin: null
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

applyFiltersBtn.addEventListener("click", () => {
    console.log("Price", filterHelper.price)
    console.log("Size", filterHelper.size)
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


        filteredProducts = displayedProducts.filter(product => product.price <= filterHelper.price)


    }

    if (filterHelper.size !== null) {

        for (let j = 0; j < filteredProducts.length; j++) {

            for (let i = 0; i < filteredProducts[j].variants.size.length; i++) {

                if (filteredProducts[j].variants.size[i].option !== filterHelper.size) {
                    console.log(filteredProducts[j])
                    filteredProducts.splice(j, 1)
                    //filteredProducts = displayedProducts.filter(product => product.id === displayedProducts[j].id)

                }
                //filteredProducts = displayedProducts.filter(product => product.variants.size.option === filterHelper.size)
            }
        }
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

    displayedProducts.sort((a, b) => {
        return a.price - b.price;
    })

    printProducts(displayedProducts, productsDiv);
}

function sortByHighestPrice() {

    displayedProducts.sort((a, b) => {
        return b.price - a.price;
    })

    printProducts(displayedProducts, productsDiv);
}

function sortByHighestRating() {
    displayedProducts.sort((a, b) => {
        return b.rating.rate - a.rating.rate;
    })

    printProducts(displayedProducts, productsDiv);
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






