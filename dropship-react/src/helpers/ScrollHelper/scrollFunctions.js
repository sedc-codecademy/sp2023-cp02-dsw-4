export function applyNoScroll() {
    if (!document.body.classList.contains("noScroll")) document.body.classList.add("noScroll")
}

export function applyScroll() {
    if (document.body.classList.contains("noScroll")) document.body.classList.remove("noScroll")
}
