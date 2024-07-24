/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navigate,Outlet  } from 'react-router-dom'


function ProtectRouter({children,user,redirect ="/login"}) {
 
    if (!user) return <Navigate to={redirect}/>;
        
        return children ? children:<Outlet/>;
  
}

export default ProtectRouter