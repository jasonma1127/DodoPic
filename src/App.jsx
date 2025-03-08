import React, { useState } from 'react';
import Frame from './components/Frame';
import Camera from './components/Camera';
import Fashion from './components/Fashion';

function App() {
    const [layout, setLayout] = useState('0');
    const [images, setImages] = useState([]);

    const handleLayoutChange = (layout) => {
        const size = layout.split("x");
        const total = size[0] * size[1];
        setLayout(total);
    };

    const handleImagesCaptured = (capturedImages) => {
        setImages(capturedImages);
    };

    return (
        <div>
            <h1>DodoPic</h1>
            <Frame onLayoutChange={handleLayoutChange} />
            <h3>{layout}</h3>
            <Camera layout={layout} onImagesCaptured={handleImagesCaptured} />
            <Fashion images={images} />
        </div>

    );
}

export default App;
