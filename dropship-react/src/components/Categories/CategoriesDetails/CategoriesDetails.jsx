import React from 'react'

import { DetailsNav, DetailsFilters, DetailsAllProducts } from '../../UsefullComponents/Usefull'

import { useSelector, useDispatch } from "react-redux"
import { setMobileFiltersOn } from '../../../store/slices/filters/filtersSlice'

function CategoriesDetails() {
    const dispatch = useDispatch()
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)

    const handleFilterButtonClick = () => {
        dispatch(setMobileFiltersOn(!mobileFiltersOn))
    }

    return (
        <main className="categoriesDetails">
            <DetailsNav
                categoryid={"Testingid"}
                categorytitle={"Testing Title"}
            ></DetailsNav>

            <div className='detailsListBody'>
                {(!isMobile || (isMobile && mobileFiltersOn)) && <DetailsFilters></DetailsFilters>}
                <DetailsAllProducts></DetailsAllProducts>
            </div>

            {isMobile && (
                <button
                    className='filtersButton'
                    onClick={handleFilterButtonClick}
                >
                    <svg viewBox="0 0 32 32"><path d="M26 6H4v3.17l7.41 7.42l.59.58V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.41-7.41A2 2 0 0 1 2 9.17V6a2 2 0 0 1 2-2h22z" fill="currentColor" /><path d="M29.71 11.29l-3-3a1 1 0 0 0-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 0 0 0-1.42zM19.59 20H18v-1.59l5-5L24.59 15zM26 13.59L24.41 12L26 10.41L27.59 12z" fill="currentColor" /></svg>
                </button>)}
        </main>
    )
}

export default CategoriesDetails