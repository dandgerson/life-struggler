import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from 'services/Auth/AuthContext';
import RequireAuth from 'services/Auth/RequireAuth'

import Factors from 'routes/Factors';
import Login from 'routes/Login'
import Layout from 'routes/Layout'
import Index from 'routes/Layout/components/Index'

const App = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('theme-dark')
  }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<Index />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/factors' element={(
            <RequireAuth>
              <Factors />
            </RequireAuth>
          )} />

        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
