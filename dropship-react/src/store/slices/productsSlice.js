import { createSlice } from "@reduxjs/toolkit";

const productsData = [
  {
    title: "Universal Fit Seat Covers",
    price: 79.99,
    description:
      "These universal fit seat covers are designed to fit most cars, trucks, and SUVs, making them a versatile and affordable option for any car owner.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 12,
    rating: {
      rate: 3.5,
      count: 8,
    },
    id: "1c529959-3e4b-43e5-ba47-bbea884cbffd",
    sale: 0,
    shippingPrice: 10,
    shipping: {
      weight: "13 kg",
      dimensions: "84 cm x 89 cm x 53 cm",
      restrictions: "Restricted",
      region: "South America",
      subregion: "South America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 5.99,
          stock: 15,
          color: [
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 15,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 3.99,
          stock: 54,
          color: [
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 5,
            },
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 5,
            },
            {
              option: "Green",
              additionalPrice: 5.99,
              stock: 4,
            },
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 1,
            },
            {
              option: "Red",
              additionalPrice: 3.99,
              stock: 17,
            },
            {
              option: "Blue",
              additionalPrice: 1.99,
              stock: 14,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 8,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 5.99,
          stock: 43,
          color: [
            {
              option: "Yellow",
              additionalPrice: 2.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 15,
            },
            {
              option: "Orange",
              additionalPrice: 6.99,
              stock: 9,
            },
            {
              option: "Red",
              additionalPrice: 7.99,
              stock: 18,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Neoprene Seat Covers",
    price: 119.99,
    description:
      "These neoprene seat covers provide a durable and waterproof barrier against spills and stains, while also offering a sporty and rugged look to your car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 6,
    rating: {
      rate: 4.5,
      count: 3,
    },
    id: "d1f1719d-0060-4d00-9ac5-75a9175c00d8",
    sale: 8,
    shippingPrice: 10,

    shipping: {
      weight: "33 kg",
      dimensions: "26 cm x 97 cm x 18 cm",
      restrictions: "Restricted",
      region: "Africa",
      subregion: "Western Africa",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 2.99,
          stock: 1,
          color: [
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 1,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 0.99,
          stock: 59,
          color: [
            {
              option: "Black",
              additionalPrice: 4.99,
              stock: 11,
            },
            {
              option: "Yellow",
              additionalPrice: 7.99,
              stock: 2,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 10,
            },
            {
              option: "Blue",
              additionalPrice: 6.99,
              stock: 3,
            },
            {
              option: "Purple",
              additionalPrice: 7.99,
              stock: 15,
            },
            {
              option: "Orange",
              additionalPrice: 0.99,
              stock: 18,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 80,
          color: [
            {
              option: "Orange",
              additionalPrice: 6.99,
              stock: 11,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 11,
            },
            {
              option: "Red",
              additionalPrice: 6.99,
              stock: 12,
            },
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 6,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 17,
            },
            {
              option: "Purple",
              additionalPrice: 8.99,
              stock: 18,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 5,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Sheepskin Seaffffffffffffft Covdawdawdawdadaers dawdawdada",
    price: 159.99,
    description:
      "These sheepskin seat covers provide a cozy and comfortable driving experience, while also adding a touch of luxury to your car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 4,
    rating: {
      rate: 4,
      count: 6,
    },
    id: "4c5cd84c-08e7-4e40-bcbb-f5233dbab7b9",
    sale: 22,
    shippingPrice: 10,

    shipping: {
      weight: "19 kg",
      dimensions: "87 cm x 4 cm x 29 cm",
      restrictions: "Restricted",
      region: "Oceania",
      subregion: "Australia and New Zealand",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 3.99,
          stock: 46,
          color: [
            {
              option: "Orange",
              additionalPrice: 3.99,
              stock: 18,
            },
            {
              option: "Black",
              additionalPrice: 7.99,
              stock: 10,
            },
            {
              option: "Red",
              additionalPrice: 4.99,
              stock: 18,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 7.99,
          stock: 66,
          color: [
            {
              option: "Orange",
              additionalPrice: 9.99,
              stock: 10,
            },
            {
              option: "Purple",
              additionalPrice: 4.99,
              stock: 4,
            },
            {
              option: "Blue",
              additionalPrice: 1.99,
              stock: 13,
            },
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 4,
            },
            {
              option: "Red",
              additionalPrice: 1.99,
              stock: 14,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 5,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 11,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 5,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 5.99,
          stock: 60,
          color: [
            {
              option: "Green",
              additionalPrice: 2.99,
              stock: 12,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 3,
            },
            {
              option: "White",
              additionalPrice: 5.99,
              stock: 14,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 2,
            },
            {
              option: "Gray",
              additionalPrice: 8.99,
              stock: 6,
            },
            {
              option: "Blue",
              additionalPrice: 3.99,
              stock: 8,
            },
            {
              option: "Red",
              additionalPrice: 6.99,
              stock: 15,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Pet-Friendly Seat Covers",
    price: 89.99,
    description:
      "These pet-friendly seat covers are made with durable and easy-to-clean materials, making them a great choice for pet owners who want to protect their car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 10,
    rating: {
      rate: 3.5,
      count: 4,
    },
    id: "39f8dd73-83de-44bd-8219-ad0c25edb11d",
    sale: 2,
    shippingPrice: 10,

    shipping: {
      weight: "19 kg",
      dimensions: "22 cm x 75 cm x 23 cm",
      restrictions: "Restricted",
      region: "Europe",
      subregion: "Eastern Europe",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 8.99,
          stock: 39,
          color: [
            {
              option: "Purple",
              additionalPrice: 2.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 17,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 2,
            },
            {
              option: "Black",
              additionalPrice: 5.99,
              stock: 7,
            },
            {
              option: "Red",
              additionalPrice: 0.99,
              stock: 8,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 5.99,
          stock: 17,
          color: [
            {
              option: "White",
              additionalPrice: 2.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 8.99,
          stock: 68,
          color: [
            {
              option: "Yellow",
              additionalPrice: 3.99,
              stock: 20,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 18,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 17,
            },
            {
              option: "Purple",
              additionalPrice: 5.99,
              stock: 8,
            },
            {
              option: "Red",
              additionalPrice: 2.99,
              stock: 5,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Luxury Car Seat Covers",
    price: 299.99,
    description:
      "These luxury car seat covers are made with high-quality materials and feature intricate designs and details, making them a perfect choice for owners of high-end luxury cars.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 2,
    rating: {
      rate: 5,
      count: 1,
    },
    id: "347d49f7-518e-4b67-b9ad-56025e29afb9",
    sale: 18,
    shippingPrice: 10,

    shipping: {
      weight: "16 kg",
      dimensions: "85 cm x 55 cm x 13 cm",
      restrictions: "None",
      region: "Oceania",
      subregion: "Micronesia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 5.99,
          stock: 39,
          color: [
            {
              option: "Red",
              additionalPrice: 6.99,
              stock: 7,
            },
            {
              option: "Yellow",
              additionalPrice: 5.99,
              stock: 9,
            },
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 2,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 15,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 6,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 6.99,
          stock: 7,
          color: [
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 6,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 1,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 3.99,
          stock: 17,
          color: [
            {
              option: "Blue",
              additionalPrice: 3.99,
              stock: 8,
            },
            {
              option: "Gray",
              additionalPrice: 4.99,
              stock: 7,
            },
            {
              option: "Orange",
              additionalPrice: 9.99,
              stock: 2,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Leatherette Seat Covers",
    price: 149.99,
    description:
      "Upgrade your car's interior with these leatherette seat covers. They offer a sleek and luxurious look while being easy to clean and maintain.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 8,
    rating: {
      rate: 4.2,
      count: 5,
    },
    id: "c1a5e3dc-2aeb-47c8-a26f-7c8b7cb86412",
    sale: 10,
    shippingPrice: 12,
    shipping: {
      weight: "18 kg",
      dimensions: "82 cm x 92 cm x 51 cm",
      restrictions: "None",
      region: "North America",
      subregion: "United States",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 4.99,
          stock: 10,
          color: [
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 5,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 5,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 3.99,
          stock: 15,
          color: [
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 8,
            },
            {
              option: "Beige",
              additionalPrice: 4.99,
              stock: 7,
            },
            {
              option: "Brown",
              additionalPrice: 3.99,
              stock: 0,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 5.99,
          stock: 20,
          color: [
            {
              option: "Black",
              additionalPrice: 4.99,
              stock: 10,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 7,
            },
            {
              option: "Brown",
              additionalPrice: 6.99,
              stock: 3,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Waterproof Car Cover",
    price: 89.99,
    description:
      "This car cover is made from waterproof material and is designed to protect your car from rain, snow, and other elements.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 50,
    rating: {
      rate: 4.5,
      count: 10,
    },
    ratings: [],
    id: "aefa415c-82dc-4e6e-a7db-ac4c1525a742",
    sale: 10,
    shipping: {
      weight: "10 kg",
      dimensions: "51 cm x 29 cm x 18 cm",
      restrictions: "Restricted",
      region: "Oceania",
      subregion: "Polynesia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 3.99,
          stock: 22,
          color: [
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 8,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 1,
            },
            {
              option: "Purple",
              additionalPrice: 4.99,
              stock: 9,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 2,
            },
            {
              option: "Blue",
              additionalPrice: 7.99,
              stock: 2,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 5.99,
          stock: 24,
          color: [
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 14,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 10,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 0.99,
          stock: 8,
          color: [
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 8,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Sun Shade Car Cover",
    price: 69.99,
    description:
      "This car cover is designed to protect your car from the sun's harmful rays, keeping your car's interior cool and preventing fading.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 30,
    rating: {
      rate: 4,
      count: 8,
    },
    id: "0d92bd00-7f5b-4549-aec5-983ac4e40a99",
    sale: 26,
    shipping: {
      weight: "84 kg",
      dimensions: "85 cm x 12 cm x 21 cm",
      restrictions: "None",
      region: "Asia",
      subregion: "East Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 7.99,
          stock: 55,
          color: [
            {
              option: "Yellow",
              additionalPrice: 7.99,
              stock: 9,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 11,
            },
            {
              option: "Black",
              additionalPrice: 4.99,
              stock: 4,
            },
            {
              option: "Red",
              additionalPrice: 4.99,
              stock: 7,
            },
            {
              option: "White",
              additionalPrice: 3.99,
              stock: 5,
            },
            {
              option: "Green",
              additionalPrice: 0.99,
              stock: 7,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 12,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 2.99,
          stock: 40,
          color: [
            {
              option: "Purple",
              additionalPrice: 2.99,
              stock: 9,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 12,
            },
            {
              option: "White",
              additionalPrice: 1.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 53,
          color: [
            {
              option: "Gray",
              additionalPrice: 9.99,
              stock: 20,
            },
            {
              option: "Blue",
              additionalPrice: 6.99,
              stock: 6,
            },
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 9,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 3,
            },
            {
              option: "Red",
              additionalPrice: 2.99,
              stock: 12,
            },
            {
              option: "White",
              additionalPrice: 9.99,
              stock: 3,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Heavy Duty Car Cover",
    price: 99.99,
    description:
      "This heavy-duty car cover is made from durable material and is designed to protect your car from dust, dirt, and scratches.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 20,
    rating: {
      rate: 4.5,
      count: 12,
    },
    id: "9305a8a9-bb6c-4bba-ad49-d4dd867d3b4e",
    sale: 19,
    shipping: {
      weight: "69 kg",
      dimensions: "59 cm x 89 cm x 37 cm",
      restrictions: "None",
      region: "South America",
      subregion: "South America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 9.99,
          stock: 12,
          color: [
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 1,
            },
            {
              option: "Red",
              additionalPrice: 2.99,
              stock: 11,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 4.99,
          stock: 52,
          color: [
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 18,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 15,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 57,
          color: [
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 17,
            },
            {
              option: "Yellow",
              additionalPrice: 1.99,
              stock: 6,
            },
            {
              option: "Purple",
              additionalPrice: 4.99,
              stock: 11,
            },
            {
              option: "Red",
              additionalPrice: 2.99,
              stock: 18,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 3,
            },
            {
              option: "White",
              additionalPrice: 5.99,
              stock: 2,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Indoor Car Cover",
    price: 49.99,
    description:
      "This indoor car cover is made from soft material and is designed to protect your car's paint from scratches and dust while it's parked in your garage.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 40,
    rating: {
      rate: 3.5,
      count: 6,
    },
    id: "6dd4b8c5-9b5d-4de0-9d42-291b5d3d8743",
    sale: 18,
    shipping: {
      weight: "6 kg",
      dimensions: "85 cm x 60 cm x 43 cm",
      restrictions: "Restricted",
      region: "Asia",
      subregion: "Central Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 5.99,
          stock: 14,
          color: [
            {
              option: "Blue",
              additionalPrice: 8.99,
              stock: 10,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 1.99,
          stock: 17,
          color: [
            {
              option: "Gray",
              additionalPrice: 9.99,
              stock: 3,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 14,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 1.99,
          stock: 4,
          color: [
            {
              option: "Black",
              additionalPrice: 9.99,
              stock: 4,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Breathable Car Cover",
    price: 79.99,
    description:
      "This car cover is made from breathable material and is designed to prevent moisture buildup and mildew, making it ideal for long-term storage.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 15,
    rating: {
      rate: 4,
      count: 4,
    },
    id: "9cd39fa5-78c1-4df8-945b-86a91a24a645",
    sale: 27,
    shipping: {
      weight: "13 kg",
      dimensions: "45 cm x 57 cm x 0 cm",
      restrictions: "None",
      region: "Asia",
      subregion: "Southeast Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 9.99,
          stock: 77,
          color: [
            {
              option: "White",
              additionalPrice: 8.99,
              stock: 18,
            },
            {
              option: "Black",
              additionalPrice: 9.99,
              stock: 20,
            },
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 2,
            },
            {
              option: "Gray",
              additionalPrice: 2.99,
              stock: 1,
            },
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 14,
            },
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 3,
            },
            {
              option: "Green",
              additionalPrice: 5.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 4.99,
          stock: 34,
          color: [
            {
              option: "Orange",
              additionalPrice: 9.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 6,
            },
            {
              option: "Red",
              additionalPrice: 1.99,
              stock: 7,
            },
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 20,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 59,
          color: [
            {
              option: "Red",
              additionalPrice: 3.99,
              stock: 11,
            },
            {
              option: "Gray",
              additionalPrice: 4.99,
              stock: 6,
            },
            {
              option: "Blue",
              additionalPrice: 3.99,
              stock: 15,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 1,
            },
            {
              option: "Purple",
              additionalPrice: 4.99,
              stock: 19,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 1,
            },
            {
              option: "Orange",
              additionalPrice: 6.99,
              stock: 2,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 4,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Custom-Fit Car Cover",
    price: 149.99,
    description:
      "This car cover is custom-fit for your specific make and model, ensuring a perfect fit and maximum protection from the elements.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 10,
    rating: {
      rate: 5,
      count: 2,
    },
    id: "256c68b7-c5b6-40aa-9590-cdd2352e9713",
    sale: 9,
    shipping: {
      weight: "44 kg",
      dimensions: "51 cm x 62 cm x 83 cm",
      restrictions: "None",
      region: "Asia",
      subregion: "West Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 4.99,
          stock: 57,
          color: [
            {
              option: "Purple",
              additionalPrice: 0.99,
              stock: 19,
            },
            {
              option: "Gray",
              additionalPrice: 2.99,
              stock: 18,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 9,
            },
            {
              option: "White",
              additionalPrice: 1.99,
              stock: 11,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 8.99,
          stock: 51,
          color: [
            {
              option: "White",
              additionalPrice: 6.99,
              stock: 2,
            },
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 12,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 9,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 11,
            },
            {
              option: "Gray",
              additionalPrice: 4.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 1.99,
          stock: 2,
          color: [
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 8.99,
              stock: 1,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Hail-Proof Car Cover",
    price: 199.99,
    description:
      "This car cover is designed to protect your car from hail damage with a special layer of impact-resistant material.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 5,
    rating: {
      rate: 4.5,
      count: 3,
    },
    id: "15b3ed2a-5ce1-4b2d-a797-13ca67fc4e07",
    sale: 9,
    shipping: {
      weight: "94 kg",
      dimensions: "2 cm x 49 cm x 96 cm",
      restrictions: "None",
      region: "Europe",
      subregion: "Western Europe",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 3.99,
          stock: 28,
          color: [
            {
              option: "White",
              additionalPrice: 2.99,
              stock: 8,
            },
            {
              option: "Purple",
              additionalPrice: 9.99,
              stock: 7,
            },
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 6,
            },
            {
              option: "Gray",
              additionalPrice: 8.99,
              stock: 7,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 2.99,
          stock: 1,
          color: [
            {
              option: "Gray",
              additionalPrice: 8.99,
              stock: 1,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 0.99,
          stock: 56,
          color: [
            {
              option: "Gray",
              additionalPrice: 0.99,
              stock: 11,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 9,
            },
            {
              option: "Purple",
              additionalPrice: 7.99,
              stock: 1,
            },
            {
              option: "Black",
              additionalPrice: 0.99,
              stock: 17,
            },
            {
              option: "Yellow",
              additionalPrice: 9.99,
              stock: 18,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Reflective Car Cover",
    price: 59.99,
    description:
      "This car cover has a reflective coating to help keep your car cool and prevent overheating on hot sunny days.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 25,
    rating: {
      rate: 3.5,
      count: 5,
    },
    id: "d0c944f7-29a9-4c90-98e3-4bb56b5da713",
    sale: 24,
    shipping: {
      weight: "79 kg",
      dimensions: "85 cm x 51 cm x 26 cm",
      restrictions: "None",
      region: "South America",
      subregion: "South America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 8.99,
          stock: 20,
          color: [
            {
              option: "Red",
              additionalPrice: 6.99,
              stock: 16,
            },
            {
              option: "Black",
              additionalPrice: 3.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 1.99,
          stock: 52,
          color: [
            {
              option: "Purple",
              additionalPrice: 6.99,
              stock: 16,
            },
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 6,
            },
            {
              option: "White",
              additionalPrice: 0.99,
              stock: 2,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 14,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 14,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 1.99,
          stock: 51,
          color: [
            {
              option: "Blue",
              additionalPrice: 3.99,
              stock: 14,
            },
            {
              option: "Gray",
              additionalPrice: 2.99,
              stock: 4,
            },
            {
              option: "White",
              additionalPrice: 8.99,
              stock: 14,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 6,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 1,
            },
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 12,
            },
          ],
        },
      ],
    },
  },
  {
    title: "All-Weather Car Cover",
    price: 129.99,
    description:
      "This car cover is designed to protect your car from all weather conditions, including rain, snow, hail, and wind.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 15,
    rating: {
      rate: 4,
      count: 7,
    },
    id: "3a892cb6-a3c0-45cc-b38e-cc827d6ced33",
    sale: 24,
    shipping: {
      weight: "95 kg",
      dimensions: "86 cm x 72 cm x 42 cm",
      restrictions: "Restricted",
      region: "Oceania",
      subregion: "Polynesia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 8.99,
          stock: 71,
          color: [
            {
              option: "Black",
              additionalPrice: 5.99,
              stock: 2,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 18,
            },
            {
              option: "White",
              additionalPrice: 1.99,
              stock: 12,
            },
            {
              option: "Purple",
              additionalPrice: 8.99,
              stock: 9,
            },
            {
              option: "Orange",
              additionalPrice: 7.99,
              stock: 3,
            },
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 8,
            },
            {
              option: "Blue",
              additionalPrice: 9.99,
              stock: 15,
            },
            {
              option: "Red",
              additionalPrice: 8.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 8.99,
          stock: 61,
          color: [
            {
              option: "Red",
              additionalPrice: 4.99,
              stock: 19,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 5,
            },
            {
              option: "Blue",
              additionalPrice: 8.99,
              stock: 18,
            },
            {
              option: "Black",
              additionalPrice: 4.99,
              stock: 7,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 12,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 103,
          color: [
            {
              option: "Gray",
              additionalPrice: 7.99,
              stock: 20,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 14,
            },
            {
              option: "Red",
              additionalPrice: 9.99,
              stock: 12,
            },
            {
              option: "White",
              additionalPrice: 3.99,
              stock: 19,
            },
            {
              option: "Purple",
              additionalPrice: 6.99,
              stock: 13,
            },
            {
              option: "Orange",
              additionalPrice: 5.99,
              stock: 1,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 5,
            },
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 19,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Portable Car Cover",
    price: 79.99,
    description:
      "This portable car cover is lightweight and easy to store in your trunk, providing on-the-go protection from the elements.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "d3e3c11b-809b-4d22-98f8-58333377b784",
      subcategorytitle: "Car Covers",
    },
    stock: 20,
    rating: {
      rate: 3,
      count: 2,
    },
    id: "8a5341d6-ba3f-4090-8b4b-49bd422c53e0",
    sale: 26,
    shipping: {
      weight: "88 kg",
      dimensions: "92 cm x 16 cm x 22 cm",
      restrictions: "None",
      region: "South America",
      subregion: "South America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 3.99,
          stock: 36,
          color: [
            {
              option: "Yellow",
              additionalPrice: 7.99,
              stock: 6,
            },
            {
              option: "Green",
              additionalPrice: 2.99,
              stock: 15,
            },
            {
              option: "Gray",
              additionalPrice: 2.99,
              stock: 15,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 0.99,
          stock: 33,
          color: [
            {
              option: "White",
              additionalPrice: 3.99,
              stock: 15,
            },
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 18,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 1.99,
          stock: 112,
          color: [
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 20,
            },
            {
              option: "Purple",
              additionalPrice: 9.99,
              stock: 16,
            },
            {
              option: "Yellow",
              additionalPrice: 2.99,
              stock: 11,
            },
            {
              option: "Green",
              additionalPrice: 5.99,
              stock: 10,
            },
            {
              option: "Orange",
              additionalPrice: 9.99,
              stock: 20,
            },
            {
              option: "Blue",
              additionalPrice: 5.99,
              stock: 13,
            },
            {
              option: "Red",
              additionalPrice: 7.99,
              stock: 16,
            },
            {
              option: "Black",
              additionalPrice: 7.99,
              stock: 6,
            },
          ],
        },
      ],
    },
  },
  {
    title: "All-Weather Floor Mats",
    price: 49.99,
    description:
      "These all-weather floor mats are designed to protect your car's interior from dirt, debris, and moisture, making them perfect for any season.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 20,
    rating: {
      rate: 4.5,
      count: 10,
    },
    id: "83571611-c7af-4964-a28a-244b57b80d7c",
    sale: 30,
    shipping: {
      weight: "10 kg",
      dimensions: "56 cm x 35 cm x 94 cm",
      restrictions: "None",
      region: "Oceania",
      subregion: "Micronesia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 0.99,
          stock: 19,
          color: [
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 6.99,
          stock: 43,
          color: [
            {
              option: "White",
              additionalPrice: 3.99,
              stock: 14,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 12,
            },
            {
              option: "Purple",
              additionalPrice: 6.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 9.99,
          stock: 11,
          color: [
            {
              option: "Purple",
              additionalPrice: 0.99,
              stock: 11,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Carpeted Floor Mats",
    price: 39.99,
    description:
      "These carpeted floor mats provide a comfortable and stylish addition to your car's interior, while also protecting the original carpet from wear and tear.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 15,
    rating: {
      rate: 4,
      count: 5,
    },
    id: "a2fedcbc-de3e-447a-867d-d990f0bbcf4e",
    sale: 10,
    shipping: {
      weight: "14 kg",
      dimensions: "7 cm x 98 cm x 91 cm",
      restrictions: "Restricted",
      region: "North America",
      subregion: "Caribbean",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 4.99,
          stock: 56,
          color: [
            {
              option: "Yellow",
              additionalPrice: 7.99,
              stock: 2,
            },
            {
              option: "Purple",
              additionalPrice: 6.99,
              stock: 3,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 14,
            },
            {
              option: "White",
              additionalPrice: 1.99,
              stock: 10,
            },
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 8,
            },
            {
              option: "Green",
              additionalPrice: 1.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 2.99,
          stock: 23,
          color: [
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 3,
            },
            {
              option: "Green",
              additionalPrice: 4.99,
              stock: 20,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 0.99,
          stock: 34,
          color: [
            {
              option: "Orange",
              additionalPrice: 7.99,
              stock: 17,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 17,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Custom-Fit Floor Mats",
    price: 69.99,
    description:
      "These custom-fit floor mats are designed specifically for your make and model, ensuring a perfect fit and maximum protection for your car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 10,
    rating: {
      rate: 5,
      count: 2,
    },
    id: "7846b4a7-5e97-425a-9ff1-3e6d92e64d98",
    sale: 23,
    shipping: {
      weight: "46 kg",
      dimensions: "88 cm x 77 cm x 14 cm",
      restrictions: "None",
      region: "Europe",
      subregion: "Southern Europe",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 4.99,
          stock: 55,
          color: [
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 18,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 13,
            },
            {
              option: "Black",
              additionalPrice: 4.99,
              stock: 10,
            },
            {
              option: "Green",
              additionalPrice: 3.99,
              stock: 14,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 8.99,
          stock: 50,
          color: [
            {
              option: "Black",
              additionalPrice: 0.99,
              stock: 2,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 10,
            },
            {
              option: "Gray",
              additionalPrice: 4.99,
              stock: 14,
            },
            {
              option: "Blue",
              additionalPrice: 5.99,
              stock: 10,
            },
            {
              option: "Yellow",
              additionalPrice: 5.99,
              stock: 14,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 44,
          color: [
            {
              option: "Black",
              additionalPrice: 9.99,
              stock: 3,
            },
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 18,
            },
            {
              option: "Purple",
              additionalPrice: 3.99,
              stock: 16,
            },
            {
              option: "Green",
              additionalPrice: 8.99,
              stock: 7,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Rubber Floor Mats",
    price: 29.99,
    description:
      "These rubber floor mats are perfect for heavy-duty use, protecting your car's interior from mud, water, and other debris.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 25,
    rating: {
      rate: 3.5,
      count: 7,
    },
    id: "5abd7e40-ad02-43eb-84c1-e66e2c4934f7",
    sale: 17,
    shipping: {
      weight: "84 kg",
      dimensions: "32 cm x 69 cm x 35 cm",
      restrictions: "Restricted",
      region: "Europe",
      subregion: "Western Europe",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 5.99,
          stock: 30,
          color: [
            {
              option: "Black",
              additionalPrice: 3.99,
              stock: 3,
            },
            {
              option: "Purple",
              additionalPrice: 1.99,
              stock: 8,
            },
            {
              option: "Yellow",
              additionalPrice: 2.99,
              stock: 11,
            },
            {
              option: "Green",
              additionalPrice: 5.99,
              stock: 6,
            },
            {
              option: "Gray",
              additionalPrice: 7.99,
              stock: 2,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 3.99,
          stock: 21,
          color: [
            {
              option: "Blue",
              additionalPrice: 6.99,
              stock: 4,
            },
            {
              option: "Purple",
              additionalPrice: 6.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 1.99,
          stock: 39,
          color: [
            {
              option: "Yellow",
              additionalPrice: 5.99,
              stock: 7,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 3,
            },
            {
              option: "Blue",
              additionalPrice: 4.99,
              stock: 9,
            },
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 20,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Logo Floor Mats",
    price: 59.99,
    description:
      "These logo floor mats feature your favorite sports team or car brand logo, adding a personalized touch to your car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 5,
    rating: {
      rate: 4.5,
      count: 3,
    },
    id: "557a59d6-01ce-439e-879f-36fb91760ed4",
    sale: 2,
    shipping: {
      weight: "91 kg",
      dimensions: "21 cm x 70 cm x 18 cm",
      restrictions: "Restricted",
      region: "Asia",
      subregion: "Central Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 5.99,
          stock: 78,
          color: [
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 5,
            },
            {
              option: "Blue",
              additionalPrice: 7.99,
              stock: 1,
            },
            {
              option: "Yellow",
              additionalPrice: 1.99,
              stock: 16,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 17,
            },
            {
              option: "Black",
              additionalPrice: 0.99,
              stock: 10,
            },
            {
              option: "Purple",
              additionalPrice: 0.99,
              stock: 12,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 13,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 0.99,
          stock: 104,
          color: [
            {
              option: "Black",
              additionalPrice: 7.99,
              stock: 15,
            },
            {
              option: "Blue",
              additionalPrice: 7.99,
              stock: 18,
            },
            {
              option: "White",
              additionalPrice: 2.99,
              stock: 12,
            },
            {
              option: "Red",
              additionalPrice: 7.99,
              stock: 9,
            },
            {
              option: "Green",
              additionalPrice: 0.99,
              stock: 11,
            },
            {
              option: "Gray",
              additionalPrice: 3.99,
              stock: 9,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 17,
            },
            {
              option: "Purple",
              additionalPrice: 9.99,
              stock: 13,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 4.99,
          stock: 61,
          color: [
            {
              option: "Purple",
              additionalPrice: 3.99,
              stock: 6,
            },
            {
              option: "White",
              additionalPrice: 5.99,
              stock: 5,
            },
            {
              option: "Green",
              additionalPrice: 5.99,
              stock: 12,
            },
            {
              option: "Yellow",
              additionalPrice: 5.99,
              stock: 20,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 11,
            },
            {
              option: "Gray",
              additionalPrice: 2.99,
              stock: 7,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Clear Floor Mats",
    price: 19.99,
    description:
      "These clear floor mats are perfect for car owners who want to showcase the original carpet while still protecting it from wear and tear.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 30,
    rating: {
      rate: 3,
      count: 2,
    },
    id: "b494ebdf-07cd-4172-9048-ab1092044205",
    sale: 17,
    shipping: {
      weight: "7 kg",
      dimensions: "22 cm x 46 cm x 96 cm",
      restrictions: "Restricted",
      region: "North America",
      subregion: "Caribbean",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 2.99,
          stock: 17,
          color: [
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 0.99,
          stock: 12,
          color: [
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 7,
            },
            {
              option: "Blue",
              additionalPrice: 6.99,
              stock: 5,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 4.99,
          stock: 46,
          color: [
            {
              option: "Gray",
              additionalPrice: 9.99,
              stock: 14,
            },
            {
              option: "Yellow",
              additionalPrice: 5.99,
              stock: 9,
            },
            {
              option: "Green",
              additionalPrice: 2.99,
              stock: 16,
            },
            {
              option: "Blue",
              additionalPrice: 8.99,
              stock: 7,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Leather Floor Mats",
    price: 99.99,
    description:
      "These luxurious leather floor mats provide a premium look and feel to your car's interior, while also protecting the original carpet from spills and stains.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 8,
    rating: {
      rate: 4.5,
      count: 4,
    },
    id: "8958df33-5ff0-4add-8f0b-2d13218ad14f",
    sale: 2,
    shipping: {
      weight: "48 kg",
      dimensions: "34 cm x 37 cm x 1 cm",
      restrictions: "Restricted",
      region: "Asia",
      subregion: "Southeast Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 9.99,
          stock: 97,
          color: [
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 19,
            },
            {
              option: "Gray",
              additionalPrice: 0.99,
              stock: 18,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 15,
            },
            {
              option: "Yellow",
              additionalPrice: 4.99,
              stock: 8,
            },
            {
              option: "Purple",
              additionalPrice: 1.99,
              stock: 11,
            },
            {
              option: "Orange",
              additionalPrice: 4.99,
              stock: 15,
            },
            {
              option: "Blue",
              additionalPrice: 2.99,
              stock: 7,
            },
            {
              option: "Black",
              additionalPrice: 3.99,
              stock: 4,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 1.99,
          stock: 31,
          color: [
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 0.99,
              stock: 5,
            },
            {
              option: "Green",
              additionalPrice: 4.99,
              stock: 6,
            },
            {
              option: "Red",
              additionalPrice: 3.99,
              stock: 19,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 4.99,
          stock: 19,
          color: [
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 10,
            },
            {
              option: "Purple",
              additionalPrice: 7.99,
              stock: 2,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 7,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Anti-Slip Floor Mats",
    price: 29.99,
    description:
      "These anti-slip floor mats are designed to keep your feet from slipping, even when your shoes are wet or muddy, making them perfect for rainy or snowy weather.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 12,
    rating: {
      rate: 3.5,
      count: 6,
    },
    id: "cd40a4ab-d893-44f4-82e9-9b7b8470990c",
    sale: 27,
    shipping: {
      weight: "41 kg",
      dimensions: "89 cm x 93 cm x 88 cm",
      restrictions: "Restricted",
      region: "South America",
      subregion: "South America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 7.99,
          stock: 41,
          color: [
            {
              option: "Orange",
              additionalPrice: 3.99,
              stock: 19,
            },
            {
              option: "Purple",
              additionalPrice: 3.99,
              stock: 6,
            },
            {
              option: "White",
              additionalPrice: 8.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 6.99,
              stock: 15,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 0.99,
          stock: 59,
          color: [
            {
              option: "Blue",
              additionalPrice: 8.99,
              stock: 19,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 20,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 20,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 7.99,
          stock: 77,
          color: [
            {
              option: "Yellow",
              additionalPrice: 6.99,
              stock: 20,
            },
            {
              option: "Black",
              additionalPrice: 8.99,
              stock: 16,
            },
            {
              option: "Green",
              additionalPrice: 4.99,
              stock: 20,
            },
            {
              option: "Blue",
              additionalPrice: 2.99,
              stock: 10,
            },
            {
              option: "Purple",
              additionalPrice: 4.99,
              stock: 11,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Universal Fit Floor Mats",
    price: 39.99,
    description:
      "These universal fit floor mats are designed to fit most cars, trucks, and SUVs, making them a versatile and affordable option for any car owner.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 20,
    rating: {
      rate: 4,
      count: 3,
    },
    id: "af224cf1-d6ac-4dc4-82b0-1190cc5d0238",
    sale: 3,
    shipping: {
      weight: "0 kg",
      dimensions: "84 cm x 66 cm x 55 cm",
      restrictions: "None",
      region: "Asia",
      subregion: "Central Asia",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 0.99,
          stock: 47,
          color: [
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 17,
            },
            {
              option: "Red",
              additionalPrice: 0.99,
              stock: 5,
            },
            {
              option: "Black",
              additionalPrice: 3.99,
              stock: 16,
            },
            {
              option: "Gray",
              additionalPrice: 9.99,
              stock: 9,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 8.99,
          stock: 20,
          color: [
            {
              option: "Purple",
              additionalPrice: 8.99,
              stock: 2,
            },
            {
              option: "Red",
              additionalPrice: 1.99,
              stock: 1,
            },
            {
              option: "Green",
              additionalPrice: 7.99,
              stock: 17,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 7.99,
          stock: 18,
          color: [
            {
              option: "Orange",
              additionalPrice: 5.99,
              stock: 14,
            },
            {
              option: "Black",
              additionalPrice: 5.99,
              stock: 4,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Camo Floor Mats",
    price: 49.99,
    description:
      "These camo floor mats are perfect for outdoor enthusiasts, providing a rugged and stylish addition to your car's interior.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "10884d4e-343f-43f8-9094-2c2e12f072ef",
      subcategorytitle: "Floor Mats",
    },
    stock: 6,
    rating: {
      rate: 4.5,
      count: 1,
    },
    id: "3e1b097f-4aea-422e-ae4d-e1d66c7804ba",
    sale: 16,
    shipping: {
      weight: "82 kg",
      dimensions: "33 cm x 89 cm x 92 cm",
      restrictions: "Restricted",
      region: "North America",
      subregion: "Northern America",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 4.99,
          stock: 82,
          color: [
            {
              option: "Orange",
              additionalPrice: 0.99,
              stock: 20,
            },
            {
              option: "Red",
              additionalPrice: 8.99,
              stock: 1,
            },
            {
              option: "Blue",
              additionalPrice: 7.99,
              stock: 4,
            },
            {
              option: "White",
              additionalPrice: 5.99,
              stock: 4,
            },
            {
              option: "Green",
              additionalPrice: 6.99,
              stock: 15,
            },
            {
              option: "Black",
              additionalPrice: 1.99,
              stock: 15,
            },
            {
              option: "Gray",
              additionalPrice: 0.99,
              stock: 16,
            },
            {
              option: "Yellow",
              additionalPrice: 9.99,
              stock: 7,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 4.99,
          stock: 34,
          color: [
            {
              option: "Red",
              additionalPrice: 0.99,
              stock: 6,
            },
            {
              option: "Orange",
              additionalPrice: 2.99,
              stock: 10,
            },
            {
              option: "Green",
              additionalPrice: 6.99,
              stock: 3,
            },
            {
              option: "Blue",
              additionalPrice: 6.99,
              stock: 15,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 4.99,
          stock: 56,
          color: [
            {
              option: "White",
              additionalPrice: 6.99,
              stock: 20,
            },
            {
              option: "Blue",
              additionalPrice: 2.99,
              stock: 12,
            },
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 8,
            },
            {
              option: "Gray",
              additionalPrice: 0.99,
              stock: 11,
            },
            {
              option: "Black",
              additionalPrice: 7.99,
              stock: 5,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Leather Seat Covers",
    price: 149.99,
    description:
      "These premium leather seat covers add a luxurious and elegant touch to your car's interior, while also providing protection against spills and stains.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 5,
    rating: {
      rate: 4.5,
      count: 10,
    },
    id: "40214fe3-84c7-47f0-ae07-acfbaf9882df",
    sale: 23,
    shipping: {
      weight: "46 kg",
      dimensions: "13 cm x 79 cm x 40 cm",
      restrictions: "Restricted",
      region: "Africa",
      subregion: "Eastern Africa",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 1.99,
          stock: 54,
          color: [
            {
              option: "Orange",
              additionalPrice: 9.99,
              stock: 3,
            },
            {
              option: "Red",
              additionalPrice: 5.99,
              stock: 14,
            },
            {
              option: "Blue",
              additionalPrice: 4.99,
              stock: 1,
            },
            {
              option: "Gray",
              additionalPrice: 4.99,
              stock: 19,
            },
            {
              option: "Purple",
              additionalPrice: 9.99,
              stock: 9,
            },
            {
              option: "Black",
              additionalPrice: 2.99,
              stock: 8,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 8.99,
          stock: 80,
          color: [
            {
              option: "Orange",
              additionalPrice: 1.99,
              stock: 14,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 12,
            },
            {
              option: "Purple",
              additionalPrice: 0.99,
              stock: 17,
            },
            {
              option: "Black",
              additionalPrice: 3.99,
              stock: 6,
            },
            {
              option: "Red",
              additionalPrice: 9.99,
              stock: 8,
            },
            {
              option: "White",
              additionalPrice: 0.99,
              stock: 18,
            },
            {
              option: "Gray",
              additionalPrice: 8.99,
              stock: 5,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 6.99,
          stock: 57,
          color: [
            {
              option: "Orange",
              additionalPrice: 5.99,
              stock: 3,
            },
            {
              option: "White",
              additionalPrice: 7.99,
              stock: 16,
            },
            {
              option: "Yellow",
              additionalPrice: 1.99,
              stock: 15,
            },
            {
              option: "Purple",
              additionalPrice: 9.99,
              stock: 16,
            },
            {
              option: "Gray",
              additionalPrice: 1.99,
              stock: 7,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Sports Seat Covers",
    price: 99.99,
    description:
      "These sports-inspired seat covers provide a sleek and stylish look to your car's interior, while also offering protection and comfort during long drives.",
    category: {
      categoryid: "autoaccessories",
      categorytitle: "Automobile Accessories",
      subcategoryid: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
      subcategorytitle: "Seat Covers",
    },
    stock: 8,
    rating: {
      rate: 4,
      count: 5,
    },
    id: "06650b12-63a7-4c69-96db-afd73f3ed83f",
    sale: 7,
    shipping: {
      weight: "98 kg",
      dimensions: "91 cm x 73 cm x 84 cm",
      restrictions: "Restricted",
      region: "Africa",
      subregion: "Northern Africa",
    },
    variants: {
      size: [
        {
          option: "Small",
          additionalPrice: 7.99,
          stock: 30,
          color: [
            {
              option: "Blue",
              additionalPrice: 2.99,
              stock: 18,
            },
            {
              option: "Red",
              additionalPrice: 7.99,
              stock: 12,
            },
          ],
        },
        {
          option: "Medium",
          additionalPrice: 3.99,
          stock: 9,
          color: [
            {
              option: "Green",
              additionalPrice: 6.99,
              stock: 9,
            },
          ],
        },
        {
          option: "Large",
          additionalPrice: 4.99,
          stock: 69,
          color: [
            {
              option: "Gray",
              additionalPrice: 9.99,
              stock: 14,
            },
            {
              option: "Green",
              additionalPrice: 4.99,
              stock: 17,
            },
            {
              option: "Blue",
              additionalPrice: 8.99,
              stock: 2,
            },
            {
              option: "Yellow",
              additionalPrice: 0.99,
              stock: 18,
            },
            {
              option: "Red",
              additionalPrice: 4.99,
              stock: 18,
            },
          ],
        },
      ],
    },
  },
];

const initialState = {
  products: productsData,
  count: 0,
  totalPrice: 0,
};

export const productsSlice = createSlice({
  name: "product",
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

export const { decrement, increment } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
