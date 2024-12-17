import styles from './Count.module.scss';

const Count = () => {
  return (
    <div className={styles.count}>
      <img className={styles.countBackground} src='/images/black/count-background.png' alt='' />
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src='/images/black/shape-line.png' alt='' />
        <div>
          <div className={styles.title}>6<span className={styles.plus}>+</span></div>
          <div className={styles.subtitle}>Year Experience </div>
        </div>
      </div>
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src='/images/black/computer-line.png' alt='' />
        <div>
          <div className={styles.title}>20<span className={styles.plus}>+</span></div>
          <div className={styles.subtitle}>Projects Completed </div>
        </div>
      </div>
      <div className={styles.countContainer}>
        <img className={styles.countIcon} src='/images/black/service-line.png' alt='' />
        <div>
          <div className={styles.title}>15<span className={styles.plus}>+</span></div>
          <div className={styles.subtitle}>Satisfied Clients</div>
        </div>
      </div>
    </div>
  )
}

export default Count;