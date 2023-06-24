const productDivOne = document.querySelector("#products-div-one");
const productDivTwo = document.querySelector("#products-div-two");



async function setProducts(div, iterationCount) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const prodcuts = await fetchJSON('./mock/new-products.json')
    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)
    const flattenedProducts = flattenObjectArrays(prodcuts)

    let shuffledSubCats = shuffle(flattenedSubCategories)
    let shuffledProducts = shuffle(flattenedProducts)

    for (let i = 0; i < 2; i++) {
        let productsFound = shuffledProducts.filter(e => shuffledSubCats[i].products.includes(e.id))
        let divOne = document.createElement('div')
        let divTwo = document.createElement('div')

        for (let j = 0; j < iterationCount; j++) {
            let section = document.createElement("section")
            let img = document.createElement("img")
            img.setAttribute("src", shuffledSubCats[i].image.slice(1))
            let a = document.createElement("a")
            a.innerHTML = `${productsFound[j].title}`
            a.setAttribute("href", "javascript:void(0)")
            a.addEventListener("click", (e) => { // Product clicked 
                // SHOULD CALL switchMain() when these event listeners are clicked **** IGNORE FOR NOW
                console.log(productsFound[j].id, e)
            })
            let h4 = document.createElement("h4")
            h4.innerHTML = `$${productsFound[j].price}`
            section.appendChild(img)
            section.appendChild(a)
            section.appendChild(h4)

            if (i === 0) {
                divOne.appendChild(section)
            } else {
                divTwo.appendChild(section)
            }
        }
        div.appendChild(divOne)
        div.appendChild(divTwo)
    }
}

function shuffle(array) {
    let tempArray = array
    for (let i = tempArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return tempArray
}

setProducts(productDivOne, 9)
setProducts(productDivTwo, 5)