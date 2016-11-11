import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Header startingNoun="wherabouts" />
      <h2>Twitter</h2>
      <p className="lead"><a href="https://twitter.com/ryangiglio" target="_blank">@ryangiglio</a></p>

      <h2>Email</h2>
      <p className="lead"><a href="mailto:rg@ryangiglio.com" target="_blank">rg@ryangiglio.com</a></p>

      <h2>Github</h2>
      <p className="lead"><a href="https://github.com/ryangiglio" target="_blank">ryangiglio</a></p>

      <h2>LinkedIn</h2>
      <p className="lead"><a href="https://www.linkedin.com/in/ryangiglio" target="_blank">in/ryangiglio</a></p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Contact;
