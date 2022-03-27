import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import useAsyncHook from './customHooks/useAsyncHook';
import { getDayName } from './utilities/api_functions';


function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')
  const [units, setUnits] = useState('metric');
  const [ result, loading] = useAsyncHook(query, units);

  return (
    <div className="App">
      <h1>Enter the city</h1>
      <form 
        onSubmit={ e => {
          e.preventDefault();
          setQuery(search);
        }}
        >
          <label htmlFor="search">Search</label>
          <input type="text" onChange={ e => setSearch(e.target.value)} placeholder='City' id='search' />
          <input type="submit" value='search' />
      </form>

      {loading === false ? (
        <h1>Enter a city</h1>
      ): loading === null ? (
        <h1>No city found</h1>
      ): (
        console.log(result)
      )}
    </div>
  );
}

export default App;
