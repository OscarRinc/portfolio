import useDarkMode from '../../hooks/useDarkmode'
import styles from './About.module.scss'

const About = () => {
  const { themeStatus } = useDarkMode();
  const technologyContainer = (image: string) => {
    return (
      <div className={`${styles.techBox} ${themeStatus === 'light' && styles.light}`}>
        <img className={styles.techIcon} src={image} alt='' />
      </div>
    )
  }

  return (
    <div className={`${styles.about} ${themeStatus === 'light' && styles.light}`}>
      <img className={styles.border} src='/images/black/border-gradient.png' alt='' />
      <div className={styles.mainPicture}>
        <img className={styles.pictureIcon} src='/images/black/picture-icon.png' alt='' />
        <div className={styles.pictureBackground}>
          <img className={styles.picture} src='/images/profile.jpeg' alt='' />
        </div>
      </div>
      <div className={styles.info}>
        <div className={`${styles.leyendText} ${themeStatus === 'light' && styles.light}`}><span className={styles.leyend}>{'<span> '}</span>Hey, I’m Oscar<span className={styles.leyend}>{' </span>'}</span></div>
        <div className={`${styles.title} ${themeStatus === 'light' && styles.light}`}> Senior <span className={`${styles.jobTitle} ${themeStatus === 'light' && styles.light}`}>{'{Full Stack}'}</span> Web & App developer_ </div>
        <div className={`${styles.description} ${themeStatus === 'light' && styles.light}`}>
          <span className={styles.descriptionResalted}>{'<p> '}</span>
          With expertise in cutting-edge technologies such as
          <span className={styles.descriptionResalted}> NodeJS</span>,
          <span className={styles.descriptionResalted}> React</span>,
          <span className={styles.descriptionResalted}> React Native</span>, and
          <span className={styles.descriptionResalted}> Python</span>... I deliver web solutions that are both innovative and robust.
          <span className={styles.descriptionResalted}>{' </p>'}</span>
        </div>
        <div className={styles.techContainer}>
          {technologyContainer('/images/black/nodejs.png')}
          {technologyContainer('/images/black/mongodb.png')}
          {technologyContainer('/images/black/firebase.png')}
          {technologyContainer('/images/black/react.png')}
          <div className={`${styles.techMore} ${themeStatus === 'light' && styles.light}`}>...and more</div>
        </div>
        <div className={`${styles.cv} ${themeStatus === 'light' && styles.light}`}><img className={styles.cvIcon} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/download-line.png`} alt='' />{'[ Download my CV ]'}</div>
      </div>
    </div>
  )
}

export default About;