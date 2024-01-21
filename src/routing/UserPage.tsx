import React from 'react'
import UserListPage from './UserListPage'
import { Navigate, Outlet } from 'react-router'
import useAuth from './hooks/useAuth'

function UserPage() {
  const {user} = useAuth(); 

  if (!user) {
    return <Navigate to='/login'/>
  }

  return (
    <div>
        <div className="row">
            <div className="col">
                <UserListPage/>
            </div>
            <div className="col">
                <Outlet/>
            </div>
        </div>
      
    </div>
  )
}

export default UserPage
