import React from 'react';
import style from "./About.module.css";

function About() {
  return (
    <div id={style.overviewContainer}>
      <h1>Overview</h1>
      <p id={style.overview}>A problem isn't truly solved until it's solved for all.
        Googlers build products that help create opportunities for everyone, whether down the street or across the globe.
        Bring your insight, imagination and a healthy disregard for the impossible.
        Bring everything that makes you unique. Together, we can build for everyone.</p>
      <br></br>
      <p>Check out our career opportunities at careers.google.com. </p>

      <div>
        <h3>Website</h3>
        <a target='_blank' rel='noreferrer' href='https://careers.google.com/'>https://goo.gle/3m1IN7m</a>
      </div>
      <div>
        <h3>Industry</h3>
        <p>Technology, Information and Internet</p>
      </div>
      <div>
        <h3>Company size</h3>
        <p>10,001+ employees</p>
        <p>293,814 on LinkedIn  <i title='' className="fa-solid fa-circle-info"></i></p>
      </div>
      <div>
        <h3>Headquarters</h3>
        <p>Mountain View, CA</p>
      </div>
      <div>
        <h3>Specialties</h3>
        <p>search, ads, mobile, android, online video, apps, machine learning,
          virtual reality, cloud, hardware, artificial intelligence, youtube, and software</p>
      </div>
    </div>

  )
}

export default About;