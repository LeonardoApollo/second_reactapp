import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Newsletter } from './components';
import './App.css';

const App = () => (
  <div>
    <header className='header'>
      <Navbar />
    </header>
    <main className='main'>
      <section>
        <Header />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <SpecialMenu />
      </section>
      <section>
        <Chef />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Laurels />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <FindUs />
      </section>
    </main>
    <footer className='footer'>
      <Footer />
    </footer>
  </div>
);

export default App;
