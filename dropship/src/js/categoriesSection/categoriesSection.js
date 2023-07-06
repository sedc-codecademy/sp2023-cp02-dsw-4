const leftScrollButton = document.querySelector('#leftScrollButton')
const rightScrollButton = document.querySelector('#rightScrollButton')

async function fillCategoriesScrollList(ul, array, callback, className) {
  const categories = array
  for (let i = 0; i < categories.length; i++) {
    // Create li an all needed elements
    const li = document.createElement("li")
    const title = document.createElement("h3")

    // Set title text with category name
    title.textContent = categories[i].title

    // Set category image
    const image = document.createElement("img")
    const imagePath = categories[i].image.slice(1)
    image.setAttribute("src", imagePath);

    // Add click event listener to whole li
    li.addEventListener("click", () => {
      callback(categories[i])
      console.log(categories[i].id)
    })

    // Add classes to the li element
    li.classList.add(className)
    if (i < 5) {
      li.style.setProperty('--deg', `-45deg`)
      li.classList.add("shownMiddle")
      // Set tab index so it's tabbable
      li.setAttribute("tabindex", 0)
    } else {
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

function callBackHomePage(e) {
  switchMain(document.querySelector('.productsMain'), "block")
  printResults(subCategoriesDiv, e.id)
}

async function autoFunc() {
  const tempArray = await fetchJSON('./mock/categories.json')
  fillCategoriesScrollList(document.querySelector(".categoriesScrollUl"), tempArray, callBackHomePage, 'scrollCatLi')

  scrollCatLists = document.querySelectorAll('.scrollCatLi')
  for (let i = 0; i < scrollCatLists.length; i++) {
    const element = scrollCatLists[i]
    if (i < 5) {
      shownMiddleElements.push(element)
    } else {
      hiddenRightElements.push(element)
    }
  }
  updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)
}

let scrollCatLists = []

let hiddenLeftElements = []
let hiddenRightElements = []
let shownMiddleElements = []

autoFunc()

// Function to check if any of the elements have the specified class
function hasClass(elements, className) {
  return Array.from(elements).some(element => element.classList.contains(className))
}

// Function to update button states
function updateButtonStates(eleme, leftBtn, rightBtn) {
  const hasHiddenLeft = hasClass(eleme, 'hiddenLeft')
  const hasHiddenRight = hasClass(eleme, 'hiddenRight')
  if (!hasHiddenLeft) {
    leftBtn.disabled = true
    leftBtn.classList.add('disabledScrollBtn')
  } else {
    leftBtn.disabled = false
    leftBtn.classList.remove('disabledScrollBtn')
  }

  if (!hasHiddenRight) {
    rightBtn.disabled = true
    rightBtn.classList.add('disabledScrollBtn')
  } else {
    rightBtn.disabled = false
    rightBtn.classList.remove('disabledScrollBtn')
  }
}

// Check button states on page load
// updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)

function handleLeftScrollButtonClick() {
  updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)

  if (leftScrollButton.disabled) {
    return // Do nothing if the button is disabled
  }

  [hiddenLeftElements, hiddenRightElements, shownMiddleElements] = getFromLeft(hiddenLeftElements, hiddenRightElements, shownMiddleElements)
  changeLeft(shownMiddleElements, hiddenRightElements)

  updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)
  // Update button states after scroll function
}

function handleRightScrollButtonClick() {
  updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)

  if (rightScrollButton.disabled) {
    return // Do nothing if the button is disabled
  }

  [hiddenLeftElements, hiddenRightElements, shownMiddleElements] = getFromRight(hiddenLeftElements, hiddenRightElements, shownMiddleElements)
  changeRight(shownMiddleElements, hiddenLeftElements)
  updateButtonStates(scrollCatLists, leftScrollButton, rightScrollButton)
  // Update button states after scroll function
}

