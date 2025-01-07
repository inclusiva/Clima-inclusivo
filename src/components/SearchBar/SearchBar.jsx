import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const GEOAPIFY_API_KEY = "221ffc853d0fe920bb3bb7b17604e522"; // Substitua pela sua chave da API

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (value.length > 2) {
      setDebounceTimeout(
        setTimeout(() => {
          fetchSuggestions(value);
        }, 300)
      );
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${GEOAPIFY_API_KEY}`
      );
      const data = await response.json();
      setSuggestions(
        data.features.map((feature) => ({
          city: feature.properties.city,
          state: feature.properties.state,
          country: feature.properties.country,
        }))
      );
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (city) => {
    setInput("");
    setSuggestions([]);
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Digite o nome da cidade"
        className="search-input"
      />
      {loading && <p className="loading-text">Carregando...</p>}
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion.city)}>
            <strong>{suggestion.city}</strong>, {suggestion.state}, {suggestion.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
