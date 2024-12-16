import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menuContainer}>
        <img className={styles.menuIcon} src='/images/black/menu-line.png' alt='' />
      </div>
      <div className={styles.body}>
        <div className={styles.titleContainer}>
          <img className={styles.titleIcon} src='/images/black/code.png' alt='' />
          <span className={styles.title}>Oscar.dev</span>
        </div>
        <div className={styles.menuItemsContainer}>
          <div className={styles.menuItem}>About me</div>
          <div className={styles.menuItem}>Resume</div>
          <div className={styles.menuItem}>Services</div>
          <div className={styles.menuItem}>Portfolio</div>
          <div className={styles.menuItem}>Blog</div>
          <div className={styles.menuItem}>Contact</div>
        </div>
        <div className={styles.soccialContainer}>
          <img className={styles.soccialIcon} src='/images/black/facebook-circle-fill.png' alt='' />
          <img className={styles.soccialIcon} src='/images/black/twitter-x-fill.png' alt='' />
          <img className={styles.soccialIcon} src='/images/black/linkedin-fill.png' alt='' />
          <img className={styles.soccialIcon} src='/images/black/github-fill.png' alt='' />
        </div>
      </div>
      <div className={styles.modeContainer}>
        <img className={styles.modeIcon} src='/images/black/sun-fill.png' alt='' />
      </div>
    </div>
  )
}

export default Header;
