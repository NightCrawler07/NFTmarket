import styles from '../styles/Home.module.css'
import Listmain from '../components/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Listmain/>
      </footer>
    </div>
  )
}
