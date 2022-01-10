import { createPortal } from 'react-dom'

import s from './Backdrop.module.scss'

const Backdrop = ({ handleClick }) => createPortal(
  <div
    className={s.root}
    onClick={handleClick}
  />,
  document.getElementById('backdrop-hook'),
)

export default Backdrop
