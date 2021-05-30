import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/Nav/About';
import Project from './components/Nav/Project';
import Resume from './components/Nav/Resume';
import Contact from './components/Nav/Contact';
import Footer from './components/Footer';
import $ from 'jquery';
// eslint-disable-next-line
import ripples from 'jquery.ripples';

function App() {
  const [currentPage, handlePageChange] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Project />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />
    }
  }

  //FUNCTION TO TEST ELEMENT SIZES IN CONSOLE 
  // var docHeight = document.documentElement.offsetHeight;

  // [].forEach.call(
  //   document.querySelectorAll('*'),
  //   function(el) {
  //     if (el.offsetHeight > docHeight) {
  //       console.log(el);
  //     }
  //   }
  // );

  // window.VANTA.FOG({
  //   el: "body",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   highlightColor: 0x939393,
  //   midtoneColor: 0x0,
  //   lowlightColor: 0x0,
  //   baseColor: 0x0,
  //   blurFactor: 0.46,
  //   speed: 0.90,
  //   zoom: 0.60
  // })

  $('body').ripples({
    dropRadius: 30,
    peturbance: 0,
    resolution: 1080,
  });

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main
      >
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App;