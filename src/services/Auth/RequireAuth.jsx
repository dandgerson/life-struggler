import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "services/Auth/AuthContext";

const RequireAuth = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()

  console.log({ auth })

  return auth.user ? children : (
    <Navigate
      to='/login' state={{ from: location }}
      replace
    />
  )
}

export default RequireAuth
