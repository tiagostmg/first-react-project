import styles from './Post.module.css';
import { Avatar } from './Avatar';

export function Post({ author, content, avatarUrl }) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Avatar src={avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{author}</strong>
          <span>Web Developer</span>
        </div>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </article>
  );
}