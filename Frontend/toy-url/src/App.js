import './App.css'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import { UrlProvider } from './Context/UrlContext'

function App() {
  return (
    <UrlProvider>
      <div className="px-20">
        <Header />
        <Landing />
      </div>
    </UrlProvider>
  )
}

export default App
