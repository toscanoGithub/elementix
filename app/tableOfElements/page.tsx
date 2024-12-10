"use client"

import React, { useState, useEffect } from 'react';
import {elements} from "../data/elements"
import styles from "./page.module.css"

import { chunkArray, getBgColorForCategory } from '../helpers';
import SlotElement from '../components/slot-element/SlotElement';
import Modal from '../components/modal-element/Moda';
import { Separator } from '@/components/ui/separator';


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
  // Using useEffect to simulate fetching data (or directly setting it)
  useEffect(() => {
    
    setData(elements)
    
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handlePress = () => {
    console.log("slot pressed");
    
  }

  // Split the data into chunks of 18
  const rows: Element[] | any = chunkArray(data, 18);

  return (
    <div style={{width: "100%", marginTop: -15, backgroundColor:"transparent"}}>
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
        <div className={styles.topWrapper}>
        <div style={{backgroundColor: getBgColorForCategory(modalData?.category)}} className={styles.cardHeader}>
            <h2>{modalData?.name}</h2>
        </div>

        <div className={styles.numberSymbolRow}>
          <p style={{backgroundColor: getBgColorForCategory(modalData?.category)}}>{modalData?.number}</p>  
          <p style={{backgroundColor: getBgColorForCategory(modalData?.category)}}>{modalData?.symbol}</p>
        </div>
        </div>

        <div  className={styles.descCaractWrapper}>
        <div className={styles.description}>
          <p>{modalData?.summary}</p>
        </div>

        <div  className={styles.caracteristiques}>
          <div className={styles.row}>
            <p>Atomic Mass</p>
            <span>{modalData?.atomic_mass}</span>
          </div>
          <Separator orientation="horizontal" />
          <div className={styles.row}>
            <p>Standard State</p>
            <span>{modalData?.phase}</span>
          </div>
          <Separator orientation="horizontal" />
          <div className={styles.row}>
            <p>Electron Configuration</p>
            <span>{modalData?.electron_configuration}</span>
          </div>
          <Separator orientation="horizontal" />
          <div className={styles.row}>
            <p>Electronegativity (Pauling Scale)</p>
            <span>{modalData?.electronegativity_pauling}</span>
          </div>
          <Separator orientation="horizontal" />
          <div className={styles.row}>
            <p>Density</p>
            <span>{modalData?.density}</span>
          </div>
          <Separator orientation="horizontal" />
          <div className={styles.row}>
            <p>Discovered By	</p>
            <span>{modalData?.discovered_by || "Unknown"}</span>
          </div>
        </div> 
        </div> 

      </Modal>
    </div>
  );
};


export default TableOfElements;
