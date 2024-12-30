import useDarkMode from '../../hooks/useDarkmode';
import styles from './Contact.module.scss';

interface ICard {
  icon: string;
  title: string;
  value: string
}

const Contact = () => {
  const { themeStatus } = useDarkMode();
  const isLight = themeStatus === 'light';

  const Card = ({ icon, title, value }: ICard) => (
    <div className={styles.card}>
      <div className={`${styles.iconContainer} ${isLight && styles.light}`}>
        <img className={styles.icon} src={`images/${isLight ? 'white' : 'black'}/${icon}`} alt='' />
      </div>
      <div className={styles.content}>
        <div className={`${styles.titleCard} ${isLight && styles.light}`}>{title}</div>
        <div className={`${styles.value} ${isLight && styles.light}`}>{value}</div>
      </div>
    </div>
  )

  return (
    <div id='contact' className={styles.contact}>
      <div className={`${styles.title} ${isLight && styles.light}`}>Let’s connect</div>
      <div className={styles.infoContainer}>
        <Card icon='phone-fill.png' title='Phone Number' value='+57-322-467-5745 | +1-813-458-7325' />
        <Card icon='mail-fill.png' title='Email' value='oscar.rincon.paez@gamil.com' />
      </div>
    </div>
  )
}

export default Contact;