import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Style from './style.module.scss'

const Layout = () => {

    const { currentUser } = useAuth()
    if (currentUser === null) return <Navigate to={'/login'} />
    return (
        <div className={Style.Container}>
            <Outlet />
        </div>
    )

}

export default Layout