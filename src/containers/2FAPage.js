import React from "react";

const FA2 = (props) => {

    const onClick = () => {
        window.location.assign("https://www.google.com");
    }

    const navigateToErrorPage = () => {
        props.history.push({
            pathname: "/error",
            state: "2fa"
        })
    }

    return (<React.Fragment>
        2FA
        <button onClick={onClick}>Next</button>
        <button onClick={navigateToErrorPage}>Error</button>
    </React.Fragment>)
}

export default FA2;