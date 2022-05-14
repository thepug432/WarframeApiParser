import PlatformProvider from './hooks/PlatformContext'
import Index from './components/Index'
import './assets/App.css'

function App() {
  return(
    <PlatformProvider value='pc'>
      <Index />
    </PlatformProvider>
  )
};

export default App
