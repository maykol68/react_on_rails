import { BrowserRoutes as Router } from "react-router-dom";
import './App.css';
import PostsList from './components/features/posts/PostsList';
import Navbar from ".components/NavBar";

function App() {
  return (
  <Router>
    <div className="app">
      <h1>React on Rails Blog</h1>
      <p>Find this application layout in client/src/App.jsx</p>
      <Navbar />
      <PostsList />
    </div>
  </Router>
  );
}

export default App
