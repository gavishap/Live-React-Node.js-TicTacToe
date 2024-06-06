// In /src/components/Line.tsx
import React from 'react';

interface LineProps {
    rotation: number;
    position: { x: number; y: number };
}

const Line: React.FC<LineProps> = ({ rotation, position }) => {
    return (
        <div style={{
            width: '300px',
            height: '10px', // Increased thickness
            backgroundColor: 'black',
            borderRadius: '5px', // Rounded edges
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `rotate(${rotation}deg) translate(-50%, -50%)`
        }}>
        </div>
    );
}

export default Line;
