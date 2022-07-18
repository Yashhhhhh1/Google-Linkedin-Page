import React from 'react';
import style from "./Home.module.css";

function Home() {
  return (
    <div id={style.aboutContainer}>
      <h1>About</h1>

      <div id={style.aboutDescription}>
        <p>A problem isn't truly solved until it's solved for all. Googlers build products
          that help create opportunities for everyone, whether down the street or across the globe.
          Bring your insight, imagination and a healthy disregard for the impossible.
          Bring everything that makes you unique. Together, we can build for everyone.</p>
        <br></br>
        <span>Check out our career opportunities at careers.google.com.</span>

        <div id={style.contactStock}>
          <div id={style.contactContainer}>
            <p>Contact Info</p>
            <a target='_blank' rel="noreferrer" href="https://careers.google.com/">careers.google.com/</a>
          </div>
          <div id={style.stockContainer}>
            <p>Stock</p>
            <div>
              <span>GOOGL</span> <strong>$2,235.55</strong>
            </div>
            <div>
              <span>NASDAQ</span> <span><i className="fa-solid fa-caret-up"></i> 28.2 (1.278%)</span>
            </div>
          </div>
        </div>
      </div>
      <button id={style.allDetails}>See all details</button>
    </div>
  )
}

export default Home;