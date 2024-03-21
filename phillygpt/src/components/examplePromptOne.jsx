import react from 'react';
import CheckClass from './DarkMode/checkClass';

const MyButton = () => {
    const handleButtonClick = () => {
        console.log('Button was clicked');
    };

    return (
        <button onClick={handleButtonClick}>
            Example Prompt 1
        </button>
    );
}

export default MyButton;