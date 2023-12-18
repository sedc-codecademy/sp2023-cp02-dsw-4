import React from 'react'
import CategoriesDetails from '../Categories/CategoriesDetails/CategoriesDetails'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { BigLoadingDiv } from '../PageLoader/PageLoader'
import { getSearch } from '../../helpers/API/searchApi'

function Search() {
    const { searchid } = useParams()
    const {
        data: searchData,
        error: searchError,
        isError: isSearchError,
        isPending: isSearchPending,
        isSuccess: searchSuccess,
        refetch: searchRefetch
    } = useQuery({
        queryKey: ["searchQuery", searchid],
        queryFn: () => getSearch(searchid),
    })
    return (
        <>
            {
                isSearchPending ? (
                    <BigLoadingDiv
                        link={"/"}
                        title={"getting search results..."}
                        message={"you can click here to retry if its taking too long"}
                        refetch={searchRefetch}
                    ></BigLoadingDiv>
                ) : searchSuccess && searchData ? (
                    <CategoriesDetails origin={'search'} dataObject={{
                        name: searchid,
                        products: searchData
                    }}></CategoriesDetails>
                ) : isSearchError ? (
                    <NotFound
                        link={"/"}
                        title={"no results found"}
                        message={searchError.message}
                    ></NotFound>
                ) : (<></>)
            }
        </>
    )
}

export default Search