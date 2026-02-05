import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left logo */}
      <div className={styles.logo}>
        <img
          className={styles.facelogo}
          src="/Portfolio/PranayLogo.png"
          alt="logo"
        />
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
        <img
          className={styles.githublogo}
          src="/Portfolio/github-mark.png"
          alt="logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
