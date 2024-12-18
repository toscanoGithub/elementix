// page.tsx >>> TableOfElements
"use client"

import React, { useState, useEffect } from 'react';
import {elements} from "../data/elements"
import styles from "./page.module.css"

import { chunkArray, getBgColorForCategory } from '../helpers';
import SlotElement from '../components/slot-element/SlotElement';
import Modal from '../components/modal-element/Modal';
import { Separator } from '@/components/ui/separator';
import ProgressAnimation from '../components/lottie/ProgressAnimation';
import CardElement from '../components/card-element/page';

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



const TableOfElements: React.FC = () => {
  // Define the state variable `data` with the correct type
  const [data, setData] = useState<Element[] | any>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);  
  const [modalData, setModalData] = useState<Element>()  
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true)

  // Using useEffect to simulate fetching data (or directly setting it)
  useEffect(() => {
    setData(elements)
    
  }, [data]); // Empty dependency array ensures this effect runs once when the component mounts

  
  useEffect(() => {
    // Simulating progress (0 to 1 over 3 seconds)
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 1) {
          return Math.min(prevProgress + 0.01, 1); // Increment progress
        }
        clearInterval(interval);
        setIsLoading(false)
        return 1;
      });
    }, 30);  // Update progress every 50ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Split the data into chunks of 18
  const rows: Element[] | any = chunkArray(data, 18);

  return (
    <>
      
    {
      !isLoading ? <div style={{width: "100%",  marginTop: -40, backgroundColor:"transparent"}}>
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
  
              <SlotElement name={item?.name} symbol={item?.symbol} number={item?.number} category={item?.category} onSlotElementPress={function (): void {
                if(item.name) {
                  setModalData({...item})
                  openModal()
                }
                
              } } />
            </div>
          ))}
        </div>
      ))}
  <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CardElement 
        number={modalData?.number}
        name={modalData?.name} symbol={modalData?.symbol} category={modalData?.category} summary={modalData?.summary} atomic_mass={modalData?.atomic_mass} phase={modalData?.phase} density={modalData?.density} electron_configuration={modalData?.electron_configuration} electronegativity_pauling={modalData?.electronegativity_pauling} discovered_by={modalData?.discovered_by} source={modalData?.source}
        
        
        
        
        />
  
      </Modal>
    </div> : <div className={styles.progressAnimationWrapper}><ProgressAnimation progress={10} /></div>
    }
  </>
  );
};


export default TableOfElements;