// Add event listeners to the buttons
leftScrollButton.addEventListener('click', handleLeftScrollButtonClick)
rightScrollButton.addEventListener('click', handleRightScrollButtonClick)

function getFromRight(leftArray, rightArray, middleArray) {
  let newLeftArray = [...leftArray]
  let newMiddleArray = [...middleArray]
  let newRightArray = [...rightArray]

  if (newRightArray.length === 5) {
    newLeftArray = [...newLeftArray, ...newMiddleArray]
    newMiddleArray = newRightArray
    newRightArray = []
  } else if (newRightArray.length < 5) {
    const numElementsToMove = Math.min(newRightArray.length, newMiddleArray.length)
    newLeftArray.push(...newMiddleArray.splice(0, numElementsToMove))
    newMiddleArray.push(...newRightArray.splice(0, numElementsToMove))
  } else {
    newLeftArray.push(...newMiddleArray)
    newMiddleArray = newRightArray.slice(0, 5)
    newRightArray = newRightArray.slice(5)
  }
  return [newLeftArray, newRightArray, newMiddleArray]
}

function getFromLeft(leftArray, rightArray, middleArray) {
  let newLeftArray = [...leftArray]
  let newMiddleArray = [...middleArray]
  let newRightArray = [...rightArray]

  if (newLeftArray.length === 5) {
    newRightArray.unshift(...newMiddleArray)
    newMiddleArray = newLeftArray
    newLeftArray = []
  } else if (newLeftArray.length < 5) {
    const numElementsToMove = Math.min(newLeftArray.length, newMiddleArray.length)
    newRightArray.unshift(...newMiddleArray.splice(-numElementsToMove))
    newMiddleArray.unshift(...newLeftArray.splice(-numElementsToMove))
  } else {
    newRightArray.unshift(...newMiddleArray)
    newMiddleArray = newLeftArray.slice(-5)
    newLeftArray = newLeftArray.slice(0, -5)
  }

  return [newLeftArray, newRightArray, newMiddleArray]
}

function changeLeft(middleArray, rightArray) {
  rightArray.forEach(e => {
    if (e.classList.contains("shownMiddle")) {
      e.classList.add('hiddenRight')
      e.classList.remove('shownMiddle')
      e.removeAttribute("tabindex")
    }
  })

  middleArray.forEach(e => {
    if (e.classList.contains('hiddenLeft')) {
      e.classList.remove('hiddenLeft')
      e.classList.add('shownMiddle', 'slideInLeft')
      e.setAttribute("tabindex", 0)
      e.addEventListener('animationend', () => {
        e.classList.remove('slideInLeft')
      }, { once: true })
    } else if (e.classList.contains('hiddenRight')) {
      e.classList.remove('hiddenRight')
      e.classList.add('shownMiddle', 'slideInRight')
      e.setAttribute("tabindex", 0)
      e.addEventListener('animationend', () => {
        e.classList.remove('slideInRight')
      }, { once: true })
    }
  })
}

function changeRight(middleArray, leftArray) {
  leftArray.forEach(e => {
    if (e.classList.contains("shownMiddle")) {
      e.classList.add('hiddenLeft')
      e.classList.remove('shownMiddle')
      e.removeAttribute("tabindex")
    }
  })

  middleArray.forEach(e => {
    if (e.classList.contains('hiddenRight')) {
      e.classList.remove('hiddenRight')
      e.classList.add('shownMiddle', 'slideInRight')
      e.setAttribute("tabindex", 0)
      e.addEventListener('animationend', () => {
        e.classList.remove('slideInRight')
      }, { once: true })
    } else if (e.classList.contains('hiddenLeft')) {
      e.classList.remove('hiddenLeft')
      e.classList.add('shownMiddle', 'slideInLeft')
      e.setAttribute("tabindex", 0)
      e.addEventListener('animationend', () => {
        e.classList.remove('slideInLeft')
      }, { once: true })
    }
  })
}


