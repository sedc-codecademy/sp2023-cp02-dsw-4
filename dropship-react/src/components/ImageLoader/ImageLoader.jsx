import React, { useState, useEffect } from 'react'

function ImageLoader(props) {
    const [imageLoaded, setImageLoaded] = useState(true)
    const [backupImageLoaded, setBackupImageLoaded] = useState(true)
    useEffect(() => {
        if (!props.url) {
            setImageLoaded(false)
        }
    }, [props.url])

    const handleImageError = () => {
        setImageLoaded(false)
    }

    const handleBackupImageError = () => {
        setBackupImageLoaded(false)
    }

    return (
        <>
            {imageLoaded ? (
                <img
                    src={props?.url || ''}
                    onError={handleImageError}
                    alt={props?.alt || ''}
                    loading='lazy'
                />
            ) : backupImageLoaded ? (
                <img
                    src={props?.backupUrl || ''}
                    onError={handleBackupImageError}
                    alt={props?.backupAlt || ''}
                />
            ) : (
                <img
                    src={props?.thirdBackupUrl || '/imgs/404/category404.png'}
                    alt={props?.backupAlt || 'Not Found'}
                />
            )}
        </>
    )
}

export default ImageLoader
