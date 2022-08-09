import React, { useEffect, useState } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import authService from '../services/auth.service';

function Protected() {
    const [currentUser, setCurrentUser] = useState(undefined);
console.log(currentUser);
useEffect(() => {
    const user = authService.getCurrentUser();
  
    setCurrentUser(!!user);
  }, []);

  if (currentUser === undefined) {
    return null;
  }
    return (
        
        currentUser
        ? <Outlet/>
        : <Navigate to='/notloggedin' replace />
    )


}

export default Protected