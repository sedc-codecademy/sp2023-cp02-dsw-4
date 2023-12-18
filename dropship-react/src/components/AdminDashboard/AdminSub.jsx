import React from 'react'
import { AdminSmallCategory } from "../Categories/CategoriesList/SmallCategory";

const subCatArray = [
    {
        "id": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "name": "Personal Computers",
        "description": "Get PCs, the latest components, PC accesories and everything else related to PCs.",
        "products": [
            "22a11570-fb04-4866-ab39-edf417e7b94b",
            "1667664e-25f6-48cd-80c8-bec8a480e70a",
            "e8a1f39a-91cc-4a4a-8370-140f870e3cbc",
            "5e080519-afc4-4ad6-ad5e-822110c4a019",
            "67450240-def8-486c-b5cd-87ffe7f5340a"
        ],
        "image": "../imgs/cat/tech/sub/pc.jpg",
        "category": {
            "id": "technology",
            "name": "Technology"
        }
    },
    {
        "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "name": "Smartphones",
        "description": "Discover the latest smartphones from top brands like Apple, Samsung, and more.",
        "products": [
            "bb555e1d-3d60-444b-9512-eff11675a02b",
            "05ff3218-30d8-4dec-ba74-9a95abac28c7",
            "8bac7b4e-710d-48bd-aee5-e99044f7d941",
            "99ea52a4-85cd-4362-96ca-1bc9402024f1",
            "660e78fc-9bfb-4f27-a9b1-13b5a0b6559d"
        ],
        "image": "../imgs/cat/tech/sub/phone.jpg",
        "category": {
            "id": "technology",
            "name": "Technology"
        }
    },
    {
        "id": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "name": "Office Electronics",
        "description": "Get office electronics like printers, scanners, and projectors to help you run your business.",
        "products": [
            "20512450-3338-4601-a74f-0958aa76444e",
            "44427aa3-5e24-4e0b-b5ea-82c6974846b7",
            "f622519d-7bd4-4dfe-b316-b75ddf72e1f3",
            "36391f42-375a-4299-90b1-a5fab3419832",
            "447469cf-817b-4ec9-98de-736447b58871"
        ],
        "image": "../imgs/cat/tech/sub/printer.jpg",
        "category": {
            "id": "technology",
            "name": "Technology"
        }
    },
    {
        "id": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "name": "Audio & Video",
        "description": "Shop for speakers, headphones, TVs, projectors, and other audio & video equipment.",
        "products": [
            "d9598be3-d111-43eb-ae63-3366e748fff8",
            "66a02cf5-8013-4e00-b274-1a31d327860d",
            "a4c513a5-4f9f-464c-9e9c-7755d68c65e0",
            "e602d7df-b106-4dbc-aefc-010ba336a91c",
            "e66ba3a8-7538-4f70-ab85-ab77eea810f1"
        ],
        "image": "../imgs/cat/tech/sub/audiovideo.jpg",
        "category": {
            "id": "technology",
            "name": "Technology"
        }
    },
    {
        "id": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "name": "Photography",
        "description": "Shop for cameras, lenses, and other photography equipment for amateurs and professionals.",
        "products": [
            "8771f949-32b0-4bf9-b7fa-fd1ebd2c4310",
            "6fddbad4-c7ad-4e2f-b1cb-3aadf68b5918",
            "bcd60177-973c-4955-9032-14132c664732",
            "9af0fe94-de57-46e6-acf6-3b65ed3b0bdf",
            "2c5b908c-e853-4d18-bd2c-79ae11019e5f"
        ],
        "image": "../imgs/cat/tech/sub/proffcamera.jpg",
        "category": {
            "id": "technology",
            "name": "Technology"
        }
    },
    {
        "id": "95448f8a-49ea-4930-b91f-193892a687e8",
        "name": "T-Shirts",
        "description": "Comfortable and versatile tops that come in a variety of styles, colors, and designs.",
        "products": [
            "90720ef6-51a0-473a-a013-864b2c1326d5",
            "5879522e-cc0f-4928-b879-35730218862b",
            "221fd769-6958-4460-9eff-6fbb012ef786",
            "8bc28fcd-7893-4bc4-9ceb-40bd2c9d799b",
            "42c3721e-0ec9-43b3-b59f-ad2332a4acab"
        ],
        "image": "../imgs/cat/mWear/sub/shirt.jpg",
        "category": {
            "id": "menswear",
            "name": "Men's Clothing"
        }
    },
    {
        "id": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "name": "Foot Wear",
        "description": "Boots, jordans, sketchers adidas, nike and everyhing inbetween.",
        "products": [
            "406e6538-9d31-46d7-a5a7-5af1305d6d22",
            "562cee5d-d1e2-4c9e-a9af-1ae092d6c32d",
            "e8ed9cc5-6ea0-4043-be87-7f4e749bf840",
            "0b122172-2929-4101-bb61-c8ac2b091ca8",
            "23207d4e-2653-4cee-a62c-34e72111b89e"
        ],
        "image": "../imgs/cat/mWear/sub/foot.jpg",
        "category": {
            "id": "menswear",
            "name": "Men's Clothing"
        }
    },
    {
        "id": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "name": "Pants",
        "description": "Versatile pants that come in a variety of styles, including khakis, chinos, and cargo pants.",
        "products": [
            "a60ec7c4-eeb4-4e02-8dde-57ad44cd05f3",
            "2a9c461e-4716-4b01-94e6-71b424846426",
            "5a299b0a-45e9-4ef4-81ab-f5022d6a486f",
            "2160f50a-14e4-45ec-8b40-de083f1a2347",
            "aa64f4ca-cd7e-4c12-92b8-8a552fc55c57"
        ],
        "image": "../imgs/cat/mWear/sub/pants.jpg",
        "category": {
            "id": "menswear",
            "name": "Men's Clothing"
        }
    },
    {
        "id": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "name": "Head wear",
        "description": "Head wear, all kinds of hats. Stay protected in the summer and warm in the winter!",
        "products": [
            "d58379f1-b7a2-4664-879f-5a39c7c64cd6",
            "94b148f9-c7d4-4818-aedd-ccfda1754479",
            "d9fa956b-7dc5-4ebf-8705-b7cef6853589",
            "843f43bf-c70d-46e5-b183-38d7480b406d",
            "b0799fd1-8774-46a7-9136-b6880e57b2e6"
        ],
        "image": "../imgs/cat/mWear/sub/cap.jpg",
        "category": {
            "id": "menswear",
            "name": "Men's Clothing"
        }
    },
    {
        "id": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "name": "Suits",
        "description": "Formal outfits that typically consist of a jacket and matching pants, worn for business or formal occasions.",
        "products": [
            "24e9f357-205d-4fc1-bb01-48dcbbd9c3c0",
            "13592f59-3b39-4d48-bee5-b2b7cf36ce18",
            "b45e3b05-50e4-4c65-bc44-ff0dd4b8bbf3",
            "5a358579-957d-4dae-9dfd-8f3cc9ee9be9",
            "3f4db19e-9dbb-4a3e-9232-4a878318e173"
        ],
        "image": "../imgs/cat/mWear/sub/suit.jpg",
        "category": {
            "id": "menswear",
            "name": "Men's Clothing"
        }
    },
    {
        "id": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "name": "Dresses",
        "description": "All kinds of dresses and in all the colors they come in. We even have wedding dresses!",
        "products": [
            "a1e6197a-d568-4bf2-90ba-36a7fca5c1b9",
            "77cd1653-2bce-4782-95e5-8744bce4f127",
            "f18ffd69-3923-4769-9b24-a624523ae515",
            "462c1eba-9e88-4944-b3d7-2810162cf1a8",
            "9afce601-6a30-4102-b90f-0c16de437ed4",
            "bcec558e-8908-42d5-95e2-ac27b3733def"
        ],
        "image": "../imgs/cat/fWear/sub/dress.jpg",
        "category": {
            "id": "womenswear",
            "name": "Women's Clothing"
        }
    },
]

function AdminSub() {
    return (
        <div className="swag sub">
            <div className="name">
                <div className="infos">
                    <h1>Sub Categories</h1>
                    <p>Click on or search a sub-category by its ID</p>
                </div>
            </div>
            <ul>
                {subCatArray.map((e) =>
                    <AdminSmallCategory key={e.id} subcategory={e}></AdminSmallCategory>
                )}
            </ul>
            <div className="name">
                <div className="infos">
                    <h1>Sub Category Info</h1>
                    <p>Click on or search a sub-category by its ID</p>
                </div>
                <div className="buttons">
                    <input type="text" placeholder="Enter ID" />
                    <button>find</button>
                </div>
            </div>
        </div>
    )
}

export default AdminSub