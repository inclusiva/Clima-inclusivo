// src/componentes/SearchBar/SearchBar.jsx

import React, { useState } from "react";
import { fetchCitySuggestions } from "../Api/Api"; 
import './Style.css'; // Arquivo de estilos específico para SearchBar

function SearchBar({ onSearch, language }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (value.length > 2) {
      const timeout = setTimeout(() => {
        loadSuggestions(value);
      }, 300);
      setDebounceTimeout(timeout);
    } else {
      setSuggestions([]);
      setIsModalOpen(false);
    }
  };

  const loadSuggestions = async (query) => {
    setLoading(true);
    const result = await fetchCitySuggestions(query);
    setSuggestions(result);
    setLoading(false);
    setIsModalOpen(true);
  };

  const handleSelect = (cityObj) => {
    setInput("");
    setSuggestions([]);
    setIsModalOpen(false);
    onSearch(`${cityObj.city},${cityObj.state},${cityObj.country}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={(e) => { e.preventDefault(); onSearch(input); setIsModalOpen(false); }} className="search-bar">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={language === 'pt' ? "Digite o nome da cidade" : "Enter city name"}
          className="search-input"
          aria-label={language === 'pt' ? "Campo para buscar o clima de uma cidade" : "Field to search weather for a city"}
        />
        <button type="submit" className="search-button">
          {language === 'pt' ? "Buscar" : "Search"}
        </button>
      </form>

      {/* Modal de Sugestões */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{language === 'pt' ? "Sugestões" : "Suggestions"}</h3>
            {loading ? (
              <p>{language === 'pt' ? "Carregando sugestões..." : "Loading suggestions..."}</p>
            ) : (
              <ul className="suggestions-list">
                {suggestions.map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSelect(item)}
                    className="suggestion-item"
                  >
                    <strong>{item.city}</strong>
                    {item.state && `, ${item.state}`}
                    {item.country && `, ${item.country}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
