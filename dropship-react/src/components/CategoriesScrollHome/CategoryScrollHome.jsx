import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import {BiggerCategory} from "../Categories/CategoriesList/SmallCategory"

// const catArray = [
//     {
//         "id": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
//         "title": "Personal Computers",
//         "description": "Get PCs, the latest components, PC accesories and everything else related to PCs.",
//         "products": [
//             "22a11570-fb04-4866-ab39-edf417e7b94b",
//             "1667664e-25f6-48cd-80c8-bec8a480e70a",
//             "e8a1f39a-91cc-4a4a-8370-140f870e3cbc",
//             "5e080519-afc4-4ad6-ad5e-822110c4a019",
//             "67450240-def8-486c-b5cd-87ffe7f5340a"
//         ],
//         "image": "../imgs/cat/tech/sub/pc.jpg",
//         "categoryid": "technology",
//         "categorytitle": "Technology"
//     },
//     {
//         "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
//         "title": "Smartphones",
//         "description": "Discover the latest smartphones from top brands like Apple, Samsung, and more.",
//         "products": [
//             "bb555e1d-3d60-444b-9512-eff11675a02b",
//             "05ff3218-30d8-4dec-ba74-9a95abac28c7",
//             "8bac7b4e-710d-48bd-aee5-e99044f7d941",
//             "99ea52a4-85cd-4362-96ca-1bc9402024f1",
//             "660e78fc-9bfb-4f27-a9b1-13b5a0b6559d"
//         ],
//         "image": "../imgs/cat/tech/sub/phone.jpg",
//         "categoryid": "technology",
//         "categorytitle": "Technology"
//     },
//     {
//         "id": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
//         "title": "Office Electronics",
//         "description": "Get office electronics like printers, scanners, and projectors to help you run your business.",
//         "products": [
//             "20512450-3338-4601-a74f-0958aa76444e",
//             "44427aa3-5e24-4e0b-b5ea-82c6974846b7",
//             "f622519d-7bd4-4dfe-b316-b75ddf72e1f3",
//             "36391f42-375a-4299-90b1-a5fab3419832",
//             "447469cf-817b-4ec9-98de-736447b58871"
//         ],
//         "image": "../imgs/cat/tech/sub/printer.jpg",
//         "categoryid": "technology",
//         "categorytitle": "Technology"
//     },
//     {
//         "id": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
//         "title": "Audio & Video",
//         "description": "Shop for speakers, headphones, TVs, projectors, and other audio & video equipment.",
//         "products": [
//             "d9598be3-d111-43eb-ae63-3366e748fff8",
//             "66a02cf5-8013-4e00-b274-1a31d327860d",
//             "a4c513a5-4f9f-464c-9e9c-7755d68c65e0",
//             "e602d7df-b106-4dbc-aefc-010ba336a91c",
//             "e66ba3a8-7538-4f70-ab85-ab77eea810f1"
//         ],
//         "image": "../imgs/cat/tech/sub/audiovideo.jpg",
//         "categoryid": "technology",
//         "categorytitle": "Technology"
//     },
//     {
//         "id": "50292d51-a80b-40e0-ab12-47e7557cedb8",
//         "title": "Photography",
//         "description": "Shop for cameras, lenses, and other photography equipment for amateurs and professionals.",
//         "products": [
//             "8771f949-32b0-4bf9-b7fa-fd1ebd2c4310",
//             "6fddbad4-c7ad-4e2f-b1cb-3aadf68b5918",
//             "bcd60177-973c-4955-9032-14132c664732",
//             "9af0fe94-de57-46e6-acf6-3b65ed3b0bdf",
//             "2c5b908c-e853-4d18-bd2c-79ae11019e5f"
//         ],
//         "image": "../imgs/cat/tech/sub/proffcamera.jpg",
//         "categoryid": "technology",
//         "categorytitle": "Technology"
//     },
//     {
//         "id": "95448f8a-49ea-4930-b91f-193892a687e8",
//         "title": "T-Shirts",
//         "description": "Comfortable and versatile tops that come in a variety of styles, colors, and designs.",
//         "products": [
//             "90720ef6-51a0-473a-a013-864b2c1326d5",
//             "5879522e-cc0f-4928-b879-35730218862b",
//             "221fd769-6958-4460-9eff-6fbb012ef786",
//             "8bc28fcd-7893-4bc4-9ceb-40bd2c9d799b",
//             "42c3721e-0ec9-43b3-b59f-ad2332a4acab"
//         ],
//         "image": "../imgs/cat/mWear/sub/shirt.jpg",
//         "categoryid": "menswear",
//         "categorytitle": "Men's Clothing"
//     },
//     {
//         "id": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
//         "title": "Foot Wear",
//         "description": "Boots, jordans, sketchers adidas, nike and everyhing inbetween.",
//         "products": [
//             "406e6538-9d31-46d7-a5a7-5af1305d6d22",
//             "562cee5d-d1e2-4c9e-a9af-1ae092d6c32d",
//             "e8ed9cc5-6ea0-4043-be87-7f4e749bf840",
//             "0b122172-2929-4101-bb61-c8ac2b091ca8",
//             "23207d4e-2653-4cee-a62c-34e72111b89e"
//         ],
//         "image": "../imgs/cat/mWear/sub/foot.jpg",
//         "categoryid": "menswear",
//         "categorytitle": "Men's Clothing"
//     },
//     {
//         "id": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
//         "title": "Pants",
//         "description": "Versatile pants that come in a variety of styles, including khakis, chinos, and cargo pants.",
//         "products": [
//             "a60ec7c4-eeb4-4e02-8dde-57ad44cd05f3",
//             "2a9c461e-4716-4b01-94e6-71b424846426",
//             "5a299b0a-45e9-4ef4-81ab-f5022d6a486f",
//             "2160f50a-14e4-45ec-8b40-de083f1a2347",
//             "aa64f4ca-cd7e-4c12-92b8-8a552fc55c57"
//         ],
//         "image": "../imgs/cat/mWear/sub/pants.jpg",
//         "categoryid": "menswear",
//         "categorytitle": "Men's Clothing"
//     },
//     {
//         "id": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
//         "title": "Head wear",
//         "description": "Head wear, all kinds of hats. Stay protected in the summer and warm in the winter!",
//         "products": [
//             "d58379f1-b7a2-4664-879f-5a39c7c64cd6",
//             "94b148f9-c7d4-4818-aedd-ccfda1754479",
//             "d9fa956b-7dc5-4ebf-8705-b7cef6853589",
//             "843f43bf-c70d-46e5-b183-38d7480b406d",
//             "b0799fd1-8774-46a7-9136-b6880e57b2e6"
//         ],
//         "image": "../imgs/cat/mWear/sub/cap.jpg",
//         "categoryid": "menswear",
//         "categorytitle": "Men's Clothing"
//     },
//     {
//         "id": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
//         "title": "Suits",
//         "description": "Formal outfits that typically consist of a jacket and matching pants, worn for business or formal occasions.",
//         "products": [
//             "24e9f357-205d-4fc1-bb01-48dcbbd9c3c0",
//             "13592f59-3b39-4d48-bee5-b2b7cf36ce18",
//             "b45e3b05-50e4-4c65-bc44-ff0dd4b8bbf3",
//             "5a358579-957d-4dae-9dfd-8f3cc9ee9be9",
//             "3f4db19e-9dbb-4a3e-9232-4a878318e173"
//         ],
//         "image": "../imgs/cat/mWear/sub/suit.jpg",
//         "categoryid": "menswear",
//         "categorytitle": "Men's Clothing"
//     },
//     {
//         "id": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
//         "title": "Dresses",
//         "description": "All kinds of dresses and in all the colors they come in. We even have wedding dresses!",
//         "products": [
//             "a1e6197a-d568-4bf2-90ba-36a7fca5c1b9",
//             "77cd1653-2bce-4782-95e5-8744bce4f127",
//             "f18ffd69-3923-4769-9b24-a624523ae515",
//             "462c1eba-9e88-4944-b3d7-2810162cf1a8",
//             "9afce601-6a30-4102-b90f-0c16de437ed4",
//             "bcec558e-8908-42d5-95e2-ac27b3733def"
//         ],
//         "image": "../imgs/cat/fWear/sub/dress.jpg",
//         "categoryid": "womenswear",
//         "categorytitle": "Women's Clothing"
//     },
// ]

