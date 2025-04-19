import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </img>
   
      <div className={styles.profile}>
        <Avatar src="https://github.com/tiagostmg.png" />

        <strong>Tiago</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          Edit your profile
        </a>
      </footer>

    </aside>
  )
}