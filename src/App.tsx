import './App.css'
import { UserProvider } from './components/userProfile/context'
import Index from './router'

function App() {

  return (
    <>
      <UserProvider>
     <Index/>
     </UserProvider>
    </>
  )
}

export default App
