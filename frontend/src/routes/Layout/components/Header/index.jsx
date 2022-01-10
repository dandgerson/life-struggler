import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import cl from 'clsx'

import s from './Header.module.scss'

import AuthStatus from 'routes/Layout/components/Header/AuthStatus'
import Backdrop from 'routes/Layout/components/Backdrop'
import SideDrawer from 'routes/Layout/components/SideDrawer'

const Header = () => {
  const [isSideDrawerShown, setIsSideDrawerShown] = useState(false)

  const handleCloseDrawer = () => setIsSideDrawerShown(false)

  const renderLogo = () => (
    <div className={s.logo}>
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
  )

  const renderNavBarList = () => (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => cl(
            s.navlink,
            isActive ? s['navlink-active'] : '',
          )}
          to='/factors'>
          Factors
        </NavLink>
      </li>
    </ul>
  )

  return (
    <div className={s.root}>
      {isSideDrawerShown ? <Backdrop handleClick={handleCloseDrawer} /> : null}

      <SideDrawer
        renderContent={() => (
          <div className={cl(
            s.sideDrawerNav,
            {
              [s['sideDrawerNav-active']]: isSideDrawerShown,
            },
          )}
            onClick={handleCloseDrawer}
          >
            {renderLogo()}

            <nav>
              {renderNavBarList()}
            </nav>

            <AuthStatus />
          </div>
        )} />

      <div
        className={s.menuButton}
        onClick={() => setIsSideDrawerShown(true)}
      >
        <div />
        <div />
        <div />
      </div>

      {renderLogo()}

      <nav className={s.mainNavBar}>
        {renderNavBarList()}
      </nav>

      <div className={s.authStatus}>
        <AuthStatus />
      </div>

    </div>
  )
}

export default Header
