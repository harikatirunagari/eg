import React from "react";

const FAPage = (props) => {

    const onClick = () => {
        props.history.push({
            pathname: "/limit"
        })
    }

    const navigateToErrorPage = () => {
        props.history.push({
            pathname: "/error",
            state: "1fa"
        })
    }

    return (<React.Fragment>
        1FA
        <button onClick={onClick}>Next</button>
        <button onClick={navigateToErrorPage}>Error</button>
    </React.Fragment>)
}

export default FAPage;