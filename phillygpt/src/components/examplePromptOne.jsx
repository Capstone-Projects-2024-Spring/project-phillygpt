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
        fontSize: '16px' // Font size (optional)
    };

    return (
        <button onClick={handleButtonClick} style={buttonStyle}>
            Example Prompt 1
        </button>
    );
}

export default MyButton;
