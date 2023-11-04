import React from 'react';

const Overlay = ({onClick}) => {
  return (
    <div
    style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -1,
    }}
    onClick={onClick}
    >
      
    </div>
  );
}

export default Overlay;
