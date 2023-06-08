categoryDropDown.addEventListener('click', ()=>{
    if(!searchContainer.classList.contains('active')) return
    classSwitcher.focusBlur()
    console.log("di2313")
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

function setSubCats(currentCat) {
    let tempCat
    for (let i = 0; i < subCtArray.length; i++) {
        if (subCtArray[i].id === currentCat.id) {
            tempCat = subCtArray[i]
            break
        }
    }
    for (let i = 0; i < tempCat.cats.length; i++) {
        subCategoryItems[i].querySelector('h3').innerHTML = tempCat.cats[i].title
        subCategoryItems[i].querySelector('p').innerHTML = tempCat.cats[i].description
        subCategoryItems[i].style.setProperty('--bgimg', `url(${tempCat.cats[i].image})`)
    }
}

setSubCats(electronics)

