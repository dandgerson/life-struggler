import { NavLink } from 'react-router-dom'
import cl from 'clsx'

import s from './Header.module.scss'

import AuthStatus from 'routes/Layout/components/Header/AuthStatus'

const Header = () => (
  <div className={s.root}>
    <div>
      <NavLink
        className={({ isActive }) => cl(
          s.navlink,
          isActive ? s['navlink-active'] : '',
        )}
        to={'/'}
      >
        Life Struggler
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

    <AuthStatus />
  </div>
)

export default Header
