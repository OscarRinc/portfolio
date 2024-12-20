import Header from "../../components/header";
import useDarkMode from "../../hooks/useDarkmode";
import About from "../about";
import Count from "../count";
import styles from './Main.module.scss';

const Main = () => {
  const { themeStatus } = useDarkMode();
  console.log(themeStatus);
  return (
    <>
      {themeStatus === 'dark'
        ? <img className={styles.heroBg} src='/images/black/hero-background.png' alt='' />
        : <img className={styles.heroBg} src='/images/white/hero-background.png' alt='' />
      }
      <div className={`${styles.main} ${themeStatus === 'light' && styles.light}`}>
        <div className={styles.content}>
          <Header />
          <About />
          <Count />
        </div>
      </div>
    </>
  )
}

export default Main;