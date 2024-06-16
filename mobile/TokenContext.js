// TokenContext.js
import React, { useState, createContext } from 'react';

const TokenContext = createContext(); // Criando o contexto

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState('');

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider }; // Exportando o contexto e o provedor
