import * as React from 'react'
import styles from './index.module.css'

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>TinyCore</span>
      <br />
      <span className={styles.copyright}>© 2022 ReAlign</span>
    </p>
  )
}
