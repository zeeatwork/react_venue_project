import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'
import Featured from './components/featured/Featured'
import VenueInfo from './components/venueInfo/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "cornflowerblue"}}>
     <Header />
     <Featured />
     <VenueInfo />
     <Highlights />
     <Pricing />
    </div>
  );
}

export default App;
