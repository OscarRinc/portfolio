import styles from './About.module.scss'

const About = () => {

  const technologyContainer = (image: string) => {
    return (
      <div className={styles.techBox}>
        <img className={styles.techIcon} src={image} alt='' />
      </div>
    )
  }

  return (
    <div className={styles.about}>
      <img className={styles.border} src='/images/black/border-gradient.png' alt='' />
      <div className={styles.pictureBackground}>
        <img className={styles.picture} src='/images/profile.jpeg' alt='' />
        <img className={styles.pictureIcon} src='/images/black/picture-icon.png' alt='' />
      </div>
      <div className={styles.info}>
        <div className={styles.leyendText}><span className={styles.leyend}>{'<span> '}</span>Hey, I’m Oscar<span className={styles.leyend}>{' </span>'}</span></div>
        <div className={styles.title}> Senior <span className={styles.jobTitle}>{'{Full Stack}'}</span> Web & App developer_ </div>
        <div className={styles.description}>
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
          <div className={styles.techMore}>...and more</div>
        </div>
        <div className={styles.cv}><img className={styles.cvIcon} src='/images/black/download-line.png' alt='' />{'[ Download my CV ]'}</div>
      </div>
    </div>
  )
}

export default About;