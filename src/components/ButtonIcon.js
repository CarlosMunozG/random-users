import React from 'react';
import SVGIcon from '../components/SVGIcon.js';

const ButtonIcon = props => {
  const { className, name, color, width, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <SVGIcon name={name} width={width} fill={color} />
    </button>
  )
}

export default ButtonIcon;
