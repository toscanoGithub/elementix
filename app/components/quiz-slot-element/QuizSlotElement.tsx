import React, { useState } from 'react';
import styles from "./QuizSlotElement.module.css"
import { getBgColorForCategory, getBGColorFromHex } from '@/app/helpers';

// Define the interface for the element properties
interface SlotElementProps {
  onSlotElementPress: (name: string) => void; // Function to handle the press event
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
  name: string;
  isRed: boolean;
  isGreen: boolean;
}

const SlotElement: React.FC<SlotElementProps> = ({
  onSlotElementPress,
  number,
  symbol,
  name,
  isRed,
  isGreen
}) => {

  let cardColor = 'white';
  if (isGreen) {
    cardColor = 'green';
  } else if (isRed) {
    cardColor = 'red';
  }

  return (
    <div style={{backgroundColor: cardColor}} onClick={() => onSlotElementPress(name)}  className={`${styles.slotElement} `} >
      <div className={styles.number}>{number !== 0 ? number : ""}</div>
      <div className={styles.symbol}>{symbol}</div>
    </div>
  );
};

export default SlotElement;
