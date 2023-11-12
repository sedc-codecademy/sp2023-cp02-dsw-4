import React, { useState } from 'react'

function ImageLoader(props) {
    const [imageLoaded, setImageLoaded] = useState(true)

    const handleImageError = () => {
        setImageLoaded(false)
    }
    return (
        <>
            {imageLoaded ? (
                <img
                    src={props.url}
                    onError={handleImageError}
                    alt={props.alt}
                    loading='lazy'
                />
            ) : (
                <img src={props.backupUrl} alt={props.backupAlt} loading='lazy' />
            )}
        </>
    )
}

export default ImageLoader