import PlatformProvider from './hooks/PlatformContext'
import Index from './components/Index'
import './assets/App.css'

function App() {
  
  if (!localStorage.getItem('platform')){
    localStorage.setItem('platform', 'pc');
  };
  const platform = localStorage.getItem('platform');
  console.log(platform);

  return(
    <PlatformProvider value={platform}>
      <Index />
    </PlatformProvider>
  );
};

export default App
