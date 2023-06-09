// CATEGORIES SECTION

const container = document.getElementById('container');
const categoriesSections = container.querySelectorAll('.scrollCat');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// leftArrow.addEventListener('click', () => {
//   container.scrollBy({
//     left: -2000,
//     behavior: "smooth"
//   });
// });

// rightArrow.addEventListener('click', () => {
//   container.scrollBy({
//     left: 2000,
//     behavior: "smooth"
//   });
// });

// Made buttons scroll by half of elements width no matter its size.

leftArrow.addEventListener('click', () => {
  const container = document.getElementById('container');
  const scrollDistance = (container.scrollWidth - container.clientWidth) / 2;

  container.scrollBy({
    left: -scrollDistance,
    behavior: "smooth"
  });
});

rightArrow.addEventListener('click', () => {
  const container = document.getElementById('container');
  const scrollDistance = (container.scrollWidth - container.clientWidth) / 2;

  container.scrollBy({
    left: scrollDistance,
    behavior: "smooth"
  });
});

// Filling the sub Cats functions

async function setSubCatsCtSection(sect) {
  const subCategoriesArray = await fetchJSON('./mock/new-sub-categories.json')
  const categories = await fetchJSON('./mock/categories.json')
  const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

  let tempCats = []
  let cat

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === sect.id) {
      for (let j = 0; j < flattenedSubCategories.length; j++) {
        if (categories[i].sub.includes(flattenedSubCategories[j].id)) {
          tempCats.push(flattenedSubCategories[j])
          cat = categories[i]
        }
      }
      break
    }
  }

  const catA = document.createElement('a')

  catA.innerHTML = `<h3>${cat.title}</h3>`
  catA.setAttribute("href", "javascript:void(0)");
  catA.addEventListener("click", (e) => {
    console.log(cat.id)
  })

  sect.appendChild(catA)

  let image = document.createElement("img")
  let imagePath = cat.image.slice(1)
  image.setAttribute("src", imagePath);
  sect.appendChild(image)

  for (let i = 0; i < 4; i++) {
    let a = document.createElement("a")
    a.setAttribute("href", "javascript:void(0)");
    a.innerHTML = `${tempCats[i].title}`
    a.addEventListener("click", (e) => {
      console.log(tempCats[i].id)

    })
    sect.appendChild(a)
  }
}

categoriesSections.forEach((cat) => {
  setSubCatsCtSection(cat)
})
