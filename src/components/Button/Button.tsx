import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import classes from './Button.module.scss';

type ButtonProps = {
  onClick: () => void,
  type:any
  text:string,
  variant:string,
  size:string
}

const Button = ({
  onClick, variant = '', size = 'medium || large', type = 'button || submit', text,
}:ButtonProps) => {
  const buttonCn = classNames(
    classes.button,
    classes[size],
    classes[variant],
  );
  return (
    <button className={buttonCn} onClick={onClick} type={type}>{text}</button>
  );
};
// Button.propTypes = {
//   variant: PropTypes.oneOf(['primary', 'transparent--white', 'blue--white']),
//   type: PropTypes.oneOf(['submit', 'button']),
//   size: PropTypes.oneOf(['medium', 'large']),
//   text: PropTypes.node,
//   onClick: PropTypes.func,
// };

export default Button;
