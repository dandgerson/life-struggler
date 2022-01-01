import { useMemo } from 'react'
import s from './Factors.module.scss'

import { getFactors } from 'data'
import sortFactors from 'App/components/Factors/sortFactors'

const Factors = () => {



  const factors = useMemo(() => {
    const factors = getFactors()

    return sortFactors(factors)
  }, [])

  return (
    <div className={s.root}>
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
  )
}

export default Factors
