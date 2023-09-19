import React from "react";

const Home = (props) => {
  return (
    <div>
      <svg
        className="transition-color duration-[600ms]"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 17H7.5V10H9.5V17ZM13.5 17H11.5V7H13.5V17ZM17.5 17H15.5V13H17.5V17ZM19.5 19H5.5V5H19.5V19.1V19ZM19.5 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3Z"
          fill={props.bgColor}
        />
      </svg>
    </div>
  );
};

export default Home;
