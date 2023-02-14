import { Outlet, Link, Form } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Note-Taking App</h1>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Form action='/logout' method='post'><button>Logout</button></Form>
      <Outlet/>
    </div>
  );
}

export default App;
