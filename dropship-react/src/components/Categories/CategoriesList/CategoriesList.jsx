import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProducts } from "../../../store/selectors/productSelector"

import BigCategory from "./BigCategory"
import SmallCategories from "./SmallCategory"

import ProductList from "../../Product/ScrollableProductsList/ScrollableProductList"

const catArray = [
    {
        id: "technology",
        title: "Technology",
        description: "mobile phones, computers, and other tech gadgets.",
        sub: [
            "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "50292d51-a80b-40e0-ab12-47e7557cedb8",
        ],
        image: "/imgs/cat/tech/technology.jpg",
    },
    {
        id: "menswear",
        title: "Men's Clothing",
        description: "shirts, pants, suits, and more.",
        sub: [
            "95448f8a-49ea-4930-b91f-193892a687e8",
            "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        ],
        image: "/imgs/cat/mWear/mensWear.jpg",
    },
    {
        id: "womenswear",
        title: "Women's Clothing",
        description: "dresses, tops, skirts, and more.",
        sub: [
            "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "2986c60e-1876-4c73-84be-95855807a23e",
            "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "4c9db19d-87b1-4380-846c-62547aeeb2de",
        ],
        image: "/imgs/cat/fWear/womensWear.jpg",
    },
    {
        id: "autoaccessories",
        title: "Auto Accessories",
        description: "seat covers, floor mats, car audio systems, etc.",
        sub: [
            "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        ],
        image: "/imgs/cat/auto/autoacc.jpg",
    },
    {
        id: "sports",
        title: "Sports",
        description:
            "footballs, basketballs, tennis rackets, and other sports equipment.",
        sub: [
            "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "24ffe98a-3970-4226-9895-bc0267f73cef",
            "8cec5cb9-b7ac-480d-9c60-899307478643",
            "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "413916b7-99d7-4d46-bd9b-86169ca97373",
        ],
        image: "/imgs/cat/sports/sports.jpg",
    },
]

function CategoriesList() {
    const bigCategoriesArray = catArray.slice(0, 3)
    const smallCategoriesArray = catArray.slice(0)
    const products = useSelector(selectProducts)

    return (
        <main className="categoriesListMain">
            <div className="popularCategories">
                <h1>Technology</h1>
                <ul>
                    {bigCategoriesArray.map((category) => (
                        <BigCategory key={category.id} category={category} />
                    ))}
                </ul>
            </div>
            <div className="smallCategoriesList">
                <h1>More Categories</h1>
                <ul>
                    {smallCategoriesArray.map((category) => (
                        <SmallCategories key={category.id} category={category} />
                    ))}
                </ul>
            </div>
            <ProductList products={products.slice(0, 10)} origin="popular"></ProductList>
            <div className="manufacturers">
                <h1>Manufacturers</h1>
                <ul className="manufacturer-logos">
                    <li>
                        <NavLink>
                            <img
                                alt="Samsung"
                                src="/imgs/manufacturers/samsung.jpg"
                            ></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img
                                alt="Nokia"
                                src="/imgs/manufacturers/nokia.jpg"
                            ></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img
                                alt="Apple"
                                src="/imgs/manufacturers/apple.jpg"
                            ></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img
                                alt="sony"
                                src="/imgs/manufacturers/sony.jpg"
                            ></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img
                                alt="LG"
                                src="/imgs/manufacturers/lg.jpg"
                            ></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img
                                alt="Xiaomi"
                                src="/imgs/manufacturers/xiaomi.jpg"
                            ></img>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default CategoriesList
