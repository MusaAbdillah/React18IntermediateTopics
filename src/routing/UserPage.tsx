import React from 'react'
import UserListPage from './UserListPage'
import { Outlet } from 'react-router'

function UserPage() {
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
