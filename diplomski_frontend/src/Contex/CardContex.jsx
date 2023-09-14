import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export function useCardContext() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  const [cardData, setCardData] = useState(null);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
}