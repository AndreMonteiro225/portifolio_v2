import styles from './header.module.css';

export default function Header() {
    return(
        <div className={styles.headerSection}>
            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}><a href='#about'>Sobre</a></li>
                    <li className={styles.navbarItem}><a href='#projects'>Projetos</a></li>
                    <li className={styles.navbarItem}><a href='#skills'>Habilidades</a></li>
                    <li className={styles.navbarItem}><a href='#contact'>Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}