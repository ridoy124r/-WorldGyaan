import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
 

  return (
    <div>
      <h1>Oops! An error occurred.</h1>

    
      {error && (
        <p>
          {error.data || error.statusText || error.message || "Something went wrong."}
        </p>
      )}

      <NavLink to="/">Go Back</NavLink>
    </div>
  );
}

export default Error;
