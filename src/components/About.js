import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';

import bioPic from '../assets/bio-pic.jpg';

const About = () => {
  return (
    <div>
      <Header startingNoun="tale" />
      <div className="row">
        <div className="col-md-8">
          <img src={bioPic} className="img-responsive" alt="Ryan Giglio - The Daintiest Flower" />
          <p className="lead">I've been making websites since I was 10 years old. They started out as silly personal homepages with gifs and cursor effects, but I soon branched out into making websites for class projects and tinkering with the themes on my Runescape Clan forum (cXs for life). Before I knew it, a college professor was looking for an advanced web development student to do a freelance project for a friend, and I realized that I could get paid for my lifelong hobby. The rest is history.</p>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default About;
