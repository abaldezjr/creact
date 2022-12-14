import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (<>
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copyright}><span>Baldez Jr</span> &copy; 2022</p>
        </footer>
    </>);
}

export default Footer;