import { useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import cl from 'clsx'

import s from './App.module.scss';

const App = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('theme-dark')
  }, [])


  return (
    <div className={s.root}>
      <div className={s.header}>
        <div>
          <NavLink
            className={({ isActive }) => cl(
              s.navlink,
              isActive ? s['navlink-active'] : '',
            )}
            to={'/'}
          >
            Life Builder
          </NavLink>
        </div>

        <nav>
          <NavLink
            className={({ isActive }) => cl(
              s.navlink,
              isActive ? s['navlink-active'] : '',
            )}
            to='/factors'>
            Factors
          </NavLink>
        </nav>

        <div>
          dandgerson
        </div>
      </div>

      <div className={s.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
