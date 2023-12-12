import React from "react"
import { useSelector } from "react-redux"
// import { selectProducts } from "../../store/selectors/productSelector"

import CategoryScrollHome from "../CategoriesScrollHome/CategoryScrollHome"
import ParentPictureScroll from "../ParentPictureScroll/ParentPictureScroll"
import ProductList from "../Product/ScrollableProductsList/ScrollableProductList"
import NewArrivals from "../Product/NewArrivals/NewArrivals"
// import RandomProductList from "../Product/RandomProductList/RandomProductList"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../../helpers/API/category-api"
import {
  getDiscountedProducts,
  getNewArrivalsProducts,
  getPopularProducts,
} from "../../helpers/API/product-api"
import { LoadingErrorDiv } from "../PageLoader/PageLoader"

function Home() {
  // const products = useSelector(selectProducts)
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const {
    data: categoriesData,
    error: categoriesError,
    isError: isCatError,
    isPending: isCatPending,
    isSuccess: catSuccess,
    refetch: catRefetch,
  } = useQuery({
    queryKey: ["categoriesQuery"],
    queryFn: getCategories,
  })

  const {
    data: newArrivals,
    error: arrivalsError,
    isError: arrivalIsError,
    isPending: arrivalsIsPending,
    isSuccess: arrivalsSuccess,
    refetch: arrivalsRefetch,
  } = useQuery({
    queryKey: ["newArrivalsQuery"],
    queryFn: getNewArrivalsProducts,
  })

  const {
    data: popularProducts,
    error: popularError,
    isError: popularIsError,
    isPending: popularIsPending,
    isSuccess: popularSuccess,
    refetch: popularRefetch,
  } = useQuery({
    queryKey: ["popularQuery"],
    queryFn: getPopularProducts,
  })

  const {
    data: discountProducts,
    error: discountError,
    isError: discountIsError,
    isPending: discountIsPending,
    isSuccess: discountSuccess,
    refetch: discountRefetch,
  } = useQuery({
    queryKey: ["discountQuery"],
    queryFn: getDiscountedProducts,
  })


  return (
    <main className="homeMain">
      <div className="homeHeader">
        {!isMobile && <ParentPictureScroll />}
        {isCatPending || isCatError ? (
          <LoadingErrorDiv
            isError={isCatError}
            classTitle={"scrollCatMain"}
            errorMessage={categoriesError?.message}
            refetch={catRefetch}
            loadMessage={"Loading Categories"}
          ></LoadingErrorDiv>
        ) : catSuccess ? (
          <CategoryScrollHome categories={categoriesData} />
        ) : (
          <></>
        )}
      </div>

      {arrivalsIsPending || arrivalIsError ? (
        <LoadingErrorDiv
          isError={arrivalIsError}
          classTitle={"newArrivalsMain"}
          errorMessage={arrivalsError?.message}
          refetch={arrivalsRefetch}
          loadMessage={"Loading New Arrivals"}
        ></LoadingErrorDiv>
      ) : arrivalsSuccess ? (
        <NewArrivals products={newArrivals}></NewArrivals>
      ) : (<></>)}

      {/* <RandomProductList products={products.slice(0, 6)}></RandomProductList> */}

      {popularIsPending || popularIsError ? (
        <LoadingErrorDiv
          isError={popularIsError}
          classTitle={"popularProductsMain"}
          errorMessage={popularError?.message}
          refetch={popularRefetch}
          loadMessage={"Loading Popular Products"}
        ></LoadingErrorDiv>
      ) : popularSuccess ? (
        <ProductList
          products={popularProducts.slice(0, 10)}
          origin="popular"
        ></ProductList>
      ) : (<></>)}

      {/* <RandomProductList products={products.slice(6, 12)}></RandomProductList> */}

      {discountIsPending || discountIsError ? (
        <LoadingErrorDiv
          isError={discountIsError}
          classTitle={"discountProductsMain"}
          errorMessage={discountError?.message}
          refetch={discountRefetch}
          loadMessage={"Loading Discounted Products"}
        ></LoadingErrorDiv>
      ) : discountSuccess ? (
        <ProductList
          products={discountProducts.filter((e) => e.discountPercentage > 1)}
          origin="discount"
        ></ProductList>
      ) : (<></>)}
    </main>
  )
}

export default Home
