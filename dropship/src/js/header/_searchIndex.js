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

searchInput.addEventListener('keyup', () => { // Event listener for handling key press events in search input
    if (searchInput.value === '') {
        classSwitcher.keyUPblur()
        return
    }

    classSwitcher.keyUPContinue()
    const searchString = searchInput.value
    const filteredProducts = fuse.search(searchString)

    if (!filteredProducts?.length) {
        classSwitcher.focusBlur()
        return
    }
    suggestions(filteredProducts)
})

function suggestions(arr) {  // Filling suggestions function
    if (arr.length === prevLength) {
        return
    }
    if (!arr.length) {
        suggestionsAnimate('blur')
        return
    }

    suggestionsUl.innerHTML = ''

    let increment = 0

    for (let i = 0; i < arr.length; i++) {
        if (increment < 10) {
            if (arr[i].item.type === 'Product') {
                let li = document.createElement("li")
                let stock = 'N/A'
                if (arr[i].item.stock !== 0) stock = arr[i].item.stock
                li.innerHTML = `<p>${arr[i].item.title}</p><h6>Price: ${arr[i].item.price}$ | Stock: ${stock}</h6><h5>${arr[i].item.type}</h5>`
                suggestionsUl.appendChild(li)
            } else {
                let li = document.createElement("li")
                li.innerHTML = `<p>${arr[i].item.title}</p><h5>${arr[i].item.type}</h5>`
                suggestionsUl.appendChild(li)
            }
            increment++
            let amnt = (increment * 1.5)
            suggestionsAnimate('increase', amnt)
        } else {
            let li = document.createElement("li")
            li.classList.add("viewAll")
            li.innerHTML = `<a>View all</a>`
            suggestionsUl.appendChild(li)
            prevLength = arr.length
            return
        }
    }
}