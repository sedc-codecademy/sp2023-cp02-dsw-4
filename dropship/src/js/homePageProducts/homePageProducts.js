async function setProducts(div, iterationCount, discount, shouldDiscount, array) {
  const subCategoriesArray = await fetchJSON("./mock/new-sub-categories.json")
  let flattenedSubCategories = flattenObjectArrays(subCategoriesArray)
  let prodcuts
  let flattenedProducts
  let shuffledProducts

  if (!array) {
    prodcuts = await fetchJSON("./mock/products.json")
    flattenedProducts = flattenObjectArrays(prodcuts)
    shuffledProducts = shuffle(flattenedProducts)
  } else {
    shuffledProducts = array
  }

  let tempProds = []

  let ul = document.createElement("ul")
  if (discount) {
    for (let j = 0; j < shuffledProducts.length && tempProds.length < iterationCount; j++) {
      if (shuffledProducts[j].sale) {
        tempProds.push(shuffledProducts[j])
      }
    }
  } else {
    if (array) {
      tempProds = array
    } else {
      tempProds = shuffledProducts.slice(0, iterationCount)
    }
  }

  for (let i = 0; i < tempProds.length; i++) {
    const element = tempProds[i]
    let li = document.createElement("li")
    li.setAttribute("tabindex", 0)
    li.addEventListener("click", (e) => {
      // Product clicked
      // SHOULD CALL switchMain() when these event listeners are clicked *** IGNORE FOR NOW
      console.log(element.id, e)
      console.log(element.rating.rate)
      showElement(productTimeouts, productStates.openTime, productStates.showProduct, productStates.enableProduct)
      fillProduct(currentProdCard, element)
    })
    li.addEventListener("keydown", (e) => {
      // SHOULD CALL switchMain() when these event listeners are clicked *** IGNORE FOR NOW
      if (e.key === 'Enter') {
        console.log(element.id, e)
        showElement(productTimeouts, productStates.openTime, productStates.showProduct, productStates.enableProduct)
      fillProduct(currentProdCard, element)
      }
    })

    let img = document.createElement("img")
    for (let i = 0; i < flattenedSubCategories.length; i++) {
      if (flattenedSubCategories[i].id === element.category.subcategoryid) {
        img.setAttribute("src", flattenedSubCategories[i].image.slice(1))
        li.appendChild(img) // Append Image when its found
      }
    }

    let title = document.createElement("p")
    title.innerHTML = `${element.title}`
    li.appendChild(title) // Append Title

    let h4 = document.createElement("h4")

    if (shouldDiscount) { // Should product have discount shown
      let h4discount = document.createElement("h4")
      let h2percentage = document.createElement("h2")
      if (element.sale) { // If the product has a discount, calculate the discounted price and display the discount percentage
        let discountPercentage = element.sale
        let discountedPrice = (element.price - element.price * (discountPercentage / 100)).toFixed(2)
        let originalPrice = element.price
        h2percentage.innerHTML = `${discountPercentage}% Off`
        h4discount.innerHTML = `$${originalPrice}`
        h4.innerHTML = `$${discountedPrice}`
        h4discount.classList.add("discount-price")
        h2percentage.classList.add("discount-percentage")
      } else { // If the product does not have a discount, display the original price without any discount information
        h4.innerHTML = `$${element.price}`
      }

      createStars(li, element.id)
      fillStars(element.rating.rate, li,  element.id)

      li.appendChild(h2percentage)
      li.appendChild(h4discount)
      li.appendChild(h4)
    } else { // If product should not have a discount, display the original price without any discount information
      h4.innerHTML = `$${element.price}`
      li.appendChild(h4)
    }

    ul.appendChild(li) // Append Li at end
  }
  div.appendChild(ul)
}

setProducts(document.querySelector("#products-div-one"), 10, true, true, false)
setProducts(document.querySelector("#products-div-two"), 15, false, true, false)

setProducts(document.querySelector(".list-pr"), 10, false, true, false)
setProducts(document.querySelector(".list-pr-two"), 10, false, true, false)