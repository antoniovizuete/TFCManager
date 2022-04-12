import logo from './logo.svg';
import './App.css';
import { getUsers } from './services/user.services';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect( () =>{
    const getAllUsers = async() => {
      setUsers(await getUsers());
    }
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users.map(user=> <p>id: {user._id}, nombre: {user.name}</p>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
