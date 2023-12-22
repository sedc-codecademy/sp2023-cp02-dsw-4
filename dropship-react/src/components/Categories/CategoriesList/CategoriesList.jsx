import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"

import BigCategory from "./BigCategory"
import { SmallCategory } from "./SmallCategory"

import ProductList from "../../Product/ScrollableProductsList/ScrollableProductList"
import { useQuery } from "@tanstack/react-query"
import { getCategoryByID } from '../../../helpers/API/category-api'
import ImageLoader from "../../ImageLoader/ImageLoader"
import { BigLoadingDiv } from "../../PageLoader/PageLoader"
import NotFound from "../../NotFound/NotFound"
import { extractAndSortProductsFromCategory, getUniqueManufacturers } from "../../UsefullComponents/Usefull"

function CategoriesList() {
    const { catId } = useParams()
    const [popularProducts, setPopularProducts] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const {
        data: catData,
        error: catError,
        isError: isCatError,
        isPending: isCatPending,
        isSuccess: catSuccess,
        refetch: catRefetch
    } = useQuery({
        queryKey: ["categoryQuery", catId],
        queryFn: () => getCategoryByID(catId),
    })

    useEffect(() => {
        if (catData) setPopularProducts(extractAndSortProductsFromCategory(catData))
    }, [catData])

    useEffect(() => {
        if (popularProducts) setManufacturers(getUniqueManufacturers(popularProducts))
    }, [popularProducts])

    return (
        <>
            {
                isCatPending ? (
                    <BigLoadingDiv
                        link={"/"}
                        title={"loading category..."}
                        message={"you can click here to retry if it's taking too long"}
                        refetch={catRefetch}
                    ></BigLoadingDiv>
                ) : catSuccess && catData ? (
                    <main className="categoriesListMain">
                        <div className="popularCategories">
                            <h1>{catData.name}</h1>
                            <ul>
                                {catData.subcategories.slice(0, 3).map((subcategory) => (
                                    <BigCategory key={subcategory.id} subcategory={subcategory} />
                                ))}
                            </ul>
                        </div>
                        <div className="smallCategoriesList">
                            <h1>More Categories</h1>
                            <ul>
                                {catData.subcategories.slice(3).map((subcategory) => (
                                    <SmallCategory key={subcategory.id} subcategory={subcategory} />
                                ))}
                            </ul>
                        </div>
                        <ProductList products={popularProducts.slice(0, 10)} origin="popular"></ProductList>
                        <div className="manufacturers">
                            <h1>Manufacturers</h1>
                            <ul className="manufacturer-logos">
                                {manufacturers.map((e) => (
                                    <li key={e.id}>
                                        <NavLink data-manufacturer={e.name} to={`/manufacturer/${e.id}`}>
                                            <ImageLoader
                                                alt={e.name}
                                                url={e.image}
                                                backupUrl="/imgs/404/category404.png"
                                                backupAlt={e.name || 'Manufacturer'}
                                            ></ImageLoader>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                ) : isCatError ? (
                    <NotFound
                        link={"/"}
                        title={"dont have that one"}
                        message={catError?.message}
                    ></NotFound>
                ) : (<></>)
            }
        </>
    )
}

export default CategoriesList
