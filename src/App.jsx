import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Repos from './components/repos/Repos';
import ReposDetail from './components/reposDetail/ReposDetail';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/repos/:id" element={<Repos/>} />
        <Route path="/reposDetails/:id/:name" element={< ReposDetail/>} /> 
      </Routes>
    </Router>
  );
}

export default App;