import React from 'react';
import CheckClass from './DarkMode/checkClass';

const MyButton = () => {
    const handleButtonClick = () => {
        console.log('Button was clicked');
    };

    const buttonStyle = {
        backgroundColor: 'lightgray', // Light gray background
        border: '2px solid white', // White outline
        borderRadius: '8px', // Rounded corners
        padding: '10px 20px', // Add some padding
        cursor: 'pointer', // Cursor changes to pointer on hover
        fontSize: '16px', // Font size (optional)
        margin: '0 auto', // Center button horizontally in the flex container
        display: 'block' // Needed to apply margin auto for block-level elements
    };

    // Styles for the centering wrapper
    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '20vh', // Fill the entire height of the viewport
        flexDirection: 'column' // Align children vertically
    };

    return (
        <div style={wrapperStyle}> {/* Apply the centering styles to this wrapper */}
            <button onClick={handleButtonClick} style={buttonStyle}>
                Example Prompt 1
            </button>
        </div>
    );
}

export default MyButton;
