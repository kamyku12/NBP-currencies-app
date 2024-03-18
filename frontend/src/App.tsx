import Layout from './components/Layout/Layout'
import UserContextProvider from './contexts/UserContext'

function App() {
  return (
    <UserContextProvider>
      <Layout />
    </UserContextProvider>
  )
}

export default App
