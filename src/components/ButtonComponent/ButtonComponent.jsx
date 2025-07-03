import './ButtonComponent.module.scss';

function ButtonComponent({ textButton, backgroundColor, width, height, border, borderRadius, size, weight, padding }) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        fontSize: size,
        fontWeight: weight,
        padding: padding || '0',
    };

    return <button style={buttonStyle}>{textButton}</button>;
}

export default ButtonComponent;
