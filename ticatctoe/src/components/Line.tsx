// In /src/components/Line.tsx
import React from 'react';

interface LineProps {
    rotation: number;
}

const Line: React.FC<LineProps> = ({ rotation }) => {
    return (
        <div style={{
            width: '100px', // Set width as needed
            height: '2px', // Set height as needed
            backgroundColor: 'black',
            transform: `rotate(${rotation}deg)`
        }}>
        </div>
    );
}

export default Line;
