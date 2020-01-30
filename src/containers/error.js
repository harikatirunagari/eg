import React from "react";

const Error = (props) => {
    const onClick = () => {
        window.location.assign("https://www.google/com?error=error");
    }
    return (<React.Fragment>
        Error
<button onClick={onClick}>Next</button>
    </React.Fragment>)
}

export default Error;