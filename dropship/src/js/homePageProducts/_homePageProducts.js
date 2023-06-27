const productDivOne = document.querySelector("#products-div-one");
const productDivTwo = document.querySelector("#products-div-two");

async function setProducts(div, iterationCount) {
  const subCategoriesArray = await fetchJSON("./mock/new-sub-categories.json");
  const prodcuts = await fetchJSON("./mock/products.json");
  const flattenedSubCategories = flattenObjectArrays(subCategoriesArray);
  const flattenedProducts = flattenObjectArrays(prodcuts);
  console.log(prodcuts);
  let shuffledSubCats = shuffle(flattenedSubCategories);
  let shuffledProducts = shuffle(flattenedProducts);

  for (let i = 0; i < 2; i++) {
    let productsFound = shuffledProducts.filter((e) =>
      shuffledSubCats[i].products.includes(e.id)
    );
    let childDiv = document.createElement("div");

    // // //
    for (let j = 0; j < iterationCount; j++) {
      let section = document.createElement("section");
      let img = document.createElement("img");
      img.setAttribute("src", shuffledSubCats[i].image.slice(1));

      let a = document.createElement("a");
      a.innerHTML = `${productsFound[j].title}`;
      a.setAttribute("href", "javascript:void(0)");
      a.addEventListener("click", (e) => {
        // Product clicked
        // SHOULD CALL switchMain() when these event listeners are clicked **** IGNORE FOR NOW
        console.log(productsFound[j].id, e);
      });

      let h4 = document.createElement("h4");
      let h4discount = document.createElement("h4");
      let h3percentage = document.createElement("h2");

      if (productsFound[j].sale) {
        // If the product has a sale, calculate the discounted price and display the discount percentage
        let discountPercentage = productsFound[j].sale;
        let discountedPrice = (
          productsFound[j].price -
          productsFound[j].price * (discountPercentage / 100)
        ).toFixed(2);
        let originalPrice = productsFound[j].price;

        h3percentage.innerHTML = `${discountPercentage}% Off`;
        h4discount.innerHTML = `$${originalPrice}`;
        h4.innerHTML = `$${discountedPrice}`;
        h4discount.classList.add("discount-price");
        h3percentage.classList.add("discount-percentage");
      } else {
        // If the product does not have a sale, display the original price without any discount information
        h4.innerHTML = `$${productsFound[j].price}`;
      }

      section.appendChild(img);
      section.appendChild(a);
      section.appendChild(h3percentage);
      section.appendChild(h4discount);
      section.appendChild(h4);
      childDiv.appendChild(section);
    }

    div.appendChild(childDiv);
  }
}

function shuffle(array) {
  let tempArray = array;
  for (let i = tempArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return tempArray;
}

setProducts(productDivOne, 5);
setProducts(productDivTwo, 5);
