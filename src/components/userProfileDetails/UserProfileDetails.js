import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../userContext/UserContext'
import '../styles/navStyle.css'
import { Link, NavLink } from 'react-router-dom'
import { Navigation } from '../navigation/Navigation'

export const UserProfileDetails = () => {
    return (
        <div className="container">
            <Navigation />            
        </div>
    )
}

export default UserProfileDetails