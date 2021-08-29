import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTwitter, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons"; // import the icons

const name = 'mido'
export const siteTitle = 'Mido - Portfolio'
function getDate () {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return date + "." + month + "." + year
}



export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      

        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      <main>
      <div style={{"textAlign": "center", "margin": "auto"}}>

      <section className={utilStyles.headingMd}>
        
        {children}
      
        <p className={utilStyles.headingMd7}>DEVELOPER</p>
        <p className={utilStyles.headingMd6}>me@midoismido.it{"\n"} | Italy, {getDate()}</p>

      <Link href="https://www.github.com/midomidox">
          <FontAwesomeIcon id="icon" icon={faGithub}></FontAwesomeIcon>
      </Link> 

         {"\n"}

      <Link href="https://www.twitter.com/aaaaallgood">
          <FontAwesomeIcon id="icon" icon={faTwitter}></FontAwesomeIcon>
      </Link> 

         {"\n"}

      <Link href="https://www.t.me/midoxmidox">
          <FontAwesomeIcon id="icon" icon={faTelegram}></FontAwesomeIcon>
      </Link> 
      
    </section>
      </div>

      </main>
      
    </div>
  )
}