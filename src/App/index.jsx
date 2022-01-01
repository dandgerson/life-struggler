import { useEffect, useMemo } from 'react';

import s from './App.module.scss';
import c from './constants.js'

import sortFactors from 'App/sortFactors';

const App = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('theme-dark')
  }, [])

  const factors = useMemo(() => {
    return sortFactors(c.factors)
  }, [])

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div>
          Life Builder
        </div>
        <div>
          dandgerson
        </div>
      </div>

      <div className={s.main}>
        <div className={s.factors}>
          {factors.map((factor, i) => (
            <div
              key={i}
              className={s.factor}
            >
              {factor.name}
              {' '}
              <span className={s.weight}>
                {factor.weight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
