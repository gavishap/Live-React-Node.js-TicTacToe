import React from 'react'
import Line from './Line';

interface BoardProps {
    initialCells: string[];
}

const Board: React.FC<BoardProps> = ({ initialCells }) => {
    const cellStyle = {
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        position: 'absolute' as 'absolute'
    };

    const positions = [
        { left: '0px', top: '0px' },
        { left: '100px', top: '0px' },
        { left: '200px', top: '0px' },
        { left: '0px', top: '100px' },
        { left: '100px', top: '100px' },
        { left: '200px', top: '100px' },
        { left: '0px', top: '200px' },
        { left: '100px', top: '200px' },
        { left: '200px', top: '200px' }
    ];

    const boardStyle = {
        position: 'relative' as 'relative',
        width: '300px',
        height: '300px',
        transform: 'translate(0px, 0px)' // Example of moving the entire board
    };

    return (
        <div style={boardStyle}>
            {initialCells.map((cell, index) => (
                <div
                    key={index}
                    style={{ ...cellStyle, ...positions[index] }}
                    onClick={() => console.log(`Cell ${index} clicked`)}
                >
                    {cell}
                </div>
            ))}
            <Line rotation={0} position={{ x: 150, y: 100 }} />
            <Line rotation={0} position={{ x: 150, y: 200 }} />
            <Line rotation={90} position={{ x: -50, y: 300 }} />
            <Line rotation={90} position={{ x: 50, y:  300}} />
        </div>
    )
}

export default Board;
