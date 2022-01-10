import { Outlet } from 'react-router-dom'

import s from './Layout.module.scss';

import Header from 'routes/Layout/components/Header'

const Layout = () => {
  return (
    <div className={s.root}>
      <Header />

      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
