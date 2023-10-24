const searchBarScroll = document.querySelector('.search-form')
const header = document.querySelector('header')

// Create a new IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Check if the target element is visible (i.e., observed)
        if (!entry.isIntersecting) {
            // Add the "scrollHeader" class to the header element
            header.classList.add('scrollHeader')
        } else {
            header.classList.remove('scrollHeader')
        }
    })
})

// Start observing the searchBarScroll element
observer.observe(searchBarScroll)


