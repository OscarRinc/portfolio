import useDarkMode from '../../hooks/useDarkmode';
import styles from './Count.module.scss';

const Count = () => {
  const { themeStatus } = useDarkMode();
  return (
    <div id='my-work' className={`${styles.count} ${themeStatus === 'light' && styles.light}`}>
      <img className={`${styles.countBackground} ${themeStatus === 'light' && styles.light}`} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/count-background.png`} alt='' />
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/shape-line.png`} alt='' />
        <div className={styles.countText}>
          <div className={`${styles.title} ${themeStatus === 'light' && styles.light}`}>6<span className={`${styles.plus} ${themeStatus === 'light' && styles.light}`}>+</span></div>
          <div className={`${styles.subtitle} ${themeStatus === 'light' && styles.light}`}>Year Experience </div>
        </div>
      </div>
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/computer-line.png`} alt='' />
        <div className={styles.countText}>
          <div className={`${styles.title} ${themeStatus === 'light' && styles.light}`}>20<span className={`${styles.plus} ${themeStatus === 'light' && styles.light}`}>+</span></div>
          <div className={`${styles.subtitle} ${themeStatus === 'light' && styles.light}`}>Projects Completed</div>
        </div>
      </div>
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/service-line.png`} alt='' />
        <div className={styles.countText}>
          <div className={`${styles.title} ${themeStatus === 'light' && styles.light}`}>15<span className={`${styles.plus} ${themeStatus === 'light' && styles.light}`}>+</span></div>
          <div className={`${styles.subtitle} ${themeStatus === 'light' && styles.light}`}>Satisfied Clients</div>
        </div>
      </div>
    </div>
  )
}

export default Count;