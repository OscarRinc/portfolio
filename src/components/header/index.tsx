import useDarkMode from '../../hooks/useDarkmode';
import styles from './Header.module.scss';

const Header = () => {
  const { themeStatus, setIsDarkMode } = useDarkMode();

  return (
    <div className={`${styles.header} ${themeStatus === 'light' && styles.light}`}>
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
      <div className={styles.modeContainer} onClick={setIsDarkMode}>
        <img className={styles.modeIcon} src={themeStatus === 'dark' ? '/images/black/sun-fill.png' : '/images/white/black-icon-fill.png'} alt='' />
      </div>
    </div>
  )
}

export default Header;
