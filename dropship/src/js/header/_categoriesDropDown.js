const technology = document.querySelector("#technology")
const ctLiDt = document.querySelectorAll(".ctLiDt")
const subCategoryList = document.querySelector('.sub-categories-ul')
const subCategoryItems = subCategoryList.querySelectorAll('li')

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
    e.addEventListener("click", () => {
        if (e.classList.contains("activeCat")) return
        setSubCats(e)
        const activeElement = document.querySelector(".activeCat")
        activeElement.classList.remove("activeCat")
        e.classList.add("activeCat")
        e.style.cursor = "default"
        e.style.setProperty("--opacity", 1)
    })

    e.addEventListener("mouseover", () => {
        if (e.classList.contains("activeCat")) {
            e.style.cursor = "default"
            return
        }
        e.style.setProperty("--opacity", 0.8)
    })

    e.addEventListener("mouseout", () => {
        e.style.cursor = "pointer"
        e.style.setProperty("--opacity", 1)
    })
})

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

        // Remove the chosen element from randomCats to avoid repetition
        randomCats.splice(randomIndex, 1);
    }
}

setSubCats(technology)

