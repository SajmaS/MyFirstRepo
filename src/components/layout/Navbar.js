import Link from "next/link"
import styles from "../../../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
    <div className={styles.main_nav}>
        <div className={styles.navgriditemnavname}>
            Sajma Šeper
        </div>
        <div className={styles.navgriditemnavphone}>
            +387 061 319 058
        </div>
        <div className={styles.navgriditemnavsocial}>
            <div>
                <a href="https://www.linkedin.com/in/sajma-seper/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                icon={faLinkedin}
                />
                </a>
            </div>
        </div>
        <ul>
            <li>
                <Link href="/">Home</Link>  
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/resume">Resume</Link>
            </li>
            <li>
                <Link href="/cases">Cases</Link>
            </li>
        </ul>
  </div> 
    )
}

export default Navbar;