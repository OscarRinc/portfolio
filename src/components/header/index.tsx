import useDarkMode from '../../hooks/useDarkmode';
import styles from './Header.module.scss';

const Header = () => {
  const { themeStatus, setIsDarkMode } = useDarkMode();

  return (
    <div className={`${styles.header} ${themeStatus === 'light' && styles.light}`}>
      {/* <div className={styles.menuContainer}>
        <img className={styles.menuIcon} src='/images/black/menu-line.png' alt='' />
      </div> */}
      <div className={styles.body}>
        <div className={styles.titleContainer}>
          <img className={styles.titleIcon} src={`/images/${themeStatus === 'light' ? 'white' : 'black'}/code.png`} alt='' />
          <span className={`${styles.title} ${themeStatus === 'light' && styles.light}`}>Oscar.dev</span>
        </div>
        <div className={styles.menuItemsContainer}>
          {/* <div className={styles.menuItem}>About me</div> */}
          <a href='#about-me' className={styles.menuItem}>About Me</a>
          <a href='#my-work' className={styles.menuItem}>My Work</a>
          <a href='#my-offer' className={styles.menuItem}>What I Offer</a>
          {/* <div className={styles.menuItem}>Blog</div> */}
          <a href='#contact' className={styles.menuItem}>Get in Touch</a>
        </div>
        <div className={styles.soccialContainer}>
          {/* <img className={styles.soccialIcon} src='/images/black/facebook-circle-fill.png' alt='' />
          <img className={styles.soccialIcon} src='/images/black/twitter-x-fill.png' alt='' /> */}
          <a href='#contact'><img className={`${styles.soccialIcon} ${styles.mobile}`} src={`/images/${themeStatus === 'light' ? 'white' : 'black'}/mail-fill.png`} alt='' /></a>
          <a href='https://www.linkedin.com/in/oscar-rincon-0647b515b/' target='_blank'><img className={styles.soccialIcon} src='/images/black/linkedin-fill.png' alt='' /></a>
          <a href='https://github.com/OscarRinc' target='_blank'><img className={styles.soccialIcon} src='/images/black/github-fill.png' alt='' /></a>
        </div>
      </div>
      <div className={styles.modeContainer} onClick={setIsDarkMode}>
        <img className={styles.modeIcon} src={themeStatus === 'dark' ? '/images/black/sun-fill.png' : '/images/white/black-icon-fill.png'} alt='' />
      </div>
    </div>
  )
}

export default Header;
