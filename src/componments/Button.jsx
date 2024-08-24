/* eslint-disable react/prop-types */
function Button({ onClick, children }) {
    return (
        <button 
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;