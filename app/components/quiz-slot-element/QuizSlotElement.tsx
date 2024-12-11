import React from 'react';
import styles from "./QuizSlotElement.module.css"
import { getBgColorForCategory } from '@/app/helpers';

// Define the interface for the element properties
interface SlotElementProps {
  onSlotElementPress: () => void; // Function to handle the press event
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

const SlotElement: React.FC<SlotElementProps> = ({
  onSlotElementPress,
  number,
  category,
  name,
  symbol,
  
}) => {
  return (
    <div onClick={onSlotElementPress}  className={styles.slotElement} >
      <div className={styles.number}>{number !== 0 ? number : ""}</div>
      <div className={styles.symbol}>{symbol}</div>
    </div>
  );
};

export default SlotElement;