import React from 'react'
import CategoriesDetails from '../Categories/CategoriesDetails/CategoriesDetails'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { BigLoadingDiv } from '../PageLoader/PageLoader'
import { getSubCategoryByID } from '../../helpers/API/sub-category-api'

function SubCategory() {
    const { subId } = useParams()
    const {
        data: subData,
        error: subError,
        isError: isSubError,
        isPending: isSubPending,
        isSuccess: subSuccess,
        refetch: subRefetch,
    } = useQuery({
        queryKey: ["subcategoryQuery", subId],
        queryFn: () => getSubCategoryByID(subId),
    })
    return (
        <>
            {
                isSubPending ? (
                    <BigLoadingDiv
                        link={"/"}
                        title={"loading sub-category..."}
                        message={"you can click here to retry if its taking too long"}
                        refetch={subRefetch}
                    ></BigLoadingDiv>
                ) : subSuccess && subData ? (
                    <CategoriesDetails origin={'subcategory'} dataObject={subData}></CategoriesDetails>
                ) : isSubError ? (
                    <NotFound
                        link={"/"}
                        title={"dont have that one"}
                        message={subError.message}
                    ></NotFound>
                ) : (<></>)
            }
        </>
    )
}

export default SubCategory