import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <p className="lead">
        I'm a game lover &amp; web developer.<br />
        I love cookies, science, technology, and cats.<br />
        I dislike rushing, peppers, and arrogance.<br />
        Tweet me <a href="http://twitter.com/ryangiglio" target="_blank">@ryangiglio</a>.<br />
        I play games on YouTube at <a href="http://youtube.com/SwordfishPlays/" target="_blank">Swordfish Plays</a>.
      </p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
