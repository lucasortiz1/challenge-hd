import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Discover, MovieDescription } from 'pages'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Discover />} />
      <Route path="/search" element={<Discover />} />
      <Route path="/movie/:id" exact element={<MovieDescription />} />
    </Routes>
  </Router>
)

export default App
