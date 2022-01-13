import { Navigate, Route, Routes,  } from 'react-router-dom'
import { UserInputsContextProvider } from './contexts/UserContext'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NewBet } from './pages/NewBet'

function App() {

  return (
    <UserInputsContextProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newbet' element={<NewBet />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </UserInputsContextProvider>
  );
}

export default App;
