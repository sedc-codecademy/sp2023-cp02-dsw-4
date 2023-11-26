import React, { useState, useEffect } from 'react'

function ImageLoader(props) {
    const [imageLoaded, setImageLoaded] = useState(true)

    useEffect(() => {
        if (!props.url) {
            setImageLoaded(false)
        }
    }, [props.url])

    const handleImageError = () => {
        setImageLoaded(false)
    }

    return (
        <>
            {imageLoaded ? (
                <img
                    className='dime'
                    src={props?.url || ''}
                    onError={handleImageError}
                    alt={props?.alt || ''}
                    loading='lazy'
                />
            ) : (
                <img className='dime2' src={props?.backupUrl} alt={props?.backupAlt} loading='lazy' />
            )}
        </>
    )
}

export default ImageLoader
