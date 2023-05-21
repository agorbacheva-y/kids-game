const ReusableButton = ({children, onClick, type}) => {
    return (
    <button 
        className="reuse-btn"
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);
};

export default ReusableButton;