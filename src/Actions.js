import React from 'react';

function Actions({rightClicked,leftClicked}) {
    return (
        <div className="actions">
            <button key="right" onClick={rightClicked}>&gt;</button>
            <button key="left" onClick={leftClicked}>&lt;</button>
        </div>
    );
}

export default Actions;