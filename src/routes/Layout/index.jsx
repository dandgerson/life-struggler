import { Outlet } from 'react-router-dom'

import s from './Layout.module.scss';


import Header from 'routes/Layout/components/Header'

const Layout = () => {


  return (
    <div className={s.root}>
      <Header />

      <div className={s.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
