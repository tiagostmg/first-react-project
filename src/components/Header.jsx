import styles from './Header.module.css'

import logo from '../assets/react.svg'

export function Header() {
    return (
      <header className={styles.header}>
        <img src={logo} alt="React logo" />
        <h1 className={styles.h1}>First React</h1>
      </header>
    )
} 