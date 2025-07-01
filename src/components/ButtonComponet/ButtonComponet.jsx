import './ButtonComponent.module.scss';

function ButtonComponet({ textButton, backgroundColor, width, border, borderRadius }) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        width: width,
        border: border,
        borderRadius: borderRadius,
    };

    return <button style={buttonStyle}>{textButton}</button>;
}

export default ButtonComponet;
