import React from 'react';

function Card(props) {
  const cardClassName = `max-w-[345px] bg-pureWhite m-5 mx-auto bg-white shadow-lg rounded-2xl ${props.className}`;

  return (
    <div className={cardClassName} style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;
