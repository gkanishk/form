import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  useEffect(() => {
    console.log("Welcome");
  }, [])
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
