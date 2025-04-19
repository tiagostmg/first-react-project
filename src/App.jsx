import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Tiago" 
            content="Fala galera, tudo bem? Estou aprendendo React e está sendo incrível!" 
            avatarUrl="https://github.com/tiagostmg.png" 
          />
          <Post 
            author="João" 
            content="Hoje é um ótimo dia para codar! 🚀" 
            avatarUrl="https://github.com/joao.png" 
          />
          <Post 
            author="Gabriel" 
            content="Hoje é um ótimo dia para codar! 🚀" 
            avatarUrl="https://github.com/gabriel.png" 
          />
        </main>
      </div>
    </div>
  );
}