const catArray = [
    {
        "id": "technology",
        "title": "Technology",
        "sub": [
            "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
            "57dcef31-e8c0-429f-8dea-0089afcbf945",
            "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "1ba269cb-5d2b-4975-be75-0979930cb10e",
            "58b31959-1232-453f-b631-6411be333ed3",
            "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a"
        ],
        "image": "../imgs/cat/tech/technology.jpg"
    },
    {
        "id": "menswear",
        "title": "Men's Clothing",
        "sub": [
            "95448f8a-49ea-4930-b91f-193892a687e8",
            "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
            "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
            "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
            "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
            "af8cd7b9-683a-48d9-8be4-25eb2237ee39"
        ],
        "image": "../imgs/cat/mWear/mensWear.jpg"
    },
    {
        "id": "womenswear",
        "title": "Women's Clothing",
        "sub": [
            "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "2986c60e-1876-4c73-84be-95855807a23e",
            "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
            "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
            "f641cfb0-5506-46ee-bb60-0c8150df3585",
            "e666d9e6-3f05-410e-b93d-457a71cf0123",
            "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb"
        ],
        "image": "../imgs/cat/fWear/womensWear.jpg"
    },
    {
        "id": "beauty",
        "title": "Beauty",
        "sub": [
            "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
            "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
            "f01b6cc6-1917-40ff-9344-184e978a68d8",
            "8d12a370-ad82-4c33-a99a-006b040abbe2",
            "c8e24060-a3cc-4909-a295-a20490698732",
            "67447359-bb55-4510-a696-06207f11625b",
            "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
            "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
            "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
            "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a"
        ],
        "image": "../imgs/cat/beauty/beauty.jpg"
    },
    {
        "id": "autoaccessories",
        "title": "Automobile Accessories",
        "sub": [
            "d3e3c11b-809b-4d22-98f8-58333377b784",
            "10884d4e-343f-43f8-9094-2c2e12f072ef",
            "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
            "dcc14cf4-623e-46a5-b993-06722b09a093",
            "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db"
        ],
        "image": "../imgs/cat/auto/autoacc.jpg"
    },
    {
        "id": "sports",
        "title": "Sports",
        "sub": [
            "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
            "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
            "24ffe98a-3970-4226-9895-bc0267f73cef",
            "8cec5cb9-b7ac-480d-9c60-899307478643",
            "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
            "d3022cd3-e081-41f5-a7a9-06375898811e",
            "413916b7-99d7-4d46-bd9b-86169ca97373",
            "d9c023b9-ead8-4a2c-8acb-68ee100831d3"
        ],
        "image": "../imgs/cat/sports/sports.jpg"
    },
    {
        "id": "homeandgarden",
        "title": "Home & Garden",
        "sub": [
            "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
            "21010f6a-2891-4fc9-969f-4886c993e95c",
            "86f9eabb-c453-4c95-bef2-e7538df76294",
            "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
            "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
            "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
            "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
            "7cf5b026-3725-4149-8602-1a0f65da4bd0",
            "7d214c1c-09ac-4645-b389-16e146c4e9d2",
            "0fc1779f-8256-402b-bfce-aa7938a7dce0"
        ],
        "image": "../imgs/cat/hAndG/home.jpg"
    }
]

