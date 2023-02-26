import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<h1>Movie Details Page</h1>} />
        <Route path='movies/:type' element={<h1>Movies List Page</h1>} />
        <Route path='/*' element={<h1><a href="/">Error Page Back To Home</a></h1>} />
      </Routes>
    </div>
  );
}

export default App;
