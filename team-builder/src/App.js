import React, { useState }from 'react'; 
import './App.css';
import Form from './components/form'

function App() {
  const [user, setUser] = useState([])
  return (
    <div className="App">
    <h1> Hello World </h1>
    <Form  user = {user} setUser={setUser}/>

    {user.map((line, index) => (
      <div className="person" key ={index}>
        <h2> {line.name} </h2>
        <h3> {line.email} </h3>
        <h3> {line.role} </h3>
      </div>
      ))}
    </div>
  );
}

export default App;
