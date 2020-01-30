import React from "react";

const Limit = (props) => {

    const onClick = () => {
        props.history.push({
            pathname: "/2fa"
        })
    }

    const navigateToErrorPage = () => {
        props.history.push({
            pathname: "/error",
            state: "limit"
        })
    }

    return (<React.Fragment>
        Limit
        <button onClick={onClick}>Next</button>
        <button onClick={navigateToErrorPage}>Error</button>
    </React.Fragment>)
}

export default Limit;