import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from 'services/Auth/AuthContext'

import s from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({ currentTarget: event.currentTarget })

    const formData = new FormData(event.currentTarget)
    console.log({ formData })
    const username = formData.get('username')

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    })
  }

  return (
    <div className={s.root}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input name='username' type='text' />
        </label>
        <label>
          <p>Password:</p>
          <input name='password' type='text' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}


export default Login
