import './App.css'
import { ShoppingCartProvider } from './components/context/cartContext'
import { ThemeProvider } from './components/ThemeSwitcher/themeContext'
import { UserProvider } from './components/userProfile/context'
import Index from './router'

function App() {

  return (
    <> 
      <ThemeProvider>
      <UserProvider> 
      <ShoppingCartProvider>
     <Index/> 
     </ShoppingCartProvider>
     </UserProvider>  
     </ThemeProvider>
     
    </>
  )
}

export default App
