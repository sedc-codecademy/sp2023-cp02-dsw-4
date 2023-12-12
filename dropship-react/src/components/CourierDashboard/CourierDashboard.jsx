import React from "react"
import Order from "../Order/Order"
import { useSelector } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../helpers/API/user-api"
import { getPurchasedOrders } from "../../helpers/API/order-api"
import { LoadingErrorDiv } from "../PageLoader/PageLoader"

function CourierDashboard() {
  const tokens = useSelector(state => state.role.authTokens)
  const userid = useSelector(state => state.role.userid)

  const {
    data: userData,
    isSuccess: userSuccess,
  } = useQuery({
    queryKey: ['userQuery', userid],
    queryFn: () => getUser(userid, tokens),
    enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
  })

  const {
    data: purchasedOrders,
    error: pOrderError,
    isError: isPOrdersError,
    isPending: isPOrdersPending,
    isSuccess: pOrdersSuccess,
    refetch: pOrdersRefetch,
  } = useQuery({
    queryKey: ["purchasedOrders"],
    queryFn: () => getPurchasedOrders(tokens),
  })

  return (
    <main className="courierMain">
      <div className="orderList all">
        <h1 className="title">Available Orders</h1>
        {isPOrdersPending || isPOrdersError ? (
          <LoadingErrorDiv
            isError={isPOrdersError}
            classTitle={"pOrders"}
            errorMessage={pOrderError?.message}
            refetch={pOrdersRefetch}
            loadMessage={"Loading Available Orders..."}
          ></LoadingErrorDiv>
        ) : pOrdersSuccess ? (
          <ul className="orderUl">
            {purchasedOrders?.length && purchasedOrders?.map((e) =>
              <Order key={e.id} order={e} userId={userData.id}></Order>
            )}
          </ul>
        ) : (
          <></>
        )}
      </div>

      {userSuccess && userData?.userOrders?.length > 0 ? (
        <>
          {userData.userOrders?.some(order => order.status === 'OnTheWay') ? (
            <div className="orderList pending">
              <h2 className="title">Pending Orders</h2>
              <ul className="orderUl">
                {userData.userOrders?.filter(order => order.status === 'OnTheWay').map((e) =>
                  <Order key={e.id} order={e}></Order>
                )}
              </ul>
            </div>
          ) : (
            <div className="noDataDiv">
              <h1 className="title">No Pending Orders found</h1>
            </div>
          )}
          {userData.userOrders?.some(order => order.status === 'Delivered') ? (
            <div className="orderList completed">
              <h2 className="title">Completed Orders</h2>
              <ul className="orderUl">
                {userData.userOrders?.filter(order => order.status === 'Delivered').map((e) =>
                  <Order key={e.id} order={e}></Order>
                )}
              </ul>
            </div>
          ) : (
            <div className="noDataDiv">
              <h1 className="title">No Competed Orders found</h1>
            </div>
          )}
        </>
      ) : (
        <div className="noDataDiv">
          <h1 className="title">No orders found</h1>
          <p className="subTitle">Orders you've accepted or completed will show up here</p>
        </div>
      )}
    </main>
  )
}

export default CourierDashboard
