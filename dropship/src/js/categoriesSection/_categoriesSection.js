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
  catA.addEventListener("click", (e) => { // Caetgories Event
    switchMain(document.querySelector('.productsMain'), "block")
    printResults(subCategoriesDiv, cat.id);
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
      switchMain(document.querySelector('.productsMain'), "block")
      //setSubCatsTwoCtTab(tempCats[i].id, productsDiv)
      // Sub - Caetgories Event
      console.log(tempCats[i].id)

    })
    sect.appendChild(a)
  }
}

// categoriesSections.forEach((cat) => {
//   setSubCatsCtSection(cat)
// })

const categoriesScrollList = document.querySelector('categoriesScrollUl')
const leftScrollButton = document.querySelector('#leftScrollButton')
const rightScrollButton = document.querySelector('#rightScrollButton')

async function fillCategoriesScrollList(ul) {
  const categories = await fetchJSON('./mock/categories.json')
  for (let i = 0; i < categories.length; i++) {
    // Create li an all needed elements
    const li = document.createElement("li")
    const title = document.createElement("h3")

    // Set category image
    // title.style.setProperty('--bgimg', `url(${categories[i].image})`)
    // Set tab index so it's tabbable
    // Set title text with category name
    title.textContent = categories[i].title

    const image = document.createElement("img")
    const imagePath = categories[i].image.slice(1)
    image.setAttribute("src", imagePath);


    // Add click event listener to whole li
    li.addEventListener("click", () => {
      switchMain(document.querySelector('.productsMain'), "block")
      printResults(subCategoriesDiv, categories[i].id)
      console.log(categories[i].id)
    })

    
    // Add classes to the li element
    li.classList.add("scrollCatLi")
    if (i < 5) {
      li.style.setProperty('--deg', `-45deg`)
      li.classList.add("shownMiddle")
      li.setAttribute("tabindex", 0)
    } else if (i >= categories.length - 5) {
      li.style.setProperty('--deg', `145deg`)
      li.classList.add("hiddenRight")
    }

    // Append titile and image to li
    li.appendChild(title)
    li.appendChild(image)
    // Append li to ul
    ul.appendChild(li)
  }
}
await fillCategoriesScrollList(document.querySelector(".categoriesScrollUl"))

const scrollCatLists = document.querySelectorAll('.scrollCatLi')

function scrollCatList(cat, origin) {
  switch (true) {
    case origin === 'left':
      if (!cat.classList.contains('hiddenLeft') && !cat.classList.contains('hiddenRight') && cat.classList.contains('shownMiddle')) {
        cat.classList.add('hiddenRight')
        cat.classList.remove('shownMiddle')
        cat.setAttribute("tabindex", -1)
      }
      if (cat.classList.contains('hiddenLeft')) {
        cat.classList.remove('hiddenLeft')
        cat.classList.add('shownMiddle')
        cat.setAttribute("tabindex", 0)
      }
      break
    case origin === 'right':
      if (!cat.classList.contains('hiddenRight') && !cat.classList.contains('hiddenLeft') && cat.classList.contains('shownMiddle')) {
        cat.classList.add('hiddenLeft')
        cat.classList.remove('shownMiddle')
        cat.setAttribute("tabindex", -1)
      }

      if (cat.classList.contains('hiddenRight')) {
        cat.classList.remove('hiddenRight')
        cat.classList.add('shownMiddle')
        cat.setAttribute("tabindex", 0)
      }
      break
    default: break
  }
}

// Function to check if any of the elements have the specified class
function hasClass(elements, className) {
  return Array.from(elements).some(element => element.classList.contains(className))
}

// Function to update button states
function updateButtonStates() {
  const hasHiddenLeft = hasClass(scrollCatLists, 'hiddenLeft')
  const hasHiddenRight = hasClass(scrollCatLists, 'hiddenRight')

  leftScrollButton.disabled = !hasHiddenLeft
  rightScrollButton.disabled = !hasHiddenRight
}

// Check button states on page load
updateButtonStates()

// Update button states and execute scroll function
function handleLeftScrollButtonClick() {
  updateButtonStates()

  if (leftScrollButton.disabled) {
    return; // Do nothing if the button is disabled
  }

  for (let i = 0; i < scrollCatLists.length; i++) {
    scrollCatList(scrollCatLists[i], 'left')
  }

  updateButtonStates() // Update button states after scroll function
}

function handleRightScrollButtonClick() {
  updateButtonStates()

  if (rightScrollButton.disabled) {
    return; // Do nothing if the button is disabled
  }

  for (let i = 0; i < scrollCatLists.length; i++) {
    scrollCatList(scrollCatLists[i], 'right')
  }

  updateButtonStates() // Update button states after scroll function
}

// Add event listeners to the buttons
leftScrollButton.addEventListener('click', handleLeftScrollButtonClick)
rightScrollButton.addEventListener('click', handleRightScrollButtonClick)

