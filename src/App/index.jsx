import { useEffect } from 'react';

import s from './App.module.scss';
import c from './constants.js'

const App = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('theme-dark')
  }, [])

  return (
    <div className={s.root}>
      <div className={s.header}>
        Hello I'm your Life Builder
      </div>

      <div className={s.main}>
        <div className={s.factors}>
          {c.factors.map(factor => (
            <div className={s.factor}>
              {factor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
