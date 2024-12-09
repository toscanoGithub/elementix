"use client"

import React, { useState, useEffect } from 'react';
import {elements} from "../data/elements"
import styles from "./page.module.css"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { chunkArray } from '../helpers';
import SlotElement from '../components/slot-element/SlotElement';


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
  const [setshowCardElement, setSetshowCardElement] = useState(false) 
    
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
                  console.log(item.name);
                }
                
              } } />
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};


export default TableOfElements;