function CategoryScrollHome() {
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const ulRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [productCardWidth, setProductCardWidth] = useState(0)

    useEffect(() => {
        if (!isMobile) {
            const ulElement = ulRef.current
            setProductCardWidth(ulElement ? ulElement.scrollWidth / catArray.length : 0)
            setMaxScroll(ulElement ? ulElement.scrollWidth - ulElement.clientWidth : 0)

            if (scrollPosition < productCardWidth / 2 && scrollPosition !== 0) {
                ulElement.scrollLeft = 0;
                setScrollPosition(0);
            } else if (maxScroll - scrollPosition < productCardWidth / 2 && scrollPosition !== maxScroll) {
                ulElement.scrollLeft = maxScroll;
                setScrollPosition(maxScroll);
            }
        }
    }, [scrollPosition, maxScroll, productCardWidth, isMobile
    ])

    const handleScrollLeft = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft - productCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }

    const handleScrollRight = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft + productCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }
    return (
        <div className={`catDiv ${scrollPosition === 0 ? "hideLeft" : ""} ${scrollPosition === maxScroll ? "hideRight" : ""}`}>
            {!isMobile && <button disabled={scrollPosition === 0} className="scrollLeft" onClick={handleScrollLeft}>
                <svg viewBox="0 0 32 32">
                    <path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" />
                </svg>
            </button>}
            <ul className="category-list" ref={ulRef}>
                {catArray.map((cat) => (
                    <BiggerCategory key={cat.id} category={cat} />
                ))}
            </ul>
            {!isMobile && <button disabled={scrollPosition === maxScroll} className="scrollright" onClick={handleScrollRight}>
                <svg viewBox="0 0 32 32">
                    <path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" />
                </svg>
            </button>}
        </div>
    )
}

export default CategoryScrollHome

