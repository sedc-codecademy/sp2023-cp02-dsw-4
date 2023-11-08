import React from "react";
import { AdminBiggerCategory } from "../Categories/CategoriesList/SmallCategory";

const catArray = [
    {
        id: "technology",
        title: "Technology",
        sub: [
            "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
            "57dcef31-e8c0-429f-8dea-0089afcbf945",
            "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "1ba269cb-5d2b-4975-be75-0979930cb10e",
            "58b31959-1232-453f-b631-6411be333ed3",
            "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        ],
        image: "../imgs/cat/tech/technology.jpg",
    },
    {
        id: "menswear",
        title: "Men's Clothing",
        sub: [
            "95448f8a-49ea-4930-b91f-193892a687e8",
            "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
            "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
            "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
            "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
            "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        ],
        image: "../imgs/cat/mWear/mensWear.jpg",
    },
    {
        id: "womenswear",
        title: "Women's Clothing",
        sub: [
            "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "2986c60e-1876-4c73-84be-95855807a23e",
            "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
            "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
            "f641cfb0-5506-46ee-bb60-0c8150df3585",
            "e666d9e6-3f05-410e-b93d-457a71cf0123",
            "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        ],
        image: "../imgs/cat/fWear/womensWear.jpg",
    },
    {
        id: "beauty",
        title: "Beauty",
        sub: [
            "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
            "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
            "f01b6cc6-1917-40ff-9344-184e978a68d8",
            "8d12a370-ad82-4c33-a99a-006b040abbe2",
            "c8e24060-a3cc-4909-a295-a20490698732",
            "67447359-bb55-4510-a696-06207f11625b",
            "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
            "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
            "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
            "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        ],
        image: "../imgs/cat/beauty/beauty.jpg",
    },
    {
        id: "autoaccessories",
        title: "Automobile Accessories",
        sub: [
            "d3e3c11b-809b-4d22-98f8-58333377b784",
            "10884d4e-343f-43f8-9094-2c2e12f072ef",
            "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
            "dcc14cf4-623e-46a5-b993-06722b09a093",
            "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        ],
        image: "../imgs/cat/auto/autoacc.jpg",
    },
    {
        id: "sports",
        title: "Sports",
        sub: [
            "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
            "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
            "24ffe98a-3970-4226-9895-bc0267f73cef",
            "8cec5cb9-b7ac-480d-9c60-899307478643",
            "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
            "d3022cd3-e081-41f5-a7a9-06375898811e",
            "413916b7-99d7-4d46-bd9b-86169ca97373",
            "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        ],
        image: "../imgs/cat/sports/sports.jpg",
    },
    {
        id: "homeandgarden",
        title: "Home & Garden",
        sub: [
            "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
            "21010f6a-2891-4fc9-969f-4886c993e95c",
            "86f9eabb-c453-4c95-bef2-e7538df76294",
            "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
            "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
            "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
            "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
            "7cf5b026-3725-4149-8602-1a0f65da4bd0",
            "7d214c1c-09ac-4645-b389-16e146c4e9d2",
            "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        ],
        image: "../imgs/cat/hAndG/home.jpg",
    },
];

function AdminCategories() {
    return (
        <div className="swag categories">
            <div className="title">
                <div className="infos">
                    <h1>Categories</h1>
                    <p>Click on a category to view/edit info</p>
                </div>
            </div>
            <ul>
                {catArray.map((e) => (
                    <AdminBiggerCategory key={e.id} category={e}></AdminBiggerCategory>
                ))}
            </ul>
            <div className="title">
                <div className="infos">
                    <h1>Category Info</h1>
                    <p>Click on or search a category by its ID</p>
                </div>
                <div className="buttons">
                    <input type="text" placeholder="Enter ID" />
                    <button>find</button>
                </div>
            </div>
        </div>
    );
}

export default AdminCategories;
