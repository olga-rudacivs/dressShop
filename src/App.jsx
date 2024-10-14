import React, { useState } from 'react';
import Size from './components/filters/size/size';
import Color from './components/filters/color/color';  
import Brand from './components/filters/brand/Brand';
import DressCard from './components/dress-card/dress';
import './App.css';
import Money from './components/money/money';

function App() {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPrice, setSelectedPrice] = useState([0, 500]);
  const [isVisible, setIsVisible] = useState(false);

  const handleBrandSelect = (brands) => {
    setSelectedBrand(brands);
  }; 

  const handleColorSelect = (color) => {
    setSelectedColor(color);};
    const handlePriceChange = (price) => {
      setSelectedPrice(price);};


  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <main>
      <div className="form">
        <div className="brand">
          <Brand onBrandSelect={handleBrandSelect} />
        </div>
        <div className="size">
          <Size />
        </div>
        <div className="length"></div> {/* Исправлено "lenght" на "length" */}
        <div className="color">
          <Color onColorSelect={handleColorSelect} />
        </div>
        <div className="price">
        <Money min={0} max={500} onPriceChange={handlePriceChange} /> 
        </div>
        <div className="about">
          <h3 onClick={toggleVisibility}>About Dresses</h3>
          {isVisible && (
            <p>
              Every day we’re gonna be dropping the latest trends to help you nail every Summer sitch. 
              Whether it’s a graduation, your mate's wedding, or just a cute day at the races with the gals, 
              our occasion dresses have got you covered. Not looking for something fancy? No stress. 
              We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses, oversized shirt dresses).
            </p>
          )}
        </div>
      </div>
           
      <div className="cards">
        <DressCard selectedColor={selectedColor} selectedBrand={selectedBrand} selectedPrice={selectedPrice} />
      </div>
    </main>
  );
  console.log("Selected Price:", selectedPrice);
}

export default App;