// SearchBar.tsx

"use client"

import React, { useState, useEffect, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import styles from './SearchBar.module.css';
import { Button } from "@/components/ui/button"
import { useSearchElementrContext } from '@/app/contexts/searchElementContext';

interface searchBarProps {
  currentTab: string
}
const SearchBar: React.FC<searchBarProps> = ({ currentTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  
  // Create a reference for the input element
  const inputRef = useRef<HTMLInputElement>(null);

  const {updateTarget} =  useSearchElementrContext()
  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    
  };

  // Focus the input when the search bar is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = () => {    
    updateTarget(query.toLowerCase().trim())
    setIsOpen(false)
    setQuery("")
  }

  const enterKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsOpen(false)
      setQuery("")
      updateTarget(query.toLowerCase().trim())
    
    }
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`} >
      {isOpen && (
        <>
        <input
          ref={inputRef} // Attach the ref to the input element
          type="text"
          placeholder="Name or number | Gold or 79"
          value={query}
          onChange={handleChange}
          className={styles.input}
          onKeyDown={enterKeyPressed}
        />
        {/* <Button onClick={handleSearch} variant="ghost"><IoIosSearch className={styles.icon} /></Button> */}

        </>
        
      )}

<IoIosSearch className={styles.icon} onClick={() => isOpen ? handleSearch() : setIsOpen(true)} />

    </div>
  );
};

export default SearchBar;
