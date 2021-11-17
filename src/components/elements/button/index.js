import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Button(props) {
    const { to, type, className, style, children } = props; //eslint-disable-line
    const onClick = () => {
        if (props.onClick) props.onClick();
    };

    if (type === 'link') {
        return (
            <Link to={to} className={className} style={style}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type} //eslint-disable-line
            className={className}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: propTypes.oneOf(['button', 'link']),
    onClick: propTypes.func,
    to: propTypes.string,
    className: propTypes.string,
};

Button.defaultProps = {
    type: '',
    onClick: propTypes.func,
    to: '',
    className: '',
};

export default Button;
