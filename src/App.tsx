import { DarkModeContextProvider } from './context/darkMode';
import Main from './pages/main';

const App = () => {
  return (
    <DarkModeContextProvider>
      <Main />
    </DarkModeContextProvider>
  )
}

export default App
