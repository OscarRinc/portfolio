import About from './pages/about';
import './App.scss';
import Header from './components/header';

const App = () => {
  return (
    <div className='main'>
      <img className='hero-bg' src='/images/black/hero-background.png' alt='' />
      <div className='content'>
        <Header />
        <About />
      </div>
    </div>
  )
}

export default App
