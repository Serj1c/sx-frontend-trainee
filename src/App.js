import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Content } from './components/Content/Content';
import { NewsPage } from './components/NewsPage/NewsPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/item/:id">
          <NewsPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
