import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid purple', height: '700px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;