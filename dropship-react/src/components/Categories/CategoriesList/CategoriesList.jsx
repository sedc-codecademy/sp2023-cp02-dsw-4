import React from "react";
import { NavLink } from "react-router-dom"

import { useSelector } from "react-redux";
import { selectProducts } from "../../../store/selectors/productSelector";
import TempProductCard from "./TempProductCard";
import BigCategory from "./BigCategory";
import SmallCategories from "./SmallCategory";

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
        image: "/imgs/cat/tech/technology2.jpg",
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
        title: "Automobile Accessories",
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
    const bigCategoriesArray = catArray.slice(0, 3);
    const products = useSelector(selectProducts);

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
                    {catArray.map((category) => (
                        <SmallCategories key={category.id} category={category} />
                    ))}
                </ul>
            </div>
            <div className="popularProducts">
                <svg id="visual" viewBox="0 0 900 450" version="1.1">
                    <g strokeWidth="1" strokeLinejoin="bevel">
                        <path
                            d="M389 183L419 124L280 0Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M419 124L403 0L280 0Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M280 0L166 203L389 183Z"
                            fill="var(--tertAccent)"
                            stroke="var(--tertAccent)"
                        ></path>
                        <path
                            d="M280 0L134 0L166 203Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M166 203L200 329L389 183Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M419 124L562 0L403 0Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M652 213L562 0L419 124Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M200 329L362 381L389 183Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M389 183L579 292L419 124Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M134 0L0 187L166 203Z"
                            fill="var(--tertAccent)"
                            stroke="var(--tertAccent)"
                        ></path>
                        <path
                            d="M166 203L77 373L200 329Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M362 381L579 292L389 183Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M134 0L0 0L0 187Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M200 329L288 450L362 381Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M362 381L469 450L579 292Z"
                            fill="var(--tertAccent)"
                            stroke="var(--tertAccent)"
                        ></path>
                        <path
                            d="M209 450L288 450L200 329Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M0 187L77 373L166 203Z"
                            fill="var(--tertAccent)"
                            stroke="var(--tertAccent)"
                        ></path>
                        <path
                            d="M579 292L652 213L419 124Z"
                            fill="var(--tertAccent)"
                            stroke="var(--tertAccent)"
                        ></path>
                        <path
                            d="M77 373L209 450L200 329Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M288 450L469 450L362 381Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M579 292L744 249L652 213Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M0 187L0 394L77 373Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M77 373L0 450L209 450Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M671 450L744 249L579 292Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M652 213L833 0L562 0Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M0 394L0 450L77 373Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M469 450L671 450L579 292Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M900 450L829 229L744 249Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M744 249L833 0L652 213Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M829 229L833 0L744 249Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M671 450L726 450L744 249Z"
                            fill="var(--paleAccentTwo)"
                            stroke="var(--paleAccentTwo)"
                        ></path>
                        <path
                            d="M900 201L900 130L829 229Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M829 229L900 130L833 0Z"
                            fill="var(--accent)"
                            stroke="var(--accent)"
                        ></path>
                        <path
                            d="M900 450L900 201L829 229Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M900 130L900 0L833 0Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                        <path
                            d="M726 450L900 450L744 249Z"
                            fill="var(--secAccent)"
                            stroke="var(--secAccent)"
                        ></path>
                    </g>
                </svg>

                <div className="introDiv">
                    <h1>Popular Products</h1>
                    <p>Get the most popular products on our site</p>
                    <svg className="popularSvg" viewBox="0 0 500 500">
                        <g>
                            <path
                                d="M125.86,190.87a40.73,40.73,0,0,0-18.47.47c-31.71,8.52-32,48.66-22.84,73.86,14.8,40.84,49.26,73.49,90,88.5s87.08,12.83,127.31-3.55,74.33-46.42,97.95-82.88c26.33-40.64,50.31-99.61,21.78-145.17-21.1-33.7-65.53-51.13-103.81-40a81.21,81.21,0,0,0-22.18,10.31c-26.63,17.72-37.73,48.31-54.4,74.2-11.38,17.67-28.12,35.46-49.47,39.92C168.28,211.45,148,195.06,125.86,190.87Z"
                                fill="var(--reversePaleAccent)"
                            />
                            <path
                                d="M125.86,190.87a40.73,40.73,0,0,0-18.47.47c-31.71,8.52-32,48.66-22.84,73.86,14.8,40.84,49.26,73.49,90,88.5s87.08,12.83,127.31-3.55,74.33-46.42,97.95-82.88c26.33-40.64,50.31-99.61,21.78-145.17-21.1-33.7-65.53-51.13-103.81-40a81.21,81.21,0,0,0-22.18,10.31c-26.63,17.72-37.73,48.31-54.4,74.2-11.38,17.67-28.12,35.46-49.47,39.92C168.28,211.45,148,195.06,125.86,190.87Z"
                                fill="var(--tpPri)"
                                opacity={0.7}
                            />
                        </g>
                        <g>
                            <ellipse
                                id="freepik--path--inject-3"
                                cx="250"
                                cy="416.24"
                                rx="193.89"
                                ry="11.32"
                                fill="var(--tpPri)"
                                opacity={0.7}
                            ></ellipse>
                        </g>
                        <g>
                            <polygon
                                points="200.04 409.44 199.06 409.44 199.06 298.91 195.82 298.91 195.82 409.44 194.99 409.44 178.97 411.29 178.97 415.93 215.64 415.93 215.64 411.29 200.04 409.44"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="200.04 409.44 199.06 409.44 199.06 298.91 195.82 298.91 195.82 409.44 194.99 409.44 178.97 411.29 178.97 415.93 215.64 415.93 215.64 411.29 200.04 409.44"
                                fill="#fff"
                                opacity={0.6}
                            ></polygon>
                            <rect
                                x="195.82"
                                y="339.81"
                                width="3.24"
                                height="6.87"
                                opacity={0.2}
                            ></rect>
                            <polygon
                                points="300.34 409.44 299.35 409.44 299.35 298.91 296.12 298.91 296.12 409.44 295.28 409.44 279.26 411.29 279.26 415.93 315.93 415.93 315.93 411.29 300.34 409.44"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="300.34 409.44 299.35 409.44 299.35 298.91 296.12 298.91 296.12 409.44 295.28 409.44 279.26 411.29 279.26 415.93 315.93 415.93 315.93 411.29 300.34 409.44"
                                fill="#fff"
                                opacity={0.6}
                            ></polygon>
                            <rect
                                x="296.12"
                                y="339.81"
                                width="3.24"
                                height="6.87"
                                opacity={0.2}
                            ></rect>
                            <rect
                                x="157.4"
                                y="112.62"
                                width="181.98"
                                height="230.7"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="157.4"
                                y="112.62"
                                width="181.98"
                                height="230.7"
                                fill="#fff"
                                opacity={0.3}
                            ></rect>
                            <rect
                                x="160.64"
                                y="116.73"
                                width="175.51"
                                height="222.49"
                                fill="#fff"
                                opacity={0.7}
                            ></rect>
                            <polygon
                                points="191.84 287.62 197.67 261.21 167.98 250.69 191.73 234.36 163.44 208.45 194.79 200.72 189.9 180.51 217.58 190.75 214.44 150.7 241.29 179.58 254.69 134.87 274.13 179.11 311.52 153.96 299.88 195.88 332.02 214.04 301.48 231.44 325.15 267.13 286.54 270.39 286.54 304.85 260.76 277.84 235.32 302.05 231.85 275.04 191.84 287.62"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="191.84 287.62 197.67 261.21 167.98 250.69 191.73 234.36 163.44 208.45 194.79 200.72 189.9 180.51 217.58 190.75 214.44 150.7 241.29 179.58 254.69 134.87 274.13 179.11 311.52 153.96 299.88 195.88 332.02 214.04 301.48 231.44 325.15 267.13 286.54 270.39 286.54 304.85 260.76 277.84 235.32 302.05 231.85 275.04 191.84 287.62"
                                fill="#fff"
                                opacity={0.5}
                            ></polygon>
                            <path
                                d="M293.37,200.2H211.32a7.77,7.77,0,0,0-7.74,7L199,253.75a7.78,7.78,0,0,0,7.74,8.53h82a7.77,7.77,0,0,0,7.73-7l4.54-46.54A7.76,7.76,0,0,0,293.37,200.2Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <path
                                d="M288.48,200.05H206.43a7.77,7.77,0,0,0-7.73,7l-4.54,46.54a7.76,7.76,0,0,0,7.73,8.52h82.05a7.77,7.77,0,0,0,7.74-7l4.54-46.54A7.78,7.78,0,0,0,288.48,200.05Z"
                                fill="var(--accent)"
                            ></path>
                            <path
                                d="M288.48,200.05H206.43a7.77,7.77,0,0,0-7.73,7l-4.54,46.54a7.76,7.76,0,0,0,7.73,8.52h82.05a7.77,7.77,0,0,0,7.74-7l4.54-46.54A7.78,7.78,0,0,0,288.48,200.05Z"
                                fill="#fff"
                                opacity={0.5}
                            ></path>
                            <polygon
                                points="274.47 200.06 220.16 200.06 214.1 262.13 268.41 262.13 274.47 200.06"
                                fill="#fff"
                                opacity={0.6}
                            ></polygon>
                            <path
                                d="M204.79,253.42c0,1.76-1,3.18-2.33,3.18s-2.32-1.42-2.32-3.18,1-3.18,2.32-3.18S204.79,251.67,204.79,253.42Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <path
                                d="M204.25,253.42c0,1.76-1,3.18-2.33,3.18s-2.33-1.42-2.33-3.18,1-3.18,2.33-3.18S204.25,251.67,204.25,253.42Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M204.25,253.42c0,1.76-1,3.18-2.33,3.18s-2.33-1.42-2.33-3.18,1-3.18,2.33-3.18S204.25,251.67,204.25,253.42Z"
                                opacity={0.5}
                            ></path>
                            <ellipse
                                cx="208.6"
                                cy="253.42"
                                rx="2.33"
                                ry="3.18"
                                fill="var(--reverseSecAccent)"
                            ></ellipse>
                            <path
                                d="M210.39,253.42c0,1.76-1,3.18-2.33,3.18s-2.33-1.42-2.33-3.18,1.05-3.18,2.33-3.18S210.39,251.67,210.39,253.42Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M210.39,253.42c0,1.76-1,3.18-2.33,3.18s-2.33-1.42-2.33-3.18,1.05-3.18,2.33-3.18S210.39,251.67,210.39,253.42Z"
                                opacity={0.4}
                            ></path>
                            <path
                                d="M278.26,253.37c0,1.73-1,3.13-2.29,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S278.26,251.64,278.26,253.37Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <path
                                d="M277.73,253.37c0,1.73-1,3.13-2.29,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S277.73,251.64,277.73,253.37Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M277.73,253.37c0,1.73-1,3.13-2.29,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S277.73,251.64,277.73,253.37Z"
                                opacity={0.3}
                            ></path>
                            <path
                                d="M284.31,253.37c0,1.73-1,3.13-2.29,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S284.31,251.64,284.31,253.37Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <path
                                d="M283.78,253.37c0,1.73-1,3.13-2.3,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S283.78,251.64,283.78,253.37Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M283.78,253.37c0,1.73-1,3.13-2.3,3.13s-2.29-1.4-2.29-3.13,1-3.13,2.29-3.13S283.78,251.64,283.78,253.37Z"
                                opacity={0.2}
                            ></path>
                            <path
                                d="M282.27,216.54c0,2-1.19,3.65-2.67,3.65s-2.67-1.64-2.67-3.65,1.2-3.65,2.67-3.65S282.27,214.53,282.27,216.54Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <ellipse
                                cx="278.98"
                                cy="216.54"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--additionallAccent)"
                            ></ellipse>
                            <ellipse
                                cx="278.98"
                                cy="216.54"
                                rx="2.67"
                                ry="3.65"
                                sfill="#fff"
                                opacity={0.2}
                            ></ellipse>
                            <path
                                d="M282.27,226.36c0,2-1.19,3.65-2.67,3.65s-2.67-1.64-2.67-3.65,1.2-3.65,2.67-3.65S282.27,224.35,282.27,226.36Z"
                                fill="var(--reverseSecAccent)"
                            ></path>
                            <ellipse
                                cx="278.98"
                                cy="226.36"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--additionallAccent)"
                            ></ellipse>
                            <ellipse
                                cx="278.98"
                                cy="226.36"
                                rx="2.67"
                                ry="3.65"
                                fill="#fff"
                                opacity={0.5}
                            ></ellipse>
                            <ellipse
                                cx="288.09"
                                cy="226.36"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--reverseSecAccent)"
                            ></ellipse>
                            <ellipse
                                cx="287.46"
                                cy="226.36"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--additionallAccent)"
                            ></ellipse>
                            <ellipse
                                cx="287.46"
                                cy="226.36"
                                rx="2.67"
                                ry="3.65"
                                fill="#fff"
                                opacity={0.3}
                            ></ellipse>
                            <ellipse
                                cx="288.09"
                                cy="216.54"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--reverseSecAccent)"
                            ></ellipse>
                            <ellipse
                                cx="287.46"
                                cy="216.54"
                                rx="2.67"
                                ry="3.65"
                                fill="var(--additionallAccent)"
                            ></ellipse>
                            <ellipse
                                cx="287.46"
                                cy="216.54"
                                rx="2.67"
                                ry="3.65"
                                fill="#fff"
                                opacity={0.4}
                            ></ellipse>
                            <polygon
                                points="214.02 220.33 210.3 220.33 210.83 215.67 205.23 215.67 204.69 220.33 200.94 220.33 200.43 225.33 204.12 225.33 203.62 229.76 209.22 229.76 209.73 225.33 213.51 225.33 214.02 220.33"
                                fill="var(--reverseSecAccent)"
                            ></polygon>
                            <polygon
                                points="213.2 220.33 209.49 220.33 210.02 215.67 204.41 215.67 203.88 220.33 200.13 220.33 199.62 225.33 203.31 225.33 202.8 229.76 208.41 229.76 208.91 225.33 212.69 225.33 213.2 220.33"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M207.49,222.83c0,.85-.5,1.53-1.12,1.53s-1.13-.68-1.13-1.53.51-1.53,1.13-1.53S207.49,222,207.49,222.83Z"
                                opacity={0.4}
                            ></path>
                            <polygon
                                points="200.68 222.83 203.51 221.55 202.65 222.83 203.04 224.11 200.68 222.83"
                                opacity={0.5}
                            ></polygon>
                            <polygon
                                points="212.03 222.83 209.23 224.11 210.07 222.83 209.69 221.55 212.03 222.83"
                                opacity={0.5}
                            ></polygon>
                            <polygon
                                points="206.91 216.95 205.37 219.89 206.66 219.31 208.16 219.95 206.91 216.95"
                                opacity={0.5}
                            ></polygon>
                            <polygon
                                points="205.68 228.65 207.22 225.71 205.93 226.29 204.43 225.65 205.68 228.65"
                                opacity={0.5}
                            ></polygon>
                            <polygon
                                points="213.2 220.33 209.49 220.33 210.02 215.67 204.41 215.67 203.88 220.33 200.13 220.33 199.62 225.33 203.31 225.33 202.8 229.76 208.41 229.76 208.91 225.33 212.69 225.33 213.2 220.33"
                                opacity={0.05}
                            ></polygon>
                            <path d="M206.26,239.21a.43.43,0,1,1-.86,0,.43.43,0,1,1,.86,0Z"></path>
                            <path d="M204.08,239.21a.43.43,0,1,1-.86,0,.43.43,0,0,1,.86,0Z"></path>
                            <path d="M201.9,239.21a.43.43,0,0,1-.43.43.44.44,0,0,1-.43-.43.43.43,0,0,1,.43-.43A.43.43,0,0,1,201.9,239.21Z"></path>
                            <path d="M208.44,239.21a.44.44,0,0,1-.87,0,.44.44,0,0,1,.87,0Z"></path>
                            <path d="M210.61,239.21a.43.43,0,1,1-.86,0,.43.43,0,1,1,.86,0Z"></path>
                            <circle cx="205.83" cy="237.03" r="0.43"></circle>
                            <circle cx="205.83" cy="234.85" r="0.43"></circle>
                            <circle cx="205.83" cy="241.38" r="0.43"></circle>
                            <path d="M205.83,244a.43.43,0,1,1,.43-.43A.43.43,0,0,1,205.83,244Z"></path>
                            <circle cx="204.29" cy="237.67" r="0.43"></circle>
                            <circle cx="202.75" cy="236.13" r="0.43"></circle>
                            <circle cx="207.37" cy="240.75" r="0.43"></circle>
                            <circle cx="208.91" cy="242.29" r="0.43"></circle>
                            <circle cx="204.29" cy="240.75" r="0.43"></circle>
                            <circle cx="202.75" cy="242.29" r="0.43"></circle>
                            <circle cx="207.37" cy="237.67" r="0.43"></circle>
                            <circle cx="208.91" cy="236.13" r="0.43"></circle>
                            <circle cx="282.27" cy="239.64" r="0.43"></circle>
                            <circle cx="280.1" cy="239.64" r="0.43"></circle>
                            <circle cx="277.92" cy="239.64" r="0.43"></circle>
                            <circle cx="284.45" cy="239.64" r="0.43"></circle>
                            <path d="M287.06,239.64a.43.43,0,1,1-.43-.43A.43.43,0,0,1,287.06,239.64Z"></path>
                            <circle cx="282.27" cy="237.46" r="0.43"></circle>
                            <circle cx="282.27" cy="235.28" r="0.43"></circle>
                            <circle cx="282.27" cy="241.81" r="0.43"></circle>
                            <path d="M282.27,244.42a.43.43,0,1,1,.44-.43A.43.43,0,0,1,282.27,244.42Z"></path>
                            <circle cx="280.73" cy="238.1" r="0.43"></circle>
                            <circle cx="279.2" cy="236.56" r="0.43"></circle>
                            <circle cx="283.81" cy="241.18" r="0.43"></circle>
                            <circle cx="285.35" cy="242.72" r="0.43"></circle>
                            <circle cx="280.73" cy="241.18" r="0.43"></circle>
                            <circle cx="279.2" cy="242.72" r="0.43"></circle>
                            <circle cx="283.81" cy="238.1" r="0.43"></circle>
                            <circle cx="285.35" cy="236.56" r="0.43"></circle>
                            <polygon
                                points="213.06 202.27 212.72 205.74 218.31 205.74 218.66 202.27 213.06 202.27"
                                fill="var(--reverseSecAccent)"
                            ></polygon>
                            <polygon
                                points="213.06 202.27 212.72 205.74 218.31 205.74 218.66 202.27 213.06 202.27"
                                fill="#fff"
                                opacity={0.5}
                            ></polygon>
                            <polygon
                                points="206.07 202.27 205.73 205.74 211.32 205.74 211.68 202.27 206.07 202.27"
                                fill="var(--reverseSecAccent)"
                            ></polygon>
                            <polygon
                                points="206.07 202.27 205.73 205.74 211.32 205.74 211.68 202.27 206.07 202.27"
                                fill="#fff"
                                opacity={0.4}
                            ></polygon>
                            <polygon
                                points="282.65 202.27 282.31 205.74 287.9 205.74 288.25 202.27 282.65 202.27"
                                fill="var(--reverseSecAccent)"
                            ></polygon>
                            <polygon
                                points="282.65 202.27 282.31 205.74 287.9 205.74 288.25 202.27 282.65 202.27"
                                sfill="#fff"
                                opacity={0.2}
                            ></polygon>
                            <polygon
                                points="275.67 202.27 275.33 205.74 280.92 205.74 281.27 202.27 275.67 202.27"
                                fill="var(--reverseSecAccent)"
                            ></polygon>
                            <polygon
                                points="275.67 202.27 275.33 205.74 280.92 205.74 281.27 202.27 275.67 202.27"
                                fill="#fff"
                                opacity={0.3}
                            ></polygon>
                            <polygon
                                points="272.81 201.64 221.17 201.64 215.11 260.84 266.75 260.84 272.81 201.64"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M226.61,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.06-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,226.61,216.24Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M226.61,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.06-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,226.61,216.24Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="229.06 218.42 228.87 221.3 231.18 221.3 231.38 218.42 229.06 218.42"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="227.81 216.98 227.62 219.86 229.93 219.86 230.12 216.98 227.81 216.98"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M237.27,216.24l-.36,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.08,1.08,0,0,0,237.27,216.24Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M237.27,216.24l-.36,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.08,1.08,0,0,0,237.27,216.24Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="239.73 218.42 239.54 221.3 241.85 221.3 242.04 218.42 239.73 218.42"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="238.48 216.98 238.29 219.86 240.6 219.86 240.79 216.98 238.48 216.98"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M248.1,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,248.1,216.24Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M248.1,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,248.1,216.24Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="250.55 218.42 250.36 221.3 252.67 221.3 252.87 218.42 250.55 218.42"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="249.3 216.98 249.11 219.86 251.42 219.86 251.61 216.98 249.3 216.98"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M258.87,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,258.87,216.24Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M258.87,216.24l-.37,5.49a1.06,1.06,0,0,0,1.06,1.13h4a1.06,1.06,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.14h-4A1.06,1.06,0,0,0,258.87,216.24Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="261.32 218.42 261.13 221.3 263.44 221.3 263.63 218.42 261.32 218.42"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="260.07 216.98 259.88 219.86 262.19 219.86 262.38 216.98 260.07 216.98"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M224.39,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,224.39,230.17Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M224.39,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,224.39,230.17Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="226.84 232.35 226.65 235.23 228.96 235.23 229.16 232.35 226.84 232.35"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="225.59 230.92 225.4 233.79 227.71 233.79 227.9 230.92 225.59 230.92"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M235.05,230.17l-.36,5.49a1.06,1.06,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.07,1.07,0,0,0,235.05,230.17Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M235.05,230.17l-.36,5.49a1.06,1.06,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.07,1.07,0,0,0,235.05,230.17Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="237.51 232.35 237.32 235.23 239.63 235.23 239.82 232.35 237.51 232.35"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="236.26 230.92 236.07 233.79 238.38 233.79 238.57 230.92 236.26 230.92"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M245.88,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,245.88,230.17Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M245.88,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,245.88,230.17Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="248.33 232.35 248.14 235.23 250.45 235.23 250.65 232.35 248.33 232.35"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="247.08 230.92 246.89 233.79 249.2 233.79 249.39 230.92 247.08 230.92"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M256.65,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,256.65,230.17Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M256.65,230.17l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.48a1.07,1.07,0,0,0-1.07-1.14h-4A1.05,1.05,0,0,0,256.65,230.17Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="259.1 232.35 258.91 235.23 261.22 235.23 261.42 232.35 259.1 232.35"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="257.85 230.92 257.66 233.79 259.97 233.79 260.16 230.92 257.85 230.92"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M222.17,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,222.17,245Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M222.17,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,222.17,245Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="224.62 247.16 224.43 250.04 226.74 250.04 226.94 247.16 224.62 247.16"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="223.37 245.72 223.18 248.6 225.49 248.6 225.68 245.72 223.37 245.72"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M232.84,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,232.84,245Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M232.84,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,232.84,245Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="235.29 247.16 235.1 250.04 237.41 250.04 237.6 247.16 235.29 247.16"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="234.04 245.72 233.85 248.6 236.16 248.6 236.35 245.72 234.04 245.72"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M243.66,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.49A1.07,1.07,0,0,0,248.7,244h-4A1.05,1.05,0,0,0,243.66,245Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M243.66,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.06-1l.37-5.49A1.07,1.07,0,0,0,248.7,244h-4A1.05,1.05,0,0,0,243.66,245Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="246.11 247.16 245.92 250.04 248.23 250.04 248.43 247.16 246.11 247.16"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="244.86 245.72 244.67 248.6 246.98 248.6 247.17 245.72 244.86 245.72"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M254.43,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,254.43,245Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M254.43,245l-.37,5.49a1.07,1.07,0,0,0,1.06,1.14h4a1.07,1.07,0,0,0,1.07-1l.37-5.49a1.07,1.07,0,0,0-1.07-1.13h-4A1.05,1.05,0,0,0,254.43,245Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <polygon
                                points="256.88 247.16 256.69 250.04 259 250.04 259.19 247.16 256.88 247.16"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="255.63 245.72 255.44 248.6 257.75 248.6 257.94 245.72 255.63 245.72"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="252.89 207.35 254.36 207.35 254.49 205.88 253.02 205.88 252.89 207.35"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="255.96 205.88 255.83 207.35 257.3 207.35 257.43 205.88 257.56 204.41 256.09 204.41 255.96 205.88"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <polygon
                                points="259.15 202.94 259.02 204.41 258.9 205.88 258.77 207.35 260.24 207.35 260.37 205.88 260.49 204.41 260.62 202.94 259.15 202.94"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <g opacity={0.4}>
                                <polygon
                                    points="252.89 207.35 254.36 207.35 254.49 205.88 253.02 205.88 252.89 207.35"
                                    fill="#fff"
                                ></polygon>
                                <polygon
                                    points="255.96 205.88 255.83 207.35 257.3 207.35 257.43 205.88 257.56 204.41 256.09 204.41 255.96 205.88"
                                    fill="#fff"
                                ></polygon>
                                <polygon
                                    points="259.15 202.94 259.02 204.41 258.9 205.88 258.77 207.35 260.24 207.35 260.37 205.88 260.49 204.41 260.62 202.94 259.15 202.94"
                                    fill="#fff"
                                ></polygon>
                            </g>
                            <path
                                d="M264.64,202.94l-.1,1.08h-.72l-.18,2.15h.72l-.1,1.08h6.46l.38-4.31Zm2.59,3.23h-2.16l.19-2.15h2.15Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M264.64,202.94l-.1,1.08h-.72l-.18,2.15h.72l-.1,1.08h6.46l.38-4.31Zm2.59,3.23h-2.16l.19-2.15h2.15Z"
                                fill="#fff"
                                opacity={0.7}
                            ></path>
                            <circle
                                cx="249.16"
                                cy="206.56"
                                r="0.64"
                                fill="var(--additionallAccent)"
                            ></circle>
                            <path
                                d="M249.16,203.54a3,3,0,0,1,2.63,1.58l.63-.46a3.76,3.76,0,0,0-6.62.18l.65.41A3,3,0,0,1,249.16,203.54Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M249.16,204.6a2,2,0,0,1,1.77,1.16l.63-.47a2.7,2.7,0,0,0-2.4-1.47,2.73,2.73,0,0,0-2.47,1.58l.67.42A2,2,0,0,1,249.16,204.6Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M249.16,205.62a.93.93,0,0,1,.91.78l.67-.5a1.71,1.71,0,0,0-3.18,0l.69.44A.94.94,0,0,1,249.16,205.62Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <g opacity={0.7}>
                                <circle cx="249.16" cy="206.56" r="0.64" fill="#fff"></circle>
                            </g>
                            <path
                                d="M249.16,203.54a3,3,0,0,1,2.63,1.58l.63-.46a3.76,3.76,0,0,0-6.62.18l.65.41A3,3,0,0,1,249.16,203.54Z"
                                fill="#fff"
                                opacity={0.7}
                            ></path>
                            <path
                                d="M249.16,204.6a2,2,0,0,1,1.77,1.16l.63-.47a2.7,2.7,0,0,0-2.4-1.47,2.73,2.73,0,0,0-2.47,1.58l.67.42A2,2,0,0,1,249.16,204.6Z"
                                fill="#fff"
                                opacity={0.7}
                            ></path>
                            <path
                                d="M249.16,205.62a.93.93,0,0,1,.91.78l.67-.5a1.71,1.71,0,0,0-3.18,0l.69.44A.94.94,0,0,1,249.16,205.62Z"
                                fill="#fff"
                                opacity={0.7}
                            ></path>
                            <polygon
                                points="272.81 201.64 221.17 201.64 215.11 260.84 266.75 260.84 272.81 201.64"
                                fill="#fff"
                                opacity={0.1}
                            ></polygon>
                            <path
                                d="M187.86,312.36a7.2,7.2,0,0,1,3.08,10.34,7,7,0,0,1-3.08,2.56,11.56,11.56,0,0,1-4.7.89h-2.81v4.78h-6.56V311.47h9.37A11.39,11.39,0,0,1,187.86,312.36Zm-3.12,8.13a2.45,2.45,0,0,0,0-3.37,3,3,0,0,0-2-.59h-2.39v4.56h2.39A2.9,2.9,0,0,0,184.74,320.49Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M202.51,326h-1.78v4.9h-6.56V311.47h9.37a11.34,11.34,0,0,1,4.69.89,6.87,6.87,0,0,1,3.09,2.55,7,7,0,0,1,1.08,3.9,6.88,6.88,0,0,1-.94,3.64,6.66,6.66,0,0,1-2.72,2.47l4.08,6h-7Zm2.61-8.91a3,3,0,0,0-2-.59h-2.39v4.56h2.39a2.9,2.9,0,0,0,2-.6,2.45,2.45,0,0,0,0-3.37Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M219.44,330.06a10,10,0,0,1,0-17.73,12.8,12.8,0,0,1,11.28,0,10,10,0,0,1,0,17.73,12.8,12.8,0,0,1-11.28,0Zm7.85-4.6a4.21,4.21,0,0,0,1.57-1.69,5.89,5.89,0,0,0,0-5.14,4.24,4.24,0,0,0-1.57-1.7,4.37,4.37,0,0,0-4.42,0,4.24,4.24,0,0,0-1.57,1.7,6,6,0,0,0,0,5.14,4.18,4.18,0,0,0,3.78,2.29A4.16,4.16,0,0,0,227.29,325.46Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M238.45,311.47H248a13.2,13.2,0,0,1,5.74,1.18,9,9,0,0,1,3.87,3.38,10.44,10.44,0,0,1,0,10.34,9.06,9.06,0,0,1-3.87,3.38,13.34,13.34,0,0,1-5.74,1.18h-9.59Zm9.31,14.34a4.67,4.67,0,0,0,3.38-1.21,5.2,5.2,0,0,0,0-6.81,4.71,4.71,0,0,0-3.38-1.21H245v9.23Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M263.75,329a9,9,0,0,1-2.5-6.78v-10.7h6.56V322a5.06,5.06,0,0,0,.76,3.11,3,3,0,0,0,4.42,0,5.06,5.06,0,0,0,.77-3.11V311.47h6.45v10.7A9,9,0,0,1,277.7,329a11.26,11.26,0,0,1-13.95,0Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M287.71,330.08a9.63,9.63,0,0,1-3.87-3.61,10.55,10.55,0,0,1,0-10.54,9.65,9.65,0,0,1,3.87-3.62,11.87,11.87,0,0,1,5.56-1.29,12.32,12.32,0,0,1,5.06,1,9.34,9.34,0,0,1,3.67,2.89l-4.14,3.7a5.32,5.32,0,0,0-4.25-2.28,4.35,4.35,0,0,0-3.31,1.32,5.65,5.65,0,0,0,0,7.09,4.35,4.35,0,0,0,3.31,1.32,5.32,5.32,0,0,0,4.25-2.28l4.14,3.7a9.34,9.34,0,0,1-3.67,2.89,12.16,12.16,0,0,1-5.06,1A11.87,11.87,0,0,1,287.71,330.08Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M308,316.55h-5.7v-5.08h18v5.08h-5.7v14.38H308Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M217,174.22l9.27,17.67-16.87-17.67H179.74a9.29,9.29,0,0,1-9.28-9.28v-19.8a9.28,9.28,0,0,1,9.28-9.28H217a9.27,9.27,0,0,1,9.27,9.28v19.8A9.28,9.28,0,0,1,217,174.22Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M217,174.22l9.27,17.67-16.87-17.67H179.74a9.29,9.29,0,0,1-9.28-9.28v-19.8a9.28,9.28,0,0,1,9.28-9.28H217a9.27,9.27,0,0,1,9.27,9.28v19.8A9.28,9.28,0,0,1,217,174.22Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <path
                                d="M215.35,150.26h-36a1.9,1.9,0,0,1-1.91-1.91h0a1.9,1.9,0,0,1,1.91-1.91h36a1.9,1.9,0,0,1,1.91,1.91h0A1.9,1.9,0,0,1,215.35,150.26Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M215.35,156.56h-36a1.9,1.9,0,0,1-1.91-1.91h0a1.9,1.9,0,0,1,1.91-1.91h36a1.9,1.9,0,0,1,1.91,1.91h0A1.9,1.9,0,0,1,215.35,156.56Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M215.35,162.86h-36a1.9,1.9,0,0,1-1.91-1.91h0a1.9,1.9,0,0,1,1.91-1.91h36a1.9,1.9,0,0,1,1.91,1.91h0A1.9,1.9,0,0,1,215.35,162.86Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M290.15,166.14,282,191l14.87-24.82H323a8.17,8.17,0,0,0,8.17-8.17V140.53a8.17,8.17,0,0,0-8.17-8.18H290.15a8.17,8.17,0,0,0-8.17,8.18V158A8.17,8.17,0,0,0,290.15,166.14Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M290.15,166.14,282,191l14.87-24.82H323a8.17,8.17,0,0,0,8.17-8.17V140.53a8.17,8.17,0,0,0-8.17-8.18H290.15a8.17,8.17,0,0,0-8.17,8.18V158A8.17,8.17,0,0,0,290.15,166.14Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <rect
                                x="293.33"
                                y="158.43"
                                width="27.81"
                                height="0.89"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <polygon
                                points="299.01 153.53 291.81 147.98 291.81 146.17 298.77 151.54 305.74 143.77 307.1 145.45 311.96 140.04 313.58 141.67 321.45 138.41 321.45 139.85 313.11 143.31 312.03 142.22 307.03 147.79 305.67 146.11 299.01 153.53"
                                fill="var(--additionallAccent)"
                            ></polygon>
                            <path
                                d="M206.31,273.69l7.12-21.6-13,21.6H177.75a7.12,7.12,0,0,0-7.12,7.12V296a7.12,7.12,0,0,0,7.12,7.12h28.56a7.12,7.12,0,0,0,7.12-7.12V280.81A7.12,7.12,0,0,0,206.31,273.69Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M206.31,273.69l7.12-21.6-13,21.6H177.75a7.12,7.12,0,0,0-7.12,7.12V296a7.12,7.12,0,0,0,7.12,7.12h28.56a7.12,7.12,0,0,0,7.12-7.12V280.81A7.12,7.12,0,0,0,206.31,273.69Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <rect
                                x="174.84"
                                y="295.84"
                                width="34.38"
                                height="1.16"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="174.84"
                                y="286.39"
                                width="1.82"
                                height="7.41"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="177.83"
                                y="283.85"
                                width="1.82"
                                height="9.95"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="180.75"
                                y="281.65"
                                width="1.82"
                                height="12.16"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="183.66"
                                y="282.89"
                                width="1.82"
                                height="10.91"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="186.66"
                                y="285.22"
                                width="1.82"
                                height="8.58"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="189.58"
                                y="285"
                                width="1.82"
                                height="8.8"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="192.66"
                                y="284.72"
                                width="1.82"
                                height="9.08"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="195.66"
                                y="282.89"
                                width="1.82"
                                height="10.91"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="198.57"
                                y="280.98"
                                width="1.82"
                                height="12.83"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="201.49"
                                y="285.22"
                                width="1.82"
                                height="8.58"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="204.48"
                                y="281.85"
                                width="1.82"
                                height="11.95"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="207.4"
                                y="279.35"
                                width="1.82"
                                height="14.45"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <path
                                d="M284.52,277.12l-7-21.34,12.78,21.34h22.45a7,7,0,0,1,7,7v15a7,7,0,0,1-7,7h-28.2a7,7,0,0,1-7-7v-15A7,7,0,0,1,284.52,277.12Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M284.52,277.12l-7-21.34,12.78,21.34h22.45a7,7,0,0,1,7,7v15a7,7,0,0,1-7,7h-28.2a7,7,0,0,1-7-7v-15A7,7,0,0,1,284.52,277.12Z"
                                fill="#fff"
                                opacity={0.3}
                            ></path>
                            <path
                                d="M290.84,298.42a5.47,5.47,0,1,1-5.46-5.46A5.46,5.46,0,0,1,290.84,298.42Z"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></path>
                            <path
                                d="M289.32,299.67c-.26,0-1.63,0-3.16,0v-.53a2.45,2.45,0,0,0,1.53-2.34,2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.58,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.63,5.63,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S289.92,299.62,289.32,299.67Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <circle
                                cx="285.38"
                                cy="285.65"
                                r="5.46"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></circle>
                            <path
                                d="M289.32,286.9c-.26,0-1.63,0-3.16,0v-.53a2.45,2.45,0,0,0,1.53-2.34,2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.58,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.63,5.63,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S289.92,286.85,289.32,286.9Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M304.13,298.42a5.47,5.47,0,1,1-5.46-5.46A5.46,5.46,0,0,1,304.13,298.42Z"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></path>
                            <path
                                d="M302.61,299.67c-.26,0-1.63,0-3.16,0v-.53a2.45,2.45,0,0,0,1.53-2.34,2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.58,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.65,5.65,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S303.21,299.62,302.61,299.67Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <circle
                                cx="298.67"
                                cy="285.65"
                                r="5.46"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></circle>
                            <path
                                d="M302.61,286.9c-.26,0-1.63,0-3.16,0v-.53A2.45,2.45,0,0,0,301,284a2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.58,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.65,5.65,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S303.21,286.85,302.61,286.9Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M316.84,298.42a5.47,5.47,0,1,1-5.46-5.46A5.46,5.46,0,0,1,316.84,298.42Z"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></path>
                            <path
                                d="M315.32,299.67c-.26,0-1.63,0-3.16,0v-.53a2.45,2.45,0,0,0,1.53-2.34,2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.59,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.63,5.63,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S315.92,299.62,315.32,299.67Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M316.84,285.65a5.47,5.47,0,1,1-5.46-5.46A5.47,5.47,0,0,1,316.84,285.65Z"
                                fill="var(--tpPri)"
                                opacity={0.8}
                            ></path>
                            <path
                                d="M315.32,286.9c-.26,0-1.63,0-3.16,0v-.53a2.45,2.45,0,0,0,1.53-2.34,2.24,2.24,0,1,0-4.45,0,2.46,2.46,0,0,0,1.45,2.31v.55c-1.59,0-3,0-3.32,0-.66.11-.65.9-.65.9a5.63,5.63,0,0,0,4.72,3,5.1,5.1,0,0,0,4.48-3S315.92,286.85,315.32,286.9Z"
                                fill="var(--additionallAccent)"
                            ></path>
                        </g>
                        <g>
                            <rect
                                x="59.24"
                                y="336.43"
                                width="41.37"
                                height="41.37"
                                rx="11.01"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="59.24"
                                y="336.43"
                                width="41.37"
                                height="41.37"
                                rx="11.01"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <path
                                d="M84.56,350.54v5.82a4.37,4.37,0,0,1-4.37,4.37H74.63l-6.35,6.35v-6.35a4.37,4.37,0,0,1-4.37-4.37v-5.82a4.37,4.37,0,0,1,4.37-4.37H80.19A4.37,4.37,0,0,1,84.56,350.54Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M67.78,368.29v-7.08a4.89,4.89,0,0,1-4.37-4.85v-5.82a4.87,4.87,0,0,1,4.87-4.87H80.19a4.87,4.87,0,0,1,4.87,4.87v5.82a4.87,4.87,0,0,1-4.87,4.87H74.84Zm.5-21.62a3.87,3.87,0,0,0-3.87,3.87v5.82a3.87,3.87,0,0,0,3.87,3.87h.5v5.65l5.64-5.65h5.77a3.87,3.87,0,0,0,3.87-3.87v-5.82a3.87,3.87,0,0,0-3.87-3.87Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M95.94,359.33v4.48a3.36,3.36,0,0,1-3.36,3.36v4.88l-4.89-4.88H83.42a3.36,3.36,0,0,1-3.36-3.36v-4.48A3.36,3.36,0,0,1,83.42,356h9.16A3.36,3.36,0,0,1,95.94,359.33Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M93.08,373.26l-5.59-5.59H83.42a3.87,3.87,0,0,1-3.86-3.86v-4.48a3.87,3.87,0,0,1,3.86-3.87h9.16a3.87,3.87,0,0,1,3.86,3.87v4.48a3.85,3.85,0,0,1-3.36,3.82Zm-9.66-16.8a2.87,2.87,0,0,0-2.86,2.87v4.48a2.87,2.87,0,0,0,2.86,2.86H87.9l4.18,4.18v-4.18h.5a2.87,2.87,0,0,0,2.86-2.86v-4.48a2.87,2.87,0,0,0-2.86-2.87Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M79.94,350.91H69.16a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H79.94a.5.5,0,0,1,.5.5A.5.5,0,0,1,79.94,350.91Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M79.94,353.42H69.16a.5.5,0,0,1,0-1H79.94a.5.5,0,0,1,0,1Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M76.94,355.94H69.16a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h7.78a.5.5,0,0,1,.5.5A.5.5,0,0,1,76.94,355.94Z"
                                fill="var(--additionallAccent)"
                            ></path>
                        </g>
                        <g>
                            <rect
                                x="107.22"
                                y="98.65"
                                width="41.43"
                                height="41.43"
                                rx="11.02"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <g>
                                <rect
                                    x="107.22"
                                    y="98.65"
                                    width="41.43"
                                    height="41.43"
                                    rx="11.02"
                                    fill="#fff"
                                    opacity={0.6}
                                ></rect>
                            </g>
                            <polygon
                                points="119.1 129.51 113.09 129.51 113.13 121.58 119.14 121.58 119.1 129.51"
                                fill="#fff"
                            ></polygon>
                            <polygon
                                points="127.07 129.51 121.07 129.51 121.11 117.19 127.11 117.19 127.07 129.51"
                                fill="#fff"
                            ></polygon>
                            <polygon
                                points="134.88 129.51 128.88 129.51 128.92 112.68 134.93 112.68 134.88 129.51"
                                fill="#fff"
                            ></polygon>
                            <polygon
                                points="142.74 129.47 136.73 129.47 136.78 105.86 142.78 105.86 142.74 129.47"
                                fill="#fff"
                            ></polygon>
                        </g>
                        <g>
                            <rect
                                x="225.21"
                                y="355.19"
                                width="41.43"
                                height="41.43"
                                rx="11.03"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <g>
                                <rect
                                    x="225.21"
                                    y="355.19"
                                    width="41.43"
                                    height="41.43"
                                    rx="11.03"
                                    fill="#fff"
                                    opacity={0.6}
                                ></rect>
                            </g>
                            <path
                                d="M263.73,385.83c-.25-1.92-2.3-18.32-2.59-20.22s-7.76-2.21-8.8,0a2,2,0,0,1-.14.25,2.29,2.29,0,0,1-1.75,1l-4.31.4h-.44l-4.31-.4a2.29,2.29,0,0,1-1.75-1,2,2,0,0,1-.14-.25c-1-2.21-8.51-1.9-8.8,0s-2.34,18.3-2.59,20.22,2.66,2.54,3.72,1.16l6.13-8.05a2.4,2.4,0,0,1,1.56-.93l3.79-.6a16.92,16.92,0,0,1,5.22,0l3.79.6a2.4,2.4,0,0,1,1.56.93L260,387C261.07,388.37,264,387.74,263.73,385.83Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M263.73,385.83c-.25-1.92-2.3-18.32-2.59-20.22s-7.76-2.21-8.8,0a2,2,0,0,1-.14.25,2.29,2.29,0,0,1-1.75,1l-4.31.4h-.44l-4.31-.4a2.29,2.29,0,0,1-1.75-1,2,2,0,0,1-.14-.25c-1-2.21-8.51-1.9-8.8,0s-2.34,18.3-2.59,20.22,2.66,2.54,3.72,1.16l6.13-8.05a2.4,2.4,0,0,1,1.56-.93l3.79-.6a16.92,16.92,0,0,1,5.22,0l3.79.6a2.4,2.4,0,0,1,1.56.93L260,387C261.07,388.37,264,387.74,263.73,385.83Z"
                                fill="#fff"
                            ></path>
                            <rect
                                x="232.7"
                                y="371.49"
                                width="6.82"
                                height="1.99"
                                transform="translate(-194.23 276.05) rotate(-45)"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="232.7"
                                y="371.49"
                                width="6.82"
                                height="1.99"
                                transform="translate(332.54 -57.85) rotate(45)"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <polygon
                                points="237.82 369.37 236.11 371.08 234.4 369.37 232.99 370.78 234.7 372.49 232.99 374.2 234.4 375.6 236.11 373.89 237.82 375.6 239.22 374.2 237.51 372.49 239.22 370.78 237.82 369.37"
                                opacity={0.4}
                            ></polygon>
                            <rect
                                x="252.32"
                                y="371.49"
                                width="6.82"
                                height="1.99"
                                transform="translate(-188.49 289.93) rotate(-45)"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <rect
                                x="252.32"
                                y="371.49"
                                width="6.82"
                                height="1.99"
                                transform="translate(338.29 -71.73) rotate(45)"
                                fill="var(--additionallAccent)"
                            ></rect>
                            <polygon
                                points="257.44 369.37 255.73 371.08 254.02 369.37 252.62 370.78 254.33 372.49 252.62 374.2 254.02 375.6 255.73 373.89 257.44 375.6 258.85 374.2 257.14 372.49 258.85 370.78 257.44 369.37"
                                opacity={0.4}
                            ></polygon>
                        </g>
                        <g>
                            <path
                                d="M280,86h21.27a11,11,0,0,1,11,11v21.27a11,11,0,0,1-11,11H280a11,11,0,0,1-11-11V97A11,11,0,0,1,280,86Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <path
                                d="M277,99.64v5.19h-3.79v7.57H277v5.18h28.3V99.64Zm12.75,14.75H282V102.83h11.56Z"
                                fill="#fff"
                            ></path>
                        </g>
                        <g>
                            <path
                                d="M396.49,280.15h19.38a11,11,0,0,1,11,11v19.38a11,11,0,0,1-11,11H396.49a11,11,0,0,1-11-11V291.18A11,11,0,0,1,396.49,280.15Z"
                                fill="var(--additionallAccent)"
                            ></path>
                            <g>
                                <path
                                    d="M396.49,280.15h19.38a11,11,0,0,1,11,11v19.38a11,11,0,0,1-11,11H396.49a11,11,0,0,1-11-11V291.18A11,11,0,0,1,396.49,280.15Z"
                                    fill="#fff"
                                    opacity={0.6}
                                ></path>
                            </g>
                            <path
                                d="M409.54,309.77a3.17,3.17,0,1,1-3.17-3.17A3.17,3.17,0,0,1,409.54,309.77Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M406.43,292.64a14.87,14.87,0,0,1,13,7.81l3.12-2.31a18.62,18.62,0,0,0-32.77.91l3.23,2A14.93,14.93,0,0,1,406.43,292.64Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M406.53,298.79a9.65,9.65,0,0,1,8.78,5.73l3.13-2.32a13.44,13.44,0,0,0-24.13.56l3.3,2.07A9.64,9.64,0,0,1,406.53,298.79Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M406.43,304.62a4.58,4.58,0,0,1,4.49,3.87l3.33-2.47a8.47,8.47,0,0,0-15.75.23l3.45,2.17A4.6,4.6,0,0,1,406.43,304.62Z"
                                fill="#fff"
                            ></path>
                        </g>
                    </svg>
                </div>
                <ul>
                    {products.map((product) => (
                        <TempProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
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
