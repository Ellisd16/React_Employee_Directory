import React from "react";

//Ok so here I need to form the container for the page

function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;