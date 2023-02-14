import { Outlet, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Note-Taking App</h1>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/logout"><button>Logout</button></Link>
      <Outlet/>
    </div>
  );
}

export default App;
