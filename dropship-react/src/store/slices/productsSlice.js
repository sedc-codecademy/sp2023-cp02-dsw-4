import { createSlice } from "@reduxjs/toolkit";

const productsData = [
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
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 4,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "4c5cd84c-08e7-4e40-bcbb-f5233dbab7b9",
        "sale": 0,
        "shipping": {
            "weight": "19 kg",
            "dimensions": "87 cm x 4 cm x 29 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "sizes": [
            "large"
        ]
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
        "manufacturer": "Samsung",
        "colors": ["red", "green"],
        "stock": 10,
        "rating": {
            "rate": 3.5,
            "count": 4
        },
        "id": "39f8dd73-83de-44bd-8219-ad0c25edb11d",
        "sale": 0,
        "shipping": {
            "weight": "19 kg",
            "dimensions": "22 cm x 75 cm x 23 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "small",
            "large",
            "medium"
        ]
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
        "manufacturer": "Samsung",
        "colors": ["red", "green"],
        "stock": 2,
        "rating": {
            "rate": 5,
            "count": 1
        },
        "id": "347d49f7-518e-4b67-b9ad-56025e29afb9",
        "sale": 0,
        "shipping": {
            "weight": "16 kg",
            "dimensions": "85 cm x 55 cm x 13 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "Genuine Leather Seat Covers",
        "price": 199.99,
        "description": "These genuine leather seat covers are made with top-quality leather and provide a timeless and classic look to your car's interior, while also providing protection against wear and tear.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "green"],
        "stock": 7,
        "rating": {
            "rate": 4.5,
            "count": 9
        },
        "id": "0e69adc3-4dff-4988-864e-6876188a4301",
        "sale": 0,
        "shipping": {
            "weight": "25 kg",
            "dimensions": "22 cm x 66 cm x 44 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "Southeast Asia"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Mesh Seat Covers",
        "price": 69.99,
        "description": "These mesh seat covers provide a breathable and comfortable driving experience, while also protecting your car's seats from spills and stains.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
            "subcategorytitle": "Seat Covers"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "green"],
        "stock": 15,
        "rating": {
            "rate": 3,
            "count": 12
        },
        "id": "6ffe533c-c2c6-4889-9325-acdfdd0d5e37",
        "sale": 0,
        "shipping": {
            "weight": "25 kg",
            "dimensions": "32 cm x 83 cm x 26 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Polynesia"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "PowerDrive Speed+ Duo",
        "price": 29.99,
        "description": "Charge multiple devices simultaneously with this high-speed dual USB car charger. Equipped with advanced safety features to protect your devices from overcharging and overheating.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "subcategorytitle": "Car Chargers"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "green"],
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 120
        },
        "id": "42632fd7-7357-47a3-b63b-4c0d7f699f35",
        "sale": 0,
        "shipping": {
            "weight": "2 kg",
            "dimensions": "55 cm x 7 cm x 2 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "QuickCharge 3.0 Car Charger",
        "price": 19.99,
        "description": "This compact car charger features Qualcomm QuickCharge 3.0 technology, delivering lightning-fast charging speeds to your compatible devices. The sleek and durable design ensures reliable performance on-the-go.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "subcategorytitle": "Car Chargers"
        },
        "manufacturer": "Samsung",
        "colors": ["blue"],
        "stock": 30,
        "rating": {
            "rate": 4.3,
            "count": 90
        },
        "id": "d26d8e3e-9c48-4440-a0ff-6214a07cbbdf",
        "sale": 0,
        "shipping": {
            "weight": "73 kg",
            "dimensions": "47 cm x 74 cm x 61 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "USB-C Car Charger",
        "price": 24.99,
        "description": "Charge your USB-C devices on-the-go with this powerful car charger. Equipped with intelligent power allocation, it delivers the optimal charging speed to your devices while protecting them from overheating and overcharging.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "subcategorytitle": "Car Chargers"
        },
        "manufacturer": "Samsung",
        "colors": ["blue"],
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 65
        },
        "id": "4882168e-3cce-44f8-b4f8-456c2669e47d",
        "sale": 0,
        "shipping": {
            "weight": "50 kg",
            "dimensions": "29 cm x 34 cm x 44 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Anker PowerDrive 2 Elite",
        "price": 25.99,
        "description": "Power up your devices quickly and safely with this compact and powerful car charger. With dual USB ports and advanced safety features, you can charge two devices simultaneously without worrying about overcharging or overheating.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "subcategorytitle": "Car Chargers"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "purple"],
        "stock": 40,
        "rating": {
            "rate": 4.6,
            "count": 110
        },
        "id": "0c520f02-89a9-45be-8498-462a95090002",
        "sale": 0,
        "shipping": {
            "weight": "33 kg",
            "dimensions": "11 cm x 23 cm x 72 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Belkin Boost Charge Car Charger",
        "price": 29.99,
        "description": "This sleek and stylish car charger delivers fast and efficient charging to your devices, with a compact design that fits easily into any car's power socket. The built-in USB-C cable and additional USB-A port let you charge multiple devices at once.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
            "subcategorytitle": "Car Chargers"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "purple"],
        "stock": 25,
        "rating": {
            "rate": 4.4,
            "count": 75
        },
        "id": "0aa2a650-cc1a-4a04-8021-ac5d0a88619f",
        "sale": 0,
        "shipping": {
            "weight": "74 kg",
            "dimensions": "84 cm x 35 cm x 15 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Exterior Car Cleaning Kit",
        "price": 39.99,
        "description": "Keep the outside of your car looking spotless with our exterior car cleaning kit! Includes high-quality cleaning products and a microfiber mitt for easy application.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "subcategorytitle": "Car Cleaning Kits"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "purple"],
        "stock": 50,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "98f14232-d136-4acd-a36e-7fea7e08b1bd",
        "sale": 0,
        "shipping": {
            "weight": "57 kg",
            "dimensions": "42 cm x 90 cm x 86 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Interior Car Cleaning Kit",
        "price": 49.99,
        "description": "Clean every nook and cranny of your car's interior with our interior car cleaning kit! Includes specialized cleaning products and brushes for different surfaces.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "subcategorytitle": "Car Cleaning Kits"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "purple"],
        "stock": 40,
        "rating": {
            "rate": 4.6,
            "count": 8
        },
        "id": "0aafc2e5-501f-4be4-b615-90763c2b7d34",
        "sale": 20,
        "shipping": {
            "weight": "47 kg",
            "dimensions": "94 cm x 28 cm x 26 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Car Detailing Kit",
        "price": 79.99,
        "description": "Take your car cleaning to the next level with our car detailing kit! Includes advanced cleaning products and detailing tools for a professional-grade finish.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "subcategorytitle": "Car Cleaning Kits"
        },
        "manufacturer": "Samsung",
        "colors": ["red", "purple"],
        "stock": 25,
        "rating": {
            "rate": 4.9,
            "count": 5
        },
        "id": "b894b3e5-fdef-481a-ac22-fced649e65d4",
        "sale": 0,
        "shipping": {
            "weight": "64 kg",
            "dimensions": "80 cm x 86 cm x 73 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "Foaming Car Wash Kit",
        "price": 29.99,
        "description": "Get a rich and luxurious lather with our foaming car wash kit! Includes a foaming gun and concentrated soap for an easy and effective car wash.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "subcategorytitle": "Car Cleaning Kits"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "purple"],
        "stock": 100,
        "rating": {
            "rate": 4.2,
            "count": 15
        },
        "id": "8266ad4c-d6ea-462b-9be9-540b7163f842",
        "sale": 0,
        "shipping": {
            "weight": "73 kg",
            "dimensions": "14 cm x 83 cm x 43 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "title": "Waterless Car Cleaning Kit",
        "price": 59.99,
        "description": "Clean your car without water with our waterless car cleaning kit! Includes specialized cleaning products and microfiber towels for a convenient and eco-friendly clean.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
            "subcategorytitle": "Car Cleaning Kits"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "purple"],
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 12
        },
        "id": "2fada069-31df-4399-b1c3-985c2583de90",
        "sale": 0,
        "shipping": {
            "weight": "3 kg",
            "dimensions": "48 cm x 85 cm x 33 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "title": "Ocean Breeze Car Air Freshener",
        "price": 6.99,
        "description": "Transform your car into a relaxing oasis with our ocean breeze car air freshener! Contains natural oceanic essential oils.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "subcategorytitle": "Car Fragrances"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "purple"],
        "stock": 75,
        "rating": {
            "rate": 4.4,
            "count": 12
        },
        "id": "86a3e8d8-728b-4014-ae99-592e0fd68ae0",
        "sale": 0,
        "shipping": {
            "weight": "65 kg",
            "dimensions": "56 cm x 38 cm x 25 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Cherry Blossom Car Diffuser",
        "price": 8.99,
        "description": "Enjoy the beautiful fragrance of cherry blossoms in your car with our cherry blossom car diffuser! Contains natural cherry blossom essential oils.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "subcategorytitle": "Car Fragrances"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "purple"],
        "stock": 60,
        "rating": {
            "rate": 4.7,
            "count": 8
        },
        "id": "b5a6576c-3077-4097-acd2-e6dc5bd7abcb",
        "sale": 0,
        "shipping": {
            "weight": "23 kg",
            "dimensions": "40 cm x 70 cm x 60 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "Pine Forest Car Air Freshener",
        "price": 7.99,
        "description": "Experience the refreshing scent of a pine forest in your car with our pine forest car air freshener! Contains natural pine essential oils.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "subcategorytitle": "Car Fragrances"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "purple"],
        "stock": 70,
        "rating": {
            "rate": 4.3,
            "count": 18
        },
        "id": "66410024-67cb-4474-a84c-a6309529967d",
        "sale": 0,
        "shipping": {
            "weight": "31 kg",
            "dimensions": "19 cm x 63 cm x 59 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Vanilla Cupcake Car Perfume",
        "price": 11.99,
        "description": "Indulge in the delicious scent of vanilla cupcakes in your car with our vanilla cupcake car perfume! Designed to provide a long-lasting fragrance.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "subcategorytitle": "Car Fragrances"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 40,
        "rating": {
            "rate": 4.9,
            "count": 7
        },
        "id": "219875ac-3356-4374-981d-fb929e1ec1c9",
        "sale": 0,
        "shipping": {
            "weight": "67 kg",
            "dimensions": "83 cm x 67 cm x 59 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Cedarwood Car Diffuser",
        "price": 13.99,
        "description": "Create a cozy and warm atmosphere in your car with our cedarwood car diffuser! Contains natural cedarwood essential oils for a woody fragrance.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
            "subcategorytitle": "Car Fragrances"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 25,
        "rating": {
            "rate": 4.1,
            "count": 14
        },
        "id": "4cf69850-81ae-4925-85aa-74bd08b1da30",
        "sale": 0,
        "shipping": {
            "weight": "16 kg",
            "dimensions": "17 cm x 47 cm x 47 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "LED Daytime Running Lights",
        "price": 59.99,
        "description": "Enhance your car's safety and style with our LED daytime running lights! Designed to improve visibility and give your car a modern look.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "subcategorytitle": "Car Lights"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 18,
        "rating": {
            "rate": 4.6,
            "count": 9
        },
        "id": "94a63cc8-08d7-40e4-af94-e092a1ac8926",
        "sale": 14,
        "shipping": {
            "weight": "16 kg",
            "dimensions": "89 cm x 11 cm x 78 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Northern Africa"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "HID Xenon Fog Light Bulbs",
        "price": 39.99,
        "description": "Upgrade your car's fog lights with our HID xenon bulbs! Provides brighter and more efficient lighting in foggy conditions.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "subcategorytitle": "Car Lights"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 22,
        "rating": {
            "rate": 4.2,
            "count": 11
        },
        "id": "0aa9ce68-c88d-4a26-8179-0eaaf0656d42",
        "sale": 0,
        "shipping": {
            "weight": "31 kg",
            "dimensions": "53 cm x 65 cm x 60 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Northern Africa"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "LED Tail Light Conversion Kit",
        "price": 89.99,
        "description": "Upgrade your car's tail lights with our LED conversion kit! Provides brighter and more efficient lighting than traditional halogen bulbs.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "subcategorytitle": "Car Lights"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 12,
        "rating": {
            "rate": 4.7,
            "count": 7
        },
        "id": "df6e92f4-babf-4199-9626-543071fde04e",
        "sale": 0,
        "shipping": {
            "weight": "1 kg",
            "dimensions": "45 cm x 10 cm x 5 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Polynesia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Interior LED Accent Light Kit",
        "price": 24.99,
        "description": "Add a touch of color and style to your car's interior with our LED accent light kit! Available in multiple colors and can be easily installed.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "subcategorytitle": "Car Lights"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 35,
        "rating": {
            "rate": 4.1,
            "count": 10
        },
        "id": "da1ec4f1-15ee-46de-a755-1620b2c99bc1",
        "sale": 0,
        "shipping": {
            "weight": "73 kg",
            "dimensions": "9 cm x 69 cm x 7 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "High-Powered LED Spotlight",
        "price": 69.99,
        "description": "Illuminate the darkest roads with our high-powered LED spotlight! Provides a powerful and focused beam of light.",
        "category": {
            "categoryid": "autoaccessories",
            "categorytitle": "Automobile Accessories",
            "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
            "subcategorytitle": "Car Lights"
        },
        "manufacturer": "LG",
        "colors": ["red", "purple"],
        "stock": 8,
        "rating": {
            "rate": 4.9,
            "count": 5
        },
        "id": "753e75a0-80a7-4771-8822-4200ba9af752",
        "sale": 0,
        "shipping": {
            "weight": "3 kg",
            "dimensions": "34 cm x 57 cm x 47 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Sleeveless Sheath Dress",
        "price": 89.99,
        "description": "This timeless sheath dress features a sleeveless design and a sophisticated plaid print. Perfect for a day at the office or a business meeting.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 97,
        "rating": {
            "rate": 4.6,
            "count": 11
        },
        "id": "8d636032-854d-4880-a972-dc38cc1b328b",
        "sale": 0,
        "shipping": {
            "weight": "89 kg",
            "dimensions": "36 cm x 97 cm x 81 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Southern Africa"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Boho Maxi Dress",
        "price": 69.99,
        "description": "This boho-inspired maxi dress features a flowy silhouette and a bold geometric print. Perfect for a music festival or a day at the beach.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 39,
        "rating": {
            "rate": 4.1,
            "count": 7
        },
        "id": "5e8473ca-e51f-4709-ad58-b8a799042dd4",
        "sale": 4,
        "shipping": {
            "weight": "34 kg",
            "dimensions": "49 cm x 62 cm x 76 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Southern Africa"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Denim Shirt Dress",
        "price": 59.99,
        "description": "This casual denim shirt dress features a relaxed fit and a stylish belt for a cinched waist. Perfect for a weekend brunch or a day out with friends.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 20,
        "rating": {
            "rate": 4.4,
            "count": 10
        },
        "id": "1237e0f4-1c25-407d-8f63-eba374dfff9e",
        "sale": 0,
        "shipping": {
            "weight": "70 kg",
            "dimensions": "86 cm x 38 cm x 73 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Tiered Maxi Dress",
        "price": 79.99,
        "description": "This tiered maxi dress features a boho-chic paisley print and a flattering V-neckline. Perfect for a summer wedding or a date night.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 8
        },
        "id": "82406908-e436-4327-8293-e3da2ad11372",
        "sale": 11,
        "shipping": {
            "weight": "48 kg",
            "dimensions": "65 cm x 70 cm x 85 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "large",
            "small",
            "medium"
        ]
    },
    {
        "title": "Satin Slip Dress",
        "price": 49.99,
        "description": "This sexy satin slip dress features delicate lace trim and a sleek silhouette. Perfect for a night out or a special occasion.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 13,
        "rating": {
            "rate": 4.3,
            "count": 12
        },
        "id": "72c9d991-3699-4a48-9d4c-de02864ee1ed",
        "sale": 0,
        "shipping": {
            "weight": "14 kg",
            "dimensions": "68 cm x 24 cm x 38 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Southern Europe"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Sleeveless Maxi Dress",
        "price": 69.99,
        "description": "This sleeveless maxi dress features a bold floral print and a flattering empire waist. Perfect for a summer barbecue or a day at the park.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
            "subcategorytitle": "Dresses"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 14,
        "rating": {
            "rate": 4.2,
            "count": 9
        },
        "id": "7c01018a-bcfa-40f6-83da-1f292f1d39af",
        "sale": 0,
        "shipping": {
            "weight": "96 kg",
            "dimensions": "75 cm x 60 cm x 21 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Embroidered Tank Top",
        "price": 19.99,
        "description": "This cute tank top features colorful embroidery and a breezy silhouette. Perfect for a casual day out or a weekend brunch.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 90,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "665872ad-3d8e-494e-b579-52fe13b25a23",
        "sale": 0,
        "shipping": {
            "weight": "56 kg",
            "dimensions": "91 cm x 53 cm x 46 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Silk Blouse",
        "price": 59.99,
        "description": "This luxurious silk blouse features a classic button-down design and a flattering fit. Perfect for a work meeting or a formal event.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 80,
        "rating": {
            "rate": 4.7,
            "count": 8
        },
        "id": "9c2726d6-804d-4b27-aad4-c2b4c3e0cfb4",
        "sale": 0,
        "shipping": {
            "weight": "89 kg",
            "dimensions": "12 cm x 85 cm x 11 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Western Europe"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Floral Ruffle Top",
        "price": 24.99,
        "description": "This top features a vibrant floral print and ruffled detailing. It has a relaxed fit and is made from a lightweight material, making it perfect for summer.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 111,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "86c25dd7-6fbe-4a2a-9d78-8f1bca5f0357",
        "sale": 2,
        "shipping": {
            "weight": "62 kg",
            "dimensions": "87 cm x 7 cm x 67 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Striped Boat Neck Top",
        "price": 29.99,
        "description": "This top features classic stripes in navy and white, with a flattering boat neck and three-quarter sleeves. It's made from a soft and stretchy fabric for ultimate comfort.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 67,
        "rating": {
            "rate": 4.8,
            "count": 12
        },
        "id": "48b9ca54-a498-4b78-9dbf-79382fdf5c09",
        "sale": 0,
        "shipping": {
            "weight": "78 kg",
            "dimensions": "35 cm x 57 cm x 49 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Off-Shoulder Lace Top",
        "price": 39.99,
        "description": "This off-shoulder top features delicate lace detailing and a flowy silhouette. It's perfect for dressing up or down, and is made from a lightweight material for maximum comfort.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 17,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "9f7e40e9-1dc2-47f1-bcb4-331e3711d81e",
        "sale": 0,
        "shipping": {
            "weight": "69 kg",
            "dimensions": "34 cm x 2 cm x 90 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "South Asia"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Crop Top",
        "price": 19.99,
        "description": "This crop top features a simple design with a round neckline and short sleeves. It's made from a stretchy cotton blend and is perfect for pairing with high-waisted bottoms.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 38,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "e3edcf7e-ad0f-47a9-8ceb-9fe5fd31902c",
        "sale": 0,
        "shipping": {
            "weight": "9 kg",
            "dimensions": "68 cm x 78 cm x 97 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Western Europe"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Chiffon Blouse",
        "price": 34.99,
        "description": "This chiffon blouse features a floral print and flowy silhouette. It has a V-neckline and long sleeves with elasticized cuffs. It's perfect for dressing up or down, and is made from a lightweight material for maximum comfort.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
            "subcategorytitle": "Tops"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 62,
        "rating": {
            "rate": 4.6,
            "count": 9
        },
        "id": "50cef0c5-d3a0-450a-a390-cc5d5dfdf252",
        "sale": 0,
        "shipping": {
            "weight": "30 kg",
            "dimensions": "25 cm x 39 cm x 53 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Southern Europe"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "High-waisted cropped flare jeans",
        "price": 49.99,
        "description": "These high-waisted cropped flare jeans have a playful feel and come in a light wash denim.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "subcategorytitle": "Jeans"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 60,
        "rating": {
            "rate": 4.1,
            "count": 16
        },
        "id": "5a1c3d41-13d9-407b-957c-f1ec523a18aa",
        "sale": 0,
        "shipping": {
            "weight": "11 kg",
            "dimensions": "86 cm x 63 cm x 52 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Boyfriend jeans",
        "price": 59.99,
        "description": "These relaxed-fit boyfriend jeans are made with soft denim and come in a light blue wash.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "subcategorytitle": "Jeans"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 19
        },
        "id": "a46fc7c9-a8bf-4c8d-a24e-2cedd09f93a9",
        "sale": 0,
        "shipping": {
            "weight": "14 kg",
            "dimensions": "85 cm x 93 cm x 13 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Slim Fit Ripped Jeans",
        "price": 49.99,
        "description": "These slim fit jeans feature stylish rips on the knees and a distressed finish.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "subcategorytitle": "Jeans"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 60,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "c1552105-b001-42ae-9988-ad0f5b64178f",
        "sale": 11,
        "shipping": {
            "weight": "15 kg",
            "dimensions": "32 cm x 97 cm x 75 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Classic Straight Leg Jeans",
        "price": 39.99,
        "description": "These classic straight leg jeans are a wardrobe staple, featuring a mid-rise waist and a slightly tapered leg.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "subcategorytitle": "Jeans"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 60,
        "rating": {
            "rate": 4.2,
            "count": 35
        },
        "id": "27ca970b-e947-47e7-80f4-267ae9cd8623",
        "sale": 14,
        "shipping": {
            "weight": "62 kg",
            "dimensions": "88 cm x 90 cm x 47 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Central Africa"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Skinny High-Waisted Jeans",
        "price": 59.99,
        "description": "These skinny jeans feature a flattering high-waisted fit and a soft, stretchy denim fabric.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
            "subcategorytitle": "Jeans"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 60,
        "rating": {
            "rate": 4,
            "count": 19
        },
        "id": "79c70403-4b55-4545-a689-6c01e591d943",
        "sale": 0,
        "shipping": {
            "weight": "18 kg",
            "dimensions": "77 cm x 9 cm x 11 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Flat Sandals",
        "price": 59.99,
        "description": "Stay comfortable and stylish with these flat sandals, featuring a strappy design and buckle closure.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
            "subcategorytitle": "Foot wear"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 70,
        "rating": {
            "rate": 4.2,
            "count": 16
        },
        "id": "4e87df08-c5f7-4648-84c1-f9cd489f80e5",
        "sale": 0,
        "shipping": {
            "weight": "67 kg",
            "dimensions": "88 cm x 49 cm x 37 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "title": "Classic Brown Leather Boots",
        "price": 89.99,
        "description": "These classic brown leather boots are perfect for any occasion. Made from high-quality leather, they are durable and stylish. The cushioned insole ensures all-day comfort.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
            "subcategorytitle": "Foot wear"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 70,
        "rating": {
            "rate": 4.7,
            "count": 27
        },
        "id": "afc89490-3e21-4294-909e-b73d3a97a026",
        "sale": 0,
        "shipping": {
            "weight": "97 kg",
            "dimensions": "31 cm x 70 cm x 10 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Suede Ankle Boots",
        "price": 59.99,
        "description": "These suede ankle boots are a stylish addition to any wardrobe. Featuring a comfortable block heel and a side zipper for easy on and off, these boots are perfect for a night out.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
            "subcategorytitle": "Foot wear"
        },
        "manufacturer": "Motorolla",
        "colors": ["pink", "orange"],
        "stock": 70,
        "rating": {
            "rate": 4.3,
            "count": 12
        },
        "id": "242e67f1-d749-4374-8fc5-34dd3c0c75f7",
        "sale": 17,
        "shipping": {
            "weight": "18 kg",
            "dimensions": "32 cm x 11 cm x 93 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Slip-On Sneakers",
        "price": 39.99,
        "description": "These slip-on sneakers are perfect for a casual day out. With a breathable canvas upper and a comfortable rubber sole, these shoes will keep your feet cool and comfortable all day long.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
            "subcategorytitle": "Foot wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 8
        },
        "id": "952f79bf-c0cc-44ce-aab2-c635a66e4764",
        "sale": 0,
        "shipping": {
            "weight": "71 kg",
            "dimensions": "16 cm x 91 cm x 45 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "Central Asia"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "High-Top Sneakers",
        "price": 49.99,
        "description": "These high-top sneakers are a trendy addition to your shoe collection. Featuring a sleek black design and a comfortable padded collar, these shoes will keep you looking stylish and feeling comfortable all day long.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
            "subcategorytitle": "Foot wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 70,
        "rating": {
            "rate": 3.8,
            "count": 17
        },
        "id": "49412e40-5d36-466c-bcea-533f4b5ef3c2",
        "sale": 19,
        "shipping": {
            "weight": "39 kg",
            "dimensions": "84 cm x 88 cm x 58 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Leather Backpack",
        "price": 139.99,
        "description": "This stylish leather backpack is perfect for carrying all your essentials. It features a spacious main compartment and multiple pockets for organization. The adjustable straps ensure a comfortable fit.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "subcategorytitle": "Carry-ons"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 55,
        "rating": {
            "rate": 4.8,
            "count": 35
        },
        "id": "c6813ac9-4383-45e6-bce7-3d1935c0c2bf",
        "sale": 2,
        "shipping": {
            "weight": "91 kg",
            "dimensions": "68 cm x 72 cm x 14 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Southern Africa"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Weekender Bag",
        "price": 79.99,
        "description": "This durable weekender bag is perfect for your weekend getaways. It features a spacious main compartment and multiple pockets for organization. The adjustable strap ensures a comfortable fit.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "subcategorytitle": "Carry-ons"
        },
        "manufacturer": "Xiaomi",
        "colors": ["pink", "orange"],
        "stock": 55,
        "rating": {
            "rate": 4.2,
            "count": 22
        },
        "id": "5c733cd5-a9db-403a-8259-63db6d83600d",
        "sale": 14,
        "shipping": {
            "weight": "96 kg",
            "dimensions": "85 cm x 52 cm x 59 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Crossbody Bag",
        "price": 59.99,
        "description": "This stylish crossbody bag is perfect for everyday use. It features a spacious main compartment and multiple pockets for organization. The adjustable strap ensures a comfortable fit.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "subcategorytitle": "Carry-ons"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 55,
        "rating": {
            "rate": 4.5,
            "count": 18
        },
        "id": "cd744155-2ceb-4cba-b84f-7779cff13f19",
        "sale": 11,
        "shipping": {
            "weight": "80 kg",
            "dimensions": "78 cm x 22 cm x 74 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Canvas Tote Bag",
        "price": 29.99,
        "description": "This versatile canvas tote bag is perfect for everyday use. It features a spacious main compartment and multiple pockets for organization. The sturdy handles ensure a comfortable fit.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "subcategorytitle": "Carry-ons"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 55,
        "rating": {
            "rate": 4,
            "count": 12
        },
        "id": "6a481f74-8240-4890-8291-fe9fea5dbf15",
        "sale": 0,
        "shipping": {
            "weight": "43 kg",
            "dimensions": "81 cm x 82 cm x 9 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Travel Backpack",
        "price": 79,
        "description": "Travel backpack with multiple compartments and padded shoulder straps. Made with durable and water-resistant fabric.",
        "category": {
            "categoryid": "womenswear",
            "categorytitle": "Women's Clothing",
            "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
            "subcategorytitle": "Carry-ons"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 15,
        "rating": {
            "rate": 4.2,
            "count": 27
        },
        "id": "076f6287-9872-4ff2-bdb4-4c162a3d7b07",
        "sale": 0,
        "shipping": {
            "weight": "23 kg",
            "dimensions": "54 cm x 52 cm x 71 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Classic White Shirt",
        "price": 59.99,
        "description": "A timeless white shirt that can be worn on any occasion.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
            "subcategorytitle": "T-Shirts"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 200
        },
        "id": "2e7a7019-18f5-49b0-92ac-f77c504a6b68",
        "sale": 6,
        "shipping": {
            "weight": "36 kg",
            "dimensions": "64 cm x 48 cm x 28 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Slim Fit Blue Shirt",
        "price": 49.99,
        "description": "A stylish blue shirt with a slim fit.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
            "subcategorytitle": "T-Shirts"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 150
        },
        "id": "736b0662-e834-4c59-a24a-9a3bf10581a9",
        "sale": 8,
        "shipping": {
            "weight": "38 kg",
            "dimensions": "21 cm x 53 cm x 28 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Northern Europe"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Plaid Flannel Shirt",
        "price": 69.99,
        "description": "A warm and comfortable plaid flannel shirt.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
            "subcategorytitle": "T-Shirts"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 100
        },
        "id": "470c7820-3875-4977-ac50-56d65af3528b",
        "sale": 0,
        "shipping": {
            "weight": "77 kg",
            "dimensions": "34 cm x 96 cm x 95 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Button-Down Oxford Shirt",
        "price": 79.99,
        "description": "A sophisticated button-down Oxford shirt.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
            "subcategorytitle": "T-Shirts"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 180
        },
        "id": "91088e44-4edf-4fb0-ae16-60e3ab2da122",
        "sale": 0,
        "shipping": {
            "weight": "22 kg",
            "dimensions": "6 cm x 1 cm x 67 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Polynesia"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Striped Linen Shirt",
        "price": 89.99,
        "description": "A lightweight and breathable striped linen shirt.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
            "subcategorytitle": "T-Shirts"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 12,
        "rating": {
            "rate": 4.1,
            "count": 120
        },
        "id": "31ba1718-aadb-49d2-80c2-6d26155ac5f8",
        "sale": 0,
        "shipping": {
            "weight": "69 kg",
            "dimensions": "49 cm x 45 cm x 90 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Southern Africa"
        },
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "title": "Men's Jogger Pants",
        "price": 49.99,
        "description": "Comfortable jogger pants for men, perfect for casual wear or light workouts.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "subcategorytitle": "Pants"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 23,
        "rating": {
            "rate": 4.2,
            "count": 64
        },
        "id": "70f8cfa0-1ade-4ac9-9026-533208b19d9b",
        "sale": 0,
        "shipping": {
            "weight": "10 kg",
            "dimensions": "6 cm x 30 cm x 77 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Northern Africa"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Men's Cargo Shorts",
        "price": 29.99,
        "description": "Stylish and durable cargo shorts for men, perfect for outdoor activities and casual wear.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "subcategorytitle": "Pants"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 17,
        "rating": {
            "rate": 4.6,
            "count": 28
        },
        "id": "01bd4a50-1739-46be-8596-34ac4e9a85d1",
        "sale": 7,
        "shipping": {
            "weight": "20 kg",
            "dimensions": "38 cm x 32 cm x 7 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Men's Running Tights",
        "price": 39.99,
        "description": "High-performance running tights for men, designed to keep you comfortable and cool during intense workouts.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "subcategorytitle": "Pants"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 12,
        "rating": {
            "rate": 4.8,
            "count": 36
        },
        "id": "314221b0-cd2c-43da-88ff-8d9659d9d2d1",
        "sale": 0,
        "shipping": {
            "weight": "59 kg",
            "dimensions": "79 cm x 51 cm x 64 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Men's Chino Pants",
        "price": 59.99,
        "description": "Classic chino pants for men, suitable for both casual and formal occasions.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "subcategorytitle": "Pants"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 8,
        "rating": {
            "rate": 4.4,
            "count": 42
        },
        "id": "f4f17274-93d9-4ea6-b31a-16b9539fa833",
        "sale": 0,
        "shipping": {
            "weight": "73 kg",
            "dimensions": "65 cm x 57 cm x 91 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Men's Denim Shorts",
        "price": 24.99,
        "description": "Stylish and comfortable denim shorts for men, perfect for casual wear during the warmer months.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
            "subcategorytitle": "Pants"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 19,
        "rating": {
            "rate": 4.1,
            "count": 52
        },
        "id": "01b35b0e-53d7-4f14-a1b7-a831e431c6e0",
        "sale": 0,
        "shipping": {
            "weight": "94 kg",
            "dimensions": "85 cm x 47 cm x 25 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "Central Asia"
        },
        "sizes": [
            "large",
            "small",
            "medium"
        ]
    },
    {
        "title": "Flip-Flops",
        "price": 19.99,
        "description": "Simple and comfortable flip-flops for men.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "subcategorytitle": "Foot Wear"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 25,
        "rating": {
            "rate": 3.9,
            "count": 95
        },
        "id": "b3943ba6-e2aa-46cd-a0d9-4308392dd1e8",
        "sale": 0,
        "shipping": {
            "weight": "30 kg",
            "dimensions": "74 cm x 53 cm x 82 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Loafers",
        "price": 69.99,
        "description": "Sleek and stylish loafers for men.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "subcategorytitle": "Foot Wear"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 12,
        "rating": {
            "rate": 4.1,
            "count": 49
        },
        "id": "6bbb2fbe-ab23-4969-9ee9-5a9ac889ea76",
        "sale": 0,
        "shipping": {
            "weight": "13 kg",
            "dimensions": "84 cm x 81 cm x 57 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Steel-Toe Work Boots",
        "price": 99.99,
        "description": "Heavy-duty steel-toe work boots for men.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "subcategorytitle": "Foot Wear"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 7,
        "rating": {
            "rate": 4.7,
            "count": 9
        },
        "id": "3534fb6d-b87d-4596-92a9-354af315b377",
        "sale": 0,
        "shipping": {
            "weight": "79 kg",
            "dimensions": "19 cm x 89 cm x 74 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "West Asia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Leather Dress Shoes",
        "price": 199.99,
        "description": "These leather dress shoes are perfect for any formal occasion. They are made from high-quality leather and feature a comfortable insole.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "subcategorytitle": "Foot Wear"
        },
        "manufacturer": "Apple",
        "colors": ["gray", "white"],
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "670f31ec-56f1-4e22-a2fd-b8f1c6ecba3d",
        "sale": 0,
        "shipping": {
            "weight": "40 kg",
            "dimensions": "13 cm x 3 cm x 58 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Sneakers",
        "price": 79.99,
        "description": "These sneakers are perfect for everyday wear. They are made from durable materials and feature a comfortable insole.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
            "subcategorytitle": "Foot Wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["gray", "white"],
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 50
        },
        "id": "15a81388-95eb-41a2-b0b9-aefa2368b68f",
        "sale": 0,
        "shipping": {
            "weight": "25 kg",
            "dimensions": "91 cm x 30 cm x 92 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Men's Black Beanie",
        "price": 24.99,
        "description": "A classic black beanie for men made of soft and warm wool.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "subcategorytitle": "Head wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 20
        },
        "id": "ea056d48-7fa5-4228-affc-ab8fedc2b2b1",
        "sale": 13,
        "shipping": {
            "weight": "18 kg",
            "dimensions": "95 cm x 63 cm x 56 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Polynesia"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Men's Brown Fedora Hat",
        "price": 49.99,
        "description": "A stylish brown fedora hat for men made of high-quality felt material.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "subcategorytitle": "Head wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 5,
        "rating": {
            "rate": 4.2,
            "count": 15
        },
        "id": "dd56dbce-b6a2-42c0-98a8-268eb5ece73d",
        "sale": 9,
        "shipping": {
            "weight": "68 kg",
            "dimensions": "76 cm x 40 cm x 3 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "Men's Camo Baseball Cap",
        "price": 19.99,
        "description": "A trendy camo baseball cap for men made of durable cotton material.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "subcategorytitle": "Head wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 20,
        "rating": {
            "rate": 3.9,
            "count": 30
        },
        "id": "f749d982-b0fa-4111-bb2e-7c3b0398f5fa",
        "sale": 14,
        "shipping": {
            "weight": "36 kg",
            "dimensions": "54 cm x 48 cm x 1 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "Men's Wool Newsboy Cap",
        "price": 39.99,
        "description": "A classic wool newsboy cap for men with a modern twist.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "subcategorytitle": "Head wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 8,
        "rating": {
            "rate": 4.1,
            "count": 12
        },
        "id": "a58f7a22-565b-4d33-9eb7-1f10d4223d32",
        "sale": 0,
        "shipping": {
            "weight": "5 kg",
            "dimensions": "70 cm x 30 cm x 89 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Men's Leather Bucket Hat",
        "price": 59.99,
        "description": "A stylish leather bucket hat for men with a wide brim.",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
            "subcategorytitle": "Head wear"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 3,
        "rating": {
            "rate": 4.8,
            "count": 5
        },
        "id": "287b4888-dea6-4237-9ffd-83b85c287453",
        "sale": 0,
        "shipping": {
            "weight": "50 kg",
            "dimensions": "35 cm x 54 cm x 43 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Black Classic Suit",
        "price": 399,
        "description": "A classic black suit for any occasion",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "subcategorytitle": "Suits"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 65
        },
        "id": "318c7871-a93a-48a7-96ce-42e9a8860eb1",
        "sale": 0,
        "shipping": {
            "weight": "37 kg",
            "dimensions": "99 cm x 63 cm x 26 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Grey Check Suit",
        "price": 499,
        "description": "A stylish grey suit with check pattern",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "subcategorytitle": "Suits"
        },
        "manufacturer": "Xiaomi",
        "colors": ["black", "white"],
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 40
        },
        "id": "57691e5a-d809-4e41-b934-51bf831ccfa0",
        "sale": 9,
        "shipping": {
            "weight": "11 kg",
            "dimensions": "88 cm x 18 cm x 63 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Eastern Africa"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Navy Blue Pinstripe Suit",
        "price": 599,
        "description": "A sharp navy blue suit with pinstripe pattern",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "subcategorytitle": "Suits"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 10,
        "rating": {
            "rate": 4.6,
            "count": 20
        },
        "id": "45b420b8-c251-41fc-9a44-011b7cea8e06",
        "sale": 0,
        "shipping": {
            "weight": "17 kg",
            "dimensions": "50 cm x 27 cm x 83 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Charcoal Double-Breasted Suit",
        "price": 699,
        "description": "A classic charcoal suit with double-breasted design",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "subcategorytitle": "Suits"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 8,
        "rating": {
            "rate": 4.9,
            "count": 30
        },
        "id": "f0e50f19-1401-4711-9490-a6357586ba36",
        "sale": 13,
        "shipping": {
            "weight": "99 kg",
            "dimensions": "12 cm x 73 cm x 80 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Beige Linen Suit",
        "price": 299,
        "description": "A stylish beige suit made of linen",
        "category": {
            "categoryid": "menswear",
            "categorytitle": "Men's Clothing",
            "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
            "subcategorytitle": "Suits"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 12,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "8980f214-45d5-49f3-8272-a03e6eb4da21",
        "sale": 0,
        "shipping": {
            "weight": "49 kg",
            "dimensions": "84 cm x 11 cm x 47 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Adjustable Dumbbell Set",
        "price": 199.99,
        "description": "This set of adjustable dumbbells is perfect for home workouts, with a weight range of 5 to 25 pounds per dumbbell.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "subcategorytitle": "Athletic Accessories"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 15
        },
        "id": "1423742b-6c72-4e75-89ed-162b7884487f",
        "sale": 0,
        "shipping": {
            "weight": "69 kg",
            "dimensions": "12 cm x 81 cm x 92 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Northern Europe"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Compression Socks",
        "price": 24.99,
        "description": "These compression socks are designed to improve blood flow, reduce muscle soreness, and aid in post-workout recovery.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "subcategorytitle": "Athletic Accessories"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 80,
        "rating": {
            "rate": 4.7,
            "count": 20
        },
        "id": "0a3732c2-c7d3-404c-9389-71b2284051da",
        "sale": 10,
        "shipping": {
            "weight": "92 kg",
            "dimensions": "67 cm x 43 cm x 14 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Central Africa"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Fitness Tracker",
        "price": 79.99,
        "description": "This fitness tracker tracks your steps, heart rate, and calories burned, and comes with a companion app for tracking your progress over time.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "subcategorytitle": "Athletic Accessories"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 50,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "43429cc9-51d1-4171-b98c-69150b8950b3",
        "sale": 15,
        "shipping": {
            "weight": "56 kg",
            "dimensions": "74 cm x 92 cm x 75 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "Southeast Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Jump Rope",
        "price": 14.99,
        "description": "This high-quality jump rope is perfect for adding cardio to your workouts, with adjustable length and comfortable handles.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "subcategorytitle": "Athletic Accessories"
        },
        "manufacturer": "Asus",
        "colors": ["black", "white"],
        "stock": 100,
        "rating": {
            "rate": 4.6,
            "count": 30
        },
        "id": "92829252-7951-4807-9f6b-b8cf4f78fb1d",
        "sale": 0,
        "shipping": {
            "weight": "17 kg",
            "dimensions": "73 cm x 55 cm x 8 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Resistance Band Handles",
        "price": 14.99,
        "description": "These resistance band handles are perfect for adding versatility and comfort to your resistance band workouts.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
            "subcategorytitle": "Athletic Accessories"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 70,
        "rating": {
            "rate": 4.4,
            "count": 15
        },
        "id": "dcae76f9-d7ce-4517-922f-08e28cf98f41",
        "sale": 0,
        "shipping": {
            "weight": "92 kg",
            "dimensions": "32 cm x 90 cm x 44 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Climbing Harness",
        "price": 79.99,
        "description": "Stay safe and secure on your next climb with this durable and comfortable harness, featuring adjustable straps and a secure buckle system.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
            "subcategorytitle": "Outdoor Recreation"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 6,
        "rating": {
            "rate": 4.3,
            "count": 7
        },
        "id": "861761d5-4b2c-49f3-a7ee-00510cac3061",
        "sale": 4,
        "shipping": {
            "weight": "44 kg",
            "dimensions": "58 cm x 11 cm x 54 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "Southeast Asia"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Trail Running Shoes",
        "price": 109.99,
        "description": "Take on any terrain with these lightweight and responsive trail running shoes, designed for maximum comfort and durability.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
            "subcategorytitle": "Outdoor Recreation"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 8,
        "rating": {
            "rate": 4.9,
            "count": 5
        },
        "id": "9c88d09d-5a4c-4383-8ad6-f5f93e7a9918",
        "sale": 0,
        "shipping": {
            "weight": "60 kg",
            "dimensions": "67 cm x 78 cm x 3 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Central Africa"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "Hammock",
        "price": 49.99,
        "description": "Relax in style with this comfortable and lightweight hammock, perfect for camping, backyard lounging, or anywhere in between.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
            "subcategorytitle": "Outdoor Recreation"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 9,
        "rating": {
            "rate": 4.2,
            "count": 11
        },
        "id": "0064f554-a7fd-4957-8cfe-eabec65104da",
        "sale": 0,
        "shipping": {
            "weight": "30 kg",
            "dimensions": "29 cm x 62 cm x 97 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Southern Europe"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Snowboard",
        "price": 299.99,
        "description": "Hit the slopes in style with this high-performance snowboard, featuring a durable construction and responsive design.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
            "subcategorytitle": "Outdoor Recreation"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 2,
        "rating": {
            "rate": 4.7,
            "count": 6
        },
        "id": "91ba62c2-cb39-4867-b80a-aed51a3a46ef",
        "sale": 0,
        "shipping": {
            "weight": "46 kg",
            "dimensions": "58 cm x 85 cm x 82 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Polynesia"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Portable Grill",
        "price": 69.99,
        "description": "Enjoy delicious meals on the go with this portable grill, featuring a compact design and easy-to-clean surfaces.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
            "subcategorytitle": "Outdoor Recreation"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 11,
        "rating": {
            "rate": 4.5,
            "count": 9
        },
        "id": "e4ed489a-2eee-4bca-b3bb-fe2be6788d78",
        "sale": 0,
        "shipping": {
            "weight": "7 kg",
            "dimensions": "47 cm x 51 cm x 60 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Indoor Bike Trainer",
        "price": 299.99,
        "description": "Bike trainer that allows you to turn your regular bike into an indoor exercise bike, with adjustable resistance levels.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
            "subcategorytitle": "Fitness Equipment"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 20,
        "rating": {
            "rate": 4.7,
            "count": 15
        },
        "id": "00eb7ac5-e8cc-4bf8-b4dc-10863f174eee",
        "sale": 19,
        "shipping": {
            "weight": "79 kg",
            "dimensions": "59 cm x 70 cm x 96 cm",
            "restrictions": "Restricted",
            "region": "Africa",
            "subregion": "Western Africa"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Kettlebell Set",
        "price": 79.99,
        "description": "Set of three kettlebells in 5, 10, and 15 pound weights, with a comfortable grip and durable construction.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
            "subcategorytitle": "Fitness Equipment"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 25,
        "rating": {
            "rate": 4.9,
            "count": 10
        },
        "id": "501e8540-c6ce-4d98-a5db-ab9d748ee33a",
        "sale": 0,
        "shipping": {
            "weight": "73 kg",
            "dimensions": "59 cm x 73 cm x 85 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "South Asia"
        },
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "title": "Weighted Vest",
        "price": 49.99,
        "description": "Adjustable weighted vest with multiple weight options, perfect for adding resistance to bodyweight exercises.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
            "subcategorytitle": "Fitness Equipment"
        },
        "manufacturer": "Asus",
        "colors": ["blue"],
        "stock": 15,
        "rating": {
            "rate": 4.8,
            "count": 5
        },
        "id": "dc887bd5-890c-42ac-91df-cf36d2413b52",
        "sale": 0,
        "shipping": {
            "weight": "46 kg",
            "dimensions": "46 cm x 52 cm x 59 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Suspension Trainer",
        "price": 79.99,
        "description": "This suspension trainer is a versatile and portable piece of fitness equipment. It allows you to use your own body weight to perform a variety of exercises that target different muscle groups.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
            "subcategorytitle": "Fitness Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 50,
        "rating": {
            "rate": 4.7,
            "count": 30
        },
        "id": "6128cf6f-fc40-4d93-afd2-760e6b3afaa7",
        "sale": 0,
        "shipping": {
            "weight": "56 kg",
            "dimensions": "66 cm x 13 cm x 70 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Northern Europe"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Rowing Machine",
        "price": 799.99,
        "description": "This rowing machine provides a full-body workout and is perfect for people who want to improve their cardiovascular health and build muscle. It has adjustable resistance levels and a comfortable seat for long workouts.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
            "subcategorytitle": "Fitness Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 10,
        "rating": {
            "rate": 4.9,
            "count": 15
        },
        "id": "d160dabd-4f4c-4af8-b09b-a00b366e68cb",
        "sale": 0,
        "shipping": {
            "weight": "5 kg",
            "dimensions": "33 cm x 83 cm x 13 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "title": "Hybrid Cruiser Bike",
        "price": 349.99,
        "description": "The ultimate hybrid cruiser bike for any terrain. With 21-speed Shimano gears and a lightweight aluminum frame, this bike is perfect for daily commuting or weekend adventures.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "subcategorytitle": "Bikes"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "4ee23557-7782-48be-8b63-7d89b92966fb",
        "sale": 0,
        "shipping": {
            "weight": "67 kg",
            "dimensions": "62 cm x 90 cm x 38 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Commuter Bike",
        "price": 599.99,
        "description": "Ideal for city commuting with its lightweight frame and comfortable seat",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "subcategorytitle": "Bikes"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 24
        },
        "id": "aa2d210a-f25a-4a10-936f-5779fc9c9e35",
        "sale": 0,
        "shipping": {
            "weight": "44 kg",
            "dimensions": "94 cm x 92 cm x 51 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Kids' Bike",
        "price": 199.99,
        "description": "Perfect first bike for kids with its durable frame and training wheels",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "subcategorytitle": "Bikes"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 10,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "650f4732-52de-4259-abdb-16309c4aae0f",
        "sale": 0,
        "shipping": {
            "weight": "28 kg",
            "dimensions": "71 cm x 98 cm x 74 cm",
            "restrictions": "None",
            "region": "Africa",
            "subregion": "Northern Africa"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "BMX Freestyle Bike",
        "price": 599.99,
        "description": "Get ready to hit the skatepark with this BMX freestyle bike. It's built for tricks and stunts, with a durable frame, lightweight components, and grippy tires.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "subcategorytitle": "Bikes"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 12,
        "rating": {
            "rate": 4,
            "count": 8
        },
        "id": "4c01a660-c193-4faf-8363-74131d773efc",
        "sale": 0,
        "shipping": {
            "weight": "85 kg",
            "dimensions": "84 cm x 9 cm x 36 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "South Asia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Gravel Adventure Bike",
        "price": 1999.99,
        "description": "Explore new terrain with this gravel adventure bike. It's designed for off-road riding, with wider tires, a sturdy frame, and comfortable geometry.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
            "subcategorytitle": "Bikes"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 7,
        "rating": {
            "rate": 4.6,
            "count": 20
        },
        "id": "6331d8fd-ce6a-47e0-afda-b32397f6e92c",
        "sale": 15,
        "shipping": {
            "weight": "30 kg",
            "dimensions": "5 cm x 84 cm x 48 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Central America"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Mizuno JPX921 Forged Irons",
        "price": 1299.99,
        "description": "The Mizuno JPX921 Forged Irons deliver exceptional feel, precision, and distance control for the skilled golfer.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
            "subcategorytitle": "Golf"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 20
        },
        "id": "99f2afd9-3699-475b-b240-33ce775dfac7",
        "sale": 3,
        "shipping": {
            "weight": "80 kg",
            "dimensions": "43 cm x 10 cm x 25 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "sizes": [
            "small"
        ]
    },
    {
        "title": "Titleist TSi3 Fairway Wood",
        "price": 329.99,
        "description": "The Titleist TSi3 Fairway Wood features adjustable weighting and advanced face technology for exceptional distance and versatility.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
            "subcategorytitle": "Golf"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 12,
        "rating": {
            "rate": 4.9,
            "count": 35
        },
        "id": "4ad934b0-5926-4068-9629-3492a96ac2cc",
        "sale": 14,
        "shipping": {
            "weight": "32 kg",
            "dimensions": "5 cm x 40 cm x 93 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Odyssey White Hot OG #1 Putter",
        "price": 219.99,
        "description": "The Odyssey White Hot OG #1 Putter offers a classic look and modern performance for improved accuracy and consistency on the green.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
            "subcategorytitle": "Golf"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 6,
        "rating": {
            "rate": 4.7,
            "count": 18
        },
        "id": "1b56ac51-4fb8-4b79-a428-c068631ee43b",
        "sale": 6,
        "shipping": {
            "weight": "94 kg",
            "dimensions": "29 cm x 40 cm x 45 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "Puma Ignite PWRADAPT Caged Golf Shoes",
        "price": 149.99,
        "description": "The Puma Ignite PWRADAPT Caged Golf Shoes provide excellent comfort and stability with a unique, eye-catching design.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
            "subcategorytitle": "Golf"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 20,
        "rating": {
            "rate": 4.6,
            "count": 25
        },
        "id": "6b10bcf6-d996-4330-b3a5-35d0ad7b37f2",
        "sale": 0,
        "shipping": {
            "weight": "21 kg",
            "dimensions": "87 cm x 59 cm x 70 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "large",
            "small",
            "medium"
        ]
    },
    {
        "title": "Cobra RADSpeed XB Driver",
        "price": 449.99,
        "description": "The Cobra RADSpeed XB Driver features advanced aerodynamics and weighting for improved speed and distance off the tee.",
        "category": {
            "categoryid": "sports",
            "categorytitle": "Sports",
            "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
            "subcategorytitle": "Golf"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "0c509088-bd99-472d-a5e1-28e77579b919",
        "sale": 0,
        "shipping": {
            "weight": "28 kg",
            "dimensions": "0 cm x 42 cm x 84 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "West Asia"
        },
        "sizes": [
            "large",
            "small",
            "medium"
        ]
    },
    {
        "title": "Dell XPS 13",
        "price": 1199.99,
        "description": "The Dell XPS 13 is a premium laptop that offers excellent performance and a sleek design.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "subcategorytitle": "Personal Computers"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 400
        },
        "id": "c201c6f7-699c-4617-be74-a5b5ba9aa997",
        "sale": 0,
        "shipping": {
            "weight": "37 kg",
            "dimensions": "56 cm x 42 cm x 78 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "East Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Microsoft Surface Pro 7",
        "price": 899.99,
        "description": "The Microsoft Surface Pro 7 is a versatile 2-in-1 laptop that can be used as a tablet or a laptop.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "subcategorytitle": "Personal Computers"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 21,
        "rating": {
            "rate": 4.1,
            "count": 211
        },
        "id": "d3f02682-d6bf-41ef-9c0a-fe80bf8fbae6",
        "sale": 0,
        "shipping": {
            "weight": "11 kg",
            "dimensions": "27 cm x 85 cm x 5 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Southern Europe"
        },
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "title": "ASUS ROG Strix G15",
        "price": 1399.99,
        "description": "The ASUS ROG Strix G15 is a high-performance gaming laptop that offers top-of-the-line graphics and processing power.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "subcategorytitle": "Personal Computers"
        },
        "manufacturer": "Xiaomi",
        "colors": [],
        "stock": 10,
        "rating": {
            "rate": 4.9,
            "count": 1000
        },
        "id": "dda6056e-58bf-404f-81c8-ccd06c9feab4",
        "sale": 0,
        "shipping": {
            "weight": "55 kg",
            "dimensions": "9 cm x 55 cm x 63 cm",
            "restrictions": "Restricted",
            "region": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "HP Spectre x360",
        "price": 1299.99,
        "description": "The HP Spectre x360 is a premium 2-in-1 laptop that offers excellent performance and a stunning design.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "subcategorytitle": "Personal Computers"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 25,
        "rating": {
            "rate": 4.6,
            "count": 600
        },
        "id": "b44b054e-d18a-45a4-a315-39b9f2826b9d",
        "sale": 20,
        "shipping": {
            "weight": "75 kg",
            "dimensions": "39 cm x 85 cm x 3 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "Acer Nitro 5",
        "price": 899.99,
        "description": "The Acer Nitro 5 is a budget-friendly gaming laptop that offers impressive performance and a sleek design.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
            "subcategorytitle": "Personal Computers"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 50,
        "rating": {
            "rate": 4.3,
            "count": 400
        },
        "id": "c4a9663a-7687-4b2b-9af5-5dc4014374f3",
        "sale": 0,
        "shipping": {
            "weight": "82 kg",
            "dimensions": "99 cm x 49 cm x 68 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Xiaomi Mi 11",
        "price": 799.99,
        "description": "The Xiaomi Mi 11 is a flagship Android smartphone with a 6.81-inch AMOLED display and a Snapdragon 888 processor.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "subcategorytitle": "Smartphones"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 500
        },
        "id": "c1cad756-7fab-4a3a-bdd4-ad4b764f8b92",
        "sale": 0,
        "shipping": {
            "weight": "24 kg",
            "dimensions": "6 cm x 33 cm x 99 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "Central Asia"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Sony Xperia 1 III",
        "price": 1299.99,
        "description": "The Sony Xperia 1 III is a high-end Android smartphone with a 6.5-inch 4K OLED display and a Snapdragon 888 processor.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "subcategorytitle": "Smartphones"
        },
        "manufacturer": "Xiaomi",
        "colors": ["blue"],
        "stock": 50,
        "rating": {
            "rate": 4.7,
            "count": 400
        },
        "id": "7ce47165-f9e2-43b6-8743-4b78b4b9607e",
        "sale": 14,
        "shipping": {
            "weight": "20 kg",
            "dimensions": "50 cm x 36 cm x 28 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Apple iPhone 12 mini",
        "price": 699.99,
        "description": "The iPhone 12 mini is a compact iPhone with a 5.4-inch Super Retina XDR display and the A14 Bionic chip.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "subcategorytitle": "Smartphones"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 150,
        "rating": {
            "rate": 4.6,
            "count": 300
        },
        "id": "6544897e-f518-40ba-9745-c95ea41912c7",
        "sale": 4,
        "shipping": {
            "weight": "23 kg",
            "dimensions": "20 cm x 16 cm x 38 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "title": "Samsung Galaxy Z Fold3 5G",
        "price": 1799.99,
        "description": "The Samsung Galaxy Z Fold3 5G is a foldable Android smartphone with a 7.6-inch Dynamic AMOLED display and a Snapdragon 888 processor.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "subcategorytitle": "Smartphones"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 200
        },
        "id": "cfab08a1-6cde-4085-bd69-6113c928f0b0",
        "sale": 0,
        "shipping": {
            "weight": "58 kg",
            "dimensions": "80 cm x 11 cm x 82 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Melanesia"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Google Pixel 5a",
        "price": 449.99,
        "description": "The Google Pixel 5a is a mid-range Android smartphone with a 6.34-inch OLED display and a Snapdragon 765G processor.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
            "subcategorytitle": "Smartphones"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 100,
        "rating": {
            "rate": 4.4,
            "count": 150
        },
        "id": "e266f2b6-b40e-4ce0-96a0-1c3bb0af485f",
        "sale": 17,
        "shipping": {
            "weight": "71 kg",
            "dimensions": "32 cm x 38 cm x 49 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "medium",
            "large",
            "small"
        ]
    },
    {
        "title": "HP EliteBook 840 G8",
        "price": 1299.99,
        "description": "The HP EliteBook 840 G8 is a high-performance business laptop with a durable chassis and long battery life.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "subcategorytitle": "Office Electronics"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "1ff79b4b-369c-4110-a011-bfec6873f9ae",
        "sale": 0,
        "shipping": {
            "weight": "2 kg",
            "dimensions": "96 cm x 88 cm x 51 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "Central Asia"
        },
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "title": "Epson EcoTank ET-3760",
        "price": 399.99,
        "description": "The Epson EcoTank ET-3760 is an all-in-one printer with a large ink tank that can last for up to 2 years of printing.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "subcategorytitle": "Office Electronics"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 30,
        "rating": {
            "rate": 4.4,
            "count": 80
        },
        "id": "86a22be7-89c4-463d-a358-1d66a7df90fc",
        "sale": 0,
        "shipping": {
            "weight": "19 kg",
            "dimensions": "15 cm x 25 cm x 52 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "title": "LG 27UL850-W",
        "price": 549.99,
        "description": "The LG 27UL850-W is a 27-inch 4K monitor with USB-C connectivity and a wide color gamut.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "subcategorytitle": "Office Electronics"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 15,
        "rating": {
            "rate": 4.7,
            "count": 90
        },
        "id": "105f0af0-3fb3-4048-90af-8a6a75f2cfa4",
        "sale": 0,
        "shipping": {
            "weight": "63 kg",
            "dimensions": "53 cm x 52 cm x 9 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Western Europe"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Logitech C920s HD Pro Webcam",
        "price": 89.99,
        "description": "The Logitech C920s HD Pro Webcam is a high-quality webcam with 1080p resolution and built-in privacy shutter.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "subcategorytitle": "Office Electronics"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 40,
        "rating": {
            "rate": 4.6,
            "count": 150
        },
        "id": "51d35c88-459a-4e2e-a3e2-3f1c8a28af2f",
        "sale": 0,
        "shipping": {
            "weight": "89 kg",
            "dimensions": "81 cm x 44 cm x 72 cm",
            "restrictions": "Restricted",
            "region": "North America",
            "subregion": "Northern America"
        },
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "title": "Anker PowerCore+ 26800mAh PD",
        "price": 129.99,
        "description": "The Anker PowerCore+ 26800mAh PD is a portable power bank with USB-C Power Delivery and fast charging technology.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
            "subcategorytitle": "Office Electronics"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 300
        },
        "id": "ed5caf49-1f53-4915-8ed4-2f655fc02a5b",
        "sale": 0,
        "shipping": {
            "weight": "32 kg",
            "dimensions": "89 cm x 51 cm x 26 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Bose QuietComfort 35 II Wireless Headphones",
        "price": 299.99,
        "description": "Noise-cancelling wireless headphones with up to 20 hours of battery life.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "subcategorytitle": "Audio & Video Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 1200
        },
        "id": "75a7fd8e-5267-421f-b064-437b3350a6df",
        "sale": 18,
        "shipping": {
            "weight": "72 kg",
            "dimensions": "6 cm x 60 cm x 45 cm",
            "restrictions": "None",
            "region": "North America",
            "subregion": "Caribbean"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Sony SRS-XB43 Portable Bluetooth Speaker",
        "price": 249.99,
        "description": "Waterproof and dustproof portable speaker with up to 24 hours of battery life.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "subcategorytitle": "Audio & Video Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 30,
        "rating": {
            "rate": 4.2,
            "count": 800
        },
        "id": "0f61a0ac-3000-4919-824c-07149ec07ba7",
        "sale": 0,
        "shipping": {
            "weight": "40 kg",
            "dimensions": "62 cm x 27 cm x 56 cm",
            "restrictions": "None",
            "region": "Europe",
            "subregion": "Northern Europe"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "LG OLED65C1PUB 65-Inch 4K Smart OLED TV",
        "price": 1999.99,
        "description": "65-inch 4K OLED TV with AI ThinQ technology and HDMI 2.1 for gaming.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "subcategorytitle": "Audio & Video Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 10,
        "rating": {
            "rate": 4.8,
            "count": 300
        },
        "id": "3963c579-a65b-46f6-b103-904573937530",
        "sale": 0,
        "shipping": {
            "weight": "71 kg",
            "dimensions": "3 cm x 39 cm x 26 cm",
            "restrictions": "None",
            "region": "Asia",
            "subregion": "Central Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "JBL TUNE 125TWS True Wireless Earbuds",
        "price": 99.99,
        "description": "True wireless earbuds with up to 32 hours of battery life and JBL Pure Bass sound.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "subcategorytitle": "Audio & Video Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 70,
        "rating": {
            "rate": 4.1,
            "count": 500
        },
        "id": "568ee766-ee3a-4c5e-baa4-7206d699b1f3",
        "sale": 8,
        "shipping": {
            "weight": "88 kg",
            "dimensions": "90 cm x 38 cm x 51 cm",
            "restrictions": "Restricted",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Samsung HW-Q60T 5.1ch Soundbar with Acoustic Beam",
        "price": 499.99,
        "description": "5.1-channel soundbar with Acoustic Beam technology and built-in Alexa voice control.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
            "subcategorytitle": "Audio & Video Equipment"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 20,
        "rating": {
            "rate": 4.4,
            "count": 700
        },
        "id": "ac1a7191-8f9c-477c-9454-6a8c1f9add61",
        "sale": 0,
        "shipping": {
            "weight": "42 kg",
            "dimensions": "4 cm x 75 cm x 86 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Eastern Europe"
        },
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "title": "Canon EOS R6 Mirrorless Camera",
        "price": 2499.99,
        "description": "The Canon EOS R6 is a versatile mirrorless camera designed for both photography and videography. It features a 20.1-megapixel full-frame CMOS sensor, DIGIC X image processor, and Dual Pixel CMOS AF system.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "subcategorytitle": "Cameras & Photography"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 10,
        "rating": {
            "rate": 4.8,
            "count": 30
        },
        "id": "8af2b8fe-5848-4973-b804-0b0b46f98933",
        "sale": 0,
        "shipping": {
            "weight": "32 kg",
            "dimensions": "70 cm x 91 cm x 92 cm",
            "restrictions": "Restricted",
            "region": "Europe",
            "subregion": "Southern Europe"
        },
        "sizes": [
            "small",
            "medium",
            "large"
        ]
    },
    {
        "title": "Nikon Z7 II Mirrorless Camera",
        "price": 3399.95,
        "description": "The Nikon Z7 II is a high-resolution mirrorless camera that features a 45.7-megapixel full-frame sensor, 4K UHD video recording, and advanced autofocus system. It's designed to deliver outstanding image quality and performance in any shooting situation.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "subcategorytitle": "Cameras & Photography"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 5,
        "rating": {
            "rate": 4.5,
            "count": 20
        },
        "id": "00627762-dc62-4e7c-8b77-9f2ac687ea0e",
        "sale": 16,
        "shipping": {
            "weight": "22 kg",
            "dimensions": "53 cm x 4 cm x 98 cm",
            "restrictions": "None",
            "region": "South America",
            "subregion": "South America"
        },
        "sizes": [
            "medium"
        ]
    },
    {
        "title": "Sony Alpha A9 II Mirrorless Camera",
        "price": 4499.99,
        "description": "The Sony Alpha A9 II is a top-of-the-line mirrorless camera designed for professional photographers. It features a 24.2-megapixel full-frame sensor, 4K video recording, and an advanced autofocus system that delivers exceptional speed and accuracy.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "subcategorytitle": "Cameras & Photography"
        },
        "manufacturer": "",
        "colors": ["red", "green"],
        "stock": 7,
        "rating": {
            "rate": 4.9,
            "count": 15
        },
        "id": "83fc5312-f8ea-445a-b6e6-26463045d54b",
        "sale": 0,
        "shipping": {
            "weight": "53 kg",
            "dimensions": "29 cm x 68 cm x 54 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "South Asia"
        },
        "sizes": [
            "large"
        ]
    },
    {
        "title": "Fujifilm X-T4 Mirrorless Camera",
        "price": 1699.95,
        "description": "The Fujifilm X-T4 is a high-performance mirrorless camera designed for photographers and videographers. It features a 26.1-megapixel APS-C sensor, in-body image stabilization, and 4K video recording. Its compact and lightweight design makes it easy to carry around.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "subcategorytitle": "Cameras & Photography"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 12,
        "rating": {
            "rate": 4.7,
            "count": 25
        },
        "id": "32ac9cf6-67f0-4362-8065-4dc1880a305a",
        "sale": 0,
        "shipping": {
            "weight": "66 kg",
            "dimensions": "85 cm x 13 cm x 5 cm",
            "restrictions": "None",
            "region": "Oceania",
            "subregion": "Micronesia"
        },
        "sizes": [
            "large",
            "medium",
            "small"
        ]
    },
    {
        "title": "Panasonic Lumix GH5 Mark II Mirrorless Camera",
        "price": 1697.99,
        "description": "The Panasonic Lumix GH5 Mark II is a high-end mirrorless camera designed for professional videographers. It features a 20.3-megapixel Micro Four Thirds sensor, 4K video recording, and a host of advanced video features like V-LogL and HDR recording. Its rugged and weather-sealed body makes it ideal for shooting in challenging conditions.",
        "category": {
            "categoryid": "technology",
            "categorytitle": "Technology",
            "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
            "subcategorytitle": "Cameras & Photography"
        },
        "manufacturer": "Xiaomi",
        "colors": ["red", "green"],
        "stock": 8,
        "rating": {
            "rate": 3.5,
            "count": 36
        },
        "id": "48db98cf-e7a0-44ee-be5a-d695e3af5a01",
        "sale": 0,
        "shipping": {
            "weight": "11 kg",
            "dimensions": "25 cm x 14 cm x 91 cm",
            "restrictions": "Restricted",
            "region": "Asia",
            "subregion": "West Asia"
        },
        "sizes": [
            "medium",
            "small"
        ]
    }
]

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
