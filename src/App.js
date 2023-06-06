import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar1 from './Pages/NavBar1'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/navbar1' element={<NavBar1 />} />
      </Routes>
    </Router>
  );
}

export default App;
