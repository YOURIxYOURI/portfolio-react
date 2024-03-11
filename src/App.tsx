import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className='app'>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
