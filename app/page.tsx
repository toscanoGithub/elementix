// page.tsx >>> main page

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import styles from "./page.module.css"
import ElementInfo from './tableOfElements/page'
import TableOfElements from './tableOfElements/page'
import QuizTableOfElements from './quizTableOfElements/page'

function page() {
  return (
    <div className={styles.container}>
      <h1 >Elementix</h1>
      <p>Explore the periodic table of element and test your knowlege in a fun way</p>
        <Tabs className={styles.tabs} defaultValue="table" >
          <TabsList style={{zIndex: 1000}}>
            <TabsTrigger  value="table">Table</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
          </TabsList>
          <TabsContent value="table"><TableOfElements /></TabsContent>
          <TabsContent value="cards">Cards of elements</TabsContent>
          <TabsContent value="quiz"><QuizTableOfElements /></TabsContent>
        </Tabs>

    </div>
  )
}

export default page