import React, { useState, useEffect } from 'react';
import './brand.css'

const brandsList = [
    { id: 1, name: 'State' },
    { id: 2, name: 'Cooper' },
    { id: 3, name: 'Bardot' },
    { id: 4, name: 'Alfani' },
    { id: 5, name: 'CeCe' },
    { id: 6, name: 'Donna Ricco' }
];

export default function Brand({ onBrandSelect }) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        setSelectedBrands((prev) => {
            if (checked) {
                return prev.includes(value) ? prev : [...prev, value];
            } else {
                return prev.filter((brand) => brand !== value);
            }
        });
    };

    // Вызываем функцию обратного вызова для обновления состояния в родительском компоненте
    useEffect(() => {
        onBrandSelect(selectedBrands);
    }, [selectedBrands, onBrandSelect]);

    return (
        <div>
            <h4 onClick={toggleVisibility} style={{ cursor: 'pointer' }}>Brand</h4>
            {isVisible && (
                <div>
                    {brandsList.map((brand) => (
                        <div key={brand.id}>
                            <input
                                type="checkbox"
                                id={brand.name}
                                value={brand.name}
                                onChange={handleBrandChange}
                                checked={selectedBrands.includes(brand.name)} // Отмечаем выбранные бренды
                            />
                            <label htmlFor={brand.name}>{brand.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}