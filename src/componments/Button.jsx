/* eslint-disable react/prop-types */
function Button({ onClick, children }) {
    return (
        <button 
            style={{  backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;