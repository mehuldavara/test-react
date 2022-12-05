import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  function Cat(props) {
    return <h1>Meow's color is {props.color}</h1>;
  }
  return (
    <>
      <Header />
      <Footer />
      <Cat color="purple" />
      
    </>
  );
}

export default App;
