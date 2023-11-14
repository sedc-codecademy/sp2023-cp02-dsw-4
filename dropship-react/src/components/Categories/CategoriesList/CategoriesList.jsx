import React from "react"
import { useParams, NavLink } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectProducts } from "../../../store/selectors/productSelector"

import BigCategory from "./BigCategory"
import { SmallCategory } from "./SmallCategory"

import ProductList from "../../Product/ScrollableProductsList/ScrollableProductList"
import { useQuery } from "@tanstack/react-query"
import { getCategoryByID } from '../../../helpers/API/category-api'
import ImageLoader from "../../ImageLoader/ImageLoader"
import { BigLoadingDiv } from "../../PageLoader/PageLoader"

function CategoriesList() {
    const { catId } = useParams()
    console.log(catId)
    const products = useSelector(selectProducts) // Should also be some kind of api call or data from the category itself

    const {
        data: catData,
        error: catError,
        isError: isCatError,
        isPending: isCatPending,
        isSuccess: catSuccess,
    } = useQuery({
        queryKey: ["categoryQuery", catId],
        queryFn: () => getCategoryByID(catId),
    })

    return (
        <>
            {
                isCatPending ? (
                    <BigLoadingDiv
                    link={"/"}
                    title={"loading category..."}
                    message={"you can click here to retry if it's taking too long"}
                    refetch={prodRefetch}
                    ></BigLoadingDiv>
                ) : catSuccess && catData ? (
                    <main className="categoriesListMain">
                        <div className="popularCategories">
                            <h1>{catData.title}</h1>
                            <ul>
                                {catData.subCategories.slice(0, 3).map((subcategory) => (
                                    <BigCategory key={subcategory.id} subcategory={subcategory} />
                                ))}
                            </ul>
                        </div>
                        <div className="smallCategoriesList">
                            <h1>More Categories</h1>
                            <ul>
                                {catData.subCategories.slice(3).map((subcategory) => (
                                    <SmallCategory key={subcategory.id} subcategory={subcategory} />
                                ))}
                            </ul>
                        </div>
                        <ProductList products={products.slice(0, 10)} origin="popular"></ProductList>
                        <div className="manufacturers">
                            <h1>Manufacturers</h1>
                            <ul className="manufacturer-logos">
                                {catData.manufacturers.map((e) => (
                                    <li key={e.id}>
                                        <NavLink to={`/manufacturer/${e.id}`}>
                                            <ImageLoader
                                                alt={e.title}
                                                url={e.image}
                                                backupUrl="/imgs/404/category404.png"
                                                backupAlt={e.title || 'Manufacturer'}
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
