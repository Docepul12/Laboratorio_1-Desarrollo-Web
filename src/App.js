import React from 'react';
import CharacterList from './components/CharacterList';
import RickAndMortyTable from './components/RickAndMortyTable';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Rick and Morty Characters</h1>
      <CharacterList />
      <RickAndMortyTable />
    </div>
  );
}

export default App;
