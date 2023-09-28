import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    firstName: "Dime",
    lastName: "Sarf",
    password: "dimeenajubav",
    email: "dimesarf@yahoo.com",
    role: "admin",
    phoneNumber: 35634593,
    address: "Skopje, drachevksa ulica",
    postalCode: "1000",
    city: "Skopje",
    orders: [
      {
        id: "1",
        address: "Kenya, Harambee Avenue",
        postalCode: "00100",
        city: "Nairobi",
        phoneNumber: 4235316234,
        note: "Fragile",
        status: "PURCHASED",
        purchasedAt: "10-06-2022 10:07 AM",
        paymentStatus: "Finalized",
        totalPrice: 500,
        orderItems: [
          {
            id: "1",
            title: "camera",
            price: 250,
            quantity: 5,
          },
        ],
      },
      {
        id: "2",
        address: "Kenya, Harambee Avenue",
        postalCode: "00100",
        city: "Nairobi",
        phoneNumber: 4235316234,
        note: "Fragile",
        status: "DRAFT",
        createdAt: "03-11-2015 06:54 PM",
        paymentStatus: "Finalized",
        totalPrice: 500,
        orderItems: [
          {
            id: "4",
            title: "camera",
            price: 250,
            quantity: 5,
          },
          {
            id: "5",
            title: "camera",
            price: 250,
            quantity: 5,
          },
        ],
      },
    ],
    ratings: [
      {
        id: "10",
        productId: "50",
        title: "A good camera",
        productTitle: "Camera",
        rate: 3,
        review: "Frosina did this",
      },
      {
        id: "11",
        productId: "51",
        title: "Newest game console",
        productTitle: "XBOX",
        rate: 5,
        review: "Frosina is a gamer",
      },
    ],
    cards: [
      {
        id: "101",
        cardNumber: "5200 8282 8282 8210",
        cardHolder: "Frosina Stamenkovska",
        expirationDate: "01/24",
        securityCode: "985",
        cardType: "VISA",
        cardStatus: "PRIMARY"
      },
      {
        id: "102",
        cardNumber: "4200 3232 3232 3280",
        cardHolder: "Ana Bogdanovska",
        expirationDate: "05/24",
        securityCode: "373",
        cardType: "MASTER",
        cardStatus: "SECONDARY"
      }
    ]
  },

  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
