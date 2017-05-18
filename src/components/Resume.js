import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

import './Resume.css';

const Resume = () => {
  return (
    <div className="Resume">
      <Header startingNoun="credentials" />

      <section className="Resume__section">
        <h2>Skills</h2>

        <h3>Professional Experience</h3>
        <p>Stack: HTML, CSS (Sass), Javascript (ES6/Babel), jQuery, React, Redux, PHP, WordPress</p>
        <p>Tools: Gulp, npm/yarn, Git</p>

        <h3>Working Knowledge</h3>
        <p>Web: Webpack, Angular, Backbone, Shopify, LAMP server administration</p>
        <p>Other: iOS Development w/ Swift, Unity 3D, C#, Java, C++</p>
      </section>

      <section className="Resume__section">
        <h2>Work Experience</h2>

        <h3>Senior Front-End Developer</h3>
        <h4>Nutmeg Creative: 2015-present</h4>
        <p>As the lead developer on Nutmeg's branding and interactive team, I create websites and other digital marketing materials for our clients as well as internal passion projects and tools to help manage client relationships.</p>
        <p><em>Sample Work</em> - <a href="http://nycsubwayads.com" target="_blank">NYC Subway Ads</a>, <a href="http://nutmegcreative.com" target="_blank">Nutmeg's website</a></p>

        <h3>Lead Web Developer</h3>
        <h4>Nimble Division: 2011-2015</h4>
        <p>I worked closely with the design team during the planning phase to determine the best approach for each client, and then executed, tested, and launched each project. For a time I was the sole developer, responsible for all the technical decisions and execution, but also managed a team of contract developers and led a small in-house team. This group relocated together to join Nutmeg Creative.</p>
        <p><em>Sample Work</em> - <a href="http://www.tracx.com" target="_blank">Tracx website</a>, <a href="http://railex.com" target="_blank">Railex website</a>, <a href="http://nimbledivision.com" target="_blank"> Nimble Division website</a>, <a href="http://websterhallhistory.com/" target="_blank">Webster Hall interactive timeline</a>, <a href="http://qoid.com/" target="_blank">QoID scrolling Javascript animation</a></p>

        <h3>Web Developer</h3>
        <h4>Freelance: 2010-2011</h4>
        <p className="lead">As a freelance developer I worked directly with clients whose designs needed impementation (or re-implementation) and also with agencies that needed needed additional development support.</p>
      </section>

      <section className="Resume__section">
        <h2>Education</h2>

        <h3>B.S. Game Design &amp; Interactive Multimedia</h3>
        <h4>Ithaca College: 2007-2011</h4>
        <p>Minors in Writing &amp; Computer Science</p>
        <p>Co-founder of the Ithaca College Game Developer's Club</p>
      </section>

      <section className="Resume__section">
        <h2>Other Interests</h2>

        <p><em>Sports</em> - I play basketball, volleyball, and flag football, and am a huge Knicks, Jets, and Yankees fan.</p>
        <p><em>Games</em> - I am a lifelong gamer, both console and PC, and I have a YouTube Let's Play channel <a href="https://www.youtube.com/user/SwordfishPlays">Swordfish Plays</a> where I play and talk about indie games. I also play tabletop Role Playing Games with a group of my friends and have Game Mastered a short Pathfinder campaign.</p>
        <p><em>Game Development</em> - I studied Game Design &amp; Development in college, and attend the annual Global Game Jam every year. My games have won multiple GGJ awards, including Best Use of the Theme, and Best Use of a Controller (twice!)</p>
      </section>

      <section className="Resume__section">
        <h2>PDF Download</h2>

        <a className="btn btn-large btn-info" href={`${process.env.PUBLIC_URL}/RyanGiglio-Resume.pdf`} target="_blank">RyanGiglio-Resume.pdf</a>
      </section>
      
      <Navigation />
      <Footer />
    </div>
  );
}

export default Resume;
