import React from "react"
import Order from "../Order/Order"
import { useSelector } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../helpers/API/user-api"

function CourierDashboard() {
  const tokens = useSelector(state => state.role.authTokens)
  const userid = useSelector(state => state.role.userid)

  const { data } = useQuery({
    queryKey: ['userQuery', userid],
    queryFn: () => getUser(userid),
    enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
  })

  if (data) {
    const completed = data.orders?.filter(order => order.status === 'Delivered')
    const pending = data.orders?.filter(order => order.status === 'OnTheWay')
    const available = data.orders?.filter(order => order.status === 'Purchased')

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
}}

export default CourierDashboard
