function IconButton({icon, link}) {
    return (
        <li>
            <a href={link} target="_blank" style={{
                textDecoration: "none"
            }}>
                <img src={icon} alt="Logo" />
            </a>
        </li>
    )
}

export default IconButton;