import { createSlice } from "@reduxjs/toolkit";


const productsData=[
    {
        "title": "Universal Fit Seat Covers",
        "price": 79.99,
        "description": "These universal fit seat covers are designed to fit most cars, trucks, and SUVs, making them a versatile and affordable option for any car owner.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "stock": 12,
        "rating": {
            "rate": 3.5,
            "count": 8
        },
        "id": "1c529959-3e4b-43e5-ba47-bbea884cbffd",
        "sale": 1,
        "shippingPrice":10,
        "shipping": {
            "weight": "13 kg",
            "dimensions": "84 cm x 89 cm x 53 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "variants": {
            "size": [
                {
                    "option": "Small",
                    "additionalPrice": 5.99,
                    "stock": 15,
                    "color": [
                        {
                            "option": "Gray",
                            "additionalPrice": 1.99,
                            "stock": 15
                        }
                    ]
                },
                {
                    "option": "Medium",
                    "additionalPrice": 3.99,
                    "stock": 54,
                    "color": [
                        {
                            "option": "Gray",
                            "additionalPrice": 1.99,
                            "stock": 5
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 6.99,
                            "stock": 5
                        },
                        {
                            "option": "Green",
                            "additionalPrice": 5.99,
                            "stock": 4
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 1.99,
                            "stock": 1
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 3.99,
                            "stock": 17
                        },
                        {
                            "option": "Blue",
                            "additionalPrice": 1.99,
                            "stock": 14
                        },
                        {
                            "option": "Orange",
                            "additionalPrice": 2.99,
                            "stock": 8
                        }
                    ]
                },
                {
                    "option": "Large",
                    "additionalPrice": 5.99,
                    "stock": 43,
                    "color": [
                        {
                            "option": "Yellow",
                            "additionalPrice": 2.99,
                            "stock": 1
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 1.99,
                            "stock": 15
                        },
                        {
                            "option": "Orange",
                            "additionalPrice": 6.99,
                            "stock": 9
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 7.99,
                            "stock": 18
                        }
                    ]
                }
            ]
        }
    },
    {
        "title": "Neoprene Seat Covers",
        "price": 119.99,
        "description": "These neoprene seat covers provide a durable and waterproof barrier against spills and stains, while also offering a sporty and rugged look to your car's interior.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "stock": 6,
        "rating": {
            "rate": 4.5,
            "count": 3
        },
        "id": "d1f1719d-0060-4d00-9ac5-75a9175c00d8",
        "sale": 8,
        "shippingPrice":10,

        "shipping": {
            "weight": "33 kg",
            "dimensions": "26 cm x 97 cm x 18 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "variants": {
            "size": [
                {
                    "option": "Small",
                    "additionalPrice": 2.99,
                    "stock": 1,
                    "color": [
                        {
                            "option": "Blue",
                            "additionalPrice": 9.99,
                            "stock": 1
                        }
                    ]
                },
                {
                    "option": "Medium",
                    "additionalPrice": 0.99,
                    "stock": 59,
                    "color": [
                        {
                            "option": "Black",
                            "additionalPrice": 4.99,
                            "stock": 11
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 7.99,
                            "stock": 2
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 3.99,
                            "stock": 10
                        },
                        {
                            "option": "Blue",
                            "additionalPrice": 6.99,
                            "stock": 3
                        },
                        {
                            "option": "Purple",
                            "additionalPrice": 7.99,
                            "stock": 15
                        },
                        {
                            "option": "Orange",
                            "additionalPrice": 0.99,
                            "stock": 18
                        }
                    ]
                },
                {
                    "option": "Large",
                    "additionalPrice": 6.99,
                    "stock": 80,
                    "color": [
                        {
                            "option": "Orange",
                            "additionalPrice": 6.99,
                            "stock": 11
                        },
                        {
                            "option": "White",
                            "additionalPrice": 7.99,
                            "stock": 11
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 6.99,
                            "stock": 12
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 2.99,
                            "stock": 6
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 4.99,
                            "stock": 17
                        },
                        {
                            "option": "Purple",
                            "additionalPrice": 8.99,
                            "stock": 18
                        },
                        {
                            "option": "Green",
                            "additionalPrice": 3.99,
                            "stock": 5
                        }
                    ]
                }
            ]
        }
    },
    {
        "title": "Sheepskin Seat Covers",
        "price": 159.99,
        "description": "These sheepskin seat covers provide a cozy and comfortable driving experience, while also adding a touch of luxury to your car's interior.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "stock": 4,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "4c5cd84c-08e7-4e40-bcbb-f5233dbab7b9",
        "sale": 22,
        "shippingPrice":10,

        "shipping": {
            "weight": "19 kg",
            "dimensions": "87 cm x 4 cm x 29 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "variants": {
            "size": [
                {
                    "option": "Small",
                    "additionalPrice": 3.99,
                    "stock": 46,
                    "color": [
                        {
                            "option": "Orange",
                            "additionalPrice": 3.99,
                            "stock": 18
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 7.99,
                            "stock": 10
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 4.99,
                            "stock": 18
                        }
                    ]
                },
                {
                    "option": "Medium",
                    "additionalPrice": 7.99,
                    "stock": 66,
                    "color": [
                        {
                            "option": "Orange",
                            "additionalPrice": 9.99,
                            "stock": 10
                        },
                        {
                            "option": "Purple",
                            "additionalPrice": 4.99,
                            "stock": 4
                        },
                        {
                            "option": "Blue",
                            "additionalPrice": 1.99,
                            "stock": 13
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 1.99,
                            "stock": 4
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 1.99,
                            "stock": 14
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 6.99,
                            "stock": 5
                        },
                        {
                            "option": "Green",
                            "additionalPrice": 7.99,
                            "stock": 11
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 0.99,
                            "stock": 5
                        }
                    ]
                },
                {
                    "option": "Large",
                    "additionalPrice": 5.99,
                    "stock": 60,
                    "color": [
                        {
                            "option": "Green",
                            "additionalPrice": 2.99,
                            "stock": 12
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 0.99,
                            "stock": 3
                        },
                        {
                            "option": "White",
                            "additionalPrice": 5.99,
                            "stock": 14
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 8.99,
                            "stock": 2
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 8.99,
                            "stock": 6
                        },
                        {
                            "option": "Blue",
                            "additionalPrice": 3.99,
                            "stock": 8
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 6.99,
                            "stock": 15
                        }
                    ]
                }
            ]
        }
    },
    {
        "title": "Pet-Friendly Seat Covers",
        "price": 89.99,
        "description": "These pet-friendly seat covers are made with durable and easy-to-clean materials, making them a great choice for pet owners who want to protect their car's interior.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "stock": 10,
        "rating": {
            "rate": 3.5,
            "count": 4
        },
        "id": "39f8dd73-83de-44bd-8219-ad0c25edb11d",
        "sale": 2,
        "shippingPrice":10,

        "shipping": {
            "weight": "19 kg",
            "dimensions": "22 cm x 75 cm x 23 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "variants": {
            "size": [
                {
                    "option": "Small",
                    "additionalPrice": 8.99,
                    "stock": 39,
                    "color": [
                        {
                            "option": "Purple",
                            "additionalPrice": 2.99,
                            "stock": 1
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 1.99,
                            "stock": 17
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 0.99,
                            "stock": 2
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 5.99,
                            "stock": 7
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 0.99,
                            "stock": 8
                        },
                        {
                            "option": "Orange",
                            "additionalPrice": 2.99,
                            "stock": 4
                        }
                    ]
                },
                {
                    "option": "Medium",
                    "additionalPrice": 5.99,
                    "stock": 17,
                    "color": [
                        {
                            "option": "White",
                            "additionalPrice": 2.99,
                            "stock": 17
                        }
                    ]
                },
                {
                    "option": "Large",
                    "additionalPrice": 8.99,
                    "stock": 68,
                    "color": [
                        {
                            "option": "Yellow",
                            "additionalPrice": 3.99,
                            "stock": 20
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 6.99,
                            "stock": 18
                        },
                        {
                            "option": "White",
                            "additionalPrice": 7.99,
                            "stock": 17
                        },
                        {
                            "option": "Purple",
                            "additionalPrice": 5.99,
                            "stock": 8
                        },
                        {
                            "option": "Red",
                            "additionalPrice": 2.99,
                            "stock": 5
                        }
                    ]
                }
            ]
        }
    },
    {
        "title": "Luxury Car Seat Covers",
        "price": 299.99,
        "description": "These luxury car seat covers are made with high-quality materials and feature intricate designs and details, making them a perfect choice for owners of high-end luxury cars.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "stock": 2,
        "rating": {
            "rate": 5,
            "count": 1
        },
        "id": "347d49f7-518e-4b67-b9ad-56025e29afb9",
        "sale": 18,
        "shippingPrice":10,

        "shipping": {
            "weight": "16 kg",
            "dimensions": "85 cm x 55 cm x 13 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "variants": {
            "size": [
                {
                    "option": "Small",
                    "additionalPrice": 5.99,
                    "stock": 39,
                    "color": [
                        {
                            "option": "Red",
                            "additionalPrice": 6.99,
                            "stock": 7
                        },
                        {
                            "option": "Yellow",
                            "additionalPrice": 5.99,
                            "stock": 9
                        },
                        {
                            "option": "Blue",
                            "additionalPrice": 9.99,
                            "stock": 2
                        },
                        {
                            "option": "Black",
                            "additionalPrice": 8.99,
                            "stock": 15
                        },
                        {
                            "option": "Green",
                            "additionalPrice": 1.99,
                            "stock": 6
                        }
                    ]
                },
                {
                    "option": "Medium",
                    "additionalPrice": 6.99,
                    "stock": 7,
                    "color": [
                        {
                            "option": "Black",
                            "additionalPrice": 8.99,
                            "stock": 6
                        },
                        {
                            "option": "Green",
                            "additionalPrice": 3.99,
                            "stock": 1
                        }
                    ]
                },
                {
                    "option": "Large",
                    "additionalPrice": 3.99,
                    "stock": 17,
                    "color": [
                        {
                            "option": "Blue",
                            "additionalPrice": 3.99,
                            "stock": 8
                        },
                        {
                            "option": "Gray",
                            "additionalPrice": 4.99,
                            "stock": 7
                        },
                        {
                            "option": "Orange",
                            "additionalPrice": 9.99,
                            "stock": 2
                        }
                    ]
                }
            ]
        }
    },
]

const initialState={
    products:productsData,
    count:0,
    totalPrice:0

   
}

export const productsSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
      decrement: (state, action) => {
        if (state.count >= 1) {
          state.count--;
      
        }
      },
      increment: (state, action) => {
        state.count++;
     
        
      },

    },
    
  });



export const{decrement,increment}=productsSlice.actions


export const productsReducer=productsSlice.reducer