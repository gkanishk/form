import React,{useEffect} from 'react';
import './App.css';
import Form from './components/form';

function App() {
  useEffect(() => {
    console.log("Welcome App");
  }, [])
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
