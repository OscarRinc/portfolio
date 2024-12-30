import useDarkMode from '../../hooks/useDarkmode';
import styles from './Footer.module.scss';

const Footer = () => {
  const { themeStatus } = useDarkMode();
  const isLight = themeStatus === 'light';

  return (
    <div className={styles.footer}>
      <div className={`${styles.divider} ${isLight && styles.light}`} />
      <div className={styles.titleContainer}>
        <img className={styles.titleIcon} src={`/images/${isLight ? 'white' : 'black'}/code.png`} alt='' />
        <span className={`${styles.title} ${isLight && styles.light}`}>Oscar.dev</span>
      </div>
      <div className={styles.soccialContainer}>
        <a href='https://www.linkedin.com/in/oscar-rincon-0647b515b/' target='_blank'><img className={styles.soccialIcon} src={`/images/${isLight ? 'white' : 'black'}/linkedin-fill.png`} alt='' /></a>
        <a href='https://github.com/OscarRinc' target='_blank'><img className={styles.soccialIcon} src={`/images/${isLight ? 'white' : 'black'}/github-fill.png`} alt='' /></a>
      </div>
      <div className={styles.menuItemsContainer}>
        <a href='#about-me' className={`${styles.menuItem} ${isLight && styles.light}`}>About Me</a>
        <a href='#my-work' className={`${styles.menuItem} ${isLight && styles.light}`}>My Work</a>
        <a href='#my-offer' className={`${styles.menuItem} ${isLight && styles.light}`}>What I Offer</a>
        <a href='#contact' className={`${styles.menuItem} ${isLight && styles.light}`}>Get in Touch</a>
      </div>
    </div>
  )
}

export default Footer;