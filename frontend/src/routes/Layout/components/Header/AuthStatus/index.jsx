import { useNavigate } from 'react-router-dom'

import { useAuth } from 'services/Auth/AuthContext'
import s from './AuthStatus.module.scss'

const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div className={s.root}>
      {auth.user ? (
        <>
          <div className={s.username}>
            {auth.user}
          </div>
          <button
            onClick={() => auth.signout(() => navigate('/'))}
          >
            Sign Out
          </button>
        </>
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
