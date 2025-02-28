import './App.css'
import { ShoppingCartProvider } from './components/context/cartContext'
import { UserProvider } from './components/userProfile/context'
import Index from './router'

function App() {

  return (
    <> 
      <ShoppingCartProvider>
      <UserProvider>
     <Index/>
     </UserProvider> 
     </ShoppingCartProvider>
    </>
  )
}

export default App
