// page.tsx >>> CardsList

"use client"

import React, {Ref, useEffect, useRef} from 'react'
import { elements } from '../data/elements'
import styles from "./page.module.css"
import { getBgColorForCategory } from '../helpers'
import Link from 'next/link'
import { useSearchElementrContext } from '../contexts/searchElementContext'

interface CardProps {
  appearance?: string;
  atomic_mass?: number;
  boil?: number;
  category?: string;
  'cpk-hex'?: string;
  density?: number;
  discovered_by?: string;
  electron_affinity?: number;
  electron_configuration?: string;
  electron_configuration_semantic?: string;
  electronegativity_pauling?: number;
  ionization_energies?: number[];
  melt?: number;
  molar_heat?: number;
  name?: string;
  named_by?: string;
  number?: number;
  period?: number;
  phase?: string;
  shells?: number[];
  source?: string;
  spectral_img?: string;
  summary?: string;
  symbol?: string;
  xpos?: number;
  ypos?: number;
}

interface CardListProps {
  cards: CardProps[];
}

const CardsList = () =>  {
  
  const {target, clearTarget} = useSearchElementrContext()

  // ref array for all the card elements
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to scroll to a specific card by its name and snap it to the center
  const scrollToCardByForEntry = (prompt: string) => {
    // Find the card element by its name (names are unique for sure)
    const cardIndex = filteredCards.findIndex(card => card.name?.toLowerCase().trim() === prompt || card.number?.toString() === prompt.toString());

    if (cardIndex === -1) {
      return;
    }

    const cardElement = cardRefs.current[cardIndex];    
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Align the card in the center vertically
        inline: 'center', // Align the card in the center horizontally
      });
      clearTarget()
    } else {
      console.warn(`Card ${prompt} is not found!`);
    }
  };

  // Filter out empty objects
  const filteredCards = elements.filter(card => {
    // Check if the card is empty (Slots between Hydrogen and Helium)
    return Object.values(card).some(value => value);  // Returns true if any value is truthy
  });


  // Make sure refs are updated after render
  useEffect(() => {
    // Ensure each card has a valid ref (This prevents the cardRefs.current array from being incomplete)
    cardRefs.current = cardRefs.current.slice(0, elements.length);
  }, [filteredCards]);


  useEffect(() => {    
    scrollToCardByForEntry(target)
  }, [target])
  

  return (
  <div style={{width: "16100%"}}  className={styles.cards}>
      {
        filteredCards.map((element, index) => {          
          return <div className={styles.card} key={element.number} ref={(el) => (cardRefs.current[index] = el)} // Assign the ref for each card
          // Assign the ref for each card
>
          <div style={{backgroundColor: getBgColorForCategory(element.category)}} className={styles.cardHeader}>
            <h3>{element.name}</h3>
            <div className={styles.rownumsymbol}>
            <div style={{backgroundColor: getBgColorForCategory(element.category)}} className={styles.number} >{element.number}</div>
            <div style={{backgroundColor: getBgColorForCategory(element.category)}} className={styles.symbol} >{element.symbol}</div>
          </div>
          </div>

          <div className={styles.cardBody}>
            {/* summary */}
          <div className={styles.summary}>
            <p>{element.summary}</p>
            
            
          </div>

          {/* caracteristics */}
          <div  className={styles.caracteristics}>
              <div className={styles.caracteristicsHeader}>
              <h3 style={{color: "#1D2338", fontSize: 12}}>Caracteristics</h3>
              <Link style={{paddingLeft: 5, paddingRight: 5, fontSize: 10, backgroundColor: getBgColorForCategory(element.category)}} target='_blank' href={element?.source || "#"}>More on {element.name}</Link>
              </div>
            <div style={{backgroundColor: getBgColorForCategory(element.category)}} className={styles.table}>
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Atomic mass</p>
                  <p>{element.atomic_mass}</p>
              </div>
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Standard state</p>
                  <p>{element.phase}</p>
              </div>
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700, }}>Electron config</p>
                  <p>{element.electron_configuration}</p>
              </div>

              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700,}}>Electronegativity (Pauling Scale)</p>
                  <p>{element.electronegativity_pauling}</p>
              </div>

              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Density</p>
                  <p>{element.density}</p>
              </div>
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Density</p>
                  <p>{element.discovered_by}</p>
              </div>

          


            </div>
          </div>

          </div>

          
          
          </div>
        })
      }

    </div>
  )
  
}

export default CardsList