import React, { useEffect } from 'react'
import styles from "./page.module.css"
import { getBgColorForCategory } from '@/app/helpers';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';



interface CardProps {
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

const CardElement: React.FC<CardProps> = ({number, name, symbol, category, summary, atomic_mass, phase, density, electron_configuration, electronegativity_pauling, discovered_by, source     }) => {


    useEffect(() => {
      console.log(name);
      
    }, [])
    
  return (
    <div style={{width: "100%", backgroundColor: getBgColorForCategory(category)}} className={styles.card} 
>
          <div  className={styles.cardHeader}>
            <h3>{name}</h3>
            <div className={styles.rownumsymbol}>
              <div style={{backgroundColor: getBgColorForCategory(category)}}  className={styles.number} >{number}</div>
              <div style={{backgroundColor: getBgColorForCategory(category)}}  className={styles.symbol} >{symbol}</div>
            </div>
          </div>

          <div className={styles.cardBody}>
            {/* summary */}
          <div  className={styles.summary}>
            <p>{summary}</p>
            
            
          </div>

          {/* caracteristics */}
          <div  className={styles.caracteristics}>
              <div className={styles.caracteristicsHeader}>
              <h3 style={{color: "#1D2338", fontSize: 12}}>Caracteristics</h3>
              <Link style={{paddingLeft: 5, paddingRight: 5, fontSize: 10, backgroundColor: getBgColorForCategory(category)}} target='_blank' href={source || "#"}>More on {name}</Link>
              </div>
            <div style={{backgroundColor: getBgColorForCategory(category)}} className={styles.table}>
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Atomic mass</p>
                  <p>{atomic_mass}</p>
              </div>
              <Separator />
              
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Standard state</p>
                  <p>{phase}</p>
              </div>
              <Separator />
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700, }}>Electron config</p>
                  <p>{electron_configuration}</p>
              </div>
              <Separator />
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700,}}>Electronegativity (Pauling Scale)</p>
                  <p>{electronegativity_pauling}</p>
              </div>
              <Separator />
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Density</p>
                  <p>{density}</p>
              </div>
              <Separator />
              <div  className={styles.row}>
                  <p style={{fontSize: 8, fontWeight: 700}}>Density</p>
                  <p>{discovered_by}</p>
              </div>
              <Separator />

          


            </div>
          </div>

          </div>

          
          
          </div>
  )
}

export default CardElement