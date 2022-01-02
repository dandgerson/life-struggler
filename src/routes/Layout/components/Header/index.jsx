import { NavLink } from 'react-router-dom'
import cl from 'clsx'

import s from './Header.module.scss'

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
)

export default Header
