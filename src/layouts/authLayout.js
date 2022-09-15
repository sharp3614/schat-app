import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

const AuthLayout = () => {

    const { currentUser } = useAuth()
    if (currentUser) return <Navigate to={'/'} />
    return <Outlet />
}

export default AuthLayout