import './ButtonComponent.module.scss';

function ButtonComponent({ textButton, backgroundColor, width, height, border, borderRadius, size, weight }) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        fontSize: size,
        fontWeight: weight,
    };

    return <button style={buttonStyle}>{textButton}</button>;
}

export default ButtonComponent;
