import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text, ...rest }) => {
    const buttonClass = isOutline ? styles.outline_btn : styles.primary_btn;

    return (
        <button
            className={buttonClass}
            {...rest}
        >
            {icon}
            {text}
        </button>
    );
};

Button.propTypes = {
    isOutline: PropTypes.bool,
    icon: PropTypes.node,
    text: PropTypes.string,
};

export default Button;
