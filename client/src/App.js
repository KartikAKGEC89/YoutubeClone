import './App.css';
import Allroutes from './Components/Navbar/Allroutes.jsx';
import Drawerbar from './Components/Navbar/Leftsidebar/Drawerbar.jsx';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {
        <Drawerbar />
      }
      <Allroutes />
    </Router>
  );
}

export default App;
