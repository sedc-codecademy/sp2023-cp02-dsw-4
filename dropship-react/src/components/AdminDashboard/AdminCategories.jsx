import React, { useEffect, useState } from "react"
import { AdminBiggerCategory } from "../Categories/CategoriesList/SmallCategory"
import { useQuery } from "@tanstack/react-query"
import { getCategories, getCategoryByID } from "../../helpers/API/category-api"
import { LoadingErrorDiv } from "../PageLoader/PageLoader"
import ImageLoader from "../ImageLoader/ImageLoader"
import { NavLink } from "react-router-dom"
import { PhotoPicker, dataURLtoFile, extractAndSortProductsFromCategory, getUniqueManufacturers } from "../UsefullComponents/Usefull"
import {
    useCreateCategory,
    useDeleteCategory,
    useUpdateCategory,
} from "../../helpers/UserHelper/UserHelper"

function AdminCategories() {
    const [currentCategoryId, setCurrentCategoryId] = useState("")
    const [inputCategoryId, setInputCategoryId] = useState("")
    const [showEdit, setShowEdit] = useState(false)
    const [shouldDelete, setShouldDelete] = useState(false)
    const [shouldCreate, setShouldCreate] = useState(false)

    const [popularProducts, setPopularProducts] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const updateCategory = useUpdateCategory()
    const deleteCategory = useDeleteCategory()

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
        data: cCatData,
        error: cCatError,
        isError: isCCatError,
        isPending: isCCatPending,
        isSuccess: cCatSuccess,
        refetch: cCatRefetch,
    } = useQuery({
        queryKey: ["categoryQuery", currentCategoryId],
        queryFn: () => getCategoryByID(currentCategoryId),
    })

    useEffect(() => {
        if (cCatData) setPopularProducts(extractAndSortProductsFromCategory(cCatData))
    }, [cCatData])

    useEffect(() => {
        if (popularProducts) setManufacturers(getUniqueManufacturers(popularProducts))
    }, [popularProducts])

    useEffect(() => {
        let timer
        if (shouldDelete) {
            timer = setTimeout(() => {
                setShouldDelete(false)
            }, 5000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [shouldDelete])

    useEffect(() => {
        if (categoriesData) {
            setCurrentCategoryId(categoriesData[0].id)
        }
    }, [categoriesData])

    const handleSelectCategory = (e) => {
        setCurrentCategoryId(e)
    }

    const handleSearchCat = () => {
        setCurrentCategoryId(inputCategoryId)
    }

    const handleDelete = () => {
        if (shouldDelete) {
            setShouldDelete(false)
            deleteCategory(cCatData.id)
        } else {
            setShouldDelete(true)
        }
    }

    const handleEdit = () => {
        if (shouldDelete) {
            setShouldDelete(false)
        }
        setShowEdit(!showEdit)
    }

    const handleToggleCreate = () => {
        setShouldCreate(!shouldCreate)
    }

    return (
        <div className="swag categories">
            <div className="title">
                <div className="infos">
                    <h1>Categories</h1>
                    <p>Click on a category to view/edit info</p>
                </div>
                <button onClick={handleToggleCreate}>
                    {!shouldCreate ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"
                            />
                            <path
                                fill="currentColor"
                                d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"
                            />
                            <path
                                fill="currentColor"
                                d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {isCatPending || isCatError ? (
                <LoadingErrorDiv
                    isError={isCatError}
                    classTitle={"pOrders"}
                    errorMessage={categoriesError?.message}
                    refetch={catRefetch}
                    loadMessage={"Loading Available Orders..."}
                ></LoadingErrorDiv>
            ) : catSuccess ? (
                <>
                    {shouldCreate ? (
                        <CreateCategory categories={categoriesData}></CreateCategory>
                    ) : (
                        <ul className="swagList">
                            {categoriesData.map((e) => (
                                <AdminBiggerCategory
                                    key={e.id}
                                    category={e}
                                    selectCategory={handleSelectCategory}
                                ></AdminBiggerCategory>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <></>
            )}
            <div className="title">
                <div className="infos">
                    <h1>Category Info</h1>
                    <p>Click on or search a category by its ID</p>
                </div>
                <div className="buttons">
                    <input
                        onChange={(e) => setInputCategoryId(e.target.value)}
                        type="text"
                        placeholder="Enter ID"
                    />
                    <button disabled={!inputCategoryId} onClick={handleSearchCat}>
                        find
                    </button>
                </div>
            </div>

            {categoriesData && (
                <>
                    {isCCatPending || isCCatError ? (
                        <LoadingErrorDiv
                            isError={isCCatError}
                            classTitle={"pOrders"}
                            errorMessage={cCatError?.message}
                            refetch={cCatRefetch}
                            loadMessage={"Loading Available Orders..."}
                        ></LoadingErrorDiv>
                    ) : cCatSuccess ? (
                        <div className="singleCat">
                            <div className="catInfo">
                                <div className="imageDiv">
                                    <ImageLoader
                                        url={cCatData.image}
                                        alt={cCatData.name}
                                        backupUrl="/imgs/404/category404.png"
                                        backupAlt={cCatData.name || "Category"}
                                    ></ImageLoader>
                                    <div>
                                        <ImageLoader
                                            url={cCatData.icon}
                                            alt={cCatData.name}
                                            backupUrl="/imgs/404/category404.png"
                                            backupAlt={cCatData.name || "Category"}
                                        ></ImageLoader>
                                        <section>
                                            <h2>{cCatData.name}</h2>
                                            <p>ID: {cCatData.id}</p>
                                        </section>
                                        <section className="buttonSection">
                                            <button onClick={handleEdit}>EDIT</button>
                                            <button
                                                className={`delete ${shouldDelete && "active"}`}
                                                onClick={handleDelete}
                                            >
                                                DELETE
                                            </button>
                                        </section>
                                    </div>
                                </div>
                                <div className="subList">
                                    <ul>
                                        <li className="subTitle">
                                            <h3>Manufacturers</h3>
                                        </li>
                                        {manufacturers?.map((e) => (
                                            <li key={e.id}>
                                                <NavLink>
                                                    <ImageLoader
                                                        url={e.image}
                                                        alt={e.name}
                                                        backupUrl="/imgs/404/category404.png"
                                                        backupAlt={e.name || "Manufacturer"}
                                                    ></ImageLoader>
                                                    <p>{e.name}</p>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul>
                                        <li className="subTitle">
                                            <h3>Sub-Categories</h3>
                                        </li>
                                        {cCatData.subcategories.map((e) => (
                                            <li key={e.id}>
                                                <NavLink to={`/sub/${e.id}`}>
                                                    <ImageLoader
                                                        url={e.image}
                                                        alt={e.name}
                                                        backupUrl="/imgs/404/category404.png"
                                                        backupAlt={e.name || "Manufacturer"}
                                                    ></ImageLoader>
                                                    <p>{e.name}</p>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {showEdit && (
                                <EditCreateCategory
                                    category={cCatData}
                                    updateCategory={updateCategory}
                                ></EditCreateCategory>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
    )
}

const EditCreateCategory = ({ category, updateCategory }) => {
    const [categoryObject, setCategoryObject] = useState({
        name: "",
        image: null,
        icon: null,
    })

    const handleChangeInfo = ({ name, value }) => {
        setCategoryObject({ ...categoryObject, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            categoryObject.name !== category.name &&
            (categoryObject.name ||
                categoryObject.image !== null ||
                categoryObject.icon !== null)
        ) {
            updateCategory(categoryObject)
        }
    }

    return (
        <form className="editCategory" onSubmit={handleSubmit}>
            <div className="images">
                <div>
                    <h3>Category Image</h3>
                    <PhotoPicker
                        image={categoryObject.image}
                        setImage={handleChangeInfo}
                        imageName={"image"}
                    ></PhotoPicker>
                </div>
                <div>
                    <h3>Category Icon</h3>
                    <PhotoPicker
                        image={categoryObject.icon}
                        setImage={handleChangeInfo}
                        imageName={"icon"}
                    ></PhotoPicker>
                </div>
            </div>
            <div className="info">
                <h3>Category Name</h3>
                <div>
                    <input
                        type="text"
                        maxLength="15"
                        minLength="3"
                        pattern="^[a-zA-Z\\s ]*$"
                        name="name"
                        value={categoryObject.name}
                        onChange={(e) =>
                            handleChangeInfo({
                                name: e.target.name,
                                value:
                                    e.target.value.charAt(0).toUpperCase() +
                                    e.target.value.slice(1),
                            })
                        }
                        placeholder=""
                    ></input>
                    <label htmlFor="name">Category Name</label>
                </div>
                <button
                    disabled={
                        (categoryObject.name && categoryObject.name === category.name) ||
                        (!categoryObject.name &&
                            categoryObject.image === null &&
                            categoryObject.icon === null)
                    }
                    type="submit"
                >
                    SAVE
                </button>
            </div>
        </form>
    )
}

const CreateCategory = ({ categories }) => {
    const createCategory = useCreateCategory()
    const [categoryObject, setCategoryObject] = useState({
        name: "",
        image: null,
        icon: null,
        manufacturers: [],
        subCategories: [],
    })
    const [subCategory, setSubCategory] = useState({
        name: "",
        image: null,
        description: "",
    })
    const [manufacturer, setManufacturer] = useState({ name: "", image: null })
    const [subCatValid, setSubCatValid] = useState(false)
    const [manufacturerValid, setManufacturerValid] = useState(false)
    const [categoryValid, setCategoryValid] = useState(false)
    const [crSubCat, setCrSubCat] = useState(true)
    const [crMan, setMan] = useState(true)

    const handleChangeCategoryInfo = ({ name, value }) => {
        if (name === "subCategories" || name === "manufacturers") {
            setCategoryObject({
                ...categoryObject,
                [name]: [...categoryObject[name], value],
            })
        } else {
            setCategoryObject({ ...categoryObject, [name]: value })
        }
    }

    const handleRemoveSubCat = (e) => {
        setCategoryObject({
            ...categoryObject,
            'subCategories': categoryObject['subCategories'].filter(c => c.name !== e),
        })
    }

    const handleRemoveMan = (e) => {
        setCategoryObject({
            ...categoryObject,
            'manufacturers': categoryObject['manufacturers'].filter(c => c.name !== e),
        })
    }

    const handleChangeSUBInfo = ({ name, value }) => {
        setSubCategory({
            ...subCategory,
            [name]: value
        })
    }

    const handleChangeMNInfo = ({ name, value }) => {
        setManufacturer({
            ...manufacturer,
            [name]: value
        })
    }

    const handleAddManufacturer = () => {
        handleChangeCategoryInfo({ name: "manufacturers", value: manufacturer })
        setManufacturer({ name: "", image: null })
        setMan(false)
    }

    const handleAddSubCat = () => {
        handleChangeCategoryInfo({ name: "subCategories", value: subCategory })
        setSubCategory({ name: "", image: null, description: "" })
        setCrSubCat(false)
    }

    const handleToggleMan = () => {
        setMan(!crMan)
    }

    const handleToggleSubCat = () => {
        setCrSubCat(!crSubCat)
    }

    const resetAll = () => {
        setCategoryObject({
            name: "",
            image: null,
            icon: null,
            manufacturers: [],
            subCategories: [],
        })
        setSubCategory({ name: "", image: null, description: "" })
        setManufacturer({ name: "", image: null })
        setCrSubCat(false)
        setMan(false)
    }

    useEffect(() => {
        const isSubCatNameInArray = categoryObject.subCategories.some(
            (subCat) => subCat.name === subCategory.name
        )
        const isSubCatEmpty =
            subCategory.image !== null &&
            subCategory.name.length >= 3 &&
            subCategory.description.length >= 10
        setSubCatValid(!isSubCatNameInArray && isSubCatEmpty)
    }, [subCategory, categoryObject.subCategories])

    useEffect(() => {
        const isManufacturerNameInArray = categoryObject.manufacturers.some(
            (man) => man.name === manufacturer.name
        )
        const isManufacturerEmpty =
            manufacturer.image !== null && manufacturer.name.length >= 3
        setManufacturerValid(!isManufacturerNameInArray && isManufacturerEmpty)
    }, [manufacturer, categoryObject.manufacturers])

    useEffect(() => {
        const isCategoryNameUnique = !categories.some(
            (category) => category.name === categoryObject.name
        )

        const isImageAndIconNotNull =
            categoryObject.image !== null && categoryObject.icon !== null

        const categoryValid =
            categoryObject.manufacturers.length >= 3 &&
            categoryObject.manufacturers.length === 5 &&
            isCategoryNameUnique &&
            isImageAndIconNotNull

        setCategoryValid(categoryValid)
    }, [categoryObject, categories])

    useEffect(() => {
        if (categoryObject.subCategories.length === 0) setCrSubCat(true)
    }, [categoryObject.subCategories])

    useEffect(() => {
        if (categoryObject.manufacturers.length === 0) setMan(true)
    }, [categoryObject.manufacturers])

    const handleSubmit = (e) => {
        if (categoryValid) {
            e.preventDefault()
            const mapCategory = (categoryObject) => {
                return {
                    name: categoryObject.name || "",
                    image: "",
                    icon: "",
                    subcategories: categoryObject.subCategories.map(subcategory => ({
                        name: subcategory.name || "",
                        image: "image",
                        description: subcategory.description || "",
                        categoryId: ""
                    })),
                    manufacturers: categoryObject.manufacturers.map(manufacturer => ({
                        name: manufacturer.name || "",
                        image: "image"
                    }))
                };
            };
            
            const mappedCategory = mapCategory(categoryObject)
            
            const mappedCat = {
                name: categoryObject.name || "Kids and Toys",
                icon: "/imgs/categories/kids-and-toys-icon.jpg",
                image: "/imgs/categories/kids-and-toys.jpg",
                subcategories: [
                    {
                        image: "/imgs/subCategories/educational-kids-toys.jpg",
                        description: categoryObject.subCategories[0].description || "",
                        name: categoryObject.subCategories[0].name || "",
                        categoryId: ""
                    },
                    {
                        image: "/imgs/subCategories/outdoor-kids-toys.jpg",
                        description: categoryObject.subCategories[1].description || "",
                        name: categoryObject.subCategories[1].name || "",
                        categoryId: ""
                    },
                    {
                        image: "/imgs/subCategories/action-figures-kids-toys.jpg",
                        description: categoryObject.subCategories[2].description || "",
                        name: categoryObject.subCategories[2].name || "",
                        categoryId: ""
                    }
                ],
                manufacturers: mappedCategory.manufacturers
            }
            console.log(mappedCat)

            createCategory(mappedCat)
        }
    }

    return (
        <form className="createCategory" onSubmit={handleSubmit}>
            <div className="crCatInfo">
                <div className="bigImg">
                    <h3>Category Image</h3>
                    <PhotoPicker
                        image={categoryObject.image}
                        setImage={handleChangeCategoryInfo}
                        imageName={"image"}
                    ></PhotoPicker>
                </div>
                <div className="crInfoB">
                    <div className="smallImage">
                        <h3>Category Icon</h3>
                        <PhotoPicker
                            image={categoryObject.icon}
                            setImage={handleChangeCategoryInfo}
                            imageName={"icon"}
                        ></PhotoPicker>
                    </div>
                    <div className="info">
                        <input
                            type="text"
                            maxLength="15"
                            minLength="3"
                            pattern="^[a-zA-Z\\s ]*$"
                            name="name"
                            value={categoryObject.name}
                            onChange={(e) =>
                                handleChangeCategoryInfo({
                                    name: e.target.name,
                                    value:
                                        e.target.value.charAt(0).toUpperCase() +
                                        e.target.value.slice(1),
                                })
                            }
                            placeholder=""
                            required
                        ></input>
                        <label htmlFor="name">Category Name</label>
                    </div>
                    <section className="buttonSection">
                        <button onClick={resetAll} type="button">
                            RESET
                        </button>
                        <button disabled={!categoryValid} type="submit">
                            CREATE
                        </button>
                    </section>
                </div>
            </div>
            <div className="subList">
                <div className="crDiv createSUB">
                    <h3 className="subTitle">
                        Sub-Categories{" "}
                        <button type="button" onClick={handleToggleSubCat}>
                            {!crSubCat ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                                    />
                                </svg>
                            )}
                        </button>
                    </h3>
                    {crSubCat ? (
                        <div className="subCatsDiv">
                            <textarea
                                className="review-textArea"
                                name="description"
                                type="text"
                                value={subCategory.description}
                                onChange={(e) =>
                                    handleChangeSUBInfo({
                                        name: e.target.name,
                                        value:
                                            e.target.value.charAt(0).toUpperCase() +
                                            e.target.value.slice(1),
                                    })
                                }
                                placeholder="Write a description for this sub-category"
                            ></textarea>
                            <PhotoPicker
                                image={subCategory.image}
                                setImage={handleChangeSUBInfo}
                                imageName={"image"}
                            ></PhotoPicker>
                            <section className="titleSubmit">
                                <div className="inputDiv">
                                    <input
                                        type="text"
                                        maxLength="15"
                                        minLength="3"
                                        pattern="^[a-zA-Z\\s ]*$"
                                        name="name"
                                        value={subCategory.name}
                                        onChange={(e) =>
                                            handleChangeSUBInfo({
                                                name: e.target.name,
                                                value:
                                                    e.target.value.charAt(0).toUpperCase() +
                                                    e.target.value.slice(1),
                                            })
                                        }
                                        placeholder=""
                                        required
                                    ></input>
                                    <label htmlFor="name">Category Name</label>
                                </div>
                                <button
                                    disabled={!subCatValid}
                                    onClick={handleAddSubCat}
                                    type="button"
                                >
                                    ADD
                                </button>
                            </section>
                        </div>
                    )
                        :
                        <ul>
                            {categoryObject.subCategories.map((e) => (
                                <li key={e.name}>
                                    <ImageLoader
                                        url={URL.createObjectURL(dataURLtoFile('data:image/png;base64,' + e.image?.base64, e.image?.name))}
                                        alt={e.name}
                                        backupUrl="/imgs/404/category404.png"
                                        backupAlt={e.name || "SubCategory"}
                                    ></ImageLoader>
                                    <p>{e.name}</p>
                                    <button onClick={() => handleRemoveSubCat(e.name)} type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z" /><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z" /></svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="crDiv createMAN">
                    <h3 className="subTitle">
                        Manufacturers
                        <button type="button" onClick={handleToggleMan}>
                            {!crMan ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
                                    />
                                </svg>
                            )}
                        </button>
                    </h3>
                    {crMan ? (
                        <div className="manDiv">
                            <PhotoPicker
                                image={manufacturer.image}
                                setImage={handleChangeMNInfo}
                                imageName={"image"}
                            ></PhotoPicker>
                            <section className="titleSubmit">
                                <div className="inputDiv">
                                    <input
                                        type="text"
                                        maxLength="15"
                                        minLength="3"
                                        pattern="^[a-zA-Z\\s ]*$"
                                        name="name"
                                        value={manufacturer.name}
                                        onChange={(e) =>
                                            handleChangeMNInfo({
                                                name: e.target.name,
                                                value:
                                                    e.target.value.charAt(0).toUpperCase() +
                                                    e.target.value.slice(1),
                                            })
                                        }
                                        placeholder=""
                                        required
                                    ></input>
                                    <label htmlFor="name">Category Name</label>
                                </div>
                                <button
                                    disabled={!manufacturerValid}
                                    onClick={handleAddManufacturer}
                                    type="button"
                                >
                                    ADD
                                </button>
                            </section>
                        </div>
                    )
                        :
                        <ul>
                            {categoryObject.manufacturers.map((e) => (
                                <li key={e.name}>
                                    <ImageLoader
                                        url={e.image}
                                        alt={e.name}
                                        backupUrl="/imgs/404/category404.png"
                                        backupAlt={e.name || "Manufacturer"}
                                    ></ImageLoader>
                                    <p>{e.name}</p>
                                    <button onClick={() => handleRemoveMan(e.name)} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z" /><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z" /></svg></button>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </form>
    )
}

export default AdminCategories
