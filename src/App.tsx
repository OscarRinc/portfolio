import About from './pages/about';
import './App.scss';
import Header from './components/header';
import Count from './pages/count';

const App = () => {
  return (
    <div className='main'>
      <img className='hero-bg' src='/images/black/hero-background.png' alt='' />
      <div className='content'>
        <Header />
        <About />
        <Count />
      </div>
    </div>
  )
}

export default App
