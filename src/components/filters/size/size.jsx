import React, { useState } from 'react';
import './size.css'

function SizeBtn({ number }) {
    return (
        <button>W{number}</button>
    );
}

export default function Size() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const numbers = Array.from({ length: 27 }, (_, index) => index + 26); // Generates numbers from 26 to 52

    return (
        <div className="size">
            <h4 onClick={toggleVisibility}>Size</h4>
            {isVisible && (
                <div className='btnContainer'>
                    {numbers.map((number) => (
                        <SizeBtn
                            key={number}
                            number={number}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
