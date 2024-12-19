// page.tsx >>> main page

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import styles from "./page.module.css"
import ElementInfo from './tableOfElements/page'
import TableOfElements from './tableOfElements/page'
import QuizTableOfElements from './quizTableOfElements/page'
import CardsList from './cardsList/page'
import { IoHomeOutline } from "react-icons/io5";

// In a component or layout (e.g., pages/_app.js)
import { Rock_Salt, Lato } from "next/font/google";
import Home from './home/page'

// Optimize the font loading with the next/font module
const rock = Rock_Salt({
  weight: ['400'],
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['100', '300', '700'],
  subsets: ['latin'],
});

function page() {
  return (
    <div className={styles.container}>
      <h1 className={rock.className}>Elementix</h1>
      <p className={lato.className}>Explore the periodic table of elements and test your knowlege in a fun way</p>
        <Tabs className={styles.tabs} defaultValue="home" >
          <TabsList style={{zIndex: 1000}}>
          <TabsTrigger  value="home"><IoHomeOutline size={20} /></TabsTrigger>
            <TabsTrigger  value="table">Table</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
          </TabsList>
          <TabsContent value="home"><Home /></TabsContent>
          <TabsContent value="table"><TableOfElements /></TabsContent>
          <TabsContent style={{width:"100vw", overflowX: "scroll"}} value="cards"><CardsList/></TabsContent>
          <TabsContent value="quiz"><QuizTableOfElements /></TabsContent>
        </Tabs>

    </div>
  )
}

export default page