import React, { useState } from 'react';
import { searchGifs } from './Giphy';
import '../styles/GiphySearch.css'

const GiphySearch = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    const results = await searchGifs(query);
    setGifs(results);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleKeyPress} />
      <button onClick={handleSearch}>Search</button>
      <div className="gif-grid">
        {gifs.map((gif) => (
          <img className="gif-img" key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default GiphySearch;