import React from 'react'
import CategoriesDetails from '../Categories/CategoriesDetails/CategoriesDetails'
import { useQuery } from '@tanstack/react-query'
import { getManufacturerByID } from '../../helpers/API/manufacturer-api'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { BigLoadingDiv } from '../PageLoader/PageLoader'

function Manufacturer() {
    const { manufacturerId } = useParams()
    const {
        data: manuData,
        error: manuError,
        isError: isManuError,
        isPending: isManuPending,
        isSuccess: manuSuccess,
        refetch: manuRefetch,
    } = useQuery({
        queryKey: ["manufacturerQuery", manufacturerId],
        queryFn: () => getManufacturerByID(manufacturerId),
    })

    return (
        <>
            {
                isManuPending ? (
                    <BigLoadingDiv
                        link={"/"}
                        title={"loading manufacturer..."}
                        message={"you can click here to retry if its taking too long"}
                        refetch={manuRefetch}
                    ></BigLoadingDiv>
                ) : manuSuccess && manuData ? (
                    <CategoriesDetails origin={'manufacturer'} dataObject={manuData}></CategoriesDetails>
                ) : isManuError ? (
                    <NotFound
                        link={"/"}
                        title={"dont have that one"}
                        message={manuError.message}
                    ></NotFound>
                ) : (<></>)
            }
        </>
    )
}

export default Manufacturer