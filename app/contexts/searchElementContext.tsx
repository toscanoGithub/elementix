// TimerContext.tsx

"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define types for the context state
interface SearchElementContextType {
  target: string;
  updateTarget: (newTarget: string) => void;
  clearTarget: () => void;
}

const SearchElementContext = createContext<SearchElementContextType | undefined>(undefined);

// Custom hook to access the Timer context
export const useSearchElementrContext = (): SearchElementContextType => {
  const context = useContext(SearchElementContext);
  if (!context) {
    throw new Error('useSearchElementrContext must be used within a TimerProvider');
  }
  return context;
};

interface SearchElementProviderProps {
  children: ReactNode;
}

export const SearchElementProvider: React.FC<SearchElementProviderProps> = ({ children }) => {
  const [target, setTarget] = useState("")


 
  const updateTarget = (newTarget: string) => {
    setTarget(newTarget)
  }

  const clearTarget = () => {
    setTarget("")
  };

  

  return (
    <SearchElementContext.Provider value={{ target, updateTarget,  clearTarget }}>
      {children}
    </SearchElementContext.Provider>
  );
};
