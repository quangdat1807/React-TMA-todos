import Todos from "./components/Todos";
import Form from "./components/Form";
import ListUser from './components/ListUser';
import AddUser from "./components/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          QD
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/listUser"} className="nav-link">
              ListUser
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/form"} className="nav-link">
              ExForm
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/listUser" element={<ListUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>
        
      </div>
    </div>


  );
}

export default App;
