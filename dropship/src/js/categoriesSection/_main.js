console.log("Test test")
const subCategoriesDiv = document.getElementById("subCategories");
const productsDiv = document.getElementById("products");
const singleProductDiv = document.getElementById("singleProduct");

const subCategories_url = "./mock/subCatTest.json";
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

            const subCategories = testFunc(technologiesSubs)
            console.log(subCategories)
            printResults(subCategories, subCategoriesDiv);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Will be fulfilled no matter if previous queries are fulfilled")
        })
}

makeCall(subCategories_url);

function testFunc(object) { // Should remove after merging html files // Duplicate Functions
    const newArray = []
    for (let key in object) {
        if (Array.isArray(object[key])) {
            newArray.push(...object[key])
        }
    }
    return newArray
}

async function fetchJSON(url) { // Should remove after merging html files // Duplicate Functions
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error;
    }
}


async function setSubCatsTwoCtTab(ID, element) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    const products = await fetchJSON('./mock/new-products.json')

    const flattenedSubCategories = testFunc(subCategoriesArray)
    const flattenedProducts = testFunc(products)


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

async function printResults(subCat, element) {

    console.log(subCat)
    element.innerHTML = "";

    subCat.forEach((subCategory) => {
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
    })

}




