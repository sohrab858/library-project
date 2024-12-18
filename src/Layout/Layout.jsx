import react from 'react';
import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="https://www.varzesh3.com">vaarzesh3</a> | react.js Full Course</p>
      </header>
       {children}
      <footer className={styles.footer}><p>Debelope By Sohrab</p></footer>
    </div>
  )
} 

export default Layout
