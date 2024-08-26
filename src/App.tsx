import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieListComponent from './components/MovieListComponent';
import MovieDetail from './components/MovieDetailComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListComponent />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
