import { Navigate, Route, Routes,  } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
