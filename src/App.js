
import './App.css';
import{useState} from'react';
import Recipe from './components/Recipe.js';
import Navigation from './components/Navigation';


function App() {
 
  return (
    <div className="App">
      <Navigation />
      <Recipe/>
    </div>
  );
}

export default App;
