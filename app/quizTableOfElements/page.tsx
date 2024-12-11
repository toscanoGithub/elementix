"use client"

import React, { useState, useEffect } from 'react';
import {elements} from "../data/elements"
import styles from "./page.module.css"

import { chunkArray, getBgColorForCategory } from '../helpers';
import QuizSlotElement from '../components/quiz-slot-element/QuizSlotElement';
import Modal from '../components/modal-element/Moda';
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { Bold } from "lucide-react"
import { useToast } from "@/hooks/use-toast"



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
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);  
  const [modalData, setModalData] = useState<Element>()  
  const [symbolActive, setSymbolActive] = useState(true)
  const [numberActive, setNumberActive] = useState(true)
  const [buttonState, setButtonState] = useState("Start")
  const { toast } = useToast()
  const [canPlay, setCanPlay] = useState(false)
  const [slideAmount, setSlideAmount] = useState(-400)
  // QUIZ started
  const [isPlaying, setIsPlaying] = useState(false);

  // RESET QUIZ
  const resetQuiz = () => {
    alert("Reset quiz to implement")
  }

  // NEXT QUESTION
  const nextQuestion = () => {
    
  }
  const toggleIsPlaying = () => {
    if(buttonState === "Start") {
      setButtonState("Quit")
      setIsPlaying((prev) => !prev);
      setSlideAmount(-200)
       // QuizLogic
       nextQuestion()
    } else {
      resetQuiz()
      setSlideAmount(-400)
      setButtonState("Start")
      setIsPlaying((prev) => !prev);
    }
    
  };


  // Using useEffect to simulate fetching data (or directly setting it)
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
    
  }, []); // Empty dependency array ensures this effect runs once when the component mounts


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

  // Split the data into chunks of 18
  const rows: Element[] | any = chunkArray(data, 18);


  const startQuiz = () => {
    setButtonState(prev => {
      if(prev === "Start") return "Stop";
      
      // Quiz Started
      toggleIsPlaying()

      return "Start";
    })
  }

  return (
    <div style={{position: "relative", width:"100vw"}}>
{/* This view will toggle visibility  */}
<div style={{
        width: "100%",
        maxWidth: 600,
        height: 200,
        padding: 20,
        backgroundColor: "#F7F7F7",
        border: "1px solid #ccc",
        borderRadius: 8,
        position: "absolute",
        top: slideAmount,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        transitionDuration: "1s"
  }} >
        <p>This view slides down from the top!</p>
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
              <QuizSlotElement name={item?.name} symbol={symbolActive ? item.symbol : ""} number={numberActive ? item.number : 0} category={item?.category} onSlotElementPress={function (): void {
                if(item.name) {
                  console.log(item?.name);
                  
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
