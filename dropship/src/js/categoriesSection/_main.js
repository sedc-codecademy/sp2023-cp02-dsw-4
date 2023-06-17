console.log("Test test")
const testDiv = document.getElementById("test");

const subCategories_url = "./mock/subCatTest.json";
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

            const products = testFunc(technologiesSubs)
            console.log(products)
            printResults(products, testDiv);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Will be filfilled no matter if previous queries are fulfilled")
        })
}

makeCall(subCategories_url);

function testFunc(object) {
    const newArray = []
    for (let key in object) {
        if (Array.isArray(object[key])) {
            newArray.push(...object[key])
        }
    }
    console.log(newArray)
    return newArray
}

async function fetchJSON(url) {
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


async function setSubCatsTwo(ID) {
    const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
    console.log(subCategoriesArray)
    const products = await fetchJSON('./mock/new-products.json')
    console.log(products)
    const flattenedSubCategories = testFunc(subCategoriesArray)
    const flattenedProducts = testFunc(products)
    console.log(flattenedSubCategories)
    console.log(flattenedProducts)

    let tempCats = []

    for (let i = 0; i < flattenedSubCategories.length; i++) {
        if (flattenedSubCategories[i].id === ID) {
            for (let j = 0; j < flattenedProducts.length; j++) {
                if (flattenedSubCategories[i].products.includes(flattenedProducts[j].id)) {
                    tempCats.push(flattenedProducts[j])
                }
            }
            break
        }
    }
    console.log(tempCats)
    console.log("Dime")
}


async function printResults(subCat, element) {

    console.log(subCat)
    element.innerHTML = "";

    subCat.forEach((subCategory) => {
        let a = document.createElement("a");
        a.addEventListener("click", () => {
            console.log(subCategory.id)
            setSubCatsTwo(subCategory.id)
        })

        a.innerHTML += `
        <h3>${subCategory.title}</h3>
        <p>${subCategory.description}</p>
        <p>${subCategory.categoryTitle}</p> 
  
          `

        //     <div id="id_${index}">   
        //     <button value="${starship.films}" onclick="makeCallMovies(this, ${index})"> Show films </button>
        //   </div> 

        element.appendChild(a);
    })

}


// const makeCallMovies = (btnElement, index) => {
//     const parentTest = document.getElementById(`id_${index}`);
//     console.log("btnElement", btnElement);
//     console.log("btnElement.value", btnElement.value);
//     console.log("Parent test:", parentTest);

//     const movieTitle = [];

//     const filmUrls = btnElement.value.split(",");
//     console.log("Films url splited:", filmUrls)

//     filmUrls.forEach((url) => {
//         fetch(url)
//          .then((response) => {
//             console.log(response);
//             return response.json();
//          })
//          .then((result) => {
//             console.log(result);
//             movieTitle.push(result.title);
//             console.log(movieTitle);
//             printMovie(movieTitle)
//          })
//          .catch((error) => {
//             console.log(error)
//          })
//     })

//     parentTest.innerHTML += "This starship occured in the following movies: ";

//     let printMovie = (movieTitles) => {
//         movieTitles.forEach((title) => {
//             parentTest.innerHTML += `${title}`
//         })
//     }
// };
