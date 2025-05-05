function Button({ colour, bg, children }) {
    return (
        <button
            style={{
                display: "block",
                padding: "5px",
                backgroundColor: bg || "blue",
                color: colour,
            }}
        >
            {children}
        </button>
    );
}

export default Button;
