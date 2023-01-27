import './style.css'

function PLayButton(props) {
    const {image, buttonText} = props
    return <button
        className="watch"
        style={{
            width: "70%",
            padding: "1rem 3.3rem 1rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1.6rem",
            color: "#FFF",
        }}
    >
        <img src={image} alt={buttonText} style={{ width: "1.5rem" }} />
        ASSISTIR AGORA
    </button>;
}

export default PLayButton;