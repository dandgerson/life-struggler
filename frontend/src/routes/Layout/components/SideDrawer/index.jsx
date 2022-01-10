import ReactDom from 'react-dom'

import s from './SideDrawer.module.scss'

const SideDrawer = ({ renderContent, isShown }) => {

  return ReactDom.createPortal(
    <aside
      className={s.root}
    >
      {renderContent()}
    </aside>,
    document.getElementById('sidedrawer-hook'),
  )
}

SideDrawer.defaultProps = {
  renderContent: () => { },
}

export default SideDrawer
