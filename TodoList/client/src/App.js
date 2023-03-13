import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Todolist from './pages/todolist';


function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Todolist />} />
        </Routes>
    </Router>
  );
}

export default App;
