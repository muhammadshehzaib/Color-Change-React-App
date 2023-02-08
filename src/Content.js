import React, { useState } from 'react'


const Content = ({ colorval, hexValue, isDarkText }) => {

    return (
        <div className="App">
            <div className='empty-val' style={{
                backgroundColor: colorval,
                color: isDarkText ? "#000" : "#FFF"
            }}
            >
                <p>{colorval ? colorval : "Empty"}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>

        </div>

    )
}
export default Content
