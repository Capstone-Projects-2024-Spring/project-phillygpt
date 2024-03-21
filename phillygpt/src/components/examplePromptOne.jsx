import react from 'react';

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