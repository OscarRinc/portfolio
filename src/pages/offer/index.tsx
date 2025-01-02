import Dot from '../../assets/svgs/dot';
import useDarkMode from '../../hooks/useDarkmode';
import styles from './Offer.module.scss';

interface ICard {
  img: string;
  title: string;
  description: string;
}

const Offer = () => {
  const { themeStatus } = useDarkMode();

  const isLight = themeStatus === 'light';

  const Card = ({ img, title, description }: ICard) => (
    <div className={`${styles.card} ${themeStatus === 'light' && styles.light}`}>
      <img className={styles.imgCard} src={`images/${isLight ? 'white' : 'black'}/${img}`} alt='' />
      <div className={`${styles.title} ${isLight && styles.light}`}>{title}</div>
      <div className={`${styles.subtitle} ${isLight && styles.light}`} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )

  return (
    <div id='my-offer' className={`${styles.offer} ${isLight && styles.light}`}>
      <img className={`${styles.countBackground} ${isLight && styles.light}`} src={`/images/${themeStatus === 'dark' ? 'black' : 'white'}/count-background.png`} alt='' />
      <div className={styles.titleContainer}>
        <div className={`${styles.dotTitle} ${isLight && styles.light}`}><Dot color={isLight ? '#62A92B' : undefined} />What do I offer</div>
        <div className={`${styles.title} ${isLight && styles.light}`}>Designing solutions <br /><span className={`${styles.gray} ${isLight && styles.light}`}>customized to meet your requirements</span></div>
      </div>
      <div className={styles.cardContainer}>
        <Card img='window-line.png' title='Web & App Development' description='Crafting visually appealing and user-friendly interfaces using <span>React</span>, <span>React Native</span> or <span>Flutter</span>.' />
        <Card img='archive-drawer-line.png' title='Database Management' description='Designing and managing databases with SQL and NoSQL technologies such as <span>MySQL</span>, <span>PostgreSQL</span>, <span>MongoDB</span>, and <span>Redis</span>.' />
        <Card img='cloud-line.png' title='API Development' description='Creating and integrating <span>RESTful APIs</span> to enable smooth communication between front-end and back-end systems.' />
      </div>
      <div className={styles.cardContainer}>
        <Card img='speed-line.png' title='Performance Optimization' description='Improving the speed and performance of web applications to provide a better user experience.' />
        <Card img='shopping-cart-line.png' title='E-commerce Solutions' description='Developing scalable and secure payment solutions for <span>e-commerce platforms</span> tailored to your business needs.' />
        <Card img='speak-line.png' title='Communication & Teamwork' description='Fostering collaboration and clear communication to build strong, efficient teams that deliver outstanding results.' />
      </div>
      <div className={`${styles.bottomText} ${isLight && styles.light}`}>
      Excited to take on <span className={`${styles.white} ${isLight && styles.light}`}>new projects</span> and collaborate. <br />
      Let's chat about your ideas.
      </div>
      <div className={styles.border} />
    </div>
  )
}

export default Offer;