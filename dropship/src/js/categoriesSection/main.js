console.log("Test test")
const subCategoriesDiv = document.getElementById("subCategories");
console.log(subCategoriesDiv)
const productsDiv = document.getElementById("products");
const singleProductDiv = document.getElementById("singleProduct");

const subCategories_url = "./mock/subCatTest.json"; // SHOULD REMOVE 
//const subCategories_url = "./mock/new-sub-categories.json";
const makeCall = (url) => {
    fetch(url)
        .then((response) => {
            // console.log(response);
            return response.json()
        })
        .then((result) => {
            // console.log(result);
            const technologiesSubs = result;
            console.log(technologiesSubs)

            const subCategories = flattenObjectArrays(technologiesSubs)
            console.log(subCategories)
            printResults(subCategories, subCategoriesDiv);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Will be fulfilled no matter if previous queries are fulfilled")
        })
} // DONT NEED THIS FUNCTION

makeCall(subCategories_url);

async function setSubCatsTwoCtTab(ID, element) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const products = await fetchJSON('./mock/new-products.json')

    const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)
    const flattenedProducts = flattenObjectArrays(products)


    let tempProds = []

    for (let i = 0; i < flattenedSubCategories.length; i++) {
        if (flattenedSubCategories[i].id === ID) {
            for (let j = 0; j < flattenedProducts.length; j++) {
                if (flattenedSubCategories[i].products.includes(flattenedProducts[j].id)) {
                    tempProds.push(flattenedProducts[j])
                }
            }
            break
        }
    }

    printProducts(tempProds, element)

    console.log(tempProds)
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
            <p>${product.subCategoryTitle}</p>`

        elemetToPrint.appendChild(a);
    })
}

function printProduct(product, element) {
// SHOULD DO SOMETHING LIKE THIS USING FLATTENED PRODUCTS ARRAY FETCH *** LOOK TO LINE 35 in dependecies File for fetch
    // for (let i = 0; i < flattenedProducts.length; i++) {
    //     if(flattenedProducts[i].id === ID) {

    // element.innerHTML = "";

    // let a = document.createElement("a");
    // a.style.color = 'pink'
    // a.innerHTML += `
    //     <h3>${product.title}</h3>
    //     <p>Price: ${product.price}</p>
    //     <p>${product.description}</p>
    //     <p>Rating: ${product.rating.rate}</p>
    //     <p>In Stock: ${product.stock}</p>
    //     `
    // element.appendChild(a)
    // } 

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
}

async function printResults(subCat, element) { //// NEEDS ID PARAM DOESNT NEED SUBCAT PARAM
   // SHOULD DO SOMETHING SIMILAR LIKE IN PRINT PRODUCTS USING FLATTENED SUBCATEGORIES FETCH *** LOOK TO LINE 35 in dependecies File for fetch

    element.innerHTML = "";

    subCat.forEach((subCategory) => {
        // if (subCategory.id === ID) { //// WILL ONLY SHOW CHOSEN CATEGORY
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




