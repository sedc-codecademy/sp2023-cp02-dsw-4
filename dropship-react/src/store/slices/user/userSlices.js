import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "436hb5467457k",
    firstName: "Didadme",
    lastName: "Sarfgefesff",
    password: "dimeenajubav",
    email: "dimesarf@yahoo.com",
    role: "user",
    phoneNumber: 356568434593,
    address: "Skopje, drachevksa ulica",
    postalCode: "1000",
    city: "Skopje",
    orders: [
      {
        id: '1233254mjn2134jnkldhwah23n54',
        recepient: 'John Doe',
        city: 'San Francisco',
        address: 'Holywood Boulevard',
        phoneNumber: 35634593,
        postalCode: 1241235,
        email: 'joho@gmail.com',
        total: 399,
        paymentStatus: 'Paid',
        note: 'Leave it here to receive payments and receipayments andpayments andve payments for customers',
        status: 'pending',
        orderItems: [
          {
            id: '1233254mjn21hadhwa34jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          },
          {
            id: '1233254mjn21hadhwa34j123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          },
          {
            id: '1233254mn21hadhwa34jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          }
        ]
      },
      {
        id: '1233254mn2134jnkldhwah23n54',
        recepient: 'John Doe',
        city: 'San Francisco',
        address: 'Holywood Boulevard',
        postalCode: 1241235,
        phoneNumber: 1284719274,
        email: 'joho@gmail.com',
        total: 399,
        paymentStatus: 'Paid',
        note: 'Leave it here to receive payments and receipayments andpayments andve payments for customers',
        status: 'pending',
        orderItems: [
          {
            id: '1233254mjn21hadwa34jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          },
          {
            id: '1233254mjn21hdhwa34j123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          },
          {
            id: '1233254mn2hadhwa34jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 0,
            total: 300
          }
        ]
      },
      {
        id: '1233254m12556yjn2134jnkl2hadwd3n54',
        recepient: 'John Dime',
        city: 'San Francisco',
        address: 'Holywood Boulevard',
        postalCode: 12435,
        phoneNumber: 1284719274,
        email: 'joho@gmail.com',
        total: 399,
        paymentStatus: 'Paid',
        note: 'Leave it here to receive payments and receive payments for customers',
        status: 'available',
        orderItems: [
          {
            id: '1233254mjn213owwfenj4jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 6,
            total: 300
          }
        ]
      },
      {
        id: '123dhawhd3254mjn2134jgrdnkl23n54',
        recepient: 'Dime Doe',
        city: 'San Francisco',
        address: 'Holywood Boulevard',
        postalCode: 12487635,
        phoneNumber: 1285646419274,
        email: 'joho@gmail.com',
        total: 399,
        paymentStatus: 'Paid',
        note: 'Leave it here to payments for customers',
        status: 'completed',
        orderItems: [
          {
            id: '123gfgpio325kuoi4mjn2134jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 1,
            total: 300
          },
          {
            id: '123gfesgpio325kuoi4mjn2134jn3123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 1,
            total: 300
          },
          {
            id: '123gfesgpio325kuoi4n2134jn123123',
            title: 'Some Nice product or something',
            image: 'babooey.jpg',
            amount: 1,
            total: 300
          }
        ]
      }
    ],
    ratings: [
      {
        author: "DIme dimeski",
        date: Date(),
        title: "Great Product",
        rate: 4.6,
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias placeat autem! Dolores corrupti eaque eligendi porro tenetur vero? Hic exercitationem quidem quis iste dolores. Asperiores voluptatibus maxime sed voluptatum.",
        id: '12h4iufes12h4h7124h9',
        good: 'good screen, good battery, price',
        bad: 'bad screen, bad battery, price',
        product: {
          id: '12h4iu12h4h7124h9',
          image: '/productImage',
          title: 'Some short title'
        }
      },
      {
        author: "Dimeski Dime",
        date: Date(),
        title: "Bad Product",
        rate: 2.6,
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias placeat autem! Dolores corrupti eaque eligendi porro tenetur vero? Hic exercitationem quidem quis iste dolores. Asperiores voluptatibus maxime sed voluptatum orem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias placeat autem! Dolores corrupti eaque eligendi porro tenetur vero? Hic exercitationem quidem quis iste dolores. Asperiores voluptatibus maxime sed voluptatum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias placeat autem! Dolores corrupti eaque eligendi porro tenetur vero? Hic exercitationem quidem quis iste dolores. Asperiores voluptatibus maxime sed voluptatum orem ipsum dolor dawdwadawdawd adwdwadwad adwdwadawd dwadawdawd dadwadwadwad dawdwadwad awdwadwadwa.",
        id: '12h4iu12h4h7124hjh9',
        good: "",
        bad: 'bad screen, bad battery, price',
        product: {
          id: '12h4iu12h4h79',
          image: '/productImage',
          title: 'Some long product title this title is long'
        }
      }
    ],
    cards: [
      {
        id: "101",
        holder: `Frosina Stamenkovska`,
        number: `3500000000000000`,
        cvc: '985',
        date: '01/24',
        type: {
          mask: '0000 0000 0000 0000',
          regex: '^(?:35\\d{0,2})\\d{0,12}',
          cardtype: 'jcb',
          light: '#ef5350',
          dark: '#d32f2f'
        },
        cardStatus: "PRIMARY",
        removal: false
      },
      {
        id: "102",
        holder: `Frosina Stamenkovska`,
        number: `5000 3232 3232 3280`,
        cvc: '985',
        date: '05/24',
        type: {
          regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
          mask: '0000 0000 0000 0000',
          cardtype: 'maestro',
          light: '#ffeb3b',
          dark: '#f9a825',
        },
        cardStatus: "SECONDARY",
        removal: false
      },
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
