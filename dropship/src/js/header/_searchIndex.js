const suggestionsUl = document.querySelector(".suggestions-items")
const results = suggestionsUl.querySelectorAll("a");


console.log(results,suggestionsUl)

results.forEach(e =>{
   
})

const options = { // Options for fuse.js, searcing based on the value for "title"
    shouldSort: true,
    threshold: 0.4,
    keys: ['title']
}

const productsArray = await fetchJSON('./mock/new-products.json')

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
    if (!arr.length) {
        suggestionsAnimate('blur')
        return
    }

    suggestionsUl.innerHTML = ''

    // for (let i = 0; i < arr.length; i++) {
    //     let a = document.createElement("a")
    //     if (i < 6) {
    //         a.innerHTML = `<p>${arr[i].item.title}</p><h5>${arr[i].item.categoryTitle}</h5><div class="divider"></div><h6>${arr[i].item.subCategoryTitle}</h6>`
    //         suggestionsUl.appendChild(a)
    //         a.addEventListener("click", () =>{
    //             console.log(`Result ${arr[i].item.title} has been clicked`)
    //         })
    //         suggestionsAnimate('increase')
    //     } else {
    //         a.classList.add("viewAll")
    //         a.innerHTML = `View all`
    //         suggestionsUl.appendChild(a)
    //         a.addEventListener("click", () =>{
    //             console.log("view all has been clicked")
    //         })
    //         break
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", "");
        if (i < 6) {
            a.innerHTML = `<p>${arr[i].item.title}</p><h5>${arr[i].item.categoryTitle}</h5><div class="divider"></div><h6>${arr[i].item.subCategoryTitle}</h6>`;
            suggestionsUl.appendChild(a);
            a.addEventListener("click", () => {
                console.log(`Result ${arr[i].item.title} has been clicked`);
            });
            suggestionsAnimate('increase');
        } else {
            a.classList.add("viewAll");
            a.innerHTML = `View all`;
            suggestionsUl.appendChild(a);
            a.addEventListener("click", () => {
                console.log("View all has been clicked");
            });
            break;
        }
    }
    
}