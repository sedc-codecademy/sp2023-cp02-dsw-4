console.log("Test test")
const subCategoriesDiv = document.getElementById("subCategories");
console.log(subCategoriesDiv)
const productsDiv = document.getElementById("products");
const singleProductDiv = document.getElementById("singleProduct");
const highestRatingBtn = document.getElementById("highest-rating");
const highestPriceBtn = document.getElementById("highest-price");
const lowestPriceBtn = document.getElementById("lowest-price");

// //const subCategories_url = "./mock/new-sub-categories.json";
// const makeCall = (url) => {
//     fetch(url)
//         .then((response) => {
//             // console.log(response);
//             return response.json()
//         })
//         .then((result) => {
//             // console.log(result);
//             const technologiesSubs = result;
//             console.log(technologiesSubs)

//             const subCategories = flattenObjectArrays(technologiesSubs)
//             console.log(subCategories)
//            // printResults(subCategories, subCategoriesDiv);
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .finally(() => {
//             console.log("Will be fulfilled no matter if previous queries are fulfilled")
//         })
 // DONT NEED THIS FUNCTION

//makeCall(subCategories_url);
let displayedProducts = [];

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
    let tempCats = [] 
    displayedProducts = []
  
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === ID) {
        for (let j = 0; j < flattenedSubCategories.length; j++) 
        {
          if (categories[i].sub.includes(flattenedSubCategories[j].id)) {
            tempCats.push(flattenedSubCategories[j])   
          }
        }
        break
      }
    }

    for(let i = 0; i < flattenedProducts.length; i++){
        if(flattenedProducts[i].category.categoryid === ID) {
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

function sortByLowestPrice(){

    displayedProducts.sort((a, b) => {
        return a.price - b.price;
    })
    
    printProducts(displayedProducts, productsDiv);    
}

function sortByHighestPrice(){

    displayedProducts.sort((a, b) => {
        return b.price - a.price;
    })
    
    printProducts(displayedProducts, productsDiv);    
}

function sortByHighestRating(){
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






