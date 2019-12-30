import React from 'react'

// import i18n from '../locale'
import Logo from './Logo'
import style from './style.sass'

export default () => {
  return (
    <div className={style.header}>
      <Logo />
      <span className={style.title}>Tttgear</span>
    </div>
  )
}
