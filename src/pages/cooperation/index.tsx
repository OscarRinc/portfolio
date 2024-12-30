import Dot from '../../assets/svgs/dot';
import useDarkMode from '../../hooks/useDarkmode';
import style from './Cooperation.module.scss';

const Cooperation = () => {
  const { themeStatus } = useDarkMode();
  return (
    <div className={style.cooperation}>
      <div className={`${style.leftSection} ${themeStatus === 'light' && style.light}`}>
        <div className={style.contentLeft}>
          <div className={style.leyend}>
            <Dot />
            <div className={style.leyendText}>Cooperation</div>
          </div>
          <div className={style.title}>More than +168 <span className={style.titleGray}>companies</span> trusted <span className={style.titleGray}>worldwide_</span></div>
          <div className={style.logoContainer}>
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
            <img className={style.logo} src='/images/logos/stripe.png' alt='' />
          </div>
        </div>
      </div>
      <div className={`${style.rightSection} ${themeStatus === 'light' && style.light}`}></div>
    </div>
  )
}

export default Cooperation;