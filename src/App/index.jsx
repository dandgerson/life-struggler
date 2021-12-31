import { useEffect } from 'react';

import s from './App.module.scss';

const App = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('theme-dark')
  }, [])

  return (
    <div className={s.root}>
      Hello I'm your Life Builder
    </div>
  );
}

export default App;
