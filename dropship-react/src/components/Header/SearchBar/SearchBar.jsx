import React, { useState, useRef } from "react"

import SearchItem from "./SearchItem"
import ViewAll from "./ViewAll"

import { CSSTransition } from "react-transition-group"

const someArray = [
    {
        id: "123123",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "1231fse23",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "123ity123",
        title: "Firstdadwadwadwadwadwad Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "1230ba2eb123",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "12312bwda3",
        title: "First Titlte",
        category: "Sportffs",
        subcategory: "Outdotivity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "12312h9i3",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "12AWRJ3123",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "123sdti,123",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
    {
        id: "12a2habr3123",
        title: "First Titlte",
        category: "Sports",
        subcategory: "Outdoor Activity",
        image: "imgs/cat/fWear/womensWear.png",
    },
]

function SearchBar() {
    const [remainingItems, setRemainingItems] = useState(0)
    const [firstSixItems, setfirstSixItems] = useState([])
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)

    const csstransitionRef = useRef()

    const testFunc = () => {
        console.log(someArray.length)
        if (someArray.length > 0) {
            setfirstSixItems(someArray.slice(0, 6))
        }

        if (someArray.length > 6) {
            setRemainingItems(someArray.slice(6).length)
        }
    }

    const handleClearClick = () => {
        setShowSearchSuggestions(false)
    }

    const handleSearchClick = () => {
        setShowSearchSuggestions(true)
    }

    return (
        <div className="search-form">
            <div className="search-bar-container">
                <form action="">
                    <input
                        className="search-bar"
                        type="search"
                        placeholder="Search for products"
                        onChange={testFunc}
                    ></input>
                </form>
                <button className="searchButtons" id="clearButton" onClick={handleClearClick}>
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"
                        />
                    </svg>
                </button>
                <button className="searchButtons" id="searchButton" onClick={handleSearchClick}>
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
                        />
                    </svg>
                </button>
                <div className="divider"></div>
                <button className="categoriesButton">
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"
                        />
                    </svg>
                </button>
            </div>

            <CSSTransition
                in={showSearchSuggestions}
                timeout={250}
                classNames="suggestions"
                unmountOnExit
                nodeRef={csstransitionRef}
            >
                <div className="suggestions" ref={csstransitionRef}>
                    <ul className="suggestions-items">
                        {firstSixItems.map((item) => (
                            <SearchItem key={item.id} item={item} />
                        ))}
                        {remainingItems > 0 && (
                            <ViewAll key="viewAll" amount={remainingItems} />
                        )}
                    </ul>
                </div>
            </CSSTransition>

            
        </div>
    )
}

export default SearchBar
