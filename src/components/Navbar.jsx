import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left logo */}
      <div className={styles.logo}>
        <img className={styles.facelogo} src="/PranayLogo.png" alt="logo" />
      </div>

      {/* Center links */}
      <ul className={styles.links}>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/about">
            ABOUT
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/projects">
            PROJECTS
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/contact">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Right logo */}
      <div className={styles.logo}>
        <img className={styles.githublogo} src="/github-mark.png" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
