const options = { // Options for fuse.js, searcing based on the value for "title"
    shouldSort: true,
    threshold: 0.4,
    keys: ['title']
}

const fuse = new Fuse(dimeArray, options) // Creating an instance of fuse

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
    console.log(e) // TODO ENTER key
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
    // if (arr.length === prevLength) {
    //     return
    // }
    if (!arr.length) {
        suggestionsAnimate('blur')
        return
    }

    suggestionsUl.innerHTML = ''

    let increment = 0

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        if (increment < 6) {

            let stock = 'N/A'
            if (arr[i].item.stock !== 0) stock = arr[i].item.stock
            li.innerHTML = `<p>${arr[i].item.title}</p><h6>Price: ${arr[i].item.price}$ | Stock: ${stock}</h6`
            suggestionsUl.appendChild(li)

            increment++
            let amnt = (increment * 3)
            suggestionsAnimate('increase', amnt)
        } else {
            li.classList.add("viewAll")
            li.innerHTML = `<a>View all</a>`
            suggestionsUl.appendChild(li)
            break
            // prevLength = arr.length
        }
    }
}