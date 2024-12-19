import React from 'react';
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.container}>
        <h2>Welcome to Elementix</h2>

        <div className={styles.main}>
          <p>Discover the wonders of the periodic table like never before! Search for elements by name or number and explore their properties with ease. Ready for a challenge? Test your knowledge with our interactive quizzes featuring three exciting difficulty levels. Start your elemental journey today!</p>
          <p>Elementix isn’t just about facts; it’s about exploration and learning. Dive deep into the world of chemistry and uncover fascinating details about every element. Whether you’re a student, educator, or simply curious, Elementix provides an engaging platform for all your elemental needs.</p>
          <p>Challenge yourself, friends, or classmates with our fun and competitive quiz mode. With varying levels of difficulty, there’s something for everyone—from beginners to experts. Discover the periodic table in a whole new way and make learning an enjoyable adventure!</p>
        </div>

        <div className={styles.footer}>
        <p>&copy; 2024 Ait Assou. Js. Mastery Hachatlon</p>
        </div>

    </div>
  )
}

export default Home