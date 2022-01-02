import s from './Login.module.scss'

const Login = () => {
  return (
    <div className={s.root}>
      <h2>Login</h2>

      <form>
        <label>
          <p>Username</p>
          <input type='text' />
        </label>
        <label>
          <p>Password</p>
          <input type='text' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}


export default Login
