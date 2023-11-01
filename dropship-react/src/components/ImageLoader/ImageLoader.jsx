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
                />
            ) : (
                <img src={props.backupUrl} alt={props.backupAlt} />
            )}
        </>
    )
}

export default ImageLoader