import styles from './header.module.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Header() {
    return(
        <div className={styles.headerSection}>
            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}><a href='#about'><MdOutlineEmail/></a></li>
                    <li className={styles.navbarItem}><a href='#projects'><FaWhatsapp/></a></li>
                    <li className={styles.navbarItem}><a href='#skills'><FaGithub/></a></li>
                    <li className={styles.navbarItem}><a href='#contact'><FaLinkedin/></a></li>
                </ul>
            </nav>
        </div>
    );
}