"use client"

import React, { useState, useEffect } from 'react';
import {elements} from "../data/elements"
import styles from "./page.module.css"

import { chunkArray } from '../helpers';
import QuizSlotElement from '../components/quiz-slot-element/QuizSlotElement';
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import RandomPicker from '../quiz-helpers/pick-question';

// Define the type for an Element
interface Element {
  appearance?: string;
  atomic_mass?: number;
  boil?: number;
  category?: string;
  "cpk-hex"?: string;
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

const QuizTableOfElements: React.FC = () => {
  // Define the state variable `data` with the correct type
  const [data, setData] = useState<Element[] | any>([]);
  const [symbolActive, setSymbolActive] = useState(true)
  const [numberActive, setNumberActive] = useState(true)
  const [buttonState, setButtonState] = useState("Start")
  const { toast } = useToast()
  const [canPlay, setCanPlay] = useState(false)
  const [slideAmount, setSlideAmount] = useState(-400)

  // RESET QUIZ
  const resetQuiz = () => {
    setRedCards(new Set()); 
    setGreenCards(new Set()); 
  }

  // NEXT QUESTION
  const nextQuestion = () => {
    handlePickRandomItem()
  }

 
  const toggleIsPlaying = () => {
    if(buttonState === "Start") {
      setButtonState("Quit")
      setSlideAmount(-170)
       // QuizLogic
       nextQuestion()
    } else {
      resetQuiz()
      setSlideAmount(-400)
      setButtonState("Start")
    }
  };


  
  const [target, setTarget] = useState<Element | null>(null);
  const [redCards, setRedCards] = useState<Set<string>>(new Set());
  const [greenCards, setGreenCards] = useState<Set<string>>(new Set());

  // Function to pick a random item
  const handlePickRandomItem = () => {
    // Create an instance of RandomPicker with the items array
    const picker = new RandomPicker(data);
    setTarget(picker.pick() as Element)

  };

  useEffect(() => {
    // Self-invoking function
  (() => {
    console.log("This function is invoked immediately!");
    // Perform any initialization logic here
    toast({
      title: "Choose your level",
      description: "Toggle Number and Symbol as you want",
      style: {
        backgroundColor: '#8BD6B9',
        position: "fixed",
        top: 0, 
        left: 0, right: 0,
        display:"flex", alignItems:"center", justifyContent:"center",
        maxWidth: 300,
        marginLeft: "auto",
        marginRight: "auto"
      },
    })
  })();

    setData(elements)
    
  }, []); 


  useEffect(() => {
    // Timeout 1: wait 2 seconds then call numberButtonToggle
    const timeout1 = setTimeout(() => {
      numberButtonToggle(); // Call numberButtonToggle
      
    }, 1000);

    // Timeout 2: wait 3 seconds (1 second after timeout1) then call symbolButtonToggle
    const timeout2 = setTimeout(() => {
      symbolButtonToggle(); // Call symbolButtonToggle
    }, 3000);

    // Timeout 3: wait 4 seconds (1 second after timeout2) then call both
    const timeout3 = setTimeout(() => {
      numberButtonToggle(); // Call numberButtonToggle
      symbolButtonToggle(); // Call symbolButtonToggle
      setCanPlay(prev => !prev)
      
    }, 4500);

    // Cleanup timeouts when the component unmounts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []); // Empty dependency array to run only on mount
  

  const numberButtonToggle = () => {
    setNumberActive(prev => !prev)
  }

  const symbolButtonToggle = () => {
    setSymbolActive(prev => !prev)
  }

  // Split the data into chunks of 18 cause we have 18 columns in the periodic table of elements
  const rows: Element[] | any = chunkArray(data, 18);

  return (
    <div style={{position: "relative", width:"100vw"}}>
{/* This view will toggle visibility  */}
<div style={{top: slideAmount}} className={styles.slidingPanel} >
        <p style={{color:"#363C4A", textAlign:"center",
           fontSize: 14, fontWeight: 300, }}>Find</p>
           <p style={{color:"#363C4A", textAlign:"center",
          fontSize:24, fontWeight: 900, marginTop: -8,}}>{target?.name}</p>
    </div>
    <div className={styles.settings}>
      <Button onClick={numberButtonToggle} variant="ghost" style={{color: numberActive ? "#363C4A" : "#363C4A50"}} className={styles.legendButton}>1</Button>
      <Button onClick={symbolButtonToggle} variant="ghost" style={{color: symbolActive ? "#363C4A" : "#363C4A50"}} className={styles.legendButton}>H</Button>
    </div>
{canPlay && <Button disabled={!canPlay} onClick={toggleIsPlaying} className={styles.startButton}>{buttonState}</Button>}

    <div className={styles.table}>
      {rows.map((row: Element[], rowIndex: number) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', width:"100vw" }}>
          {row.map((item: Element, index: number) => (
            <div
              key={index.toString()}
              className={styles.elementWrapper}
              style={{border: item.number ? '1px solid #D1D5DB' : 'none',
                cursor: item.number ? 'pointer' : 'default',  
              }}
            >
              <QuizSlotElement   name={item?.name || "no name"}
                  isRed={redCards.has(item?.name || "no name" )}
                  isGreen={greenCards.has(item?.name || "no name")} // Check if this card is in greenCards
                  symbol={symbolActive ? item.symbol : ""}
                  number={numberActive ? item.number : 0}
                  category={item?.category}
                  onSlotElementPress={function (name: string): void {
                    if (name === target?.name) {
                      setGreenCards(new Set(greenCards).add(name)); // Add the correct card to greenCards
                      setRedCards(new Set()); // Reset red cards
                      handlePickRandomItem()
                    } else {
                      setRedCards(prev => new Set(prev).add(name)); // Mark the card as red
                    }

                  } } />
            </div>
          ))}
        </div>
      ))}

    </div>
    
    </div>
  );
};


export default QuizTableOfElements;
