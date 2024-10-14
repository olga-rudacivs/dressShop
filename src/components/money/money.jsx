import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import "./money.css"
function Money({ min, max, onPriceChange }) {
    const [isVisible, setIsVisible] = useState(false);

    const [value, setValue] = useState([min, max]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
        onPriceChange(newValue); // Обновляем цену в родительском компоненте
    };

    return (
        <div >
            <h4 onClick={toggleVisibility}>Price</h4>
            {isVisible && (<div className="PriceSize"> 
                <div className="sliderBox">
                    {/* <div className="track"></div> */}
                <ReactSlider
                value={value}
                onChange={handleChange}
                min={0} // минимальное значение
                max={500} // максимальное значение
                step={1} // шаг изменения
                withTracks={true} // отобразить треки между ползунками
                renderTrack={({ key, style, ...props }) => (
                    <div {...props} style={{ ...style , backgroundColor: 'black' }} />
                )}
                renderThumb={({ key, style, ...props }) => (
                     <div {...props} style={{ ...style, backgroundColor: 'white', height: '10px', 
                        width: '10px', borderRadius: '50%', transform: 'translateY(10px)' 
                       }} />
                )}
            /></div>
            <div>
                <p>price start {value[0]}</p>
                <p>price end {value[1]}</p>
            </div>
            </div>)}
        </div>
    );
}
export default Money;
