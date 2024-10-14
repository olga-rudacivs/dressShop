


import React, { useState } from 'react';
import './color.css'

function ColorBtn({ color, onClick }) {
    return (
        <button 
            style={{ backgroundColor: color }}
            onClick={onClick}
            className='colorBtn'
        >
            
        </button>
    );
}

export default function Color({ onColorSelect }) {
    const colors = [
        { id: 1, color: 'red' },
        { id: 2, color: 'green' },
        { id: 3, color: 'blue' },
        { id: 4, color: 'yellow' },
        { id: 5, color: 'orange' },
        { id: 6, color: 'purple' },
        { id: 7, color: 'pink' },
        { id: 8, color: 'magenta' },
        { id: 9, color: 'lime' },
        { id: 10, color: 'brown' },
        { id: 11, color: 'gray' }
    ];

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h4 onClick={toggleVisibility}>Color</h4>
            {isVisible && (
                <div className='btnContainer'>
                    {colors.map(({ id, color }) => (
                        <ColorBtn
                            key={id}
                            color={color}
                            onClick={() => onColorSelect(color)} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}