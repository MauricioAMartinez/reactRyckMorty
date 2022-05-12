import { useState } from 'react';
import './App.css';
import Character from './components/Character';
import imageRickMorty from './img/rick-morty.png'
function App() {

  const [character,setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    setCharacters(characterApi.results)
  }
  console.log(character)

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title' >Rick & Morty</h1>
       <Character/>
       <img src={imageRickMorty} alt="Rick & Morty" className='img-home' ></img>
       <button onClick={reqApi}  className='btn-search' >Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
