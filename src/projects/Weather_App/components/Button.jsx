import React from "react";

const Button = (props) => {
    return (
        <button
            className="btn"
            onClick={props.onClick}
            style={{
                padding: "10px 20px",
                fontSize: "12px",
                margin: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "10px",
                border:"0px"
            }}
        >
            {props.value}
        </button>
    );
};

export default Button;
