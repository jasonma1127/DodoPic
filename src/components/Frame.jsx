import React from 'react';
import img2x2 from '../frames/2x2.jpg';
import img4x1 from '../frames/4x1.jpg';
import '../SCSS/Frame.scss';

function Frame({ onLayoutChange }) {
    return (
        <div>
            <h1>Select Frames</h1>
            <div className="button-container">
                <button onClick={() => onLayoutChange('2x2')}>
                    <img src={img2x2} alt="2x2 Layout" />
                </button>
                <button onClick={() => onLayoutChange('4x1')}>
                    <img src={img4x1} alt="4x1 Layout" />
                </button>
            </div>
        </div>
    );
}

export default Frame;
