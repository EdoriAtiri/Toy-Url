import './App.css'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import { UrlProvider } from './Context/UrlContext'

function App() {
  return (
    <UrlProvider>
      <div className="px-4 py-4 md:px-10 lg:px-20 xl:px-28">
        <Header />
        <Landing />
      </div>
    </UrlProvider>
  )
}

export default App
