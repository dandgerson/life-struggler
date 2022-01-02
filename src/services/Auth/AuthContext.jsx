import { createContext, useState, useContext } from 'react'

import { fakeAuthProvider } from 'auth'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const signin = (newUser, callback) => fakeAuthProvider.signin(() => {
    setUser(newUser)
    callback()
  })

  const signout = (callback) => fakeAuthProvider.signout(() => {
    setUser(null)
    callback()
  })

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
