import React, { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file for styling
import Cocktail from './Components/Cocktail';


function App() {
  const [cocktail, setCocktail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);


  // Fetch random cocktail on component mount
  useEffect(() => {
    fetchRandomCocktail();
  }, []);


  const fetchRandomCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setCocktail(data.drinks[0]);
    } catch (error) {
      console.error("Error fetching random cocktail:", error);
    } finally {
      setLoading(false);
    }
  };


  const fetchCocktailByName = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await response.json();
      setCocktail(data.drinks ? data.drinks[0] : null);
    } catch (error) {
      console.error("Error fetching cocktail by name:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchCocktailByName(searchTerm);
    }
  };


  return (
    <div className="App">
      <h1>Cocktail Finder</h1>
      <button onClick={fetchRandomCocktail}>Get Random Cocktail</button>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search cocktail by name"
        />
        <button type="submit">Search</button>
      </form>


      {loading ? (
        <p>Loading...</p>
      ) : (
        cocktail && <Cocktail data={cocktail} />
      )}
    </div>
  );
}


export default App;
