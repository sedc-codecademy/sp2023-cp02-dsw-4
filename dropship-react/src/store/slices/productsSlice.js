import { createSlice } from "@reduxjs/toolkit";

const productsData = [
    {
        "name": "Waterproof Car Cover",
        "price": 89.99,
        "description": "This car cover is made from waterproof material and is designed to protect your car from rain, snow, and other elements.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "ratings": [],
        "id": "aefa415c-82dc-4e6e-a7db-ac4c1525a742",
        "sale": 10,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d3e3c11b-809b-4d22-98f8-58333377b784",
        "subcategorytitle": "Car Covers",
        "colors": [
            "brown",
            "green",
            "violet",
            "indigo",
            "gold"
        ],
        "sizes": [
            "x-small",
            "small",
            "medium",
            "medium"
        ]
    },
    {
        "name": "Sun Shade Car Cover",
        "price": 69.99,
        "description": "This car cover is designed to protect your car from the sun's harmful rays, keeping your car's interior cool and preventing fading.",
        "stock": 30,
        "rating": {
            "rate": 4,
            "count": 8
        },
        "id": "0d92bd00-7f5b-4549-aec5-983ac4e40a99",
        "sale": 26,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d3e3c11b-809b-4d22-98f8-58333377b784",
        "subcategorytitle": "Car Covers",
        "colors": [],
        "sizes": [
            "large",
            "x-large"
        ]
    },
    {
        "name": "Heavy Duty Car Cover",
        "price": 99.99,
        "description": "This heavy-duty car cover is made from durable material and is designed to protect your car from dust, dirt, and scratches.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "9305a8a9-bb6c-4bba-ad49-d4dd867d3b4e",
        "sale": 19,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d3e3c11b-809b-4d22-98f8-58333377b784",
        "subcategorytitle": "Car Covers",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Indoor Car Cover",
        "price": 49.99,
        "description": "This indoor car cover is made from soft material and is designed to protect your car's paint from scratches and dust while it's parked in your garage.",
        "stock": 40,
        "rating": {
            "rate": 3.5,
            "count": 6
        },
        "id": "6dd4b8c5-9b5d-4de0-9d42-291b5d3d8743",
        "sale": 18,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d3e3c11b-809b-4d22-98f8-58333377b784",
        "subcategorytitle": "Car Covers",
        "colors": [
            "teal"
        ],
        "sizes": []
    },
    {
        "name": "Breathable Car Cover",
        "price": 79.99,
        "description": "This car cover is made from breathable material and is designed to prevent moisture buildup and mildew, making it ideal for long-term storage.",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 4
        },
        "id": "9cd39fa5-78c1-4df8-945b-86a91a24a645",
        "sale": 27,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d3e3c11b-809b-4d22-98f8-58333377b784",
        "subcategorytitle": "Car Covers",
        "colors": [
            "orange",
            "amber",
            "green",
            "amber"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "All-Weather Floor Mats",
        "price": 49.99,
        "description": "These all-weather floor mats are designed to protect your car's interior from dirt, debris, and moisture, making them perfect for any season.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "83571611-c7af-4964-a28a-244b57b80d7c",
        "sale": 30,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "10884d4e-343f-43f8-9094-2c2e12f072ef",
        "subcategorytitle": "Floor Mats",
        "colors": [
            "yellow"
        ],
        "sizes": [
            "x-small",
            "small",
            "x-large",
            "medium",
            "small"
        ]
    },
    {
        "name": "Carpeted Floor Mats",
        "price": 39.99,
        "description": "These carpeted floor mats provide a comfortable and stylish addition to your car's interior, while also protecting the original carpet from wear and tear.",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 5
        },
        "id": "a2fedcbc-de3e-447a-867d-d990f0bbcf4e",
        "sale": 10,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "10884d4e-343f-43f8-9094-2c2e12f072ef",
        "subcategorytitle": "Floor Mats",
        "colors": [
            "yellow",
            "teal",
            "red",
            "lime",
            "maroon"
        ],
        "sizes": [
            "large",
            "x-small",
            "large",
            "small",
            "medium"
        ]
    },
    {
        "name": "Custom-Fit Floor Mats",
        "price": 69.99,
        "description": "These custom-fit floor mats are designed specifically for your make and model, ensuring a perfect fit and maximum protection for your car's interior.",
        "stock": 10,
        "rating": {
            "rate": 5,
            "count": 2
        },
        "id": "7846b4a7-5e97-425a-9ff1-3e6d92e64d98",
        "sale": 23,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "10884d4e-343f-43f8-9094-2c2e12f072ef",
        "subcategorytitle": "Floor Mats",
        "colors": [
            "indigo",
            "cyan"
        ],
        "sizes": [
            "x-small",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Rubber Floor Mats",
        "price": 29.99,
        "description": "These rubber floor mats are perfect for heavy-duty use, protecting your car's interior from mud, water, and other debris.",
        "stock": 25,
        "rating": {
            "rate": 3.5,
            "count": 7
        },
        "id": "5abd7e40-ad02-43eb-84c1-e66e2c4934f7",
        "sale": 17,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "10884d4e-343f-43f8-9094-2c2e12f072ef",
        "subcategorytitle": "Floor Mats",
        "colors": [
            "brown"
        ],
        "sizes": [
            "small",
            "x-large"
        ]
    },
    {
        "name": "Logo Floor Mats",
        "price": 59.99,
        "description": "These logo floor mats feature your favorite sports team or car brand logo, adding a personalized touch to your car's interior.",
        "stock": 5,
        "rating": {
            "rate": 4.5,
            "count": 3
        },
        "id": "557a59d6-01ce-439e-879f-36fb91760ed4",
        "sale": 2,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "10884d4e-343f-43f8-9094-2c2e12f072ef",
        "subcategorytitle": "Floor Mats",
        "colors": [],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Leather Seat Covers",
        "price": 149.99,
        "description": "These premium leather seat covers add a luxurious and elegant touch to your car's interior, while also providing protection against spills and stains.",
        "stock": 5,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "40214fe3-84c7-47f0-ae07-acfbaf9882df",
        "sale": 23,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "subcategorytitle": "Seat Covers",
        "colors": [
            "maroon",
            "gold"
        ],
        "sizes": [
            "medium",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Sports Seat Covers",
        "price": 99.99,
        "description": "These sports-inspired seat covers provide a sleek and stylish look to your car's interior, while also offering protection and comfort during long drives.",
        "stock": 8,
        "rating": {
            "rate": 4,
            "count": 5
        },
        "id": "06650b12-63a7-4c69-96db-afd73f3ed83f",
        "sale": 7,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "subcategorytitle": "Seat Covers",
        "colors": [],
        "sizes": [
            "x-large",
            "small"
        ]
    },
    {
        "name": "Custom Fit Seat Covers",
        "price": 129.99,
        "description": "These custom fit seat covers are tailored to fit your car's seats perfectly, providing maximum protection and comfort for you and your passengers.",
        "stock": 3,
        "rating": {
            "rate": 5,
            "count": 2
        },
        "id": "21379b0a-a999-4a3c-9c00-76027da1c14a",
        "sale": 7,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "subcategorytitle": "Seat Covers",
        "colors": [
            "yellow",
            "teal",
            "navy",
            "purple"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Universal Fit Seat Covers",
        "price": 79.99,
        "description": "These universal fit seat covers are designed to fit most cars, trucks, and SUVs, making them a versatile and affordable option for any car owner.",
        "stock": 12,
        "rating": {
            "rate": 3.5,
            "count": 8
        },
        "id": "1c529959-3e4b-43e5-ba47-bbea884cbffd",
        "sale": 1,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "subcategorytitle": "Seat Covers",
        "colors": [
            "brown",
            "yellow",
            "brown"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Neoprene Seat Covers",
        "price": 119.99,
        "description": "These neoprene seat covers provide a durable and waterproof barrier against spills and stains, while also offering a sporty and rugged look to your car's interior.",
        "stock": 6,
        "rating": {
            "rate": 4.5,
            "count": 3
        },
        "id": "d1f1719d-0060-4d00-9ac5-75a9175c00d8",
        "sale": 8,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ba523e6e-32cb-43a5-be44-734bd769aaa2",
        "subcategorytitle": "Seat Covers",
        "colors": [
            "pink",
            "yellow",
            "yellow",
            "amber",
            "green"
        ],
        "sizes": []
    },
    {
        "name": "Trunk Organizer",
        "price": 39.99,
        "description": "Keep your trunk neat and organized with this spacious and durable trunk organizer. Features multiple compartments and foldable design for easy storage.",
        "stock": 8,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "c17c6757-91d0-47f8-99f8-65304cd3ef12",
        "sale": 26,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
        "subcategorytitle": "Car Organizers",
        "colors": [
            "maroon"
        ],
        "sizes": []
    },
    {
        "name": "Backseat Organizer",
        "price": 24.99,
        "description": "This backseat organizer provides ample storage space for all your travel essentials, including water bottles, snacks, electronics, and more. Attaches easily to the back of the front seats.",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "8946f4e7-e002-41aa-8586-d9add1ce4398",
        "sale": 6,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
        "subcategorytitle": "Car Organizers",
        "colors": [],
        "sizes": [
            "small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Sun Visor Organizer",
        "price": 9.99,
        "description": "Keep your sunglasses, phone, and other small items within reach with this handy sun visor organizer. Features multiple pockets and a secure clip-on design.",
        "stock": 20,
        "rating": {
            "rate": 3.5,
            "count": 8
        },
        "id": "c68548b2-3ae3-46a1-ab9b-ac16b08787b8",
        "sale": 19,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
        "subcategorytitle": "Car Organizers",
        "colors": [
            "red",
            "cyan",
            "orange",
            "maroon"
        ],
        "sizes": [
            "large",
            "x-small",
            "medium",
            "large"
        ]
    },
    {
        "name": "Seat Gap Filler",
        "price": 12.99,
        "description": "This seat gap filler prevents items from falling in between the seats and is a great way to keep your car clean and organized. Fits most cars and is easy to install.",
        "stock": 30,
        "rating": {
            "rate": 4,
            "count": 3
        },
        "id": "ea6fe1dd-0e44-417f-a4de-23e8ea7115f2",
        "sale": 6,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
        "subcategorytitle": "Car Organizers",
        "colors": [
            "gray",
            "brown"
        ],
        "sizes": [
            "x-small",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Center Console Organizer",
        "price": 19.99,
        "description": "Maximize your center console storage space with this handy organizer. Features multiple compartments and a non-slip bottom to keep items in place.",
        "stock": 12,
        "rating": {
            "rate": 3.5,
            "count": 5
        },
        "id": "e47935d8-4931-460c-8987-ff53d8408907",
        "sale": 27,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
        "subcategorytitle": "Car Organizers",
        "colors": [
            "olive",
            "green",
            "violet"
        ],
        "sizes": [
            "x-large",
            "large"
        ]
    },
    {
        "name": "Belkin Car Vent Mount",
        "price": 19.99,
        "description": "The Belkin Car Vent Mount provides a safe, hands-free way to use your smartphone in the car. The adjustable brackets expand to fit most smartphones and keep them securely in place.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 200
        },
        "id": "c9b091d2-f028-480a-902a-36c0e8321dda",
        "sale": 13,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "dcc14cf4-623e-46a5-b993-06722b09a093",
        "subcategorytitle": "Car Phone Mounts",
        "colors": [],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Spigen Magnetic Phone Mount",
        "price": 24.99,
        "description": "The Spigen Magnetic Phone Mount uses powerful magnets to securely hold your phone in place while you drive. The mount can be attached to your car's dashboard or air vent for easy access.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 150
        },
        "id": "a230dca0-2ce9-4cde-82bc-671de629f276",
        "sale": 23,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "dcc14cf4-623e-46a5-b993-06722b09a093",
        "subcategorytitle": "Car Phone Mounts",
        "colors": [
            "lime",
            "violet",
            "gold"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "iOttie Easy One Touch Car Mount",
        "price": 29.99,
        "description": "The iOttie Easy One Touch Car Mount features a universal design that fits most smartphones. The mount can be attached to your car's dashboard or windshield for maximum convenience.",
        "stock": 75,
        "rating": {
            "rate": 4.7,
            "count": 300
        },
        "id": "387425a7-6839-4ce2-8557-f62b66c1d56b",
        "sale": 12,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "dcc14cf4-623e-46a5-b993-06722b09a093",
        "subcategorytitle": "Car Phone Mounts",
        "colors": [
            "olive",
            "purple",
            "orange",
            "brown",
            "violet"
        ],
        "sizes": [
            "medium",
            "x-large",
            "large"
        ]
    },
    {
        "name": "WizGear Dashboard Phone Mount",
        "price": 14.99,
        "description": "The WizGear Dashboard Phone Mount provides a stable, non-slip surface for your phone while you drive. The mount can be attached to your car's dashboard with a strong adhesive.",
        "stock": 200,
        "rating": {
            "rate": 4.1,
            "count": 100
        },
        "id": "e065b994-0ec2-4f7e-bb7c-df3c68f7ef72",
        "sale": 17,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "dcc14cf4-623e-46a5-b993-06722b09a093",
        "subcategorytitle": "Car Phone Mounts",
        "colors": [
            "blue",
            "red"
        ],
        "sizes": []
    },
    {
        "name": "Mpow Car Phone Holder",
        "price": 18.99,
        "description": "The Mpow Car Phone Holder features a flexible arm that can be adjusted to any angle for easy viewing. The mount can be attached to your car's air vent or dashboard for maximum convenience.",
        "stock": 150,
        "rating": {
            "rate": 4.3,
            "count": 250
        },
        "id": "dcdd48e1-80b1-4d88-b5db-c6e01c5d3159",
        "sale": 28,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "dcc14cf4-623e-46a5-b993-06722b09a093",
        "subcategorytitle": "Car Phone Mounts",
        "colors": [
            "brown",
            "blue",
            "yellow",
            "lime"
        ],
        "sizes": [
            "medium",
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Fast Charging USB Car Charger",
        "price": 14.99,
        "description": "Charge your devices quickly and efficiently with this fast charging USB car charger.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "9ea63a74-7a6e-440d-b04a-fe536d46287f",
        "sale": 5,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "subcategorytitle": "Car Chargers",
        "colors": [
            "orange"
        ],
        "sizes": [
            "x-large",
            "medium",
            "medium",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Dual USB Car Charger",
        "price": 12.99,
        "description": "Charge two devices at once with this dual USB car charger.",
        "stock": 30,
        "rating": {
            "rate": 4.2,
            "count": 15
        },
        "id": "f73bce3d-5619-446b-a355-838249d4ea3a",
        "sale": 19,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "subcategorytitle": "Car Chargers",
        "colors": [],
        "sizes": [
            "small",
            "small",
            "medium"
        ]
    },
    {
        "name": "Wireless Car Charger",
        "price": 29.99,
        "description": "Charge your phone wirelessly while on the go with this wireless car charger.",
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "73c5ab4b-d763-40ab-b623-a8c36c2f2d20",
        "sale": 27,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "subcategorytitle": "Car Chargers",
        "colors": [
            "orange",
            "navy",
            "green",
            "brown"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "USB-C Car Charger",
        "price": 9.99,
        "description": "Charge your USB-C devices in your car with this compact and affordable USB-C car charger.",
        "stock": 50,
        "rating": {
            "rate": 4,
            "count": 5
        },
        "id": "d198c2e5-90ab-44eb-b558-8d3606aef415",
        "sale": 16,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "subcategorytitle": "Car Chargers",
        "colors": [
            "gray"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Car Charger with Multiple Ports",
        "price": 19.99,
        "description": "Charge multiple devices at once with this car charger that has multiple ports.",
        "stock": 10,
        "rating": {
            "rate": 4.4,
            "count": 20
        },
        "id": "e2e73b1b-5e9a-42dd-a528-61b3268511d6",
        "sale": 15,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
        "subcategorytitle": "Car Chargers",
        "colors": [
            "blue",
            "cyan",
            "teal"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Ultimate Car Cleaning Kit",
        "price": 59.99,
        "description": "Get your car looking like new with our ultimate car cleaning kit! Includes everything you need for a deep clean, inside and out.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "4bb1a122-8409-49f0-aa58-931f2f6ee16d",
        "sale": 15,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "subcategorytitle": "Car Cleaning Kits",
        "colors": [
            "green",
            "pink"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Quick & Easy Car Cleaning Kit",
        "price": 29.99,
        "description": "Clean your car in no time with our quick and easy car cleaning kit! Perfect for a quick touch-up or regular maintenance.",
        "stock": 200,
        "rating": {
            "rate": 4.2,
            "count": 15
        },
        "id": "cb4bf7f2-fe9f-4505-9eab-29d7884e2897",
        "sale": 8,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "subcategorytitle": "Car Cleaning Kits",
        "colors": [
            "red",
            "blue",
            "indigo",
            "purple",
            "pink"
        ],
        "sizes": []
    },
    {
        "name": "Eco-Friendly Car Cleaning Kit",
        "price": 49.99,
        "description": "Clean your car while being kind to the environment with our eco-friendly car cleaning kit! Includes biodegradable cleaning products and reusable towels.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "b862183c-17a8-4fea-95b9-9c3fab7ad42a",
        "sale": 7,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "subcategorytitle": "Car Cleaning Kits",
        "colors": [
            "silver",
            "red"
        ],
        "sizes": []
    },
    {
        "name": "Luxury Car Cleaning Kit",
        "price": 99.99,
        "description": "Treat your car to the ultimate luxury cleaning experience with our luxury car cleaning kit! Includes premium cleaning products and soft microfiber towels.",
        "stock": 75,
        "rating": {
            "rate": 5,
            "count": 5
        },
        "id": "f49dd188-a1cb-41d9-a6ca-59f6c47dfa63",
        "sale": 13,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "subcategorytitle": "Car Cleaning Kits",
        "colors": [
            "olive",
            "olive",
            "amber"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Professional Car Cleaning Kit",
        "price": 149.99,
        "description": "Get professional-grade cleaning results with our professional car cleaning kit! Includes heavy-duty cleaning products and detailing tools.",
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 20
        },
        "id": "81cabe25-8d69-4a1d-a272-6d95fd44d620",
        "sale": 25,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
        "subcategorytitle": "Car Cleaning Kits",
        "colors": [
            "brown"
        ],
        "sizes": []
    },
    {
        "name": "New Car Scent Air Freshener",
        "price": 5.99,
        "description": "Bring the fresh scent of a new car to your vehicle with our new car scent air freshener! Easy to use and long-lasting.",
        "stock": 100,
        "rating": {
            "rate": 4.2,
            "count": 25
        },
        "id": "a89fb26b-a3fc-408f-bfa5-ae6670d5bb9f",
        "sale": 2,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "subcategorytitle": "Car Fragrances",
        "colors": [
            "cyan",
            "cyan"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Vanilla Bean Car Diffuser",
        "price": 9.99,
        "description": "Enjoy the warm and inviting scent of vanilla in your car with our vanilla bean car diffuser! Includes natural essential oils for a high-quality fragrance.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 15
        },
        "id": "a1ce6916-bf25-40f9-a541-8114ef654c38",
        "sale": 0,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "subcategorytitle": "Car Fragrances",
        "colors": [
            "purple",
            "gray",
            "brown",
            "gray"
        ],
        "sizes": [
            "x-small",
            "medium",
            "medium"
        ]
    },
    {
        "name": "Leather Scented Car Perfume",
        "price": 12.99,
        "description": "Experience the luxurious scent of leather in your car with our leather scented car perfume! Designed to provide a long-lasting fragrance.",
        "stock": 30,
        "rating": {
            "rate": 4,
            "count": 20
        },
        "id": "b0b3b846-f546-414d-8575-28622baa103d",
        "sale": 15,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "subcategorytitle": "Car Fragrances",
        "colors": [
            "gray",
            "green",
            "brown",
            "red"
        ],
        "sizes": [
            "large",
            "medium",
            "x-small",
            "x-small",
            "small"
        ]
    },
    {
        "name": "Citrus Grove Car Air Freshener",
        "price": 7.99,
        "description": "Refresh your car with the invigorating scent of citrus with our citrus grove car air freshener! Contains natural citrus essential oils.",
        "stock": 80,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "31c548a8-0c70-4af7-915f-952e13b9af9b",
        "sale": 23,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "subcategorytitle": "Car Fragrances",
        "colors": [
            "orange",
            "gold",
            "lime",
            "gold"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Lavender Fields Car Diffuser",
        "price": 14.99,
        "description": "Relax and unwind in your car with our lavender fields car diffuser! Contains natural lavender essential oils for a calming fragrance.",
        "stock": 20,
        "rating": {
            "rate": 4.6,
            "count": 5
        },
        "id": "57449687-f54b-4303-b702-de3a7090b982",
        "sale": 13,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "d821754f-9e4d-4758-b162-52f0fee2d7f9",
        "subcategorytitle": "Car Fragrances",
        "colors": [
            "cyan",
            "orange",
            "orange",
            "olive",
            "green"
        ],
        "sizes": []
    },
    {
        "name": "LED Headlight Conversion Kit",
        "price": 99.99,
        "description": "Upgrade your car's headlights with our LED headlight conversion kit! Provides brighter and more efficient lighting than traditional halogen bulbs.",
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "26fb2adb-a251-4a23-952d-bdef097a093c",
        "sale": 16,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "subcategorytitle": "Car Lights",
        "colors": [
            "gray",
            "blue",
            "indigo",
            "silver"
        ],
        "sizes": [
            "x-large",
            "small",
            "small"
        ]
    },
    {
        "name": "Underglow LED Strip Lights",
        "price": 39.99,
        "description": "Add a stylish touch to your car with our underglow LED strip lights! Available in multiple colors and can be easily installed.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "ab86a0f5-6a33-472d-92fe-3a3256fd5b96",
        "sale": 17,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "subcategorytitle": "Car Lights",
        "colors": [
            "indigo",
            "gold",
            "navy"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "x-large",
            "large",
            "small"
        ]
    },
    {
        "name": "Fog Light Upgrade Kit",
        "price": 79.99,
        "description": "Improve your visibility in foggy conditions with our fog light upgrade kit! Designed to provide a wider and brighter beam pattern.",
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "60878fe8-9fb3-4742-98ee-79dd8c60b568",
        "sale": 18,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "subcategorytitle": "Car Lights",
        "colors": [],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "HID Xenon Headlight Bulbs",
        "price": 49.99,
        "description": "Experience brighter and clearer lighting with our HID xenon headlight bulbs! Available in multiple color temperatures to suit your preferences.",
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 14
        },
        "id": "92a2ce33-ab8d-4ecf-a78f-e1c1c0f9d118",
        "sale": 14,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "subcategorytitle": "Car Lights",
        "colors": [],
        "sizes": [
            "small",
            "small",
            "medium",
            "large",
            "large"
        ]
    },
    {
        "name": "Interior LED Dome Light Kit",
        "price": 29.99,
        "description": "Light up the interior of your car with our LED dome light kit! Available in multiple colors and can be easily installed.",
        "stock": 30,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "f8bf4dc1-9fba-4cf8-90ff-e92b410ff348",
        "sale": 7,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
        "subcategorytitle": "Car Lights",
        "colors": [
            "green",
            "pink",
            "magenta"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Carbon Fiber Spoiler",
        "price": 249.99,
        "description": "Upgrade the look of your car with our carbon fiber spoiler! Lightweight and durable, and adds a sporty touch to your vehicle.",
        "stock": 15,
        "rating": {
            "rate": 4.8,
            "count": 6
        },
        "id": "1a124178-5f74-41f6-8418-5bbb81935045",
        "sale": 25,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        "subcategorytitle": "Car Styling",
        "colors": [
            "indigo",
            "gray",
            "cyan"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Alloy Wheel Set",
        "price": 599.99,
        "description": "Transform the look of your car with our high-quality alloy wheel set! Available in various sizes and finishes.",
        "stock": 8,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "92767dd8-b3bc-4b63-a942-2b79ef97edc0",
        "sale": 13,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        "subcategorytitle": "Car Styling",
        "colors": [
            "indigo",
            "orange",
            "gray",
            "violet",
            "indigo"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Performance Exhaust System",
        "price": 899.99,
        "description": "Upgrade the sound and performance of your car with our performance exhaust system! Made from high-quality materials and designed for maximum flow.",
        "stock": 5,
        "rating": {
            "rate": 4.9,
            "count": 7
        },
        "id": "46c14887-6130-487e-8b61-d103236bdcf8",
        "sale": 25,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        "subcategorytitle": "Car Styling",
        "colors": [
            "blue"
        ],
        "sizes": [
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Racing Stripes Decal Kit",
        "price": 69.99,
        "description": "Give your car a racing-inspired look with our vinyl decal kit! Available in multiple colors and easy to install.",
        "stock": 25,
        "rating": {
            "rate": 4.2,
            "count": 9
        },
        "id": "3ad73ecd-4251-47f1-aadc-89ff61c2d75c",
        "sale": 5,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        "subcategorytitle": "Car Styling",
        "colors": [
            "green",
            "gray",
            "gold",
            "gray",
            "orange"
        ],
        "sizes": [
            "x-small",
            "medium",
            "x-large",
            "x-small",
            "small"
        ]
    },
    {
        "name": "Custom Car Cover",
        "price": 199.99,
        "description": "Protect your car while showing off your style with our custom car cover! Available in various colors and designs, and made from high-quality materials.",
        "stock": 20,
        "rating": {
            "rate": 4.6,
            "count": 11
        },
        "id": "5af4de67-ed2e-462f-b31b-f6dc05d8ae74",
        "sale": 29,
        "categoryid": "autoaccessories",
        "categorytitle": "Automobile Accessories",
        "subcategoryid": "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
        "subcategorytitle": "Car Styling",
        "colors": [
            "indigo"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Matte Lipstick",
        "price": 9.99,
        "description": "Get a bold, matte lip with this long-lasting lipstick. Available in a range of vibrant shades.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 25
        },
        "id": "e6a77af5-deff-4588-82b3-3ef2ceb32acc",
        "sale": 6,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
        "subcategorytitle": "Makeup",
        "colors": [
            "pink",
            "teal",
            "green",
            "maroon"
        ],
        "sizes": [
            "x-large",
            "medium",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Eyeshadow Palette",
        "price": 19.99,
        "description": "Create endless eye looks with this versatile eyeshadow palette. Features a mix of matte and shimmer shades.",
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 15
        },
        "id": "0dd75ab7-3c4a-42f7-bfe5-6847d7dbf2a9",
        "sale": 17,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
        "subcategorytitle": "Makeup",
        "colors": [
            "cyan",
            "purple"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Foundation",
        "price": 14.99,
        "description": "Achieve a flawless complexion with this buildable, medium-coverage foundation. Available in a variety of shades.",
        "stock": 40,
        "rating": {
            "rate": 4.1,
            "count": 20
        },
        "id": "4a703ee0-d2c0-48a1-be90-c95e7c90c351",
        "sale": 14,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
        "subcategorytitle": "Makeup",
        "colors": [
            "amber",
            "lime",
            "indigo",
            "cyan"
        ],
        "sizes": []
    },
    {
        "name": "Mascara",
        "price": 12.99,
        "description": "Get bold, voluminous lashes with this lengthening mascara. Features a tapered brush for easy application.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 30
        },
        "id": "bca6054a-2863-4e62-b93a-16a3ffec3223",
        "sale": 4,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
        "subcategorytitle": "Makeup",
        "colors": [
            "gold",
            "blue",
            "magenta",
            "red",
            "orange"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Blush",
        "price": 8.99,
        "description": "Add a natural flush to your cheeks with this silky powder blush. Available in a range of shades.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "b1dbe182-c16c-4134-a44a-bd495ee11302",
        "sale": 24,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
        "subcategorytitle": "Makeup",
        "colors": [
            "lime",
            "navy",
            "purple",
            "green",
            "brown"
        ],
        "sizes": [
            "x-large",
            "large",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Hydrating Facial Moisturizer",
        "price": 24.99,
        "description": "Restore moisture and nourish your skin with this hydrating facial moisturizer. Lightweight and fast-absorbing formula for all skin types.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "b536b695-b10a-4929-b02e-ae3556c0ad00",
        "sale": 30,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
        "subcategorytitle": "Skincare",
        "colors": [
            "cyan",
            "indigo",
            "brown"
        ],
        "sizes": [
            "x-small",
            "medium",
            "large"
        ]
    },
    {
        "name": "Gentle Cleansing Foam",
        "price": 14.99,
        "description": "Cleanse and refresh your skin with this gentle cleansing foam. Removes impurities without stripping the skin's natural moisture.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "06e525f8-5f55-4978-9118-8652ff5c0ea3",
        "sale": 9,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
        "subcategorytitle": "Skincare",
        "colors": [],
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "name": "Anti-Aging Serum",
        "price": 39.99,
        "description": "Reduce the appearance of fine lines and wrinkles with this powerful anti-aging serum. Formulated with potent ingredients for visible results.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "3288f4e7-95e1-4d88-b5ac-9c66f4e07d07",
        "sale": 28,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
        "subcategorytitle": "Skincare",
        "colors": [
            "silver",
            "violet",
            "brown"
        ],
        "sizes": []
    },
    {
        "name": "Exfoliating Facial Scrub",
        "price": 19.99,
        "description": "Revitalize your skin with this exfoliating facial scrub. Gently removes dead skin cells and promotes a smoother complexion.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "7de449cf-149c-458f-8f87-d1927a022880",
        "sale": 6,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
        "subcategorytitle": "Skincare",
        "colors": [
            "orange",
            "red",
            "silver",
            "purple"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Brightening Face Mask",
        "price": 12.99,
        "description": "Achieve a brighter, more radiant complexion with this brightening face mask. Infused with antioxidants and natural extracts.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "562d3b03-0e0f-41de-a54f-d75f4fc5e94d",
        "sale": 4,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
        "subcategorytitle": "Skincare",
        "colors": [],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Shampoo",
        "price": 12.99,
        "description": "Cleanse and nourish your hair with this revitalizing shampoo. Formulated with natural extracts to promote healthy and shiny locks.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "6dcc88e9-d1ea-4fc5-a983-86a65d1f7287",
        "sale": 6,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "f01b6cc6-1917-40ff-9344-184e978a68d8",
        "subcategorytitle": "Hair Care",
        "colors": [],
        "sizes": [
            "x-small",
            "large",
            "x-small",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Conditioner",
        "price": 10.99,
        "description": "Hydrate and detangle your hair with this replenishing conditioner. Restores moisture and leaves your hair smooth and manageable.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "cca1a417-a03c-45ee-9262-b9ced2a10d51",
        "sale": 20,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "f01b6cc6-1917-40ff-9344-184e978a68d8",
        "subcategorytitle": "Hair Care",
        "colors": [
            "brown",
            "red",
            "gray",
            "amber",
            "green"
        ],
        "sizes": [
            "x-large",
            "large",
            "small"
        ]
    },
    {
        "name": "Hair Oil",
        "price": 19.99,
        "description": "Nourish and strengthen your hair with this luxurious hair oil. Adds shine, tames frizz, and protects against heat damage.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "bd3eaf8f-6026-4086-9f2b-0735a02146b3",
        "sale": 28,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "f01b6cc6-1917-40ff-9344-184e978a68d8",
        "subcategorytitle": "Hair Care",
        "colors": [
            "pink"
        ],
        "sizes": [
            "x-small",
            "large"
        ]
    },
    {
        "name": "Hair Mask",
        "price": 14.99,
        "description": "Revitalize and repair your hair with this deep conditioning hair mask. Restores moisture, improves elasticity, and reduces breakage.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "06a33719-34d0-49cf-afb8-31fcc92d0249",
        "sale": 19,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "f01b6cc6-1917-40ff-9344-184e978a68d8",
        "subcategorytitle": "Hair Care",
        "colors": [],
        "sizes": [
            "small",
            "large",
            "large",
            "small"
        ]
    },
    {
        "name": "Heat Protectant Spray",
        "price": 9.99,
        "description": "Shield your hair from heat styling damage with this protective spray. Forms a barrier to prevent breakage and maintain hair health.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "07ad880f-4ef6-4abf-84b8-a0b68d001683",
        "sale": 9,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "f01b6cc6-1917-40ff-9344-184e978a68d8",
        "subcategorytitle": "Hair Care",
        "colors": [
            "orange",
            "maroon",
            "teal",
            "red",
            "cyan"
        ],
        "sizes": [
            "x-large",
            "large",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Eau de Parfum",
        "price": 59.99,
        "description": "Experience the allure of this exquisite eau de parfum. A captivating blend of floral and woody notes that lingers throughout the day.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "111eae38-b48e-4b0d-98e5-1b0a797d03fe",
        "sale": 15,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "8d12a370-ad82-4c33-a99a-006b040abbe2",
        "subcategorytitle": "Fragrances",
        "colors": [
            "yellow",
            "maroon",
            "silver",
            "indigo"
        ],
        "sizes": []
    },
    {
        "name": "Cologne Spray",
        "price": 39.99,
        "description": "Make a statement with this refreshing cologne spray. A harmonious fusion of citrus and aromatic accords for a burst of vitality.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "cd0a95e2-0807-4f2e-aa6c-9f030584638f",
        "sale": 29,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "8d12a370-ad82-4c33-a99a-006b040abbe2",
        "subcategorytitle": "Fragrances",
        "colors": [
            "cyan",
            "magenta",
            "magenta",
            "silver",
            "violet"
        ],
        "sizes": [
            "large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Perfume Oil",
        "price": 24.99,
        "description": "Indulge in the luxury of this concentrated perfume oil. Infused with rich and sensual notes that create a lasting and intimate fragrance experience.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "08f67469-70cf-492c-9ecf-fb096bb6b8b0",
        "sale": 6,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "8d12a370-ad82-4c33-a99a-006b040abbe2",
        "subcategorytitle": "Fragrances",
        "colors": [
            "violet",
            "olive"
        ],
        "sizes": [
            "medium",
            "x-small",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Body Mist",
        "price": 19.99,
        "description": "Refresh and invigorate your senses with this lightweight body mist. Leaves a delicate and lingering fragrance on your skin.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "0ff734c0-0de9-43c8-95d4-1873d4d610e8",
        "sale": 21,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "8d12a370-ad82-4c33-a99a-006b040abbe2",
        "subcategorytitle": "Fragrances",
        "colors": [
            "blue",
            "violet",
            "amber",
            "olive"
        ],
        "sizes": [
            "x-large",
            "large",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Solid Perfume",
        "price": 14.99,
        "description": "Experience the convenience of this portable solid perfume. A blend of enchanting notes in a compact and travel-friendly form.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "3aa42418-0e41-4786-802c-d6c083b1e081",
        "sale": 18,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "8d12a370-ad82-4c33-a99a-006b040abbe2",
        "subcategorytitle": "Fragrances",
        "colors": [
            "yellow",
            "pink",
            "cyan",
            "maroon"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Body Wash",
        "price": 8.99,
        "description": "Cleanse and refresh your skin with this invigorating body wash. Formulated with nourishing ingredients to leave your skin feeling soft and hydrated.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "3fe5e32b-ac5f-4440-9b39-ae0c3aaba3a4",
        "sale": 7,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "c8e24060-a3cc-4909-a295-a20490698732",
        "subcategorytitle": "Bath & Body",
        "colors": [
            "magenta",
            "amber"
        ],
        "sizes": [
            "small",
            "large",
            "large",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Body Lotion",
        "price": 12.99,
        "description": "Moisturize and nourish your skin with this luxurious body lotion. Absorbs quickly and leaves your skin smooth, supple, and delicately scented.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "8333fa63-6067-441c-a4b0-d86070b1237a",
        "sale": 20,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "c8e24060-a3cc-4909-a295-a20490698732",
        "subcategorytitle": "Bath & Body",
        "colors": [
            "orange",
            "blue",
            "brown",
            "violet"
        ],
        "sizes": [
            "x-small",
            "medium",
            "small",
            "large"
        ]
    },
    {
        "name": "Bath Bombs",
        "price": 6.99,
        "description": "Indulge in a relaxing bath experience with these delightful bath bombs. Effervescent and aromatic, they transform your bathwater into a soothing oasis.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "11c82cce-bfc8-4daa-8794-de26e2d5c914",
        "sale": 29,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "c8e24060-a3cc-4909-a295-a20490698732",
        "subcategorytitle": "Bath & Body",
        "colors": [
            "teal",
            "gold"
        ],
        "sizes": []
    },
    {
        "name": "Hand Soap",
        "price": 4.99,
        "description": "Keep your hands clean and nourished with this gentle and moisturizing hand soap. Leaves your hands feeling soft, refreshed, and lightly fragranced.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "2964dbe8-0425-4894-8c01-387ebc78c317",
        "sale": 30,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "c8e24060-a3cc-4909-a295-a20490698732",
        "subcategorytitle": "Bath & Body",
        "colors": [
            "violet",
            "blue",
            "gray",
            "teal",
            "teal"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Body Scrub",
        "price": 14.99,
        "description": "Exfoliate and rejuvenate your skin with this invigorating body scrub. Removes dead skin cells and reveals smoother, brighter, and more radiant skin.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "15649267-a811-4f41-994d-7108af204440",
        "sale": 2,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "c8e24060-a3cc-4909-a295-a20490698732",
        "subcategorytitle": "Bath & Body",
        "colors": [],
        "sizes": [
            "x-small",
            "x-small",
            "medium",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Beard Oil",
        "price": 14.99,
        "description": "Nourish and tame your beard with this conditioning beard oil. Softens and hydrates facial hair, promoting a healthy and well-groomed appearance.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "64a08f9a-a2ec-4457-9f23-4b2c0d82b8d7",
        "sale": 7,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "67447359-bb55-4510-a696-06207f11625b",
        "subcategorytitle": "Men's Grooming",
        "colors": [],
        "sizes": [
            "x-small",
            "x-large",
            "x-large",
            "medium",
            "x-small"
        ]
    },
    {
        "name": "Shaving Cream",
        "price": 9.99,
        "description": "Achieve a close and comfortable shave with this rich shaving cream. Creates a protective lather for a smooth glide and minimizes skin irritation.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "6066259a-89b2-477a-9baf-b73484a3c137",
        "sale": 24,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "67447359-bb55-4510-a696-06207f11625b",
        "subcategorytitle": "Men's Grooming",
        "colors": [
            "cyan",
            "gold",
            "brown",
            "purple"
        ],
        "sizes": [
            "small",
            "small"
        ]
    },
    {
        "name": "Aftershave Balm",
        "price": 12.99,
        "description": "Soothe and moisturize your skin after shaving with this calming aftershave balm. Helps reduce razor burn, redness, and provides hydration.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "84443f51-c9f6-4bd4-96a7-076314d933c0",
        "sale": 23,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "67447359-bb55-4510-a696-06207f11625b",
        "subcategorytitle": "Men's Grooming",
        "colors": [
            "amber",
            "yellow",
            "maroon",
            "lime"
        ],
        "sizes": [
            "x-large",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Hair Styling Pomade",
        "price": 11.99,
        "description": "Style your hair with precision and hold using this versatile hair styling pomade. Provides a medium hold and a sleek, polished finish.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "94c816e4-46fa-43ef-9939-8ac453fc2759",
        "sale": 27,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "67447359-bb55-4510-a696-06207f11625b",
        "subcategorytitle": "Men's Grooming",
        "colors": [
            "orange",
            "purple",
            "gold",
            "gray",
            "amber"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Cologne",
        "price": 29.99,
        "description": "Add a touch of sophistication with this captivating cologne. Leaves a long-lasting, alluring scent that complements your personal style.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "67b59372-aa95-4aee-9ab7-58fa2e331fb3",
        "sale": 19,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "67447359-bb55-4510-a696-06207f11625b",
        "subcategorytitle": "Men's Grooming",
        "colors": [
            "purple",
            "violet",
            "gray"
        ],
        "sizes": [
            "large",
            "large",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Makeup Brushes Set",
        "price": 24.99,
        "description": "Enhance your makeup application with this comprehensive set of high-quality makeup brushes. Includes a variety of brushes for face, eyes, and lips.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "2c0cefcf-cce9-4959-b2a3-26b267ec13e6",
        "sale": 12,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
        "subcategorytitle": "Beauty Tools & Accessories",
        "colors": [
            "red",
            "silver",
            "gray"
        ],
        "sizes": [
            "large",
            "small",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Eyelash Curler",
        "price": 9.99,
        "description": "Achieve stunning, curled lashes with this ergonomic eyelash curler. Designed to enhance the curl and lift of your lashes for a wide-eyed look.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "8c38a498-f54d-49e5-8df5-bc17f7f66d77",
        "sale": 18,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
        "subcategorytitle": "Beauty Tools & Accessories",
        "colors": [
            "maroon",
            "gray",
            "silver",
            "gold"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Makeup Sponge",
        "price": 6.99,
        "description": "Achieve a flawless makeup application with this versatile and reusable makeup sponge. Helps blend foundation, concealer, and other complexion products seamlessly.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "95e59d04-9fe7-463e-8404-8511d99538e8",
        "sale": 7,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
        "subcategorytitle": "Beauty Tools & Accessories",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Hair Styling Tools Kit",
        "price": 29.99,
        "description": "Create beautiful hairstyles with this all-in-one hair styling tools kit. Includes a hairdryer, flat iron, curling wand, and various styling accessories.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "2a0e727c-fff9-4ce1-8e2f-5ff36998c171",
        "sale": 18,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
        "subcategorytitle": "Beauty Tools & Accessories",
        "colors": [
            "gold"
        ],
        "sizes": [
            "x-small",
            "large",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Makeup Organizer",
        "price": 14.99,
        "description": "Keep your makeup collection neat and organized with this spacious makeup organizer. Features compartments, drawers, and dividers for easy storage.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "bc1fa806-4e9e-4da4-bc15-2111cf0d4f78",
        "sale": 17,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
        "subcategorytitle": "Beauty Tools & Accessories",
        "colors": [
            "teal",
            "brown",
            "orange"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Electric Toothbrush",
        "price": 39.99,
        "description": "Achieve optimal oral hygiene with this advanced electric toothbrush. Features multiple brushing modes, timer, and interchangeable brush heads.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "c648ba40-e3e8-4098-9389-acc0ee6a7dd2",
        "sale": 19,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
        "subcategorytitle": "Personal Care",
        "colors": [
            "cyan",
            "red",
            "magenta",
            "green"
        ],
        "sizes": [
            "x-small",
            "large",
            "large",
            "small"
        ]
    },
    {
        "name": "Body Lotion",
        "price": 12.99,
        "description": "Nourish and moisturize your skin with this indulgent body lotion. Enriched with hydrating ingredients, it leaves your skin smooth and supple.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "221814f7-1e75-444f-8600-e4b177e72f87",
        "sale": 13,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
        "subcategorytitle": "Personal Care",
        "colors": [
            "orange",
            "gray"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Hand Sanitizer",
        "price": 4.99,
        "description": "Keep your hands clean and germ-free with this effective hand sanitizer. Contains a high percentage of alcohol to kill bacteria and viruses.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "8102cd7c-a0b7-44e2-836f-161004f80aee",
        "sale": 7,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
        "subcategorytitle": "Personal Care",
        "colors": [
            "yellow",
            "red",
            "gray"
        ],
        "sizes": []
    },
    {
        "name": "Feminine Hygiene Products",
        "price": 8.99,
        "description": "Stay comfortable and confident with these essential feminine hygiene products. Offers reliable protection and freshness during your menstrual cycle.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "239440d7-3b0d-4aff-8207-0d57dcdc3403",
        "sale": 0,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
        "subcategorytitle": "Personal Care",
        "colors": [
            "olive",
            "olive"
        ],
        "sizes": [
            "x-small",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Deodorant",
        "price": 7.99,
        "description": "Stay fresh and odor-free throughout the day with this long-lasting deodorant. Provides effective protection against sweat and body odor.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "977b1b75-a415-4e7f-a63e-ab531e1d695b",
        "sale": 3,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
        "subcategorytitle": "Personal Care",
        "colors": [
            "gold"
        ],
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "name": "SPF 50 Sunscreen Lotion",
        "price": 12.99,
        "description": "Protect your skin from harmful UV rays with this high-SPF sunscreen lotion. Provides broad-spectrum protection and is water-resistant.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "ab570b53-2440-4fc0-8259-3ece2a426810",
        "sale": 8,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
        "subcategorytitle": "Sun Care",
        "colors": [
            "blue"
        ],
        "sizes": [
            "medium",
            "x-small"
        ]
    },
    {
        "name": "After Sun Cooling Gel",
        "price": 9.99,
        "description": "Soothe and hydrate your skin after sun exposure with this cooling gel. Helps reduce redness, dryness, and discomfort caused by sunburn.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "b2856daf-94e9-4f9a-92a8-3e600bd0a5a9",
        "sale": 2,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
        "subcategorytitle": "Sun Care",
        "colors": [
            "green",
            "orange",
            "purple",
            "blue",
            "brown"
        ],
        "sizes": [
            "x-small",
            "small",
            "small",
            "x-small",
            "small"
        ]
    },
    {
        "name": "Sun Hat",
        "price": 14.99,
        "description": "Stay protected and stylish with this wide-brimmed sun hat. Provides shade for your face and neck while adding a fashionable touch to your outfit.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "dda3ec6b-7596-4a15-8818-71f1afc85094",
        "sale": 12,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
        "subcategorytitle": "Sun Care",
        "colors": [
            "gold",
            "purple",
            "green",
            "purple",
            "teal"
        ],
        "sizes": [
            "x-small",
            "large",
            "small",
            "x-small",
            "small"
        ]
    },
    {
        "name": "Aloe Vera Sunburn Relief Spray",
        "price": 8.99,
        "description": "Relieve sunburn discomfort with this soothing aloe vera spray. Provides instant relief and helps promote healing for sun-damaged skin.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "40978a89-2adb-474d-9341-e3c2c0364301",
        "sale": 26,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
        "subcategorytitle": "Sun Care",
        "colors": [
            "lime"
        ],
        "sizes": [
            "medium",
            "medium",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Sun Protection Lip Balm",
        "price": 4.99,
        "description": "Keep your lips protected from the sun with this SPF lip balm. Nourishes and moisturizes your lips while shielding them from harmful UV rays.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "21b2a765-59d8-4715-8d45-822212115944",
        "sale": 12,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
        "subcategorytitle": "Sun Care",
        "colors": [
            "amber",
            "navy",
            "cyan",
            "gold",
            "orange"
        ],
        "sizes": [
            "large",
            "x-large",
            "small",
            "small",
            "small"
        ]
    },
    {
        "name": "Essential Oil Diffuser",
        "price": 39.99,
        "description": "Create a calming and aromatic environment with this essential oil diffuser. Releases a fine mist of essential oils to enhance relaxation and well-being.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "aa2fa2ba-bba6-4122-84fb-ad9dbae78948",
        "sale": 7,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        "subcategorytitle": "Wellness",
        "colors": [
            "cyan",
            "red",
            "purple"
        ],
        "sizes": [
            "x-large",
            "large",
            "small",
            "small",
            "small"
        ]
    },
    {
        "name": "Yoga Mat",
        "price": 29.99,
        "description": "Enhance your yoga practice with this high-quality yoga mat. Provides cushioning and a non-slip surface for optimal comfort and stability.",
        "stock": 40,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "c2bd2bfe-b65d-40cc-946b-0b2ce9bc8b70",
        "sale": 18,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        "subcategorytitle": "Wellness",
        "colors": [
            "magenta",
            "green"
        ],
        "sizes": [
            "x-small",
            "x-small",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Meditation Cushion",
        "price": 19.99,
        "description": "Support your meditation practice with this comfortable meditation cushion. Helps maintain proper posture and provides a soft and supportive seat.",
        "stock": 30,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "0325dec1-56e2-4de4-8b1f-b9e920381aed",
        "sale": 25,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        "subcategorytitle": "Wellness",
        "colors": [
            "purple"
        ],
        "sizes": [
            "medium",
            "small"
        ]
    },
    {
        "name": "Fitness Tracker",
        "price": 79.99,
        "description": "Track your daily activity and monitor your health with this advanced fitness tracker. Measures steps, heart rate, sleep quality, and more.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "b22a129a-f3ca-45ca-ace9-a582cf2638c5",
        "sale": 29,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        "subcategorytitle": "Wellness",
        "colors": [
            "brown",
            "orange"
        ],
        "sizes": [
            "x-small",
            "medium",
            "large"
        ]
    },
    {
        "name": "Herbal Tea Set",
        "price": 14.99,
        "description": "Experience the soothing benefits of herbal tea with this set of handcrafted blends. Includes a variety of flavors to support relaxation and well-being.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "e265badd-d12d-4b12-a796-e9a47c84d43f",
        "sale": 20,
        "categoryid": "beauty",
        "categorytitle": "Beauty",
        "subcategoryid": "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
        "subcategorytitle": "Wellness",
        "colors": [
            "red",
            "gold",
            "cyan",
            "maroon",
            "indigo"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Leather Moto Jacket",
        "price": 149.99,
        "description": "This edgy leather jacket features a moto-inspired design and a cropped length. Perfect for adding some edge to any outfit.",
        "stock": 14,
        "rating": {
            "rate": 4.7,
            "count": 15
        },
        "id": "450b8c8c-a1f7-4a4c-8c39-4974a0090afc",
        "sale": 30,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "gray",
            "yellow",
            "magenta",
            "blue"
        ],
        "sizes": []
    },
    {
        "name": "Faux Leather Biker Jacket",
        "price": 59.99,
        "description": "Add a touch of edge to your wardrobe with this chic faux leather biker jacket. Featuring a slim fit, zippered pockets, and an asymmetrical front zip closure, this jacket is perfect for layering over any outfit.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 28
        },
        "id": "1ad12e08-01b1-4aaa-9bdc-eecedd7b31a4",
        "sale": 20,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "green",
            "navy",
            "orange"
        ],
        "sizes": []
    },
    {
        "name": "Fleece Sherpa Jacket",
        "price": 44.99,
        "description": "Stay cozy in style with this fleece sherpa jacket. Featuring a classic collar, button front, and side pockets, this jacket is perfect for layering over your favorite outfit on colder days.",
        "stock": 80,
        "rating": {
            "rate": 4.2,
            "count": 19
        },
        "id": "6ac5ee52-c1b7-49ae-a2df-c5448b387600",
        "sale": 14,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "amber",
            "lime",
            "gold"
        ],
        "sizes": []
    },
    {
        "name": "Quilted Puffer Jacket",
        "price": 89.99,
        "description": "Stay warm and stylish in this quilted puffer jacket. Featuring a stand-up collar, zippered pockets, and a snap button front closure, this jacket is perfect for layering over any outfit during the colder months.",
        "stock": 18,
        "rating": {
            "rate": 4,
            "count": 12
        },
        "id": "aca08df3-4dab-424b-863d-4de820a2c113",
        "sale": 12,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "lime",
            "maroon",
            "pink"
        ],
        "sizes": []
    },
    {
        "name": "Denim Jacket",
        "price": 49.99,
        "description": "This classic denim jacket features a relaxed fit and a light wash. Perfect for layering over any outfit.",
        "stock": 90,
        "rating": {
            "rate": 4.3,
            "count": 25
        },
        "id": "53005018-a98e-4318-9320-20a177e96289",
        "sale": 15,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "violet"
        ],
        "sizes": []
    },
    {
        "name": "Faux Fur Coat",
        "price": 99.99,
        "description": "This glamorous faux fur coat features a cropped length and a bold leopard print. Perfect for dressing up any outfit.",
        "stock": 19,
        "rating": {
            "rate": 4.8,
            "count": 12
        },
        "id": "235c2fd7-398e-4836-b385-6e70feb7257c",
        "sale": 22,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "pink"
        ],
        "sizes": [
            "medium",
            "medium"
        ]
    },
    {
        "name": "Faux Leather Moto Jacket",
        "price": 79.99,
        "description": "This edgy moto jacket features faux leather, silver hardware, and a belted waist. Perfect for adding some edge to any outfit.",
        "stock": 14,
        "rating": {
            "rate": 4.2,
            "count": 18
        },
        "id": "0e2637d4-e9ce-465e-957a-ff0aa4b8b3f2",
        "sale": 21,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "f641cfb0-5506-46ee-bb60-0c8150df3585",
        "subcategorytitle": "Jackets",
        "colors": [
            "gold"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Floral Maxi Dress",
        "price": 59.99,
        "description": "This flowy maxi dress features a colorful floral pattern and a cinched waist for a flattering silhouette. Perfect for summer weddings or brunch dates.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "a1e6197a-d568-4bf2-90ba-36a7fca5c1b9",
        "sale": 9,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [
            "silver",
            "purple",
            "silver"
        ],
        "sizes": [
            "medium",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Maxi Dress",
        "price": 79.99,
        "description": "This flowy maxi dress features a bold floral print and a flattering V-neckline. Perfect for a summer wedding or a beach vacation.",
        "stock": 81,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "77cd1653-2bce-4782-95e5-8744bce4f127",
        "sale": 24,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [],
        "sizes": [
            "x-large",
            "x-large",
            "x-large",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Wrap Dress",
        "price": 59.99,
        "description": "This elegant wrap dress features a classic polka dot print and a tie waist for a customized fit. Perfect for a day at the office or a night out.",
        "stock": 71,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "f18ffd69-3923-4769-9b24-a624523ae515",
        "sale": 28,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [
            "teal",
            "amber",
            "teal",
            "blue"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Midi Dress",
        "price": 69.99,
        "description": "This versatile midi dress features a flattering A-line silhouette and a chic abstract print. Perfect for any occasion, from brunch to a cocktail party.",
        "stock": 67,
        "rating": {
            "rate": 4.7,
            "count": 6
        },
        "id": "462c1eba-9e88-4944-b3d7-2810162cf1a8",
        "sale": 11,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Little Black Dress",
        "price": 99.99,
        "description": "This classic little black dress features a flattering fit-and-flare silhouette and a lace bodice. Perfect for a special occasion or a night out.",
        "stock": 37,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "9afce601-6a30-4102-b90f-0c16de437ed4",
        "sale": 21,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [
            "gold",
            "purple"
        ],
        "sizes": [
            "small",
            "x-small"
        ]
    },
    {
        "name": "Off-the-Shoulder Dress",
        "price": 49.99,
        "description": "This trendy off-the-shoulder dress features a flirty ruffle neckline and a bold tropical print. Perfect for a vacation or a summer party.",
        "stock": 61,
        "rating": {
            "rate": 4.3,
            "count": 9
        },
        "id": "bcec558e-8908-42d5-95e2-ac27b3733def",
        "sale": 3,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
        "subcategorytitle": "Dresses",
        "colors": [
            "gold",
            "gray"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Wrap Top",
        "price": 29.99,
        "description": "This versatile wrap top can be dressed up or down. Featuring a flattering v-neckline and a tie closure at the waist, it pairs well with high-waisted pants or a39cf50b-b311-468e-8e43-eefb0ef53fe2.",
        "stock": 18,
        "rating": {
            "rate": 4.2,
            "count": 35
        },
        "id": "971211e7-b0a8-4354-8d60-b13158aa1f1b",
        "sale": 15,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "teal",
            "orange",
            "orange"
        ],
        "sizes": [
            "large",
            "x-large",
            "large",
            "small",
            "medium"
        ]
    },
    {
        "name": "Off - the - Shoulder Top",
        "price": 34.99,
        "description": "This trendy off - the - shoulder top features a smocked neckline and a flowy silhouette.Perfect for a beach vacation or a summer day.",
        "stock": 60,
        "rating": {
            "rate": 4.4,
            "count": 28
        },
        "id": "d15536c8-5085-4ca6-8cf5-2d282eb35002",
        "sale": 1,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "pink",
            "olive",
            "gray",
            "red",
            "yellow"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Tie - Front Crop Top",
        "price": 24.99,
        "description": "This cute tie - front crop top features a scoop neckline and a cropped length.Perfect for pairing with high - waisted jeans or a39cf50b-b311-468e-8e43-eefb0ef53fe2.",
        "stock": 93,
        "rating": {
            "rate": 4.6,
            "count": 32
        },
        "id": "993bc43d-2144-4f9c-b7b3-8b6d82628222",
        "sale": 25,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "violet",
            "cyan",
            "gold",
            "green"
        ],
        "sizes": [
            "large",
            "large",
            "medium",
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Off-the-Shoulder Top",
        "price": 29.99,
        "description": "This flirty off-the-shoulder top features a delicate floral print and a flowy silhouette. Perfect for a date night or a girls' night out.",
        "stock": 50,
        "rating": {
            "rate": 4.1,
            "count": 12
        },
        "id": "215ff37e-9809-46e1-82e4-c266ca0b694a",
        "sale": 4,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "purple",
            "gray"
        ],
        "sizes": []
    },
    {
        "name": "Lace Blouse",
        "price": 39.99,
        "description": "This elegant lace blouse features a scalloped hem and a flattering V-neckline. Perfect for a special occasion or a night out.",
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 9
        },
        "id": "f5202b71-94e8-4027-acf0-fc9083965ba5",
        "sale": 15,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "purple",
            "orange",
            "gold"
        ],
        "sizes": [
            "x-small",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Crop Top",
        "price": 24.99,
        "description": "This trendy crop top features a playful polka dot print and a flattering wrap design. Perfect for a summer music festival or a beach day.",
        "stock": 60,
        "rating": {
            "rate": 4.2,
            "count": 11
        },
        "id": "89c4cf40-c29a-43f5-a0c9-bc1339a4f7c2",
        "sale": 24,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [],
        "sizes": [
            "large",
            "large"
        ]
    },
    {
        "name": "Embroidered Tank Top",
        "price": 19.99,
        "description": "This cute tank top features colorful embroidery and a breezy silhouette. Perfect for a casual day out or a weekend brunch.",
        "stock": 90,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "665872ad-3d8e-494e-b579-52fe13b25a23",
        "sale": 11,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "4c9db19d-87b1-4380-846c-62547aeeb2de",
        "subcategorytitle": "Tops",
        "colors": [
            "magenta",
            "olive",
            "maroon",
            "blue",
            "maroon"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Denim Mini Skirt",
        "price": 29.99,
        "description": "A classic denim mini skirt that pairs well with any top.",
        "stock": 30,
        "rating": {
            "rate": 4,
            "count": 25
        },
        "id": "0c80f79d-3f59-4711-a8a6-549c63402ea9",
        "sale": 22,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [],
        "sizes": [
            "medium",
            "x-large",
            "medium",
            "large"
        ]
    },
    {
        "name": "Pleated Midi Skirt",
        "price": 39.99,
        "description": "A sophisticated pleated midi skirt that's perfect for the office.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 18
        },
        "id": "5ce8397b-26e5-4215-ae02-04c8001c430f",
        "sale": 27,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [
            "purple",
            "teal",
            "gray"
        ],
        "sizes": [
            "large",
            "x-large"
        ]
    },
    {
        "name": "Pleated Midi Skirt",
        "price": 44.99,
        "description": "This elegant pleated midi skirt features a high waist and a metallic finish.Perfect for a special occasion or a night out.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 18
        },
        "id": "963adbaf-388b-4eae-b981-20245bf47f05",
        "sale": 4,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [
            "gold"
        ],
        "sizes": [
            "small",
            "medium",
            "x-small",
            "large"
        ]
    },
    {
        "name": "A-Line Skirt",
        "price": 39.99,
        "description": "This classic A-line skirt features a high waist and a knee-length hem, perfect for the office or a night out. Made from a soft and stretchy fabric for comfort.",
        "stock": 50,
        "rating": {
            "rate": 4,
            "count": 25
        },
        "id": "485a2492-0977-4fec-b636-1cbfdcdd074a",
        "sale": 22,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Floral A-Line Skirt",
        "price": 24.99,
        "description": "A flowy floral A-line skirt that's perfect for spring.",
        "stock": 50,
        "rating": {
            "rate": 4.6,
            "count": 32
        },
        "id": "b5da2783-1686-4e49-a03c-a42cfae484e1",
        "sale": 7,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [
            "gold",
            "purple",
            "maroon",
            "amber"
        ],
        "sizes": [
            "x-small",
            "large",
            "small"
        ]
    },
    {
        "name": "Leather Mini Skirt",
        "price": 49.99,
        "description": "A sleek and edgy leather mini skirt that's perfect for a night out.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 9
        },
        "id": "443ec5fc-63d4-4e88-af81-48593b4505cc",
        "sale": 2,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [
            "cyan",
            "cyan",
            "maroon"
        ],
        "sizes": []
    },
    {
        "name": "Wrap Midi Skirt",
        "price": 34.99,
        "description": "A versatile wrap midi skirt that can be dressed up or down.",
        "stock": 50,
        "rating": {
            "rate": 4.1,
            "count": 22
        },
        "id": "5abce13d-9f7a-4773-b480-970a1ddca0b8",
        "sale": 16,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
        "subcategorytitle": "Skirts",
        "colors": [
            "lime"
        ],
        "sizes": [
            "x-small",
            "x-small",
            "large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "High - Waisted Jeans",
        "price": 59.99,
        "description": "These classic high - waisted jeans feature a straight - leg fit and a raw hem for a modern twist.Made from a stretchy denim for comfort.",
        "stock": 60,
        "rating": {
            "rate": 3.9,
            "count": 22
        },
        "id": "710a5b50-0ce3-45a1-aa17-53348ad59d8a",
        "sale": 11,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "subcategorytitle": "Jeans",
        "colors": [
            "blue",
            "yellow",
            "teal",
            "cyan"
        ],
        "sizes": []
    },
    {
        "name": "High-waisted skinny jeans",
        "price": 49.99,
        "description": "These high-waisted skinny jeans are made with stretchy denim for a comfortable fit. Available in a variety of colors.",
        "stock": 60,
        "rating": {
            "rate": 4.2,
            "count": 25
        },
        "id": "60ca4da0-c411-45da-83b3-f409181f1460",
        "sale": 17,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "subcategorytitle": "Jeans",
        "colors": [
            "violet",
            "magenta",
            "violet",
            "lime"
        ],
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "name": "Straight leg jeans",
        "price": 59.99,
        "description": "These straight leg jeans have a relaxed fit and come in a faded, vintage-inspired wash.",
        "stock": 60,
        "rating": {
            "rate": 4.5,
            "count": 18
        },
        "id": "5f5d01e5-89ce-490e-8efa-445f52bc7472",
        "sale": 12,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "subcategorytitle": "Jeans",
        "colors": [
            "yellow",
            "cyan",
            "maroon",
            "navy"
        ],
        "sizes": []
    },
    {
        "name": "High-waisted wide-leg jeans",
        "price": 69.99,
        "description": "These high-waisted wide-leg jeans have a retro feel and come in a medium wash denim.",
        "stock": 60,
        "rating": {
            "rate": 4.8,
            "count": 12
        },
        "id": "b10980e4-6268-4807-840c-9b1b3295c907",
        "sale": 28,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "subcategorytitle": "Jeans",
        "colors": [
            "navy",
            "gray"
        ],
        "sizes": [
            "x-small",
            "medium",
            "medium",
            "small",
            "medium"
        ]
    },
    {
        "name": "Skinny jeans with distressed details",
        "price": 54.99,
        "description": "These skinny jeans have a distressed finish and are made with stretchy denim for a comfortable fit.",
        "stock": 60,
        "rating": {
            "rate": 3.9,
            "count": 21
        },
        "id": "3031b472-b297-4ace-823a-049602168b09",
        "sale": 18,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
        "subcategorytitle": "Jeans",
        "colors": [
            "indigo"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Off-Shoulder Sweater",
        "price": 52,
        "description": "Off-shoulder sweater with a relaxed fit and ribbed cuffs and hem. Made with a blend of wool and acrylic.",
        "stock": 16,
        "rating": {
            "rate": 4.1,
            "count": 64
        },
        "id": "7d60d10f-44e0-4a73-8701-59b0888eba82",
        "sale": 15,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
        "subcategorytitle": "Sweaters",
        "colors": [
            "pink",
            "pink",
            "blue",
            "brown"
        ],
        "sizes": [
            "x-large",
            "large"
        ]
    },
    {
        "name": "Cable Knit Sweater",
        "price": 59.99,
        "description": "Stay cozy and stylish with this classic cable knit sweater, perfect for layering during the colder months.",
        "stock": 60,
        "rating": {
            "rate": 4.3,
            "count": 23
        },
        "id": "9f6040f8-0d88-4781-b128-0fbcbe0eed59",
        "sale": 14,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
        "subcategorytitle": "Sweaters",
        "colors": [
            "green",
            "brown"
        ],
        "sizes": [
            "large",
            "small",
            "large"
        ]
    },
    {
        "name": "Oversized Turtleneck Sweater",
        "price": 79.99,
        "description": "This oversized turtleneck sweater is perfect for snuggling up in on chilly days, with a soft and comfortable fabric.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 18
        },
        "id": "c3a72187-acfe-4a14-bf83-0413c74d03de",
        "sale": 24,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
        "subcategorytitle": "Sweaters",
        "colors": [
            "red",
            "indigo"
        ],
        "sizes": [
            "large",
            "x-small",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Cashmere V-Neck Sweater",
        "price": 149.99,
        "description": "Indulge in luxury with this cashmere V-neck sweater, with a classic and versatile design that will elevate any outfit.",
        "stock": 70,
        "rating": {
            "rate": 4.8,
            "count": 14
        },
        "id": "cf6e339b-62e8-4621-980e-ba32447e3171",
        "sale": 19,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
        "subcategorytitle": "Sweaters",
        "colors": [
            "olive",
            "gold",
            "orange",
            "maroon",
            "olive"
        ],
        "sizes": []
    },
    {
        "name": "Cropped Cardigan",
        "price": 39.99,
        "description": "Add a touch of elegance to any outfit with this cropped cardigan, featuring a delicate knit design and a button-up front.",
        "stock": 70,
        "rating": {
            "rate": 4.1,
            "count": 32
        },
        "id": "f5dfcc66-966a-488e-b6d7-349587a646db",
        "sale": 10,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
        "subcategorytitle": "Sweaters",
        "colors": [
            "cyan",
            "teal",
            "silver",
            "cyan"
        ],
        "sizes": [
            "x-small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Suede Ankle Boots",
        "price": 79.99,
        "description": "Step up your style with these suede ankle boots featuring a chunky heel and side zipper closure.",
        "stock": 70,
        "rating": {
            "rate": 4.5,
            "count": 22
        },
        "id": "5b724e4f-d90f-4187-8480-29f98569ddaa",
        "sale": 0,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "magenta",
            "yellow",
            "purple",
            "pink",
            "brown"
        ],
        "sizes": [
            "medium",
            "medium",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Leather Loafers",
        "price": 89.99,
        "description": "These leather loafers offer both style and comfort, with a padded insole and classic design.",
        "stock": 70,
        "rating": {
            "rate": 4.2,
            "count": 18
        },
        "id": "9a4cfc9b-ea66-48c9-88dd-67a411368d24",
        "sale": 6,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "yellow"
        ],
        "sizes": [
            "x-large",
            "large"
        ]
    },
    {
        "name": "Sneaker Wedges",
        "price": 69.99,
        "description": "Get the best of both worlds with these sneaker wedges, featuring a stylish design and comfortable fit.",
        "stock": 70,
        "rating": {
            "rate": 4.1,
            "count": 15
        },
        "id": "3c2cb010-6988-4230-b15d-15de7291d6b7",
        "sale": 7,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "purple",
            "amber",
            "gray",
            "navy",
            "red"
        ],
        "sizes": [
            "medium",
            "large",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Classic Pumps",
        "price": 99.99,
        "description": "Elevate your look with these classic pumps, featuring a pointed toe and stiletto heel.",
        "stock": 70,
        "rating": {
            "rate": 4.3,
            "count": 20
        },
        "id": "7c3bd953-20bf-40ef-bad3-d2dae30a0ecf",
        "sale": 5,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "gold"
        ],
        "sizes": [
            "small",
            "x-large",
            "medium",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Platform Sandals",
        "price": 79.99,
        "description": "Step out in style with these platform sandals, featuring a strappy design and chunky heel.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 12
        },
        "id": "f0b54c36-3851-424c-9dc2-1a4f745fb70c",
        "sale": 29,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "gray",
            "maroon",
            "amber"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "medium",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Flat Sandals",
        "price": 59.99,
        "description": "Stay comfortable and stylish with these flat sandals, featuring a strappy design and buckle closure.",
        "stock": 70,
        "rating": {
            "rate": 4.2,
            "count": 16
        },
        "id": "4e87df08-c5f7-4648-84c1-f9cd489f80e5",
        "sale": 17,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "olive"
        ],
        "sizes": [
            "small",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Classic Brown Leather Boots",
        "price": 89.99,
        "description": "These classic brown leather boots are perfect for any occasion. Made from high-quality leather, they are durable and stylish. The cushioned insole ensures all-day comfort.",
        "stock": 70,
        "rating": {
            "rate": 4.7,
            "count": 27
        },
        "id": "afc89490-3e21-4294-909e-b73d3a97a026",
        "sale": 1,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "magenta",
            "indigo",
            "indigo",
            "orange",
            "silver"
        ],
        "sizes": [
            "small",
            "large",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Suede Ankle Boots",
        "price": 59.99,
        "description": "These suede ankle boots are a stylish addition to any wardrobe. Featuring a comfortable block heel and a side zipper for easy on and off, these boots are perfect for a night out.",
        "stock": 70,
        "rating": {
            "rate": 4.3,
            "count": 12
        },
        "id": "242e67f1-d749-4374-8fc5-34dd3c0c75f7",
        "sale": 15,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "brown",
            "teal",
            "gold",
            "pink"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Slip-On Sneakers",
        "price": 39.99,
        "description": "These slip-on sneakers are perfect for a casual day out. With a breathable canvas upper and a comfortable rubber sole, these shoes will keep your feet cool and comfortable all day long.",
        "stock": 70,
        "rating": {
            "rate": 4,
            "count": 8
        },
        "id": "952f79bf-c0cc-44ce-aab2-c635a66e4764",
        "sale": 25,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [
            "gold",
            "orange",
            "yellow",
            "indigo"
        ],
        "sizes": []
    },
    {
        "name": "High-Top Sneakers",
        "price": 49.99,
        "description": "These high-top sneakers are a trendy addition to your shoe collection. Featuring a sleek black design and a comfortable padded collar, these shoes will keep you looking stylish and feeling comfortable all day long.",
        "stock": 70,
        "rating": {
            "rate": 3.8,
            "count": 17
        },
        "id": "49412e40-5d36-466c-bcea-533f4b5ef3c2",
        "sale": 24,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "2986c60e-1876-4c73-84be-95855807a23e",
        "subcategorytitle": "Foot wear",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Leather Tote Bag",
        "price": 99.99,
        "description": "This stylish leather tote bag is perfect for carrying all your daily essentials. It features a roomy interior with multiple pockets and a zippered closure to keep your belongings secure.",
        "stock": 70,
        "rating": {
            "rate": 4.8,
            "count": 63
        },
        "id": "81360461-198a-4fb0-be30-bb2efe99b07f",
        "sale": 5,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "subcategorytitle": "Carry-ons",
        "colors": [
            "violet",
            "orange",
            "purple",
            "violet"
        ],
        "sizes": [
            "medium",
            "medium",
            "medium",
            "medium",
            "small"
        ]
    },
    {
        "name": "Backpack with USB Charging Port",
        "price": 49.99,
        "description": "This backpack is designed with a USB charging port, making it easy to charge your phone on the go. It also features a spacious interior with a padded laptop compartment and multiple pockets for organization.",
        "stock": 70,
        "rating": {
            "rate": 4.5,
            "count": 42
        },
        "id": "96f80d27-ac83-42dd-9d12-ec26f962f50a",
        "sale": 4,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "subcategorytitle": "Carry-ons",
        "colors": [
            "magenta",
            "brown",
            "orange"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Canvas Travel Bag",
        "price": 29.99,
        "description": "This canvas tote bag is perfect for carrying all your essentials. It features a spacious interior with a zippered closure and multiple pockets for organization. The sturdy canvas material is durable and long-lasting.",
        "stock": 70,
        "rating": {
            "rate": 4.3,
            "count": 21
        },
        "id": "1e8ba3c8-14f3-4321-a049-0a2db5265fdb",
        "sale": 29,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "subcategorytitle": "Carry-ons",
        "colors": [
            "brown"
        ],
        "sizes": [
            "medium",
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Rolling Duffel Bag",
        "price": 89.99,
        "description": "This rolling duffel bag is perfect for travel. It features a spacious interior with multiple pockets for organization, and the durable wheels make it easy to maneuver through airports and hotels.",
        "stock": 55,
        "rating": {
            "rate": 4.7,
            "count": 32
        },
        "id": "ca99d1c8-a962-4a9c-8ba2-e0aa4a15dd7a",
        "sale": 18,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "subcategorytitle": "Carry-ons",
        "colors": [],
        "sizes": [
            "small",
            "large",
            "medium",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Leather Messenger Bag",
        "price": 129.99,
        "description": "This leather messenger bag is perfect for work or school. It features a spacious interior with a padded laptop compartment and multiple pockets for organization. The adjustable shoulder strap allows for comfortable carrying.",
        "stock": 55,
        "rating": {
            "rate": 4.9,
            "count": 45
        },
        "id": "01e09736-f39e-4274-a194-3e6083bbf303",
        "sale": 3,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
        "subcategorytitle": "Carry-ons",
        "colors": [
            "orange",
            "brown",
            "green",
            "gold"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "small",
            "medium"
        ]
    },
    {
        "name": "Women's Mesh Panel Leggings",
        "price": 45.99,
        "description": "These leggings are perfect for a yoga class or a morning jog. They have a mesh panel design that allows for ventilation and breathability.",
        "stock": 55,
        "rating": {
            "rate": 4.5,
            "count": 28
        },
        "id": "6d338cf1-cd05-4ef9-87c5-1b6b32bcdd60",
        "sale": 28,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "e666d9e6-3f05-410e-b93d-457a71cf0123",
        "subcategorytitle": "Activewear",
        "colors": [],
        "sizes": [
            "large",
            "medium",
            "large",
            "large"
        ]
    },
    {
        "name": "Women's Compression Shorts",
        "price": 29.99,
        "description": "These compression shorts provide support for your muscles during your workout, and the moisture-wicking fabric keeps you dry and comfortable.",
        "stock": 47,
        "rating": {
            "rate": 4.2,
            "count": 19
        },
        "id": "17d8a0d4-1c94-4353-9cca-5eb9c687dc05",
        "sale": 28,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "e666d9e6-3f05-410e-b93d-457a71cf0123",
        "subcategorytitle": "Activewear",
        "colors": [
            "indigo",
            "amber"
        ],
        "sizes": [
            "medium",
            "large",
            "small",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Women's Racerback Tank Top",
        "price": 24.99,
        "description": "This racerback tank top is perfect for any type of workout. The moisture-wicking fabric keeps you cool and dry, and the racerback design allows for a full range of motion.",
        "stock": 47,
        "rating": {
            "rate": 4.1,
            "count": 12
        },
        "id": "ab9060e1-454b-4e5a-881a-36d54fdb36b7",
        "sale": 0,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "e666d9e6-3f05-410e-b93d-457a71cf0123",
        "subcategorytitle": "Activewear",
        "colors": [
            "magenta",
            "olive",
            "yellow",
            "silver"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Women's Performance T-Shirt",
        "price": 34.99,
        "description": "This performance t-shirt is made with sweat-wicking fabric to keep you cool and comfortable during your workout. The seamless design reduces chafing and irritation.",
        "stock": 47,
        "rating": {
            "rate": 4.3,
            "count": 15
        },
        "id": "383e0926-8ea9-4638-8b55-fb1fd261cb2b",
        "sale": 30,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "e666d9e6-3f05-410e-b93d-457a71cf0123",
        "subcategorytitle": "Activewear",
        "colors": [
            "gray",
            "teal",
            "yellow"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Women's Yoga Pants",
        "price": 49.99,
        "description": "These yoga pants are made with a stretchy and breathable fabric that moves with you during your practice. The high waistband provides support and coverage.",
        "stock": 47,
        "rating": {
            "rate": 4.6,
            "count": 31
        },
        "id": "f187b287-dbc1-4b54-80cc-c222b8ed51a8",
        "sale": 24,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "e666d9e6-3f05-410e-b93d-457a71cf0123",
        "subcategorytitle": "Activewear",
        "colors": [
            "green"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "x-large",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Lace Bralette",
        "price": 24.99,
        "description": "This gorgeous lace bralette features a delicate scalloped edge and adjustable straps.",
        "stock": 28,
        "rating": {
            "rate": 4.2,
            "count": 65
        },
        "id": "9a565f10-2c42-4af1-80e1-79e107290805",
        "sale": 9,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        "subcategorytitle": "Lingerie",
        "colors": [
            "olive"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "medium",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Sheer Babydoll Nightie",
        "price": 39.99,
        "description": "This sheer babydoll nightie is the perfect combination of sexy and sweet. The delicate lace details and ruffled hem add a feminine touch.",
        "stock": 28,
        "rating": {
            "rate": 3.8,
            "count": 43
        },
        "id": "fdc99c20-9e88-41e4-8730-408e75590ffb",
        "sale": 8,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        "subcategorytitle": "Lingerie",
        "colors": [
            "red",
            "indigo",
            "gray",
            "olive"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "small",
            "large",
            "small"
        ]
    },
    {
        "name": "Silk Chemise",
        "price": 89.99,
        "description": "This luxurious silk chemise is perfect for a special occasion or a romantic night in. The delicate lace trim and adjustable straps add an extra touch of elegance.",
        "stock": 28,
        "rating": {
            "rate": 4.5,
            "count": 27
        },
        "id": "b846ea51-a861-4e1d-80cf-be141adfab06",
        "sale": 19,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        "subcategorytitle": "Lingerie",
        "colors": [
            "maroon",
            "gold",
            "yellow",
            "orange",
            "lime"
        ],
        "sizes": [
            "large",
            "x-large"
        ]
    },
    {
        "name": "Lace Thong",
        "price": 12.99,
        "description": "This sexy lace thong is perfect for everyday wear or a special occasion. The comfortable stretch lace and low-rise waist make it a must-have in your 8f1d8954-e266-49a4-a7a5-2ac1f8620aeb drawer.",
        "stock": 28,
        "rating": {
            "rate": 4,
            "count": 58
        },
        "id": "5004a9ea-b6d5-4259-84c4-d3448a371e34",
        "sale": 29,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        "subcategorytitle": "Lingerie",
        "colors": [
            "gold",
            "blue",
            "olive",
            "teal",
            "silver"
        ],
        "sizes": [
            "medium",
            "x-large",
            "medium",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Cotton Briefs",
        "price": 9.99,
        "description": "These classic cotton briefs are a comfortable and practical addition to your lingerie collection. The full coverage and breathable fabric make them perfect for everyday wear.",
        "stock": 28,
        "rating": {
            "rate": 4.3,
            "count": 35
        },
        "id": "845fdd82-f5a5-49fc-bc4a-1582e2231f14",
        "sale": 29,
        "categoryid": "womenswear",
        "categorytitle": "Women's Clothing",
        "subcategoryid": "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
        "subcategorytitle": "Lingerie",
        "colors": [
            "red",
            "orange",
            "brown",
            "magenta"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Modern Sofa",
        "price": 799.99,
        "description": "A stylish and comfortable sofa for your living room.",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 20
        },
        "id": "8f97cd63-12e9-4c43-9dd2-34cc89a0391f",
        "sale": 12,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
        "subcategorytitle": "Furniture",
        "colors": [
            "purple"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Wooden Dining Table",
        "price": 499.99,
        "description": "A sturdy dining table made from high-quality wood.",
        "stock": 5,
        "rating": {
            "rate": 4.2,
            "count": 15
        },
        "id": "09468aa6-7cec-462c-a33f-396c48a38c24",
        "sale": 6,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
        "subcategorytitle": "Furniture",
        "colors": [
            "magenta"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Leather Recliner Chair",
        "price": 699.99,
        "description": "An elegant and comfortable recliner chair made from genuine leather.",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 12
        },
        "id": "0b3f984d-9729-40d6-a989-fe394b81dbb9",
        "sale": 12,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
        "subcategorytitle": "Furniture",
        "colors": [
            "lime",
            "blue",
            "green",
            "olive"
        ],
        "sizes": [
            "x-small",
            "small",
            "x-large"
        ]
    },
    {
        "name": "Queen Size Bed",
        "price": 899.99,
        "description": "A luxurious queen size bed with a beautiful headboard.",
        "stock": 3,
        "rating": {
            "rate": 4.7,
            "count": 18
        },
        "id": "292de661-c7b9-4d9c-8448-18cb97bc7a5e",
        "sale": 28,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
        "subcategorytitle": "Furniture",
        "colors": [],
        "sizes": [
            "large",
            "medium",
            "large"
        ]
    },
    {
        "name": "Modern Bookshelf",
        "price": 349.99,
        "description": "A sleek and contemporary bookshelf to display your favorite books and decor.",
        "stock": 6,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "a51fdb74-e9f0-49fe-ad3a-c122f17b2359",
        "sale": 28,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
        "subcategorytitle": "Furniture",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Stainless Steel Cookware Set",
        "price": 249.99,
        "description": "A high-quality set of stainless steel pots and pans for all your cooking needs.",
        "stock": 3,
        "rating": {
            "rate": 4.8,
            "count": 12
        },
        "id": "65574c59-e13d-42a9-b8d4-28d63c0bc6cf",
        "sale": 9,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "21010f6a-2891-4fc9-969f-4886c993e95c",
        "subcategorytitle": "Kitchen & Dining",
        "colors": [
            "violet"
        ],
        "sizes": [
            "x-small",
            "large",
            "large",
            "x-small",
            "large"
        ]
    },
    {
        "name": "6-Piece Glass Bowl Set",
        "price": 29.99,
        "description": "A set of six durable glass bowls in different sizes, perfect for mixing and serving.",
        "stock": 8,
        "rating": {
            "rate": 4.2,
            "count": 6
        },
        "id": "97a59fe0-53d0-4b35-a4c0-bf01a084fa38",
        "sale": 8,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "21010f6a-2891-4fc9-969f-4886c993e95c",
        "subcategorytitle": "Kitchen & Dining",
        "colors": [
            "navy",
            "blue",
            "gray",
            "violet"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "small",
            "medium",
            "medium"
        ]
    },
    {
        "name": "Non-Stick Frying Pan",
        "price": 49.99,
        "description": "A high-quality non-stick frying pan that makes cooking and cleaning a breeze.",
        "stock": 5,
        "rating": {
            "rate": 4.5,
            "count": 9
        },
        "id": "16ae716d-0f23-46a8-ab78-95cd59a0f48e",
        "sale": 30,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "21010f6a-2891-4fc9-969f-4886c993e95c",
        "subcategorytitle": "Kitchen & Dining",
        "colors": [
            "navy",
            "olive"
        ],
        "sizes": [
            "x-small",
            "small",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Wooden Cutting Board",
        "price": 39.99,
        "description": "A sturdy and durable wooden cutting board with a beautiful design.",
        "stock": 10,
        "rating": {
            "rate": 4.1,
            "count": 7
        },
        "id": "7d87caab-5751-44df-b78d-b75e23f4b460",
        "sale": 3,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "21010f6a-2891-4fc9-969f-4886c993e95c",
        "subcategorytitle": "Kitchen & Dining",
        "colors": [
            "indigo",
            "navy",
            "blue"
        ],
        "sizes": [
            "small",
            "x-large",
            "small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Electric Wine Opener",
        "price": 69.99,
        "description": "A sleek and easy-to-use electric wine opener that makes opening bottles a breeze.",
        "stock": 2,
        "rating": {
            "rate": 4.7,
            "count": 4
        },
        "id": "1b2408a1-ca43-42d3-8da8-51cdb1dded36",
        "sale": 23,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "21010f6a-2891-4fc9-969f-4886c993e95c",
        "subcategorytitle": "Kitchen & Dining",
        "colors": [
            "amber",
            "green",
            "lime",
            "purple"
        ],
        "sizes": [
            "x-large",
            "large",
            "small",
            "small",
            "x-large"
        ]
    },
    {
        "name": "Modern Geometric Wall Art",
        "price": 29.99,
        "description": "Add a touch of elegance to your home with this modern geometric wall art.",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "d571b609-4e4b-41af-b805-36f05c053e42",
        "sale": 8,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "86f9eabb-c453-4c95-bef2-e7538df76294",
        "subcategorytitle": "Home Decor",
        "colors": [
            "indigo",
            "lime",
            "magenta"
        ],
        "sizes": [
            "small",
            "small",
            "x-large",
            "large",
            "large"
        ]
    },
    {
        "name": "Rustic Wooden Wall Shelf",
        "price": 49.99,
        "description": "Bring a bit of the outdoors into your home with this rustic wooden wall shelf.",
        "stock": 5,
        "rating": {
            "rate": 4,
            "count": 10
        },
        "id": "dc534408-3a7c-4b17-abe7-38b9a32f92a1",
        "sale": 14,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "86f9eabb-c453-4c95-bef2-e7538df76294",
        "subcategorytitle": "Home Decor",
        "colors": [
            "navy",
            "teal",
            "orange",
            "silver"
        ],
        "sizes": []
    },
    {
        "name": "Decorative Glass Vase Set",
        "price": 39.99,
        "description": "This set of three decorative glass vases is perfect for adding a pop of color to any room.",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 15
        },
        "id": "73c3099d-a145-4fcb-9323-fae62ca355b7",
        "sale": 26,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "86f9eabb-c453-4c95-bef2-e7538df76294",
        "subcategorytitle": "Home Decor",
        "colors": [
            "amber",
            "brown",
            "gold",
            "lime",
            "gray"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Luxury Throw Pillow",
        "price": 24.99,
        "description": "Snuggle up in style with this luxurious throw pillow.",
        "stock": 12,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "4766f120-76af-48ef-89bc-2dbed09a3206",
        "sale": 1,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "86f9eabb-c453-4c95-bef2-e7538df76294",
        "subcategorytitle": "Home Decor",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Artificial Succulent Plant Set",
        "price": 19.99,
        "description": "Bring the beauty of nature indoors with this set of artificial succulent plants.",
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 18
        },
        "id": "10b03ead-6632-484a-a3c3-40ab41f0f45c",
        "sale": 23,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "86f9eabb-c453-4c95-bef2-e7538df76294",
        "subcategorytitle": "Home Decor",
        "colors": [
            "yellow",
            "teal",
            "gold"
        ],
        "sizes": [
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Gardening Tool Set",
        "price": 29.99,
        "description": "Get all the essential gardening tools in this set, perfect for any green thumb.",
        "stock": 8,
        "rating": {
            "rate": 4.5,
            "count": 11
        },
        "id": "af4ac1b6-ca0e-4c18-a7f8-886147a51a9b",
        "sale": 23,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
        "subcategorytitle": "Gardening",
        "colors": [
            "olive"
        ],
        "sizes": [
            "medium",
            "x-small",
            "x-large",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Raised Garden Bed",
        "price": 99.99,
        "description": "Start your own garden with this easy-to-assemble raised garden bed.",
        "stock": 2,
        "rating": {
            "rate": 4.8,
            "count": 6
        },
        "id": "48e2b943-0421-4fdd-a8d0-3bc13bba00e7",
        "sale": 13,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
        "subcategorytitle": "Gardening",
        "colors": [
            "navy",
            "green"
        ],
        "sizes": [
            "large",
            "small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Garden Hose",
        "price": 24.99,
        "description": "This durable garden hose is perfect for watering your plants and lawn.",
        "stock": 11,
        "rating": {
            "rate": 4.2,
            "count": 19
        },
        "id": "8c90afea-2661-4271-aa50-60c030daa9c8",
        "sale": 25,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
        "subcategorytitle": "Gardening",
        "colors": [
            "gold",
            "blue",
            "gray",
            "red",
            "cyan"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Solar Garden Lights",
        "price": 19.99,
        "description": "Light up your garden with these energy-efficient solar-powered lights.",
        "stock": 6,
        "rating": {
            "rate": 4.4,
            "count": 14
        },
        "id": "e9956393-7fc1-4c86-8614-2c506f29409d",
        "sale": 11,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
        "subcategorytitle": "Gardening",
        "colors": [
            "amber",
            "cyan",
            "magenta",
            "magenta",
            "silver"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Compost Bin",
        "price": 39.99,
        "description": "Reduce waste and create nutrient-rich soil with this easy-to-use compost bin.",
        "stock": 3,
        "rating": {
            "rate": 4.6,
            "count": 9
        },
        "id": "c88a1fad-7d4a-4d5a-8b35-5bb993466834",
        "sale": 22,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
        "subcategorytitle": "Gardening",
        "colors": [
            "teal"
        ],
        "sizes": [
            "x-small",
            "large",
            "x-large",
            "small",
            "x-large"
        ]
    },
    {
        "name": "Dog Harness",
        "price": 25.99,
        "description": "A sturdy and comfortable harness for dogs of all sizes.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "7b639a81-ca6f-401a-bef1-4339abfcb59c",
        "sale": 17,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
        "subcategorytitle": "Pet Supplies",
        "colors": [
            "pink",
            "cyan",
            "brown",
            "pink",
            "yellow"
        ],
        "sizes": []
    },
    {
        "name": "Cat Scratching Post",
        "price": 39.99,
        "description": "A durable and fun scratching post for cats.",
        "stock": 75,
        "rating": {
            "rate": 4.2,
            "count": 30
        },
        "id": "bb1e1da5-4638-4c4b-ad13-b091803f9322",
        "sale": 20,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
        "subcategorytitle": "Pet Supplies",
        "colors": [
            "navy",
            "teal",
            "brown",
            "green"
        ],
        "sizes": [
            "small",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Fish Tank",
        "price": 99.99,
        "description": "A spacious and stylish fish tank for all your aquatic pets.",
        "stock": 50,
        "rating": {
            "rate": 3.8,
            "count": 20
        },
        "id": "9b1ae1f4-3bd6-4329-98e9-79149b1e87db",
        "sale": 15,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
        "subcategorytitle": "Pet Supplies",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Bird Cage",
        "price": 49.99,
        "description": "A cozy and secure bird cage for your feathered friend.",
        "stock": 60,
        "rating": {
            "rate": 4,
            "count": 25
        },
        "id": "565391f5-f503-4df9-bb46-7ace424c77d0",
        "sale": 30,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
        "subcategorytitle": "Pet Supplies",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Hamster Wheel",
        "price": 12.99,
        "description": "A fun and durable wheel for your furry little friend to run on.",
        "stock": 150,
        "rating": {
            "rate": 4.3,
            "count": 40
        },
        "id": "e15b1eb6-adb3-408c-877b-30bd5b2e760b",
        "sale": 22,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
        "subcategorytitle": "Pet Supplies",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Electric Drill",
        "price": 69.99,
        "description": "A powerful and versatile electric drill for all your DIY projects.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "f37939d9-d2e7-43ff-a538-6a49611f5fd9",
        "sale": 3,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
        "subcategorytitle": "Home Improvement",
        "colors": [
            "purple",
            "green",
            "silver",
            "lime"
        ],
        "sizes": [
            "medium",
            "large",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Paint Rollers",
        "price": 14.99,
        "description": "A set of high-quality paint rollers for a professional finish on your walls.",
        "stock": 50,
        "rating": {
            "rate": 4,
            "count": 20
        },
        "id": "c666b194-6cab-433c-b9c3-508f73087d32",
        "sale": 0,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
        "subcategorytitle": "Home Improvement",
        "colors": [],
        "sizes": [
            "x-large",
            "medium",
            "large"
        ]
    },
    {
        "name": "LED Light Bulbs",
        "price": 19.99,
        "description": "A pack of energy-efficient LED light bulbs for your home.",
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 100
        },
        "id": "222405cd-27f4-499e-8fae-14105a8208ac",
        "sale": 28,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
        "subcategorytitle": "Home Improvement",
        "colors": [
            "pink"
        ],
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "name": "Cordless Screwdriver",
        "price": 49.99,
        "description": "A compact and lightweight cordless screwdriver for quick and easy repairs.",
        "stock": 30,
        "rating": {
            "rate": 4.3,
            "count": 35
        },
        "id": "8b570965-5f40-40f9-bdff-351f1bef90fc",
        "sale": 8,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
        "subcategorytitle": "Home Improvement",
        "colors": [
            "blue",
            "silver"
        ],
        "sizes": [
            "x-large",
            "large"
        ]
    },
    {
        "name": "Digital Multimeter",
        "price": 34.99,
        "description": "A versatile and accurate digital multimeter for electrical testing.",
        "stock": 10,
        "rating": {
            "rate": 4.6,
            "count": 15
        },
        "id": "599a4027-22d4-4476-abb1-ad001133e36e",
        "sale": 22,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
        "subcategorytitle": "Home Improvement",
        "colors": [
            "yellow",
            "blue",
            "gray",
            "blue"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "x-small",
            "large",
            "small"
        ]
    },
    {
        "name": "Luxury Egyptian Cotton Bed Sheets",
        "price": 129.99,
        "description": "Experience the comfort and luxury of these premium Egyptian cotton bed sheets. Available in various colors and sizes.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "720e8f32-5c73-4357-af37-d8dfe39fe37f",
        "sale": 2,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
        "subcategorytitle": "Bedding & Bath",
        "colors": [
            "gold",
            "cyan",
            "red",
            "yellow"
        ],
        "sizes": []
    },
    {
        "name": "Fluffy White Bath Towels",
        "price": 29.99,
        "description": "Wrap yourself in the softness of these fluffy white bath towels. Made with 100% cotton for maximum absorbency.",
        "stock": 200,
        "rating": {
            "rate": 4.2,
            "count": 30
        },
        "id": "576237c9-2bea-44e0-9d35-08924a80dfa9",
        "sale": 12,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
        "subcategorytitle": "Bedding & Bath",
        "colors": [
            "amber",
            "violet",
            "maroon"
        ],
        "sizes": []
    },
    {
        "name": "Organic Bamboo Bath Mat",
        "price": 39.99,
        "description": "Step out of the shower onto this soft and absorbent organic bamboo bath mat. Non-slip backing keeps the mat in place.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 10
        },
        "id": "52c9eac2-60fc-4ca9-89d2-8c4e405b192a",
        "sale": 21,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
        "subcategorytitle": "Bedding & Bath",
        "colors": [
            "cyan",
            "yellow",
            "magenta",
            "navy"
        ],
        "sizes": []
    },
    {
        "name": "Silk Pillowcases",
        "price": 49.99,
        "description": "Sleep in ultimate luxury with these soft and smooth silk pillowcases. Hypoallergenic and gentle on skin and hair.",
        "stock": 150,
        "rating": {
            "rate": 4.6,
            "count": 20
        },
        "id": "4ccfea45-593d-45a1-9081-419f5c8a3a2a",
        "sale": 6,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
        "subcategorytitle": "Bedding & Bath",
        "colors": [
            "yellow"
        ],
        "sizes": []
    },
    {
        "name": "Extra Plush Down Alternative Comforter",
        "price": 149.99,
        "description": "Stay cozy and warm with this extra plush down alternative comforter. Hypoallergenic and easy to care for.",
        "stock": 75,
        "rating": {
            "rate": 4.4,
            "count": 15
        },
        "id": "1c298a0e-5d97-45e1-bca2-693467f5c2ba",
        "sale": 7,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
        "subcategorytitle": "Bedding & Bath",
        "colors": [
            "purple"
        ],
        "sizes": [
            "x-small",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Spacious Closet Organizer",
        "price": 59.99,
        "description": "Organize your closet with this spacious closet organizer. It has multiple shelves and compartments for storing clothes, shoes, and accessories.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "420b8f76-7c74-4016-a789-5ef5d6ab9ae1",
        "sale": 3,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
        "subcategorytitle": "Storage & Organization",
        "colors": [
            "green",
            "teal",
            "silver"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Stackable Storage Bins",
        "price": 19.99,
        "description": "Keep your items organized with these stackable storage bins. They are perfect for storing toys, books, and other items.",
        "stock": 30,
        "rating": {
            "rate": 4.2,
            "count": 35
        },
        "id": "5a8de596-cf80-4220-a2a3-c51e79dd7e75",
        "sale": 2,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
        "subcategorytitle": "Storage & Organization",
        "colors": [],
        "sizes": [
            "small",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Collapsible Fabric Storage Cubes",
        "price": 12.99,
        "description": "Maximize your storage space with these collapsible fabric storage cubes. They are great for storing clothes, toys, and other items.",
        "stock": 50,
        "rating": {
            "rate": 4,
            "count": 25
        },
        "id": "431cad86-61b8-4168-a743-dd7d6f3c74ac",
        "sale": 15,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
        "subcategorytitle": "Storage & Organization",
        "colors": [
            "teal",
            "brown",
            "navy",
            "cyan",
            "orange"
        ],
        "sizes": []
    },
    {
        "name": "Underbed Storage Bags",
        "price": 24.99,
        "description": "Store your extra bedding, clothes, and other items under your bed with these underbed storage bags. They are made of durable materials and have handles for easy carrying.",
        "stock": 10,
        "rating": {
            "rate": 3.8,
            "count": 20
        },
        "id": "ffbcd9d4-b066-48d1-bd9c-a9871b8123da",
        "sale": 25,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
        "subcategorytitle": "Storage & Organization",
        "colors": [
            "maroon",
            "purple",
            "red",
            "pink"
        ],
        "sizes": [
            "x-large",
            "large",
            "small"
        ]
    },
    {
        "name": "Hanging Closet Organizer",
        "price": 16.99,
        "description": "Maximize your closet space with this hanging closet organizer. It has multiple compartments for storing clothes, shoes, and accessories.",
        "stock": 15,
        "rating": {
            "rate": 4.1,
            "count": 30
        },
        "id": "de1f7a14-864d-45d4-af16-006a94f75c72",
        "sale": 2,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7cf5b026-3725-4149-8602-1a0f65da4bd0",
        "subcategorytitle": "Storage & Organization",
        "colors": [
            "indigo",
            "amber",
            "navy"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Modern Pendant Light",
        "price": 79.99,
        "description": "A sleek and stylish pendant light with a modern design.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "1989df20-d9ca-4909-9f47-aafa28312ffa",
        "sale": 1,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [],
        "sizes": [
            "medium",
            "small",
            "medium",
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Rustic Table Lamp",
        "price": 49.99,
        "description": "A charming and rustic table lamp perfect for a cozy atmosphere.",
        "stock": 12,
        "rating": {
            "rate": 4,
            "count": 6
        },
        "id": "b68d7f51-f023-4c2f-8e50-35eeed9226c4",
        "sale": 2,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [
            "orange",
            "violet",
            "yellow"
        ],
        "sizes": [
            "medium",
            "x-large",
            "x-small",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "LED Floor Lamp",
        "price": 119.99,
        "description": "A contemporary LED floor lamp that provides bright and energy-efficient lighting.",
        "stock": 8,
        "rating": {
            "rate": 3.5,
            "count": 3
        },
        "id": "887ce3cd-9c2e-4d3e-a3f6-a714e35b882b",
        "sale": 16,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [
            "olive",
            "lime",
            "teal"
        ],
        "sizes": []
    },
    {
        "name": "Globe Pendant Light",
        "price": 69.99,
        "description": "A stylish and versatile globe pendant light that complements any decor.",
        "stock": 18,
        "rating": {
            "rate": 4.2,
            "count": 5
        },
        "id": "3a02d8e4-6daf-447f-b2c7-d99a8cf4f7d3",
        "sale": 5,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [
            "gold"
        ],
        "sizes": []
    },
    {
        "name": "Crystal Chandelier",
        "price": 299.99,
        "description": "An elegant and glamorous crystal chandelier that adds a touch of luxury to any space.",
        "stock": 5,
        "rating": {
            "rate": 4.8,
            "count": 15
        },
        "id": "d28f3cd7-e784-40a8-bff2-5055534b57b7",
        "sale": 27,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [
            "blue"
        ],
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "name": "Industrial Wall Sconce",
        "price": 59.99,
        "description": "A rugged and industrial-style wall sconce with a vintage look.",
        "stock": 20,
        "rating": {
            "rate": 4.1,
            "count": 7
        },
        "id": "d67a96bb-6c5e-47ad-99d1-1650f5596d83",
        "sale": 21,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "7d214c1c-09ac-4645-b389-16e146c4e9d2",
        "subcategorytitle": "Lighting",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Tide Laundry Detergent",
        "price": 15.99,
        "description": "Powerful stain-fighting laundry detergent.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "5da8b7fa-6ba8-406c-b4ae-1853e26e84e2",
        "sale": 7,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [
            "lime"
        ],
        "sizes": []
    },
    {
        "name": "Swiffer WetJet Mop",
        "price": 29.99,
        "description": "Multipurpose mop for cleaning floors.",
        "stock": 50,
        "rating": {
            "rate": 4,
            "count": 200
        },
        "id": "534b1307-7df2-47e7-bcd8-772184ee5055",
        "sale": 13,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [
            "yellow",
            "navy",
            "maroon"
        ],
        "sizes": []
    },
    {
        "name": "Lysol Disinfectant Spray",
        "price": 7.99,
        "description": "Kills 99.9% of viruses and bacteria.",
        "stock": 150,
        "rating": {
            "rate": 4.8,
            "count": 300
        },
        "id": "7398f87e-9ad9-40d1-8af4-476b9b4a4585",
        "sale": 26,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [],
        "sizes": [
            "medium",
            "large",
            "small",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Clorox Bleach",
        "price": 4.99,
        "description": "Powerful bleach for cleaning and whitening clothes.",
        "stock": 200,
        "rating": {
            "rate": 4.2,
            "count": 400
        },
        "id": "062bb892-3692-4ee5-a6db-fa389131e875",
        "sale": 28,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [
            "silver",
            "navy",
            "olive"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Dawn Dish Soap",
        "price": 2.99,
        "description": "Effective dish soap for cleaning dishes and surfaces.",
        "stock": 300,
        "rating": {
            "rate": 4.5,
            "count": 600
        },
        "id": "ef55f744-1f1a-4ea8-97ec-0a734513d3ca",
        "sale": 16,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [
            "brown"
        ],
        "sizes": [
            "large",
            "large",
            "medium"
        ]
    },
    {
        "name": "Bounce Fabric Softener Sheets",
        "price": 8.99,
        "description": "Helps reduce static cling and wrinkles.",
        "stock": 100,
        "rating": {
            "rate": 4.4,
            "count": 250
        },
        "id": "62d8671b-ead0-4ca2-851c-354dac46b933",
        "sale": 19,
        "categoryid": "homeandgarden",
        "categorytitle": "Home & Garden",
        "subcategoryid": "0fc1779f-8256-402b-bfce-aa7938a7dce0",
        "subcategorytitle": "Cleaning & Laundry",
        "colors": [
            "cyan",
            "indigo",
            "blue",
            "olive",
            "indigo"
        ],
        "sizes": [
            "x-small",
            "medium",
            "large",
            "small"
        ]
    },
    {
        "name": "Striped Button-Up Shirt",
        "price": 39.99,
        "description": "Classic striped button-up shirt with collar and long sleeves.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 256
        },
        "id": "90720ef6-51a0-473a-a013-864b2c1326d5",
        "sale": 14,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "pink"
        ],
        "sizes": [
            "x-small",
            "large",
            "large"
        ]
    },
    {
        "name": "Slim Fit Oxford Shirt",
        "price": 49.99,
        "description": "Modern slim fit Oxford shirt with button-down collar and short sleeves.",
        "stock": 25,
        "rating": {
            "rate": 4.8,
            "count": 98
        },
        "id": "5879522e-cc0f-4928-b879-35730218862b",
        "sale": 17,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "teal"
        ],
        "sizes": []
    },
    {
        "name": "Classic Polo Shirt",
        "price": 29.99,
        "description": "Comfortable and timeless classic polo shirt with short sleeves and collar.",
        "stock": 75,
        "rating": {
            "rate": 3.9,
            "count": 165
        },
        "id": "221fd769-6958-4460-9eff-6fbb012ef786",
        "sale": 4,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "brown"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Checked Flannel Shirt",
        "price": 44.99,
        "description": "Warm and cozy flannel shirt with classic checked pattern and long sleeves.",
        "stock": 40,
        "rating": {
            "rate": 4.1,
            "count": 112
        },
        "id": "8bc28fcd-7893-4bc4-9ceb-40bd2c9d799b",
        "sale": 0,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "violet"
        ],
        "sizes": [
            "medium",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Denim Shirt",
        "price": 59.99,
        "description": "Stylish denim shirt with button-up front and long sleeves.",
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 78
        },
        "id": "42c3721e-0ec9-43b3-b59f-ad2332a4acab",
        "sale": 1,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Classic White Shirt",
        "price": 59.99,
        "description": "A timeless white shirt that can be worn on any occasion.",
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 200
        },
        "id": "2e7a7019-18f5-49b0-92ac-f77c504a6b68",
        "sale": 12,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Slim Fit Blue Shirt",
        "price": 49.99,
        "description": "A stylish blue shirt with a slim fit.",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 150
        },
        "id": "736b0662-e834-4c59-a24a-9a3bf10581a9",
        "sale": 6,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "gray",
            "magenta",
            "gray",
            "magenta",
            "navy"
        ],
        "sizes": []
    },
    {
        "name": "Plaid Flannel Shirt",
        "price": 69.99,
        "description": "A warm and comfortable plaid flannel shirt.",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 100
        },
        "id": "470c7820-3875-4977-ac50-56d65af3528b",
        "sale": 2,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "indigo",
            "blue",
            "pink"
        ],
        "sizes": [
            "x-small",
            "medium",
            "medium",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Button-Down Oxford Shirt",
        "price": 79.99,
        "description": "A sophisticated button-down Oxford shirt.",
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 180
        },
        "id": "91088e44-4edf-4fb0-ae16-60e3ab2da122",
        "sale": 19,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "amber",
            "violet"
        ],
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "name": "Striped Linen Shirt",
        "price": 89.99,
        "description": "A lightweight and breathable striped linen shirt.",
        "stock": 12,
        "rating": {
            "rate": 4.1,
            "count": 120
        },
        "id": "31ba1718-aadb-49d2-80c2-6d26155ac5f8",
        "sale": 24,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "95448f8a-49ea-4930-b91f-193892a687e8",
        "subcategorytitle": "T-Shirts",
        "colors": [
            "navy",
            "gold",
            "red",
            "orange",
            "teal"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Slim Fit Chinos",
        "price": 59.99,
        "description": "Cotton chinos in a slim fit design",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 98
        },
        "id": "a60ec7c4-eeb4-4e02-8dde-57ad44cd05f3",
        "sale": 28,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "subcategorytitle": "Pants",
        "colors": [
            "cyan",
            "green",
            "amber"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Denim Shorts",
        "price": 34.99,
        "description": "Classic denim shorts with a vintage look",
        "stock": 12,
        "rating": {
            "rate": 4.2,
            "count": 76
        },
        "id": "2a9c461e-4716-4b01-94e6-71b424846426",
        "sale": 0,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "subcategorytitle": "Pants",
        "colors": [
            "indigo",
            "gray",
            "lime"
        ],
        "sizes": [
            "large",
            "x-large"
        ]
    },
    {
        "name": "Sport Joggers",
        "price": 49.99,
        "description": "Comfortable sport joggers made of moisture-wicking fabric",
        "stock": 15,
        "rating": {
            "rate": 4.7,
            "count": 64
        },
        "id": "5a299b0a-45e9-4ef4-81ab-f5022d6a486f",
        "sale": 6,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "subcategorytitle": "Pants",
        "colors": [
            "green",
            "navy"
        ],
        "sizes": [
            "x-small",
            "large"
        ]
    },
    {
        "name": "Cargo Pants",
        "price": 79.99,
        "description": "Durable cargo pants with multiple pockets",
        "stock": 10,
        "rating": {
            "rate": 4,
            "count": 52
        },
        "id": "2160f50a-14e4-45ec-8b40-de083f1a2347",
        "sale": 28,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "subcategorytitle": "Pants",
        "colors": [
            "gold",
            "gold"
        ],
        "sizes": [
            "x-large",
            "medium",
            "medium",
            "x-small"
        ]
    },
    {
        "name": "Stretch Leggings",
        "price": 29.99,
        "description": "Stretchy and breathable leggings for everyday wear",
        "stock": 18,
        "rating": {
            "rate": 4.3,
            "count": 112
        },
        "id": "aa64f4ca-cd7e-4c12-92b8-8a552fc55c57",
        "sale": 27,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "fc160538-ed47-4b02-8ff9-32addec8b3a6",
        "subcategorytitle": "Pants",
        "colors": [
            "pink",
            "brown",
            "olive",
            "navy"
        ],
        "sizes": [
            "medium",
            "large",
            "large"
        ]
    },
    {
        "name": "Leather Dress Shoes",
        "price": 89.99,
        "description": "A pair of elegant leather dress shoes for men.",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 36
        },
        "id": "406e6538-9d31-46d7-a5a7-5af1305d6d22",
        "sale": 1,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "subcategorytitle": "Foot Wear",
        "colors": [
            "orange",
            "maroon",
            "olive",
            "pink",
            "lime"
        ],
        "sizes": [
            "large",
            "medium",
            "x-small",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Canvas Sneakers",
        "price": 39.99,
        "description": "Comfortable and stylish canvas sneakers for men.",
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 112
        },
        "id": "562cee5d-d1e2-4c9e-a9af-1ae092d6c32d",
        "sale": 1,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "subcategorytitle": "Foot Wear",
        "colors": [
            "teal",
            "gold",
            "navy",
            "lime",
            "teal"
        ],
        "sizes": [
            "medium",
            "small",
            "large",
            "large",
            "large"
        ]
    },
    {
        "name": "Hiking Boots",
        "price": 129.99,
        "description": "Sturdy and durable hiking boots for men.",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 17
        },
        "id": "e8ed9cc5-6ea0-4043-be87-7f4e749bf840",
        "sale": 20,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "subcategorytitle": "Foot Wear",
        "colors": [],
        "sizes": [
            "x-large",
            "small"
        ]
    },
    {
        "name": "Athletic Running Shoes",
        "price": 79.99,
        "description": "Lightweight and comfortable running shoes for men.",
        "stock": 15,
        "rating": {
            "rate": 4.3,
            "count": 65
        },
        "id": "0b122172-2929-4101-bb61-c8ac2b091ca8",
        "sale": 25,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "subcategorytitle": "Foot Wear",
        "colors": [
            "orange"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Leather Boots",
        "price": 149.99,
        "description": "Classy and stylish leather boots for men.",
        "stock": 6,
        "rating": {
            "rate": 4.6,
            "count": 22
        },
        "id": "23207d4e-2653-4cee-a62c-34e72111b89e",
        "sale": 29,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c05c19eb-f67b-48f3-b4ca-922326df53ff",
        "subcategorytitle": "Foot Wear",
        "colors": [
            "indigo",
            "pink",
            "amber",
            "amber",
            "orange"
        ],
        "sizes": [
            "medium",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Classic Baseball Cap",
        "price": 29.99,
        "description": "A timeless classic, this baseball cap is perfect for any casual outfit.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 27
        },
        "id": "d58379f1-b7a2-4664-879f-5a39c7c64cd6",
        "sale": 26,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "subcategorytitle": "Head wear",
        "colors": [],
        "sizes": [
            "x-large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Wool Beanie",
        "price": 19.99,
        "description": "Stay warm and stylish with this classic wool beanie.",
        "stock": 20,
        "rating": {
            "rate": 4.3,
            "count": 12
        },
        "id": "94b148f9-c7d4-4818-aedd-ccfda1754479",
        "sale": 24,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "subcategorytitle": "Head wear",
        "colors": [
            "brown",
            "navy",
            "yellow"
        ],
        "sizes": [
            "medium",
            "x-large",
            "small",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Trucker Hat",
        "price": 24.99,
        "description": "Get ready for a day out with this stylish trucker hat.",
        "stock": 30,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "d9fa956b-7dc5-4ebf-8705-b7cef6853589",
        "sale": 0,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "subcategorytitle": "Head wear",
        "colors": [
            "gold"
        ],
        "sizes": [
            "small",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Fedora Hat",
        "price": 39.99,
        "description": "Make a statement with this classic fedora hat.",
        "stock": 15,
        "rating": {
            "rate": 4.5,
            "count": 5
        },
        "id": "843f43bf-c70d-46e5-b183-38d7480b406d",
        "sale": 4,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "subcategorytitle": "Head wear",
        "colors": [
            "navy",
            "purple",
            "amber",
            "gray",
            "indigo"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Flat Cap",
        "price": 29.99,
        "description": "Add a touch of sophistication to your outfit with this stylish flat cap.",
        "stock": 25,
        "rating": {
            "rate": 4.6,
            "count": 11
        },
        "id": "b0799fd1-8774-46a7-9136-b6880e57b2e6",
        "sale": 20,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e1adeac0-4152-4a32-a789-ca9a2c99921b",
        "subcategorytitle": "Head wear",
        "colors": [
            "teal",
            "orange",
            "teal",
            "red",
            "purple"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Slim Fit Navy Blue Suit",
        "price": 299,
        "description": "This slim fit navy blue suit is perfect for any formal occasion.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 30
        },
        "id": "24e9f357-205d-4fc1-bb01-48dcbbd9c3c0",
        "sale": 27,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "subcategorytitle": "Suits",
        "colors": [
            "red",
            "maroon",
            "navy",
            "teal",
            "pink"
        ],
        "sizes": []
    },
    {
        "name": "Charcoal Gray Double-Breasted Suit",
        "price": 399,
        "description": "This charcoal gray double-breasted suit is a classic addition to any wardrobe.",
        "stock": 15,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "13592f59-3b39-4d48-bee5-b2b7cf36ce18",
        "sale": 3,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "subcategorytitle": "Suits",
        "colors": [
            "olive",
            "green",
            "cyan",
            "blue"
        ],
        "sizes": [
            "medium",
            "x-small",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Slim Fit Black Suit",
        "price": 299,
        "description": "This slim fit black suit is perfect for any formal occasion.",
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 40
        },
        "id": "b45e3b05-50e4-4c65-bc44-ff0dd4b8bbf3",
        "sale": 19,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "subcategorytitle": "Suits",
        "colors": [],
        "sizes": [
            "x-large",
            "small",
            "x-large",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Gray Pinstripe Suit",
        "price": 349,
        "description": "This gray pinstripe suit is a sophisticated choice for any occasion.",
        "stock": 10,
        "rating": {
            "rate": 4,
            "count": 15
        },
        "id": "5a358579-957d-4dae-9dfd-8f3cc9ee9be9",
        "sale": 11,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "subcategorytitle": "Suits",
        "colors": [
            "yellow",
            "gold",
            "violet"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Classic Fit Dark Blue Suit",
        "price": 399,
        "description": "This classic fit dark blue suit is perfect for any formal occasion.",
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 50
        },
        "id": "3f4db19e-9dbb-4a3e-9232-4a878318e173",
        "sale": 19,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
        "subcategorytitle": "Suits",
        "colors": [
            "yellow",
            "teal"
        ],
        "sizes": []
    },
    {
        "name": "Dark Wash Skinny Jeans",
        "price": 59.99,
        "description": "These skinny jeans are made from high-quality denim with a dark wash finish. They have a slim fit and a stylish, on-trend look.",
        "stock": 20,
        "rating": {
            "rate": 4.3,
            "count": 50
        },
        "id": "7edcd41c-1315-42d0-9d12-9d62c7029511",
        "sale": 4,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
        "subcategorytitle": "Jeans",
        "colors": [
            "purple",
            "purple",
            "red",
            "gray",
            "violet"
        ],
        "sizes": [
            "small",
            "x-large",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Distressed Straight Leg Jeans",
        "price": 49.99,
        "description": "These straight leg jeans feature distressed details for a rugged, casual look. They are made from soft, comfortable denim and have a relaxed fit.",
        "stock": 15,
        "rating": {
            "rate": 3.8,
            "count": 30
        },
        "id": "e0db5821-ef6d-4388-a5d8-76ebe2917f96",
        "sale": 2,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
        "subcategorytitle": "Jeans",
        "colors": [
            "purple"
        ],
        "sizes": [
            "x-small",
            "x-small"
        ]
    },
    {
        "name": "Light Wash Bootcut Jeans",
        "price": 69.99,
        "description": "These bootcut jeans have a light wash finish and a comfortable fit. They are perfect for casual wear and can be dressed up or down depending on the occasion.",
        "stock": 10,
        "rating": {
            "rate": 4,
            "count": 20
        },
        "id": "5a5c9b91-1858-4687-a210-5f840b11abd5",
        "sale": 18,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
        "subcategorytitle": "Jeans",
        "colors": [
            "violet",
            "amber",
            "indigo"
        ],
        "sizes": []
    },
    {
        "name": "Slim Fit Jeans",
        "price": 79.99,
        "description": "These slim fit jeans have a sleek, modern look and are made from high-quality denim. They have a comfortable fit and are perfect for both casual and dressy occasions.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 75
        },
        "id": "91ec8947-7db3-4764-9fea-c40297ed58ea",
        "sale": 22,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
        "subcategorytitle": "Jeans",
        "colors": [],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Black Skinny Jeans",
        "price": 54.99,
        "description": "These black skinny jeans have a clean, modern look and are made from stretchy, comfortable denim. They are perfect for both casual and dressy occasions.",
        "stock": 12,
        "rating": {
            "rate": 4.1,
            "count": 40
        },
        "id": "6685940a-74d8-4b37-8276-543e0151194c",
        "sale": 28,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
        "subcategorytitle": "Jeans",
        "colors": [
            "amber",
            "green",
            "pink",
            "purple"
        ],
        "sizes": []
    },
    {
        "name": "Merino Wool Turtleneck Sweater",
        "price": 99.99,
        "description": "Stay warm and stylish in this luxurious merino wool turtleneck sweater.",
        "stock": 10,
        "rating": {
            "rate": 4.2,
            "count": 65
        },
        "id": "3936c4ac-23f2-4e88-bff5-a7771a05e9f2",
        "sale": 22,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
        "subcategorytitle": "Sweaters",
        "colors": [
            "blue",
            "lime"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Cable Knit Crewneck Sweater",
        "price": 79.99,
        "description": "This classic cable knit crewneck sweater is a versatile addition to any wardrobe.",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 43
        },
        "id": "5f2ea225-0a06-45dc-8b85-9b7774329131",
        "sale": 9,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
        "subcategorytitle": "Sweaters",
        "colors": [
            "yellow",
            "maroon",
            "navy",
            "violet",
            "gray"
        ],
        "sizes": [
            "large",
            "x-small",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Cashmere V-Neck Sweater",
        "price": 199.99,
        "description": "Indulge in the luxury of cashmere with this soft and comfortable V-neck sweater.",
        "stock": 5,
        "rating": {
            "rate": 4.5,
            "count": 98
        },
        "id": "f200cbe9-7459-4170-a2af-f33f2e6de87c",
        "sale": 18,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
        "subcategorytitle": "Sweaters",
        "colors": [
            "olive"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "small",
            "large"
        ]
    },
    {
        "name": "Chunky Knit Cardigan",
        "price": 89.99,
        "description": "Wrap yourself in cozy warmth with this chunky knit cardigan.",
        "stock": 8,
        "rating": {
            "rate": 4.1,
            "count": 52
        },
        "id": "d94991a6-a3b9-4882-9e29-95d60a59a383",
        "sale": 18,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
        "subcategorytitle": "Sweaters",
        "colors": [
            "brown",
            "blue"
        ],
        "sizes": []
    },
    {
        "name": "Wool Blend Zip-Up Sweater",
        "price": 119.99,
        "description": "Stay comfortable and stylish in this wool blend zip-up sweater with a modern fit.",
        "stock": 12,
        "rating": {
            "rate": 4.3,
            "count": 75
        },
        "id": "9c444b75-90d5-4ac7-a7cf-2cc2f881ac00",
        "sale": 5,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
        "subcategorytitle": "Sweaters",
        "colors": [
            "maroon",
            "violet"
        ],
        "sizes": [
            "large",
            "large",
            "medium",
            "large"
        ]
    },
    {
        "name": "Quilted Bomber Jacket",
        "price": 89.99,
        "description": "Stay warm and stylish with our Quilted Bomber Jacket. Features a sleek, modern design with a comfortable fit.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 63
        },
        "id": "9a799c0e-ea10-4464-8174-4d5b734382c2",
        "sale": 1,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
        "subcategorytitle": "Jackets",
        "colors": [
            "pink",
            "pink",
            "silver",
            "cyan"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Leather Biker Jacket",
        "price": 179.99,
        "description": "Get that classic biker look with our Leather Biker Jacket. Made from high-quality leather for a durable, long-lasting fit.",
        "stock": 10,
        "rating": {
            "rate": 4.2,
            "count": 32
        },
        "id": "611aac4f-fb75-4af1-b9ef-6d4631401646",
        "sale": 28,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
        "subcategorytitle": "Jackets",
        "colors": [
            "brown",
            "maroon"
        ],
        "sizes": [
            "small",
            "x-large",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Hooded Parka",
        "price": 129.99,
        "description": "Stay dry in any weather with our Hooded Parka. Made from water-resistant material and featuring a cozy hood for added protection.",
        "stock": 15,
        "rating": {
            "rate": 3.8,
            "count": 41
        },
        "id": "8bc223fb-05d7-437f-88e7-de12fb02d460",
        "sale": 20,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
        "subcategorytitle": "Jackets",
        "colors": [
            "olive",
            "violet",
            "purple",
            "blue",
            "olive"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Denim Trucker Jacket",
        "price": 69.99,
        "description": "The perfect jacket for a casual day out. Made from high-quality denim and featuring a classic Trucker design.",
        "stock": 25,
        "rating": {
            "rate": 4,
            "count": 28
        },
        "id": "0bd05b9c-3dc0-47d7-bf93-6f1b4a7ece2e",
        "sale": 15,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
        "subcategorytitle": "Jackets",
        "colors": [
            "maroon",
            "pink",
            "blue"
        ],
        "sizes": [
            "large",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Puffer Jacket",
        "price": 99.99,
        "description": "Stay warm and cozy with our Puffer Jacket. Made from high-quality materials and featuring a modern design.",
        "stock": 18,
        "rating": {
            "rate": 4.1,
            "count": 52
        },
        "id": "51908488-1972-4c98-9461-cac928aae60f",
        "sale": 7,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
        "subcategorytitle": "Jackets",
        "colors": [
            "maroon",
            "pink",
            "pink",
            "maroon",
            "green"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Solid Color Oxford Dress Shirt",
        "price": 49.99,
        "description": "Classic dress shirt made from high-quality oxford fabric. Available in multiple colors.",
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 87
        },
        "id": "7c9399fb-3a2c-4fc4-b300-9097aea728c1",
        "sale": 13,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
        "subcategorytitle": "Dress Shirts",
        "colors": [
            "olive",
            "orange"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Striped Dress Shirt with Contrast Collar",
        "price": 59.99,
        "description": "Elegant striped dress shirt with a contrasting collar. Perfect for formal occasions.",
        "stock": 20,
        "rating": {
            "rate": 4.6,
            "count": 92
        },
        "id": "bb3b43ce-fa1a-4804-adfb-f5ec7e4683da",
        "sale": 26,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
        "subcategorytitle": "Dress Shirts",
        "colors": [
            "brown",
            "cyan"
        ],
        "sizes": [
            "large"
        ]
    },
    {
        "name": "Slim-Fit Wrinkle-Resistant Dress Shirt",
        "price": 39.99,
        "description": "Sophisticated dress shirt made from wrinkle-resistant fabric. Features a slim-fit design.",
        "stock": 35,
        "rating": {
            "rate": 4.1,
            "count": 63
        },
        "id": "ec026424-ba63-4420-8fc5-a380e1bffd11",
        "sale": 17,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
        "subcategorytitle": "Dress Shirts",
        "colors": [
            "silver"
        ],
        "sizes": [
            "small",
            "large",
            "small"
        ]
    },
    {
        "name": "Checkered Dress Shirt with French Cuffs",
        "price": 69.99,
        "description": "Stylish checkered dress shirt with French cuffs. Made from premium cotton.",
        "stock": 15,
        "rating": {
            "rate": 4.8,
            "count": 29
        },
        "id": "20b947d4-4410-44c8-8ae0-849e09e74844",
        "sale": 28,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
        "subcategorytitle": "Dress Shirts",
        "colors": [
            "red",
            "green",
            "brown",
            "cyan"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "x-small",
            "medium",
            "large"
        ]
    },
    {
        "name": "Classic White Dress Shirt",
        "price": 44.99,
        "description": "Timeless white dress shirt made from high-quality cotton. A must-have in any wardrobe.",
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 108
        },
        "id": "ec10d3d5-9bb9-4c00-82a1-4ff3765b00da",
        "sale": 17,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
        "subcategorytitle": "Dress Shirts",
        "colors": [
            "gray",
            "maroon",
            "lime",
            "silver",
            "yellow"
        ],
        "sizes": []
    },
    {
        "name": "Classic Men's Hoodie",
        "price": 49.99,
        "description": "Stay warm and comfortable with our classic men's hoodie.",
        "stock": 25,
        "rating": {
            "rate": 4.2,
            "count": 78
        },
        "id": "9ace88e9-fe41-4d9c-80d6-949276b5f5dc",
        "sale": 1,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        "subcategorytitle": "Hoodies",
        "colors": [
            "indigo",
            "teal",
            "red"
        ],
        "sizes": []
    },
    {
        "name": "Sports Men's Hoodie",
        "price": 59.99,
        "description": "Ideal for sports and outdoor activities, our men's sports hoodie will keep you warm and comfortable.",
        "stock": 18,
        "rating": {
            "rate": 4.8,
            "count": 23
        },
        "id": "5b73d435-41b8-48c3-80c2-5fbcd694570e",
        "sale": 21,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        "subcategorytitle": "Hoodies",
        "colors": [
            "gold",
            "gray",
            "gold",
            "pink"
        ],
        "sizes": [
            "medium",
            "x-small",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Zip-Up Men's Hoodie",
        "price": 69.99,
        "description": "Our men's zip-up hoodie is perfect for casual wear and features a sleek design.",
        "stock": 12,
        "rating": {
            "rate": 4.5,
            "count": 44
        },
        "id": "37e13f57-fd5d-4064-b147-25087d83d702",
        "sale": 27,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        "subcategorytitle": "Hoodies",
        "colors": [
            "red",
            "purple",
            "yellow",
            "orange"
        ],
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "name": "Pullover Men's Hoodie",
        "price": 79.99,
        "description": "Stay cozy and stylish with our pullover men's hoodie, made with high-quality materials.",
        "stock": 8,
        "rating": {
            "rate": 4.3,
            "count": 36
        },
        "id": "28b27f20-a20e-4fda-8ba5-6dcc6a21544c",
        "sale": 25,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        "subcategorytitle": "Hoodies",
        "colors": [
            "red",
            "teal",
            "magenta",
            "gold",
            "silver"
        ],
        "sizes": [
            "small",
            "x-small",
            "large",
            "medium"
        ]
    },
    {
        "name": "Fashionable Men's Hoodie",
        "price": 89.99,
        "description": "Make a statement with our fashionable men's hoodie, designed to keep you comfortable and stylish.",
        "stock": 4,
        "rating": {
            "rate": 4.1,
            "count": 12
        },
        "id": "4a1ba0ba-b28d-4467-bfaf-005523f85fc9",
        "sale": 23,
        "categoryid": "menswear",
        "categorytitle": "Men's Clothing",
        "subcategoryid": "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
        "subcategorytitle": "Hoodies",
        "colors": [
            "yellow",
            "violet"
        ],
        "sizes": []
    },
    {
        "name": "Men's Running Shoes",
        "price": 89.99,
        "description": "Lightweight and breathable, these running shoes are perfect for both casual jogs and intense training sessions.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "6b64614e-9057-46a1-be1b-559c3bf18653",
        "sale": 21,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
        "subcategorytitle": "Athletic Apparel",
        "colors": [
            "indigo",
            "gold",
            "orange"
        ],
        "sizes": []
    },
    {
        "name": "Women's Yoga Pants",
        "price": 59.99,
        "description": "Made from a stretchy and moisture-wicking material, these yoga pants will keep you comfortable and dry during even the most strenuous workouts.",
        "stock": 75,
        "rating": {
            "rate": 4.8,
            "count": 30
        },
        "id": "c9b19bdf-24b5-4083-b991-ad5709c756d1",
        "sale": 6,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
        "subcategorytitle": "Athletic Apparel",
        "colors": [
            "brown",
            "pink"
        ],
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "name": "Men's Compression Shorts",
        "price": 39.99,
        "description": "Designed to provide support and reduce muscle fatigue, these compression shorts are a must-have for any serious athlete.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 20
        },
        "id": "7e7c03e4-302c-4779-9529-335958cebbd2",
        "sale": 18,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
        "subcategorytitle": "Athletic Apparel",
        "colors": [
            "pink"
        ],
        "sizes": []
    },
    {
        "name": "Women's Sports Bra",
        "price": 29.99,
        "description": "This high-impact sports bra offers maximum support and comfort, making it perfect for intense workouts and sports.",
        "stock": 65,
        "rating": {
            "rate": 4.6,
            "count": 25
        },
        "id": "cad6a09f-f9f6-4961-90f3-9ff27f208c87",
        "sale": 22,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
        "subcategorytitle": "Athletic Apparel",
        "colors": [
            "green",
            "purple",
            "gray",
            "red",
            "magenta"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Men's Athletic Shorts",
        "price": 49.99,
        "description": "Whether you're hitting the gym or the basketball court, these athletic shorts will keep you cool and comfortable.",
        "stock": 80,
        "rating": {
            "rate": 4.4,
            "count": 35
        },
        "id": "a72459ce-a668-4ec5-8c7a-7ab4aba83094",
        "sale": 23,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
        "subcategorytitle": "Athletic Apparel",
        "colors": [],
        "sizes": [
            "x-large",
            "small",
            "medium",
            "x-small"
        ]
    },
    {
        "name": "Resistance Bands Set",
        "price": 29.99,
        "description": "This set of 5 resistance bands with different levels of resistance is perfect for adding variety and challenge to your home workouts.",
        "stock": 80,
        "rating": {
            "rate": 4.6,
            "count": 25
        },
        "id": "428c67a1-c1cd-4608-9755-2def2e739530",
        "sale": 21,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "orange",
            "silver",
            "yellow"
        ],
        "sizes": []
    },
    {
        "name": "Running Belt",
        "price": 19.99,
        "description": "This adjustable running belt is perfect for holding your phone, keys, and other small items while you run.",
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 35
        },
        "id": "16301449-ca10-4c3e-b40e-141f989560d7",
        "sale": 6,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "red"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Foam Roller",
        "price": 34.99,
        "description": "This high-density foam roller is perfect for massaging sore muscles and aiding in post-workout recovery.",
        "stock": 60,
        "rating": {
            "rate": 4.4,
            "count": 20
        },
        "id": "ff8b78ff-a1c3-4871-8b8a-af0297e8852f",
        "sale": 26,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "silver"
        ],
        "sizes": [
            "medium",
            "small",
            "large"
        ]
    },
    {
        "name": "Water Bottle",
        "price": 12.99,
        "description": "This durable and leak-proof water bottle is perfect for staying hydrated during your workouts.",
        "stock": 120,
        "rating": {
            "rate": 4.7,
            "count": 50
        },
        "id": "241f10e3-88b4-4a24-b43f-dcb93c979cb1",
        "sale": 27,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "orange",
            "green",
            "olive",
            "cyan"
        ],
        "sizes": [
            "medium",
            "medium"
        ]
    },
    {
        "name": "Yoga Mat",
        "price": 49.99,
        "description": "This high-quality yoga mat is made from a non-slip material that provides excellent grip and cushioning for your yoga practice.",
        "stock": 40,
        "rating": {
            "rate": 4.9,
            "count": 30
        },
        "id": "8a8704ec-ceb8-40fd-95ef-dfe861783312",
        "sale": 23,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "orange"
        ],
        "sizes": [
            "small",
            "small",
            "large",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Adjustable Dumbbell Set",
        "price": 199.99,
        "description": "This set of adjustable dumbbells is perfect for home workouts, with a weight range of 5 to 25 pounds per dumbbell.",
        "stock": 30,
        "rating": {
            "rate": 4.5,
            "count": 15
        },
        "id": "1423742b-6c72-4e75-89ed-162b7884487f",
        "sale": 17,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "purple"
        ],
        "sizes": [
            "medium",
            "x-large",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Compression Socks",
        "price": 24.99,
        "description": "These compression socks are designed to improve blood flow, reduce muscle soreness, and aid in post-workout recovery.",
        "stock": 80,
        "rating": {
            "rate": 4.7,
            "count": 20
        },
        "id": "0a3732c2-c7d3-404c-9389-71b2284051da",
        "sale": 28,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "amber",
            "green",
            "maroon",
            "brown",
            "violet"
        ],
        "sizes": [
            "small",
            "medium",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Fitness Tracker",
        "price": 79.99,
        "description": "This fitness tracker tracks your steps, heart rate, and calories burned, and comes with a companion app for tracking your progress over time.",
        "stock": 50,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "43429cc9-51d1-4171-b98c-69150b8950b3",
        "sale": 13,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "violet",
            "gray",
            "yellow",
            "orange"
        ],
        "sizes": []
    },
    {
        "name": "Jump Rope",
        "price": 14.99,
        "description": "This high-quality jump rope is perfect for adding cardio to your workouts, with adjustable length and comfortable handles.",
        "stock": 100,
        "rating": {
            "rate": 4.6,
            "count": 30
        },
        "id": "92829252-7951-4807-9f6b-b8cf4f78fb1d",
        "sale": 13,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "gold",
            "cyan",
            "amber",
            "indigo"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Resistance Band Handles",
        "price": 14.99,
        "description": "These resistance band handles are perfect for adding versatility and comfort to your resistance band workouts.",
        "stock": 70,
        "rating": {
            "rate": 4.4,
            "count": 15
        },
        "id": "dcae76f9-d7ce-4517-922f-08e28cf98f41",
        "sale": 8,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "a201ef9c-3206-4449-8eab-86ed6e2220a9",
        "subcategorytitle": "Athletic Accessories",
        "colors": [
            "silver"
        ],
        "sizes": [
            "x-large",
            "medium",
            "x-small",
            "small",
            "medium"
        ]
    },
    {
        "name": "Basketball",
        "price": 29.99,
        "description": "This official-size basketball is perfect for competitive play or casual pickup games.",
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "96235f6b-28dc-42ba-906c-5f1b74288ba5",
        "sale": 18,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
        "subcategorytitle": "Team Sports",
        "colors": [
            "pink",
            "blue"
        ],
        "sizes": [
            "small",
            "x-small"
        ]
    },
    {
        "name": "Soccer Ball",
        "price": 24.99,
        "description": "This high-quality soccer ball is great for recreational play or practice, with a durable construction and responsive feel.",
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 20
        },
        "id": "c3b56e5d-690f-4a77-969c-10b215e1225b",
        "sale": 21,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
        "subcategorytitle": "Team Sports",
        "colors": [],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Football Helmet",
        "price": 79.99,
        "description": "Stay safe on the field with this high-quality football helmet, featuring a durable construction and comfortable fit.",
        "stock": 8,
        "rating": {
            "rate": 4.3,
            "count": 6
        },
        "id": "928abb9b-4240-4010-b197-a54f4ee65429",
        "sale": 30,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
        "subcategorytitle": "Team Sports",
        "colors": [
            "red",
            "gold",
            "yellow"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Volleyball",
        "price": 19.99,
        "description": "This high-quality volleyball is perfect for beach or indoor play, with a soft-touch cover and responsive feel.",
        "stock": 25,
        "rating": {
            "rate": 4.6,
            "count": 20
        },
        "id": "ce8d3e52-3a85-4286-8a09-072022323340",
        "sale": 26,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
        "subcategorytitle": "Team Sports",
        "colors": [
            "magenta",
            "navy",
            "pink",
            "silver"
        ],
        "sizes": [
            "medium",
            "x-small",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Hiking Boots",
        "price": 89.99,
        "description": "These rugged hiking boots are perfect for any terrain, with a waterproof design and durable construction.",
        "stock": 12,
        "rating": {
            "rate": 4.7,
            "count": 9
        },
        "id": "93fe6a92-22d6-462a-9237-b40891d4474f",
        "sale": 3,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "subcategorytitle": "Outdoor Recreation",
        "colors": [
            "blue",
            "cyan",
            "silver"
        ],
        "sizes": [
            "large",
            "large"
        ]
    },
    {
        "name": "Camping Tent",
        "price": 149.99,
        "description": "Stay dry and comfortable on your next camping trip with this spacious and weather-resistant tent.",
        "stock": 5,
        "rating": {
            "rate": 4.2,
            "count": 12
        },
        "id": "e228ec77-05b6-469b-af84-18f0af368a38",
        "sale": 27,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "subcategorytitle": "Outdoor Recreation",
        "colors": [
            "red",
            "red",
            "magenta",
            "gold",
            "maroon"
        ],
        "sizes": [
            "x-large",
            "medium",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Fishing Rod",
        "price": 69.99,
        "description": "This high-quality fishing rod is perfect for any angler, with a lightweight design and responsive feel.",
        "stock": 7,
        "rating": {
            "rate": 4.8,
            "count": 6
        },
        "id": "345d35cb-d33d-445d-a64f-2ec50403727a",
        "sale": 18,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "subcategorytitle": "Outdoor Recreation",
        "colors": [
            "silver"
        ],
        "sizes": []
    },
    {
        "name": "Kayak",
        "price": 399.99,
        "description": "Explore the great outdoors on the water with this versatile and durable kayak, perfect for any skill level.",
        "stock": 3,
        "rating": {
            "rate": 4.6,
            "count": 8
        },
        "id": "abd93056-c6b9-4449-bb31-56e60d39e270",
        "sale": 14,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "subcategorytitle": "Outdoor Recreation",
        "colors": [
            "magenta",
            "red"
        ],
        "sizes": [
            "x-large",
            "large",
            "large",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Mountain Bike",
        "price": 599.99,
        "description": "Hit the trails with confidence on this high-performance mountain bike, featuring a lightweight frame and responsive suspension.",
        "stock": 4,
        "rating": {
            "rate": 4.5,
            "count": 10
        },
        "id": "c990dfb9-29d5-4189-bb6d-e9f8813837ba",
        "sale": 19,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "24ffe98a-3970-4226-9895-bc0267f73cef",
        "subcategorytitle": "Outdoor Recreation",
        "colors": [
            "purple",
            "green",
            "navy",
            "navy",
            "red"
        ],
        "sizes": [
            "small",
            "large",
            "large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Adjustable Dumbbell Set",
        "price": 149.99,
        "description": "This set includes two adjustable dumbbells that can be easily customized to your desired weight. Perfect for home workouts.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "c410c4fd-0c00-4e9b-bab7-d6f4d24ab74c",
        "sale": 14,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "cyan",
            "teal",
            "red",
            "green",
            "pink"
        ],
        "sizes": [
            "small",
            "medium",
            "small"
        ]
    },
    {
        "name": "Ab Roller Wheel",
        "price": 19.99,
        "description": "This ab roller wheel helps you strengthen your core and improve your balance. Compact and easy to store.",
        "stock": 100,
        "rating": {
            "rate": 4.2,
            "count": 10
        },
        "id": "2c54d011-3bfc-4b96-8967-7c372d08ea5b",
        "sale": 7,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "green",
            "blue"
        ],
        "sizes": [
            "small",
            "x-small",
            "large"
        ]
    },
    {
        "name": "Resistance Band Set",
        "price": 29.99,
        "description": "This set includes five different resistance bands with varying levels of resistance. Perfect for toning and strengthening.",
        "stock": 75,
        "rating": {
            "rate": 4.7,
            "count": 30
        },
        "id": "e3e11080-7f98-4f97-81ba-7668feecab3d",
        "sale": 5,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "green",
            "purple",
            "purple",
            "pink"
        ],
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "name": "Adjustable Weight Bench",
        "price": 199.99,
        "description": "This weight bench can be adjusted to different angles for a variety of workouts. Sturdy and comfortable.",
        "stock": 25,
        "rating": {
            "rate": 4.8,
            "count": 15
        },
        "id": "33a146d8-ae36-4a0e-b93c-5398d0820362",
        "sale": 1,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "orange",
            "amber",
            "amber",
            "cyan"
        ],
        "sizes": [
            "medium",
            "x-large",
            "small",
            "large",
            "x-large"
        ]
    },
    {
        "name": "Foam Roller",
        "price": 24.99,
        "description": "This foam roller can help relieve muscle tension and improve flexibility. Perfect for post-workout recovery.",
        "stock": 60,
        "rating": {
            "rate": 4.4,
            "count": 20
        },
        "id": "da7572d3-e492-48af-8ce8-4937aa3f38c6",
        "sale": 21,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "silver",
            "green",
            "amber"
        ],
        "sizes": []
    },
    {
        "name": "Indoor Bike Trainer",
        "price": 299.99,
        "description": "Bike trainer that allows you to turn your regular bike into an indoor exercise bike, with adjustable resistance levels.",
        "stock": 20,
        "rating": {
            "rate": 4.7,
            "count": 15
        },
        "id": "00eb7ac5-e8cc-4bf8-b4dc-10863f174eee",
        "sale": 18,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "8cec5cb9-b7ac-480d-9c60-899307478643",
        "subcategorytitle": "Fitness Equipment",
        "colors": [
            "amber",
            "blue",
            "red",
            "pink",
            "blue"
        ],
        "sizes": [
            "small",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Carbon Fiber Road Bike",
        "price": 1899.99,
        "description": "Experience the speed and comfort of our top-of-the-line road bike, designed with a carbon fiber frame and Shimano Ultegra components.",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 25
        },
        "id": "4417cab0-a13b-4b9e-b692-510cbe902a0d",
        "sale": 28,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "subcategorytitle": "Bikes",
        "colors": [
            "magenta",
            "orange"
        ],
        "sizes": [
            "large",
            "x-large",
            "medium",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Electric Mountain Bike",
        "price": 2499.99,
        "description": "Conquer any trail with ease on our electric mountain bike, featuring a powerful motor and high-performance suspension.",
        "stock": 5,
        "rating": {
            "rate": 4.7,
            "count": 12
        },
        "id": "d039466b-4d11-486d-94ba-ed9a45b36bbe",
        "sale": 27,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "subcategorytitle": "Bikes",
        "colors": [
            "gray"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "small"
        ]
    },
    {
        "name": "Beach Cruiser Bike",
        "price": 599.99,
        "description": "Take a leisurely ride along the beach on our classic beach cruiser bike, complete with a comfortable seat and retro styling.",
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 8
        },
        "id": "745e07dc-43ef-4572-ac34-7b0331d3fa34",
        "sale": 2,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "subcategorytitle": "Bikes",
        "colors": [],
        "sizes": []
    },
    {
        "name": "BMX Bike",
        "price": 399.99,
        "description": "Get ready to hit the skate park with our high-performance BMX bike, featuring a lightweight frame and trick-ready components.",
        "stock": 15,
        "rating": {
            "rate": 4.8,
            "count": 19
        },
        "id": "c9f40c1b-020a-4c42-9a00-57a6e43e73e8",
        "sale": 24,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "subcategorytitle": "Bikes",
        "colors": [
            "gold",
            "gray",
            "gray"
        ],
        "sizes": []
    },
    {
        "name": "Folding Bike",
        "price": 799.99,
        "description": "Easily store and transport our folding bike, which collapses down to a compact size and is perfect for commuters and travelers.",
        "stock": 7,
        "rating": {
            "rate": 4.1,
            "count": 5
        },
        "id": "ae048bef-952c-4720-908f-b483bf571364",
        "sale": 22,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
        "subcategorytitle": "Bikes",
        "colors": [
            "yellow",
            "yellow"
        ],
        "sizes": [
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "Electric Commuter Scooter",
        "price": 349.99,
        "description": "A lightweight and portable electric scooter perfect for daily commuting.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 10
        },
        "id": "140f7619-cb07-4325-b303-061a05eb37db",
        "sale": 29,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Foldable Kids' Scooter",
        "price": 59.99,
        "description": "A fun and colorful kids' scooter with a lightweight and foldable design.",
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 20
        },
        "id": "cd27ea96-f7ee-46eb-8570-5fd24bd54da0",
        "sale": 0,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [
            "silver"
        ],
        "sizes": [
            "small",
            "small"
        ]
    },
    {
        "name": "Off-Road Electric Scooter",
        "price": 799.99,
        "description": "A powerful and rugged electric scooter designed for off-road adventures.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 5
        },
        "id": "6f44726a-8454-4733-9527-21b5a5616133",
        "sale": 29,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [],
        "sizes": [
            "small",
            "x-small",
            "small"
        ]
    },
    {
        "name": "3-Wheel Mobility Scooter",
        "price": 1599.99,
        "description": "A stable and comfortable mobility scooter with a 3-wheel design and adjustable seat.",
        "stock": 10,
        "rating": {
            "rate": 4.9,
            "count": 2
        },
        "id": "138a53aa-1faa-4bc1-89ae-5d9992fde4a6",
        "sale": 10,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [
            "pink",
            "yellow",
            "gold",
            "cyan",
            "olive"
        ],
        "sizes": [
            "medium"
        ]
    },
    {
        "name": "Stunt Scooter",
        "price": 129.99,
        "description": "A lightweight and durable stunt scooter designed for performing tricks and stunts.",
        "stock": 20,
        "rating": {
            "rate": 4.7,
            "count": 8
        },
        "id": "ea5aa888-6984-4595-bb8d-249754fcee63",
        "sale": 12,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Xiaomi Mi Electric Scooter",
        "price": 349.99,
        "description": "The Xiaomi Mi Electric Scooter is a reliable and affordable electric scooter that can reach speeds of up to 15.5mph.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 100
        },
        "id": "794549b5-2ddb-4eb3-89f3-571ca2798ec4",
        "sale": 17,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
        "subcategorytitle": "Scooters",
        "colors": [
            "magenta",
            "yellow",
            "red",
            "navy",
            "blue"
        ],
        "sizes": [
            "medium",
            "medium",
            "x-small",
            "medium",
            "small"
        ]
    },
    {
        "name": "Surfboard - Pro Level",
        "price": 850.99,
        "description": "Top-of-the-line surfboard designed for professional surfers",
        "stock": 10,
        "rating": {
            "rate": 4.5,
            "count": 12
        },
        "id": "11f6e85b-3033-48e6-9fc6-9b5a7a1c0d2c",
        "sale": 11,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d3022cd3-e081-41f5-a7a9-06375898811e",
        "subcategorytitle": "Water Sports",
        "colors": [
            "lime"
        ],
        "sizes": [
            "x-small",
            "large"
        ]
    },
    {
        "name": "Kayak - Two Person",
        "price": 550,
        "description": "Double seated kayak, perfect for two-person paddling trips",
        "stock": 15,
        "rating": {
            "rate": 4,
            "count": 8
        },
        "id": "0b4049bf-e770-49db-8001-af0169d0e877",
        "sale": 0,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d3022cd3-e081-41f5-a7a9-06375898811e",
        "subcategorytitle": "Water Sports",
        "colors": [],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Wakeboard - Intermediate Level",
        "price": 199.99,
        "description": "Ideal wakeboard for intermediate-level wakeboarders, with comfortable bindings",
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 6
        },
        "id": "1fca0f65-70d2-454f-a7b7-336bd4477e49",
        "sale": 11,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d3022cd3-e081-41f5-a7a9-06375898811e",
        "subcategorytitle": "Water Sports",
        "colors": [
            "indigo",
            "amber"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "medium"
        ]
    },
    {
        "name": "Stand-up Paddleboard",
        "price": 699.5,
        "description": "High-quality paddleboard designed for stand-up paddling",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 16
        },
        "id": "6299e380-febe-41ce-9977-dde1f5f74e4f",
        "sale": 10,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d3022cd3-e081-41f5-a7a9-06375898811e",
        "subcategorytitle": "Water Sports",
        "colors": [
            "gold",
            "lime",
            "cyan"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Snorkel Set - Adult",
        "price": 59.99,
        "description": "Complete snorkeling set with a mask, snorkel, and fins for adults",
        "stock": 25,
        "rating": {
            "rate": 4.3,
            "count": 10
        },
        "id": "91eccd60-e0db-4c12-9859-5d2ab96d3830",
        "sale": 4,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d3022cd3-e081-41f5-a7a9-06375898811e",
        "subcategorytitle": "Water Sports",
        "colors": [
            "amber",
            "lime"
        ],
        "sizes": [
            "medium",
            "medium",
            "small",
            "medium"
        ]
    },
    {
        "name": "TaylorMade SIM2 Max Driver",
        "price": 529.99,
        "description": "The TaylorMade SIM2 Max Driver features advanced materials and technologies to maximize distance and forgiveness off the tee.",
        "stock": 10,
        "rating": {
            "rate": 4.8,
            "count": 25
        },
        "id": "854e6686-8dfd-4cd4-84ec-073b80c56dad",
        "sale": 23,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "subcategorytitle": "Golf",
        "colors": [
            "pink",
            "silver",
            "violet"
        ],
        "sizes": [
            "x-large",
            "medium",
            "large"
        ]
    },
    {
        "name": "Titleist Pro V1 Golf Balls",
        "price": 47.99,
        "description": "The Titleist Pro V1 Golf Balls provide exceptional distance, consistent flight, and incredible short game control.",
        "stock": 20,
        "rating": {
            "rate": 4.9,
            "count": 50
        },
        "id": "a33482f1-fa13-4793-b43e-9ad2be68a991",
        "sale": 29,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "subcategorytitle": "Golf",
        "colors": [
            "indigo",
            "pink"
        ],
        "sizes": [
            "large",
            "small",
            "large"
        ]
    },
    {
        "name": "Callaway Apex Pro Irons",
        "price": 1299.99,
        "description": "The Callaway Apex Pro Irons offer premium craftsmanship and performance for the serious golfer.",
        "stock": 5,
        "rating": {
            "rate": 4.7,
            "count": 10
        },
        "id": "3935ba24-d7a8-447e-8c02-f15284f7972d",
        "sale": 25,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "subcategorytitle": "Golf",
        "colors": [
            "magenta"
        ],
        "sizes": []
    },
    {
        "name": "FootJoy Pro SL Golf Shoes",
        "price": 179.99,
        "description": "The FootJoy Pro SL Golf Shoes provide excellent comfort, stability, and traction on the course.",
        "stock": 15,
        "rating": {
            "rate": 4.6,
            "count": 30
        },
        "id": "254b6aa8-888c-41c0-a586-79b4a016be15",
        "sale": 16,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "subcategorytitle": "Golf",
        "colors": [
            "cyan",
            "amber",
            "teal",
            "amber"
        ],
        "sizes": [
            "x-small",
            "medium",
            "small",
            "small",
            "large"
        ]
    },
    {
        "name": "Scotty Cameron Special Select Putter",
        "price": 399.99,
        "description": "The Scotty Cameron Special Select Putter offers a classic look and modern performance for the discerning golfer.",
        "stock": 7,
        "rating": {
            "rate": 4.5,
            "count": 15
        },
        "id": "d9793d20-5e2d-46dd-903c-a064be4d7ebf",
        "sale": 16,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "413916b7-99d7-4d46-bd9b-86169ca97373",
        "subcategorytitle": "Golf",
        "colors": [
            "navy",
            "green",
            "gold",
            "olive",
            "olive"
        ],
        "sizes": [
            "large",
            "small"
        ]
    },
    {
        "name": "Salomon QST 106 Skis",
        "price": 749.99,
        "description": "The Salomon QST 106 Skis are designed for advanced skiers who demand performance and versatility on any terrain.",
        "stock": 5,
        "rating": {
            "rate": 4.9,
            "count": 15
        },
        "id": "54a4275d-0fa9-4bb7-95da-9c29be43fe85",
        "sale": 14,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        "subcategorytitle": "Winter Sports",
        "colors": [],
        "sizes": [
            "large",
            "x-large",
            "large"
        ]
    },
    {
        "name": "Burton Custom Snowboard",
        "price": 599.99,
        "description": "The Burton Custom Snowboard offers a classic all-mountain ride with updated technology and a responsive flex pattern.",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 20
        },
        "id": "a6fbf5c8-3a24-42db-8dc8-f03bccebeea3",
        "sale": 12,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        "subcategorytitle": "Winter Sports",
        "colors": [
            "gold",
            "violet",
            "magenta"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "K2 Mindbender 120 Ski Boots",
        "price": 699.99,
        "description": "The K2 Mindbender 120 Ski Boots provide unmatched performance and comfort for aggressive skiers seeking a precise, responsive fit.",
        "stock": 4,
        "rating": {
            "rate": 4.7,
            "count": 10
        },
        "id": "477f5240-0a09-4bbe-89fe-b9ac85bf6943",
        "sale": 15,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        "subcategorytitle": "Winter Sports",
        "colors": [
            "maroon",
            "amber",
            "silver"
        ],
        "sizes": [
            "x-large",
            "medium",
            "medium"
        ]
    },
    {
        "name": "Oakley Flight Deck Snow Goggles",
        "price": 199.99,
        "description": "The Oakley Flight Deck Snow Goggles offer unrivaled clarity and protection with a wide field of view and helmet-compatible design.",
        "stock": 15,
        "rating": {
            "rate": 4.6,
            "count": 30
        },
        "id": "57cc56f2-5aeb-447d-a2d8-b5382cff15d5",
        "sale": 12,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        "subcategorytitle": "Winter Sports",
        "colors": [
            "navy",
            "teal",
            "green"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Hestra Army Leather Heli Ski Gloves",
        "price": 179.99,
        "description": "The Hestra Army Leather Heli Ski Gloves offer exceptional warmth and durability with a waterproof, breathable construction and reinforced palm.",
        "stock": 12,
        "rating": {
            "rate": 4.5,
            "count": 8
        },
        "id": "5d58988c-2bec-44e4-af28-f93cfa14bc90",
        "sale": 29,
        "categoryid": "sports",
        "categorytitle": "Sports",
        "subcategoryid": "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
        "subcategorytitle": "Winter Sports",
        "colors": [
            "indigo",
            "orange",
            "cyan",
            "gray"
        ],
        "sizes": [
            "large",
            "small",
            "small",
            "medium"
        ]
    },
    {
        "name": "Dell Inspiron 15",
        "price": 999.99,
        "description": "The Dell Inspiron 15 is a powerful and reliable laptop that is perfect for both work and play.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "22a11570-fb04-4866-ab39-edf417e7b94b",
        "sale": 22,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "subcategorytitle": "Personal Computers",
        "colors": [
            "amber",
            "red",
            "yellow",
            "red",
            "indigo"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "x-large"
        ]
    },
    {
        "name": "HP Pavilion 14",
        "price": 799.99,
        "description": "The HP Pavilion 14 is a slim and stylish laptop that is great for everyday use.",
        "stock": 100,
        "rating": {
            "rate": 4,
            "count": 200
        },
        "id": "1667664e-25f6-48cd-80c8-bec8a480e70a",
        "sale": 2,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "subcategorytitle": "Personal Computers",
        "colors": [
            "violet",
            "red",
            "violet"
        ],
        "sizes": []
    },
    {
        "name": "Apple MacBook Pro",
        "price": 1499.99,
        "description": "The Apple MacBook Pro is a high-end laptop that is perfect for professionals who need a powerful and reliable computer.",
        "stock": 20,
        "rating": {
            "rate": 4.8,
            "count": 800
        },
        "id": "e8a1f39a-91cc-4a4a-8370-140f870e3cbc",
        "sale": 7,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "subcategorytitle": "Personal Computers",
        "colors": [],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Acer Aspire 5",
        "price": 699.99,
        "description": "The Acer Aspire 5 is an affordable and reliable laptop that is perfect for students and casual users.",
        "stock": 200,
        "rating": {
            "rate": 4.2,
            "count": 300
        },
        "id": "5e080519-afc4-4ad6-ad5e-822110c4a019",
        "sale": 19,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "subcategorytitle": "Personal Computers",
        "colors": [],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Lenovo IdeaPad 3",
        "price": 599.99,
        "description": "The Lenovo IdeaPad 3 is a budget-friendly laptop that is perfect for basic computing tasks.",
        "stock": 300,
        "rating": {
            "rate": 3.9,
            "count": 100
        },
        "id": "67450240-def8-486c-b5cd-87ffe7f5340a",
        "sale": 0,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
        "subcategorytitle": "Personal Computers",
        "colors": [],
        "sizes": [
            "small",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Apple iPhone 13 Pro Max",
        "price": 1299.99,
        "description": "The iPhone 13 Pro Max is the latest flagship smartphone from Apple, featuring a stunning 6.7-inch Super Retina XDR display and a powerful A15 Bionic chip.",
        "stock": 100,
        "rating": {
            "rate": 4.9,
            "count": 1000
        },
        "id": "bb555e1d-3d60-444b-9512-eff11675a02b",
        "sale": 5,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "indigo",
            "red",
            "olive",
            "blue",
            "green"
        ],
        "sizes": [
            "medium",
            "large",
            "x-large",
            "small",
            "x-large"
        ]
    },
    {
        "name": "Samsung Galaxy S21 Ultra",
        "price": 1199.99,
        "description": "The Samsung Galaxy S21 Ultra is a premium Android smartphone with a stunning 6.8-inch Dynamic AMOLED display and a powerful Exynos 2100 processor.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 900
        },
        "id": "05ff3218-30d8-4dec-ba74-9a95abac28c7",
        "sale": 30,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "blue"
        ],
        "sizes": []
    },
    {
        "name": "Google Pixel 6 Pro",
        "price": 1099.99,
        "description": "The Google Pixel 6 Pro is a high-end Android smartphone with a beautiful 6.7-inch OLED display and the latest Google Tensor processor.",
        "stock": 25,
        "rating": {
            "rate": 4.7,
            "count": 800
        },
        "id": "8bac7b4e-710d-48bd-aee5-e99044f7d941",
        "sale": 17,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "teal"
        ],
        "sizes": [
            "medium",
            "x-small",
            "medium",
            "x-small",
            "large"
        ]
    },
    {
        "name": "OnePlus 9 Pro",
        "price": 999.99,
        "description": "The OnePlus 9 Pro is a premium Android smartphone with a 6.7-inch Fluid AMOLED display and a Snapdragon 888 processor.",
        "stock": 75,
        "rating": {
            "rate": 4.6,
            "count": 700
        },
        "id": "99ea52a4-85cd-4362-96ca-1bc9402024f1",
        "sale": 30,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "red"
        ],
        "sizes": [
            "large",
            "x-large",
            "x-large",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Apple iPhone SE (2020)",
        "price": 399.99,
        "description": "The iPhone SE (2020) is a budget-friendly iPhone with a 4.7-inch Retina display and the A13 Bionic chip.",
        "stock": 200,
        "rating": {
            "rate": 4.5,
            "count": 600
        },
        "id": "660e78fc-9bfb-4f27-a9b1-13b5a0b6559d",
        "sale": 11,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "red"
        ],
        "sizes": [
            "small"
        ]
    },
    {
        "name": "Xiaomi Mi 11",
        "price": 799.99,
        "description": "The Xiaomi Mi 11 is a flagship Android smartphone with a 6.81-inch AMOLED display and a Snapdragon 888 processor.",
        "stock": 100,
        "rating": {
            "rate": 4.8,
            "count": 500
        },
        "id": "c1cad756-7fab-4a3a-bdd4-ad4b764f8b92",
        "sale": 8,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Sony Xperia 1 III",
        "price": 1299.99,
        "description": "The Sony Xperia 1 III is a high-end Android smartphone with a 6.5-inch 4K OLED display and a Snapdragon 888 processor.",
        "stock": 50,
        "rating": {
            "rate": 4.7,
            "count": 400
        },
        "id": "7ce47165-f9e2-43b6-8743-4b78b4b9607e",
        "sale": 9,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [],
        "sizes": [
            "medium",
            "medium",
            "medium",
            "medium",
            "medium"
        ]
    },
    {
        "name": "Apple iPhone 12 mini",
        "price": 699.99,
        "description": "The iPhone 12 mini is a compact iPhone with a 5.4-inch Super Retina XDR display and the A14 Bionic chip.",
        "stock": 150,
        "rating": {
            "rate": 4.6,
            "count": 300
        },
        "id": "6544897e-f518-40ba-9745-c95ea41912c7",
        "sale": 27,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "indigo",
            "brown",
            "maroon",
            "amber",
            "maroon"
        ],
        "sizes": []
    },
    {
        "name": "Samsung Galaxy Z Fold3 5G",
        "price": 1799.99,
        "description": "The Samsung Galaxy Z Fold3 5G is a foldable Android smartphone with a 7.6-inch Dynamic AMOLED display and a Snapdragon 888 processor.",
        "stock": 25,
        "rating": {
            "rate": 4.5,
            "count": 200
        },
        "id": "cfab08a1-6cde-4085-bd69-6113c928f0b0",
        "sale": 11,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "green",
            "pink",
            "indigo"
        ],
        "sizes": [
            "small",
            "large"
        ]
    },
    {
        "name": "Google Pixel 5a",
        "price": 449.99,
        "description": "The Google Pixel 5a is a mid-range Android smartphone with a 6.34-inch OLED display and a Snapdragon 765G processor.",
        "stock": 100,
        "rating": {
            "rate": 4.4,
            "count": 150
        },
        "id": "e266f2b6-b40e-4ce0-96a0-1c3bb0af485f",
        "sale": 8,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
        "subcategorytitle": "Smartphones",
        "colors": [
            "orange",
            "indigo"
        ],
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "name": "HP Color LaserJet Pro MFP M283fdw",
        "price": 499.99,
        "description": "The HP Color LaserJet Pro MFP M283fdw is a multi-function color laser printer that can print, copy, scan, and fax.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 100
        },
        "id": "20512450-3338-4601-a74f-0958aa76444e",
        "sale": 27,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "subcategorytitle": "Office Electronics",
        "colors": [
            "orange",
            "lime",
            "violet"
        ],
        "sizes": []
    },
    {
        "name": "Dell UltraSharp U2720Q",
        "price": 699.99,
        "description": "The Dell UltraSharp U2720Q is a 27-inch 4K monitor with a wide color gamut and USB-C connectivity.",
        "stock": 25,
        "rating": {
            "rate": 4.8,
            "count": 75
        },
        "id": "44427aa3-5e24-4e0b-b5ea-82c6974846b7",
        "sale": 25,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "subcategorytitle": "Office Electronics",
        "colors": [
            "green",
            "amber",
            "gold",
            "pink",
            "red"
        ],
        "sizes": [
            "large",
            "medium"
        ]
    },
    {
        "name": "Logitech MX Keys",
        "price": 99.99,
        "description": "The Logitech MX Keys is a wireless keyboard with backlit keys and a comfortable typing experience.",
        "stock": 100,
        "rating": {
            "rate": 4.6,
            "count": 200
        },
        "id": "f622519d-7bd4-4dfe-b316-b75ddf72e1f3",
        "sale": 2,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "subcategorytitle": "Office Electronics",
        "colors": [
            "magenta",
            "orange",
            "pink",
            "amber",
            "lime"
        ],
        "sizes": [
            "large",
            "x-small",
            "large",
            "large",
            "medium"
        ]
    },
    {
        "name": "Fujitsu ScanSnap iX1600",
        "price": 449.99,
        "description": "The Fujitsu ScanSnap iX1600 is a high-speed document scanner with automatic document feeder and WiFi connectivity.",
        "stock": 20,
        "rating": {
            "rate": 4.7,
            "count": 50
        },
        "id": "36391f42-375a-4299-90b1-a5fab3419832",
        "sale": 17,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "subcategorytitle": "Office Electronics",
        "colors": [
            "gray",
            "olive",
            "green",
            "purple"
        ],
        "sizes": [
            "x-small",
            "small",
            "x-small"
        ]
    },
    {
        "name": "Sony WH-1000XM4",
        "price": 349.99,
        "description": "The Sony WH-1000XM4 is a noise-cancelling Bluetooth headphone with exceptional sound quality and comfort.",
        "stock": 50,
        "rating": {
            "rate": 4.9,
            "count": 150
        },
        "id": "447469cf-817b-4ec9-98de-736447b58871",
        "sale": 3,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
        "subcategorytitle": "Office Electronics",
        "colors": [
            "gold"
        ],
        "sizes": []
    },
    {
        "name": "PlayStation 5",
        "price": 499.99,
        "description": "The PlayStation 5 is a next-generation gaming console with lightning-fast loading times and immersive 3D audio.",
        "stock": 20,
        "rating": {
            "rate": 4.9,
            "count": 500
        },
        "id": "dd307696-c13c-4a62-a640-0bde032fc1a5",
        "sale": 26,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
        "subcategorytitle": "Gaming Consoles & Accessories",
        "colors": [
            "pink",
            "lime",
            "violet",
            "orange",
            "amber"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Xbox Series X",
        "price": 499.99,
        "description": "The Xbox Series X is a powerful gaming console with support for 4K gaming and fast load times.",
        "stock": 25,
        "rating": {
            "rate": 4.8,
            "count": 400
        },
        "id": "4e841b8b-c743-448d-b5f0-e08440484bfb",
        "sale": 11,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
        "subcategorytitle": "Gaming Consoles & Accessories",
        "colors": [
            "teal",
            "teal",
            "cyan"
        ],
        "sizes": [
            "x-large",
            "x-small",
            "x-large"
        ]
    },
    {
        "name": "Nintendo Switch",
        "price": 299.99,
        "description": "The Nintendo Switch is a versatile gaming console that can be played on-the-go or on a TV.",
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 600
        },
        "id": "0388d5ab-abaf-4030-b045-1e17eea542aa",
        "sale": 0,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
        "subcategorytitle": "Gaming Consoles & Accessories",
        "colors": [
            "amber",
            "gold",
            "cyan",
            "silver"
        ],
        "sizes": [
            "small",
            "x-large",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Razer DeathAdder V2 Gaming Mouse",
        "price": 69.99,
        "description": "The Razer DeathAdder V2 Gaming Mouse is a high-precision mouse with customizable RGB lighting and programmable buttons.",
        "stock": 50,
        "rating": {
            "rate": 4.6,
            "count": 300
        },
        "id": "172fd3d9-6370-4403-bd18-f595225b05a0",
        "sale": 6,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
        "subcategorytitle": "Gaming Consoles & Accessories",
        "colors": [
            "purple",
            "indigo"
        ],
        "sizes": []
    },
    {
        "name": "HyperX Cloud II Gaming Headset",
        "price": 99.99,
        "description": "The HyperX Cloud II Gaming Headset is a comfortable and immersive headset with 7.1 surround sound and noise-cancelling microphone.",
        "stock": 35,
        "rating": {
            "rate": 4.5,
            "count": 200
        },
        "id": "904a4375-78ba-41b2-8fc2-15c290e18e22",
        "sale": 28,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
        "subcategorytitle": "Gaming Consoles & Accessories",
        "colors": [],
        "sizes": []
    },
    {
        "name": "Nintendo Switch Lite",
        "price": 199.99,
        "description": "Handheld gaming system with built-in controllers, HD rumble, and amiibo support.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "22454c0c-a011-40dd-9793-25875e893929",
        "sale": 15,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "57dcef31-e8c0-429f-8dea-0089afcbf945",
        "subcategorytitle": "HandHeld entertainment",
        "colors": [
            "maroon",
            "amber"
        ],
        "sizes": [
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Sony PSP",
        "price": 149.99,
        "description": "Portable gaming console with 4.3-inch LCD screen, Wi-Fi, and Bluetooth.",
        "stock": 50,
        "rating": {
            "rate": 3.8,
            "count": 250
        },
        "id": "10a2b4ea-8e8e-4930-a074-db3e723ea8f3",
        "sale": 18,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "57dcef31-e8c0-429f-8dea-0089afcbf945",
        "subcategorytitle": "HandHeld entertainment",
        "colors": [],
        "sizes": [
            "medium",
            "medium"
        ]
    },
    {
        "name": "Nintendo 3DS XL",
        "price": 179.99,
        "description": "Dual-screen handheld gaming system with glasses-free 3D display, StreetPass and SpotPass communication, and built-in software.",
        "stock": 75,
        "rating": {
            "rate": 4.2,
            "count": 300
        },
        "id": "a89dc721-0333-4c49-809c-2c990eab77ca",
        "sale": 6,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "57dcef31-e8c0-429f-8dea-0089afcbf945",
        "subcategorytitle": "HandHeld entertainment",
        "colors": [
            "navy",
            "amber",
            "gray",
            "silver"
        ],
        "sizes": [
            "small",
            "medium",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "PlayStation Vita",
        "price": 199.99,
        "description": "Handheld game console with front and rear cameras, Wi-Fi, and Bluetooth capabilities.",
        "stock": 60,
        "rating": {
            "rate": 3.9,
            "count": 200
        },
        "id": "efca0d94-c36d-4eec-a9b9-13d31038d67c",
        "sale": 19,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "57dcef31-e8c0-429f-8dea-0089afcbf945",
        "subcategorytitle": "HandHeld entertainment",
        "colors": [
            "orange",
            "yellow",
            "teal",
            "navy",
            "navy"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Nintendo Game & Watch: Super Mario Bros",
        "price": 49.99,
        "description": "Portable electronic game featuring Super Mario Bros, with a color LCD screen and modern features.",
        "stock": 30,
        "rating": {
            "rate": 4.7,
            "count": 100
        },
        "id": "dbb1f3dc-1a95-44ca-b59a-bb09fcab73f3",
        "sale": 28,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "57dcef31-e8c0-429f-8dea-0089afcbf945",
        "subcategorytitle": "HandHeld entertainment",
        "colors": [
            "gray",
            "pink",
            "blue"
        ],
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "name": "Wireless Noise-Cancelling Headphones",
        "price": 199.99,
        "description": "Experience immersive sound without any distractions with these wireless noise-cancelling headphones.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "d9598be3-d111-43eb-ae63-3366e748fff8",
        "sale": 0,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "subcategorytitle": "Audio & Video Equipment",
        "colors": [
            "navy",
            "violet",
            "cyan",
            "gold"
        ],
        "sizes": []
    },
    {
        "name": "4K Ultra HD Smart TV",
        "price": 899.99,
        "description": "Get the ultimate viewing experience with this 4K Ultra HD Smart TV. With built-in apps and voice control, you can easily access your favorite content.",
        "stock": 50,
        "rating": {
            "rate": 4.8,
            "count": 300
        },
        "id": "66a02cf5-8013-4e00-b274-1a31d327860d",
        "sale": 22,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "subcategorytitle": "Audio & Video Equipment",
        "colors": [
            "amber",
            "green",
            "silver"
        ],
        "sizes": [
            "medium",
            "x-small",
            "small",
            "small"
        ]
    },
    {
        "name": "Bluetooth Soundbar",
        "price": 149.99,
        "description": "Upgrade your home theater system with this Bluetooth soundbar. With high-quality sound and wireless connectivity, you can enjoy your favorite movies and shows like never before.",
        "stock": 200,
        "rating": {
            "rate": 4.3,
            "count": 700
        },
        "id": "a4c513a5-4f9f-464c-9e9c-7755d68c65e0",
        "sale": 4,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "subcategorytitle": "Audio & Video Equipment",
        "colors": [
            "violet",
            "amber",
            "violet"
        ],
        "sizes": [
            "large",
            "x-large",
            "medium",
            "x-large",
            "x-small"
        ]
    },
    {
        "name": "Portable Wireless Speaker",
        "price": 79.99,
        "description": "Take your music anywhere with this portable wireless speaker. With a compact design and long battery life, you can enjoy your tunes on the go.",
        "stock": 300,
        "rating": {
            "rate": 4.6,
            "count": 1000
        },
        "id": "e602d7df-b106-4dbc-aefc-010ba336a91c",
        "sale": 6,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "subcategorytitle": "Audio & Video Equipment",
        "colors": [
            "purple",
            "violet"
        ],
        "sizes": [
            "medium",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Wireless Video Doorbell",
        "price": 199.99,
        "description": "Keep an eye on your home with this wireless video doorbell. With motion detection and two-way audio, you can see and speak to anyone at your doorstep from your smartphone.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 400
        },
        "id": "e66ba3a8-7538-4f70-ab85-ab77eea810f1",
        "sale": 25,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
        "subcategorytitle": "Audio & Video Equipment",
        "colors": [
            "green",
            "gray"
        ],
        "sizes": [
            "x-small"
        ]
    },
    {
        "name": "Smartwatch X",
        "price": 149.99,
        "description": "The Smartwatch X is a high-tech device that combines the best features of a fitness tracker and a smartwatch.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "ad66af8f-f72c-41ea-a027-f8e6ae6b9600",
        "sale": 9,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "1ba269cb-5d2b-4975-be75-0979930cb10e",
        "subcategorytitle": "Wearable Technology",
        "colors": [
            "navy",
            "amber",
            "silver",
            "silver"
        ],
        "sizes": []
    },
    {
        "name": "Fitness Tracker Y",
        "price": 79.99,
        "description": "The Fitness Tracker Y is the ultimate workout companion, with advanced features such as heart rate monitoring and GPS tracking.",
        "stock": 200,
        "rating": {
            "rate": 4,
            "count": 250
        },
        "id": "bebb2d60-6361-4589-b95b-7f958fbc82f3",
        "sale": 0,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "1ba269cb-5d2b-4975-be75-0979930cb10e",
        "subcategorytitle": "Wearable Technology",
        "colors": [
            "gold",
            "purple"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "large",
            "small"
        ]
    },
    {
        "name": "Smart Glasses Z",
        "price": 199.99,
        "description": "The Smart Glasses Z are the perfect combination of fashion and technology, with features such as voice commands and AR capabilities.",
        "stock": 50,
        "rating": {
            "rate": 3.8,
            "count": 100
        },
        "id": "e66fe696-03bb-4f70-a876-f7996d160509",
        "sale": 12,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "1ba269cb-5d2b-4975-be75-0979930cb10e",
        "subcategorytitle": "Wearable Technology",
        "colors": [
            "lime",
            "brown",
            "blue"
        ],
        "sizes": [
            "large",
            "x-large",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Sleep Tracker W",
        "price": 59.99,
        "description": "The Sleep Tracker W helps you get a better night's sleep by tracking your sleep patterns and providing personalized recommendations.",
        "stock": 150,
        "rating": {
            "rate": 4.2,
            "count": 300
        },
        "id": "b3d04b3d-971f-41ff-8261-98f1b27c3b2c",
        "sale": 28,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "1ba269cb-5d2b-4975-be75-0979930cb10e",
        "subcategorytitle": "Wearable Technology",
        "colors": [
            "orange",
            "teal"
        ],
        "sizes": [
            "small",
            "medium"
        ]
    },
    {
        "name": "Smart Ring V",
        "price": 129.99,
        "description": "The Smart Ring V is a stylish and discreet way to stay connected, with features such as message notifications and mobile payments.",
        "stock": 75,
        "rating": {
            "rate": 3.9,
            "count": 200
        },
        "id": "eb247a70-c988-4716-8341-514eaa5b4305",
        "sale": 15,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "1ba269cb-5d2b-4975-be75-0979930cb10e",
        "subcategorytitle": "Wearable Technology",
        "colors": [
            "teal",
            "maroon",
            "olive",
            "olive",
            "gray"
        ],
        "sizes": [
            "x-large",
            "medium",
            "large"
        ]
    },
    {
        "name": "Ergonomic VR Headset",
        "price": 249.99,
        "description": "Experience virtual reality like never before with our ergonomic VR headset. Designed to fit comfortably on your head, it features high-quality lenses and an immersive audio system.",
        "stock": 50,
        "rating": {
            "rate": 4.5,
            "count": 120
        },
        "id": "c7f7662b-4abd-4ff1-be2a-5536fb04f46d",
        "sale": 2,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "58b31959-1232-453f-b631-6411be333ed3",
        "subcategorytitle": "Virtual Reality",
        "colors": [
            "gold",
            "amber",
            "blue",
            "magenta",
            "blue"
        ],
        "sizes": [
            "x-small",
            "x-large",
            "small",
            "large",
            "x-large"
        ]
    },
    {
        "name": "VR Gaming Chair",
        "price": 399.99,
        "description": "Get the ultimate gaming experience with our VR gaming chair. Equipped with built-in haptic feedback and motion tracking technology, it's the perfect addition to any VR setup.",
        "stock": 20,
        "rating": {
            "rate": 4.2,
            "count": 80
        },
        "id": "0e9cf578-7644-4708-87c5-548447d2a3b8",
        "sale": 2,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "58b31959-1232-453f-b631-6411be333ed3",
        "subcategorytitle": "Virtual Reality",
        "colors": [
            "green",
            "silver"
        ],
        "sizes": []
    },
    {
        "name": "Wireless VR Controllers",
        "price": 149.99,
        "description": "Take control of your virtual world with our wireless VR controllers. They feature precision sensors and ergonomic design for a seamless experience.",
        "stock": 100,
        "rating": {
            "rate": 4.7,
            "count": 200
        },
        "id": "675667ed-b14a-4f70-b681-5ce06039809c",
        "sale": 22,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "58b31959-1232-453f-b631-6411be333ed3",
        "subcategorytitle": "Virtual Reality",
        "colors": [
            "orange",
            "pink",
            "olive"
        ],
        "sizes": [
            "medium",
            "medium",
            "x-small",
            "small",
            "large"
        ]
    },
    {
        "name": "VR Fitness Kit",
        "price": 299.99,
        "description": "Get in shape while having fun with our VR fitness kit. It includes a VR headset, motion controllers, and a library of fitness games designed to get your heart pumping.",
        "stock": 30,
        "rating": {
            "rate": 4.4,
            "count": 60
        },
        "id": "05a4d4c0-d4c8-47d2-94d7-c9b7a69959c7",
        "sale": 20,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "58b31959-1232-453f-b631-6411be333ed3",
        "subcategorytitle": "Virtual Reality",
        "colors": [
            "orange",
            "purple",
            "pink"
        ],
        "sizes": [
            "medium",
            "large"
        ]
    },
    {
        "name": "VR Education Kit",
        "price": 199.99,
        "description": "Bring learning to life with our VR education kit. It includes a VR headset and a library of educational experiences designed to make learning fun and engaging.",
        "stock": 25,
        "rating": {
            "rate": 4.8,
            "count": 40
        },
        "id": "e4fc061a-bb0c-42f4-a2b8-d161a2797b06",
        "sale": 16,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "58b31959-1232-453f-b631-6411be333ed3",
        "subcategorytitle": "Virtual Reality",
        "colors": [
            "silver",
            "lime",
            "indigo"
        ],
        "sizes": []
    },
    {
        "name": "Nikon D850 DSLR Camera",
        "price": 2999,
        "description": "This professional-level DSLR camera offers exceptional image quality, high-speed performance, and advanced features.",
        "stock": 10,
        "rating": {
            "rate": 4.9,
            "count": 120
        },
        "id": "8771f949-32b0-4bf9-b7fa-fd1ebd2c4310",
        "sale": 28,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "subcategorytitle": "Cameras & Photography",
        "colors": [
            "gray",
            "pink",
            "brown",
            "gray"
        ],
        "sizes": [
            "x-large",
            "x-large",
            "medium"
        ]
    },
    {
        "name": "Canon EOS Rebel T8i DSLR Camera",
        "price": 799,
        "description": "With a 24.2 megapixel APS-C CMOS sensor and 45-point all cross-type AF system, this camera delivers stunning image quality and fast autofocus performance.",
        "stock": 20,
        "rating": {
            "rate": 4.5,
            "count": 50
        },
        "id": "6fddbad4-c7ad-4e2f-b1cb-3aadf68b5918",
        "sale": 20,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "subcategorytitle": "Cameras & Photography",
        "colors": [],
        "sizes": [
            "x-large",
            "x-small",
            "large",
            "small"
        ]
    },
    {
        "name": "Fujifilm X-T4 Mirrorless Camera",
        "price": 1699,
        "description": "This mirrorless camera features a 26.1MP X-Trans CMOS 4 sensor, in-body image stabilization, and advanced video recording capabilities.",
        "stock": 15,
        "rating": {
            "rate": 4.7,
            "count": 80
        },
        "id": "bcd60177-973c-4955-9032-14132c664732",
        "sale": 22,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "subcategorytitle": "Cameras & Photography",
        "colors": [
            "red",
            "orange",
            "navy"
        ],
        "sizes": [
            "large",
            "x-small",
            "medium",
            "large",
            "small"
        ]
    },
    {
        "name": "Sony Alpha a7 III Mirrorless Camera",
        "price": 1999,
        "description": "This mirrorless camera features a 24.2MP full-frame Exmor R BSI CMOS sensor and advanced autofocus system, delivering exceptional image quality and fast performance.",
        "stock": 8,
        "rating": {
            "rate": 4.8,
            "count": 100
        },
        "id": "9af0fe94-de57-46e6-acf6-3b65ed3b0bdf",
        "sale": 12,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "subcategorytitle": "Cameras & Photography",
        "colors": [
            "green",
            "indigo",
            "indigo",
            "olive"
        ],
        "sizes": []
    },
    {
        "name": "GoPro HERO9 Black Action Camera",
        "price": 449,
        "description": "This action camera features a 23.6MP sensor and HyperSmooth 3.0 video stabilization, enabling you to capture smooth and steady footage in a variety of environments.",
        "stock": 30,
        "rating": {
            "rate": 4.6,
            "count": 200
        },
        "id": "2c5b908c-e853-4d18-bd2c-79ae11019e5f",
        "sale": 22,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "50292d51-a80b-40e0-ab12-47e7557cedb8",
        "subcategorytitle": "Cameras & Photography",
        "colors": [],
        "sizes": [
            "small",
            "large",
            "medium",
            "x-large"
        ]
    },
    {
        "name": "Stainless Steel Watch Band",
        "price": 25.99,
        "description": "This stainless steel watch band is compatible with Apple Watch Series 6, 5, 4, 3, 2, 1, SE. It is easy to install and has a stylish and durable design.",
        "stock": 100,
        "rating": {
            "rate": 4.5,
            "count": 500
        },
        "id": "4a6d3028-6263-40a5-b99e-f57e7157c958",
        "sale": 21,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        "subcategorytitle": "Accessories & Parts",
        "colors": [],
        "sizes": [
            "medium",
            "large",
            "large",
            "large"
        ]
    },
    {
        "name": "Laptop Cooling Pad",
        "price": 39.99,
        "description": "This laptop cooling pad has 5 high-speed fans that keep your laptop cool and prevent overheating. It has adjustable height settings and a sleek design.",
        "stock": 50,
        "rating": {
            "rate": 4.2,
            "count": 200
        },
        "id": "5cde0716-3522-4490-95db-bc00ca571046",
        "sale": 15,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        "subcategorytitle": "Accessories & Parts",
        "colors": [
            "purple",
            "cyan",
            "navy",
            "amber"
        ],
        "sizes": [
            "x-large"
        ]
    },
    {
        "name": "Phone Case with Card Holder",
        "price": 19.99,
        "description": "This phone case is made of durable TPU and has a convenient card holder on the back. It fits iPhone X, XS, and 11 Pro.",
        "stock": 200,
        "rating": {
            "rate": 4,
            "count": 300
        },
        "id": "63171163-73e4-4287-bddc-71a48be47c3e",
        "sale": 23,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        "subcategorytitle": "Accessories & Parts",
        "colors": [],
        "sizes": [
            "large",
            "small",
            "large",
            "x-small"
        ]
    },
    {
        "name": "Mechanical Keyboard Switches",
        "price": 49.99,
        "description": "These mechanical keyboard switches have a tactile feel and a long lifespan. They are compatible with Cherry MX mechanical keyboards.",
        "stock": 75,
        "rating": {
            "rate": 4.8,
            "count": 100
        },
        "id": "55610a1a-d658-4be5-9d23-f75b2bb5f9e9",
        "sale": 4,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        "subcategorytitle": "Accessories & Parts",
        "colors": [
            "navy",
            "amber",
            "olive"
        ],
        "sizes": [
            "small",
            "x-small"
        ]
    },
    {
        "name": "Camera Tripod",
        "price": 59.99,
        "description": "This camera tripod is made of lightweight aluminum and has adjustable height settings. It is compatible with most cameras and camcorders.",
        "stock": 30,
        "rating": {
            "rate": 4.6,
            "count": 150
        },
        "id": "7323c3ab-ec3d-4701-8c72-fcbde0df44da",
        "sale": 30,
        "categoryid": "technology",
        "categorytitle": "Technology",
        "subcategoryid": "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
        "subcategorytitle": "Accessories & Parts",
        "colors": [
            "blue"
        ],
        "sizes": [
            "medium",
            "large"
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
