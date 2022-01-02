import { useNavigate } from 'react-router-dom'

import { useAuth } from 'services/Auth/AuthContext'

const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      {auth.user ? auth.user : (
        <button
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      )}
    </div>
  )
}

export default AuthStatus
