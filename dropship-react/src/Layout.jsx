import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const location = useLocation()
    const isNotFound = [
        '/',
        '/categories',
        '/user',
        '/cart',
    ].includes(location.pathname)

    return (
        <>
            {isNotFound && <Header />}
            {children}
            {isNotFound && <Footer />}
        </>
    )
}

export default Layout
