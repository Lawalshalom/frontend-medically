import React from 'react';
import './styles.css';

const Button = (props: { text: string }) => {
  return (
    <div>
      <button className="myBtn">{props.text}</button>
    </div>
  );
};

export default Button;
