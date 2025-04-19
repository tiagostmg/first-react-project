import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.content}>
          <h1>Content</h1>
        </main>
      </div>
      
    </div>
  )
}

