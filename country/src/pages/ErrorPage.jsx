import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

  return (
    <><h2>Error Page</h2>
    
    <NavLink to='/'>
    <button>Go Home</button>
    </NavLink>
    </>
  )
}
