import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/Nav/About';
import Project from './components/Nav/Project';
import Resume from './components/Nav/Resume';
import Contact from './components/Nav/Contact';
import Footer from './components/Footer';

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

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App;
