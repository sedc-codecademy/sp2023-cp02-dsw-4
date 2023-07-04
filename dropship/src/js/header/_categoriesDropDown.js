const technology = document.querySelector("#technology")
const ctLiDt = document.querySelectorAll(".ctLiDt")
const subCategoryList = document.querySelector('.sub-categories-ul')
const subCategoryItems = subCategoryList.querySelectorAll('li')
const relevantProducts = document.querySelector('.relevant-products')

categoryDropDown.addEventListener('click', () => {
    if (!searchContainer.classList.contains('active')) return
    classSwitcher.focusBlur()
})

categoriesBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (toggle === true) {
        classSwitcher.ctOn()
        return
    }
    classSwitcher.ctOff()
})

ctLiDt.forEach((e) => {
    e.setAttribute("tabindex", 0)
    e.addEventListener("click", () => {
        if (e.classList.contains("activeCat")) return
        setSubCats(e)
        const activeElement = document.querySelector(".activeCat")
        activeElement.classList.remove("activeCat")
        e.classList.add("activeCat")
        e.style.cursor = "default"
        e.style.setProperty("--opacity", 1)
    })
    e.addEventListener("keydown", () => {
        if (e.key === 'Enter') {
            if (e.classList.contains("activeCat")) return
            setSubCats(e)
            const activeElement = document.querySelector(".activeCat")
            activeElement.classList.remove("activeCat")
            e.classList.add("activeCat")
            e.style.cursor = "default"
            e.style.setProperty("--opacity", 1)
        }
    })
})


function shuffleTwo(array) {
    let tempArray = array;
    for (let i = tempArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return tempArray;
}


async function fillRelevant(ul) {
    const products = await fetchJSON('./mock/products.json')
    const flattenedProducts = flattenObjectArrays(products)
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

    let tempArray = shuffleTwo(flattenedProducts)

    for (let i = 0; i < 2; i++) {
        const li = document.createElement("li")
        for (let j = 0; j < flattenedSubCategories.length; j++) {
            const element = flattenedSubCategories[j];
            if (element.id === tempArray[i].category.subcategoryid) {
                li.style.setProperty('--bgImg', `url(${element.image})`)
            }
        }

        const title = document.createElement("h3")
        title.innerHTML = `ONLY $${tempArray[i].price}`
        const par = document.createElement("p")
        par.innerHTML = tempArray[i].title
        li.appendChild(title)
        li.appendChild(par)
        ul.appendChild(li)
    }
}

await fillRelevant(relevantProducts)

async function setSubCats(currentCat) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const categories = await fetchJSON('./mock/categories.json')
    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

    let tempCats = []

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === currentCat.id) {
            for (let j = 0; j < flattenedSubCategories.length; j++) {
                if (categories[i].sub.includes(flattenedSubCategories[j].id)) {
                    tempCats.push(flattenedSubCategories[j])
                }
            }
            break
        }
    }

    let randomCats = [...tempCats];

    for (let i = 0; i < 5; i++) {
        // Generate a random index within the remaining range of randomCats
        const randomIndex = Math.floor(Math.random() * randomCats.length);

        // Retrieve the random element and update the subCategoryItems
        const randomCat = randomCats[randomIndex];
        subCategoryItems[i].querySelector('h3').innerHTML = randomCat.title;
        subCategoryItems[i].querySelector('p').innerHTML = randomCat.description;
        subCategoryItems[i].style.setProperty('--bgimg', `url(${randomCat.image})`);
        subCategoryItems[i].addEventListener("click", () => {
            console.log(randomCat.id)
        })
        subCategoryItems[i].addEventListener("keydown", () => {
            if (e.key === 'Enter') {
                console.log(randomCat.id)
            }
        })

        // Remove the chosen element from randomCats to avoid repetition
        randomCats.splice(randomIndex, 1);
    }
}

setSubCats(technology)

