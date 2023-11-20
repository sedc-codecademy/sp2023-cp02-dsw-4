import React from 'react'

export function CatDP(props) {
    return (
        <li>
            <button onClick={() => props.handleCatClick(props.category.id)}>
                <div>
                    <img src={props.category.image} alt="category" />
                    <h4>{props.category.title}</h4>
                </div>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="m12 8l10 8l-10 8z" /></svg>
            </button>
        </li>
    )
}

export function CatDPMobile(props) {
    return (
        <li>
            <button onClick={() => props.handleCatClick(props.category.id)}>
                <img src={props.category.image} alt="category" />
                <h4>{props.category.title}</h4>
            </button>
        </li>
    )
}

export function SubCatDP(props) {
    return (
        <li>
            <button onClick={() => props.handleSubCatClick(props.subCategory.id)}>
                <img src={props.subCategory.image} alt="Sub Category" />
                <div>
                    <h4>{props.subCategory.title}</h4>
                    <p>{props.subCategory.description}</p>
                </div>
            </button>
        </li>
    )
}

export function ViewAllSub(props) {
    return (
        <button className="viewAllSubCats" onClick={() => props.handleViewAllClick(props.category.id)}>
            <h4>Browse All</h4>
        </button>
    )
}

export const subCatArray = [
    {
        "id": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "title": "Personal Computers",
        "description": "Get PCs, the latest components, PC accesories and everything else related to PCs.",
        "products": [
            "22a11570-fb04-4866-ab39-edf417e7b94b",
            "1667664e-25f6-48cd-80c8-bec8a480e70a",
            "e8a1f39a-91cc-4a4a-8370-140f870e3cbc",
            "5e080519-afc4-4ad6-ad5e-822110c4a019",
            "67450240-def8-486c-b5cd-87ffe7f5340a"
        ],
        "image": "/imgs/cat/tech/sub/pc.jpg",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology"
        }
    },
    {
        "id": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "title": "Smartphones",
        "description": "Discover the latest smartphones from top brands like Apple, Samsung, and more.",
        "products": [
            "bb555e1d-3d60-444b-9512-eff11675a02b",
            "05ff3218-30d8-4dec-ba74-9a95abac28c7",
            "8bac7b4e-710d-48bd-aee5-e99044f7d941",
            "99ea52a4-85cd-4362-96ca-1bc9402024f1",
            "660e78fc-9bfb-4f27-a9b1-13b5a0b6559d"
        ],
        "image": "/imgs/cat/tech/sub/phone.jpg",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology"
        }
    },
    {
        "id": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "title": "Office Electronics",
        "description": "Get office electronics like printers, scanners, and projectors to help you run your business.",
        "products": [
            "20512450-3338-4601-a74f-0958aa76444e",
            "44427aa3-5e24-4e0b-b5ea-82c6974846b7",
            "f622519d-7bd4-4dfe-b316-b75ddf72e1f3",
            "36391f42-375a-4299-90b1-a5fab3419832",
            "447469cf-817b-4ec9-98de-736447b58871"
        ],
        "image": "/imgs/cat/tech/sub/printer.jpg",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology"
        }
    },
    {
        "id": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "title": "Audio & Video Equipment",
        "description": "Shop for speakers, headphones, TVs, projectors, and other audio & video equipment.",
        "products": [
            "d9598be3-d111-43eb-ae63-3366e748fff8",
            "66a02cf5-8013-4e00-b274-1a31d327860d",
            "a4c513a5-4f9f-464c-9e9c-7755d68c65e0",
            "e602d7df-b106-4dbc-aefc-010ba336a91c",
            "e66ba3a8-7538-4f70-ab85-ab77eea810f1"
        ],
        "image": "/imgs/cat/tech/sub/audiovideo.jpg",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology"
        }
    },
    {
        "id": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "title": "Cameras & Photography",
        "description": "Shop for cameras, lenses, and other photography equipment for amateurs and professionals.",
        "products": [
            "8771f949-32b0-4bf9-b7fa-fd1ebd2c4310",
            "6fddbad4-c7ad-4e2f-b1cb-3aadf68b5918",
            "bcd60177-973c-4955-9032-14132c664732",
            "9af0fe94-de57-46e6-acf6-3b65ed3b0bdf",
            "2c5b908c-e853-4d18-bd2c-79ae11019e5f"
        ],
        "image": "/imgs/cat/tech/sub/proffcamera.jpg",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology"
        }
    },
    {
        "id": "95448f8a-49ea-4930-b91f-193892a687e8",
        "title": "T-Shirts",
        "description": "Comfortable and versatile tops that come in a variety of styles, colors, and designs.",
        "products": [
            "90720ef6-51a0-473a-a013-864b2c1326d5",
            "5879522e-cc0f-4928-b879-35730218862b",
            "221fd769-6958-4460-9eff-6fbb012ef786",
            "8bc28fcd-7893-4bc4-9ceb-40bd2c9d799b",
            "42c3721e-0ec9-43b3-b59f-ad2332a4acab"
        ],
        "image": "/imgs/cat/mWear/sub/stripe-shirt.jpg",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing"
        }
    },
    {
        "id": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "title": "Foot Wear",
        "description": "Boots, jordans, sketchers adidas, nike and everyhing inbetween.",
        "products": [
            "406e6538-9d31-46d7-a5a7-5af1305d6d22",
            "562cee5d-d1e2-4c9e-a9af-1ae092d6c32d",
            "e8ed9cc5-6ea0-4043-be87-7f4e749bf840",
            "0b122172-2929-4101-bb61-c8ac2b091ca8",
            "23207d4e-2653-4cee-a62c-34e72111b89e"
        ],
        "image": "/imgs/cat/mWear/sub/mboots.png",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing"
        }
    },
    {
        "id": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "title": "Pants",
        "description": "Versatile pants that come in a variety of styles, including khakis, chinos, and cargo pants.",
        "products": [
            "a60ec7c4-eeb4-4e02-8dde-57ad44cd05f3",
            "2a9c461e-4716-4b01-94e6-71b424846426",
            "5a299b0a-45e9-4ef4-81ab-f5022d6a486f",
            "2160f50a-14e4-45ec-8b40-de083f1a2347",
            "aa64f4ca-cd7e-4c12-92b8-8a552fc55c57"
        ],
        "image": "/imgs/cat/mWear/sub/mpants.png",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing"
        }
    },
    {
        "id": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "title": "Head wear",
        "description": "Head wear, all kinds of hats. Stay protected in the summer and warm in the winter!",
        "products": [
            "d58379f1-b7a2-4664-879f-5a39c7c64cd6",
            "94b148f9-c7d4-4818-aedd-ccfda1754479",
            "d9fa956b-7dc5-4ebf-8705-b7cef6853589",
            "843f43bf-c70d-46e5-b183-38d7480b406d",
            "b0799fd1-8774-46a7-9136-b6880e57b2e6"
        ],
        "image": "/imgs/cat/mWear/sub/cap.png",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing"
        }
    },
    {
        "id": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "title": "Suits",
        "description": "Formal outfits that typically consist of a jacket and matching pants, worn for business or formal occasions.",
        "products": [
            "24e9f357-205d-4fc1-bb01-48dcbbd9c3c0",
            "13592f59-3b39-4d48-bee5-b2b7cf36ce18",
            "b45e3b05-50e4-4c65-bc44-ff0dd4b8bbf3",
            "5a358579-957d-4dae-9dfd-8f3cc9ee9be9",
            "3f4db19e-9dbb-4a3e-9232-4a878318e173"
        ],
        "image": "/imgs/cat/mWear/sub/suit.png",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing"
        }
    },
    {
        "id": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "title": "Dresses",
        "description": "All kinds of dresses and in all the colors they come in. We even have wedding dresses!",
        "products": [
            "a1e6197a-d568-4bf2-90ba-36a7fca5c1b9",
            "77cd1653-2bce-4782-95e5-8744bce4f127",
            "f18ffd69-3923-4769-9b24-a624523ae515",
            "462c1eba-9e88-4944-b3d7-2810162cf1a8",
            "9afce601-6a30-4102-b90f-0c16de437ed4",
            "bcec558e-8908-42d5-95e2-ac27b3733def"
        ],
        "image": "/imgs/cat/fWear/sub/dress.png",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing"
        }
    },
    {
        "id": "2986c60e-1876-4c73-84be-95855807a23e",
        "title": "Foot wear",
        "description": "Every kind of shoe you can think of at great prices.",
        "products": [
            "5b724e4f-d90f-4187-8480-29f98569ddaa",
            "9a4cfc9b-ea66-48c9-88dd-67a411368d24",
            "3c2cb010-6988-4230-b15d-15de7291d6b7",
            "7c3bd953-20bf-40ef-bad3-d2dae30a0ecf",
            "f0b54c36-3851-424c-9dc2-1a4f745fb70c"
        ],
        "image": "/imgs/cat/fWear/sub/wBoots.png",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing"
        }
    },
    {
        "id": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "title": "Carry-ons",
        "description": "All the purses you can think of at great prices.",
        "products": [
            "81360461-198a-4fb0-be30-bb2efe99b07f",
            "96f80d27-ac83-42dd-9d12-ec26f962f50a",
            "1e8ba3c8-14f3-4321-a049-0a2db5265fdb",
            "ca99d1c8-a962-4a9c-8ba2-e0aa4a15dd7a",
            "01e09736-f39e-4274-a194-3e6083bbf303"
        ],
        "image": "/imgs/cat/fWear/sub/purse.png",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing"
        }
    },
    {
        "id": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "title": "Jeans",
        "description": "A range of styles, including jeans, leggings, and dress pants, suitable for various occasions and seasons.",
        "products": [
            "710a5b50-0ce3-45a1-aa17-53348ad59d8a",
            "60ca4da0-c411-45da-83b3-f409181f1460",
            "5f5d01e5-89ce-490e-8efa-445f52bc7472",
            "b10980e4-6268-4807-840c-9b1b3295c907",
            "3031b472-b297-4ace-823a-049602168b09"
        ],
        "image": "/imgs/cat/fWear/sub/wJeans.png",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing"
        }
    },
    {
        "id": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "title": "Tops",
        "description": "A range of styles, from casual to formal, including t-shirts, blouses, and crop tops.",
        "products": [
            "971211e7-b0a8-4354-8d60-b13158aa1f1b",
            "d15536c8-5085-4ca6-8cf5-2d282eb35002",
            "993bc43d-2144-4f9c-b7b3-8b6d82628222",
            "215ff37e-9809-46e1-82e4-c266ca0b694a",
            "f5202b71-94e8-4027-acf0-fc9083965ba5",
            "89c4cf40-c29a-43f5-a0c9-bc1339a4f7c2"
        ],
        "image": "/imgs/cat/fWear/sub/wTops.png",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing"
        }
    },
    {
        "id": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "title": "Seat Covers",
        "description": "Protective covers for car seats to prevent wear and tear, stains, and damage.",
        "products": [
            "40214fe3-84c7-47f0-ae07-acfbaf9882df",
            "06650b12-63a7-4c69-96db-afd73f3ed83f",
            "21379b0a-a999-4a3c-9c00-76027da1c14a",
            "1c529959-3e4b-43e5-ba47-bbea884cbffd",
            "d1f1719d-0060-4d00-9ac5-75a9175c00d8"
        ],
        "image": "/imgs/cat/auto/sub/seatcover.png",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories"
        }
    },
    {
        "id": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "title": "Car Chargers",
        "description": "Chargers and adapters for charging phones, tablets, and other devices in the car.",
        "products": [
            "9ea63a74-7a6e-440d-b04a-fe536d46287f",
            "f73bce3d-5619-446b-a355-838249d4ea3a",
            "73c5ab4b-d763-40ab-b623-a8c36c2f2d20",
            "d198c2e5-90ab-44eb-b558-8d3606aef415",
            "e2e73b1b-5e9a-42dd-a528-61b3268511d6"
        ],
        "image": "/imgs/cat/auto/sub/carcharger.png",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories"
        }
    },
    {
        "id": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "title": "Car Cleaning Kits",
        "description": "Kits containing everything needed to clean and detail the interior and exterior of a car.",
        "products": [
            "4bb1a122-8409-49f0-aa58-931f2f6ee16d",
            "cb4bf7f2-fe9f-4505-9eab-29d7884e2897",
            "b862183c-17a8-4fea-95b9-9c3fab7ad42a",
            "f49dd188-a1cb-41d9-a6ca-59f6c47dfa63",
            "81cabe25-8d69-4a1d-a272-6d95fd44d620"
        ],
        "image": "/imgs/cat/auto/sub/cleaningkit.png",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories"
        }
    },
    {
        "id": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "title": "Car Fragrances",
        "description": "Air fresheners and scents to keep the car smelling fresh and pleasant.",
        "products": [
            "a89fb26b-a3fc-408f-bfa5-ae6670d5bb9f",
            "a1ce6916-bf25-40f9-a541-8114ef654c38",
            "b0b3b846-f546-414d-8575-28622baa103d",
            "31c548a8-0c70-4af7-915f-952e13b9af9b",
            "57449687-f54b-4303-b702-de3a7090b982"
        ],
        "image": "/imgs/cat/auto/sub/airfreshener.png",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories"
        }
    },
    {
        "id": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "title": "Car Lights",
        "description": "LED lights and bulbs for headlights, taillights, interior lighting, and decorative lighting.",
        "products": [
            "26fb2adb-a251-4a23-952d-bdef097a093c",
            "ab86a0f5-6a33-472d-92fe-3a3256fd5b96",
            "60878fe8-9fb3-4742-98ee-79dd8c60b568",
            "92a2ce33-ab8d-4ecf-a78f-e1c1c0f9d118",
            "f8bf4dc1-9fba-4cf8-90ff-e92b410ff348"
        ],
        "image": "/imgs/cat/auto/sub/carlight.png",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories"
        }
    },
    {
        "id": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "title": "Athletic Accessories",
        "description": "Find athletic accessories like water bottles, yoga mats, and resistance bands.",
        "products": [
            "428c67a1-c1cd-4608-9755-2def2e739530",
            "16301449-ca10-4c3e-b40e-141f989560d7",
            "ff8b78ff-a1c3-4871-8b8a-af0297e8852f",
            "241f10e3-88b4-4a24-b43f-dcb93c979cb1",
            "8a8704ec-ceb8-40fd-95ef-dfe861783312"
        ],
        "image": "/imgs/cat/sports/sub/waterbottle.png",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports"
        }
    },
    {
        "id": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "title": "Outdoor Recreation",
        "description": "Find outdoor gear like camping equipment, backpacks, and hiking boots.",
        "products": [
            "93fe6a92-22d6-462a-9237-b40891d4474f",
            "e228ec77-05b6-469b-af84-18f0af368a38",
            "345d35cb-d33d-445d-a64f-2ec50403727a",
            "abd93056-c6b9-4449-bb31-56e60d39e270",
            "c990dfb9-29d5-4189-bb6d-e9f8813837ba"
        ],
        "image": "/imgs/cat/sports/sub/campinggear.png",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports"
        }
    },
    {
        "id": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "title": "Fitness Equipment",
        "description": "Shop for fitness equipment like treadmills, weights, and resistance machines.",
        "products": [
            "c410c4fd-0c00-4e9b-bab7-d6f4d24ab74c",
            "2c54d011-3bfc-4b96-8967-7c372d08ea5b",
            "e3e11080-7f98-4f97-81ba-7668feecab3d",
            "33a146d8-ae36-4a0e-b93c-5398d0820362",
            "da7572d3-e492-48af-8ce8-4937aa3f38c6"
        ],
        "image": "/imgs/cat/sports/sub/fitnessgear.png",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports"
        }
    },
    {
        "id": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "title": "Bikes",
        "description": "Find bikes for adults and kids, including road bikes, mountain bikes, and BMX bikes.",
        "products": [
            "4417cab0-a13b-4b9e-b692-510cbe902a0d",
            "d039466b-4d11-486d-94ba-ed9a45b36bbe",
            "745e07dc-43ef-4572-ac34-7b0331d3fa34",
            "c9f40c1b-020a-4c42-9a00-57a6e43e73e8",
            "ae048bef-952c-4720-908f-b483bf571364"
        ],
        "image": "/imgs/cat/sports/sub/bicycle.png",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports"
        }
    },
    {
        "id": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "title": "Golf",
        "description": "Find golf clubs, bags, and accessories for your next round.",
        "products": [
            "854e6686-8dfd-4cd4-84ec-073b80c56dad",
            "a33482f1-fa13-4793-b43e-9ad2be68a991",
            "3935ba24-d7a8-447e-8c02-f15284f7972d",
            "254b6aa8-888c-41c0-a586-79b4a016be15",
            "d9793d20-5e2d-46dd-903c-a064be4d7ebf"
        ],
        "image": "/imgs/cat/sports/sub/golfgear.png",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports"
        }
    }
]

export const catArray = [
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
        image: "/imgs/cat/tech/technologysmall.jpg",
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
        image: "/imgs/cat/mWear/mensWearsmall.jpg",
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
        image: "/imgs/cat/fWear/womensWearsmall.jpg",
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
        image: "/imgs/cat/auto/autoaccsmall.jpg",
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
        image: "/imgs/cat/sports/sportssmall.jpg",
    },
]
