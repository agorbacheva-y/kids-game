const ReusableButton = ({ children, onClick, type, disabled }) => {
    return (
    <button 
        className="reuse-btn"
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
);
};

export default ReusableButton;