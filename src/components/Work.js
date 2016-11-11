import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';

const Work = () => {
  return (
    <div className="Work">
      <Header startingNoun="accomplishments" />
      <h2>Projects</h2>

      <section className="Work__project">
        <h3><a href="http://nycsubwayads.com" target="_blank">NYC Subway Ads</a></h3>

        <h4>Gallery/Showcase Website</h4>
        <p className="lead">Fully responsive interactive gallery website showcasing the best of New York City Subway advertising. The site is built as a custom WordPress theme (based on _s) with a full backend made up of custom fields and custom post types. The AJAX loading is done manually using a mix of jQuery $.ajax and the history API.</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS)</li>
          <li>Javascript (with ES6/Babel)</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://nutmegcreative.com" target="_blank">Nutmeg Creative</a></h3>

        <h4>Agency Portfolio Website</h4>
        <p className="lead">Fully responsive website for the company's rebrand and expansion. This site is built as a custom WordPress theme (based on _s) with most of the structured content made editable through custom fields and custom post types.</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS)</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://www.tracx.com" target="_blank">Tracx</a></h3>

        <h4>Marketing/Sales Website</h4>
        <p className="lead">Fully responsive website for an enterprise-scale social media management platform. This site was built as a totally custom WordPress theme (based on _s) with all of the structured content made editable either through custom fields and custom post types, or through integration with HubSpot's landing page creation functionality.</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS)</li>
          <li>Javascript (with Coffeescript)</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://railex.com" target="_blank">Railex</a></h3>

        <h4>B2B Website</h4>
        <p className="lead">Award-winning fully responsive website for an industry-leading rail transportation company. This site was built as a totally custom WordPress theme with most of the structured content made editable through custom fields and custom post types.</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS + Compass)</li>
          <li>Javascript (with Coffeescript)</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>

        <h5>Awards</h5>
        <ul>
          <li>W3 Silver Award - User Experience</li>
          <li>Silver Award - Structure &amp; Navigation</li>
          <li>WMA WebAwards - Outstanding Website</li>
          <li>The Davey Awards Silver - Visual Appeal</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://websterhallhistory.com/" target="_blank">Webster Hall Timeline</a></h3>
        <h4>Interactive Timeline</h4>
        <p className="lead">Responsive single-page website that illustrates the fascinating history of one of the oldest nightclubs in New York City. The timeline was built using the jQuery Masonry plugin with Skrollr for the parallax elements.</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS + Compass)</li>
          <li>Javascript (with Coffeescript)</li>
          <li>jQuery</li>
          <li>Masonry</li>
          <li>Skrollr</li>
        </ul>

        <h5>Awards</h5>
        <ul>
          <li>Awwwards Nominee</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://qoid.com/" target="_blank">QoID</a></h3>
        <h4>Scrolling Javascript explainer animation</h4>
        <p className="lead">Scroll-navigated animation to introduce/explain the concept of QoiD. This page was built entirely by hand using the Skrollr javascript library and CSS transitions for the animation. <br />Note: Please view on a desktop browser, the animation is not responsive</p>

        <h5>Built With</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS + Compass)</li>
          <li>Javascript (with Coffeescript)</li>
          <li>jQuery</li>
          <li>Skrollr</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="http://socialprompter.com/" target="_blank">Social Prompter</a></h3>
        <h4>Photobooth service &amp; responsive website</h4>
        <p className="lead">I created both the Social Prompter service and the fully responsive Social Prompter website using a mix of web technologies like the Twitter and Instagram APIs alongside Adobe Lightroom and a myriad of other software to create a seamless experience for our customers.</p>

        <h5>Service built with:</h5>
        <ul>
          <li>Twitter API</li>
          <li>Instagram API</li>
          <li>Adobe Lightroom (Photo Capture)</li>
          <li>Panic Transmit (Photo Upload)</li>
          <li>Noodlesoft Hazel (Automated File Organizer)</li>
        </ul>

        <h5>Website built with:</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (with SCSS + Compass)</li>
          <li>Javascript (with Coffeescript)</li>
          <li>jQuery</li>
        </ul>
      </section>
      <Navigation />
    </div>
  );
}

export default Work;
