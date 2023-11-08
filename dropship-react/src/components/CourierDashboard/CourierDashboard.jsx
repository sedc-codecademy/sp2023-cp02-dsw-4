import React from "react"
import Order from "../Order/Order"

const orders = [
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
        id: '123gfesgpio325kuoi4mjn2134jn123123',
        title: 'Some Nice product or something',
        image: 'babooey.jpg',
        amount: 1,
        total: 300
      }
    ]
  }
]

function CourierDashboard() {
  const completed = orders.filter(order => order.status === 'completed')
  const pending = orders.filter(order => order.status === 'pending')
  const available = orders.filter(order => order.status === 'available')

  return (
    <main className="courierMain">
      <div className="orderList all">
        <h1 className="title">Available Orders</h1>
        <ul className="orderUl">
          {available.length && available.map((e) =>
            <Order key={e.id} order={e}></Order>
          )}
        </ul>
      </div>
      <div className="orderList pending">
        <h2 className="title">Pending Orders</h2>
        <ul className="orderUl">
          {pending.map((e) =>
            <Order key={e.id} order={e}></Order>
          )}
        </ul>
      </div>
      <div className="orderList completed">
        <h2 className="title">Completed Orders</h2>
        <ul className="orderUl">
          {completed.length && completed.map((e) =>
            <Order key={e.id} order={e}></Order>
          )}
        </ul>
      </div>
    </main>
  )
}

export default CourierDashboard
