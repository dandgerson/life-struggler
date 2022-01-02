import { useNavigate } from 'react-router-dom'

import { useAuth } from 'services/Auth/AuthContext'

const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      {auth.user ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div>
            {auth.user}
          </div>
          <button
            onClick={() => auth.signout(() => navigate('/'))}
          >
            Sign Out
          </button>
        </div>
      ) : (
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
