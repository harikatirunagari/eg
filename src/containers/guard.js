import React from "react";
import { withRouter } from "react-router-dom";

const Gaurd = (props) => {
    const [isOnLoadValid, setisOnLoadValid] = React.useState(false);

    const pageRefreshed = () => {
        let pageR = sessionStorage["Page_Refreshed"];
        if (pageR && pageR === "true") return true;
        return false;
    }

    const updateRefresh = () => {
        sessionStorage["Page_Refreshed"] = true
    }

    const navigateToErrorPage = () => {
        props.history.push({
            pathname: "/error",
            state: "gaurd"
        })
    }

    const readPath = () => {
        let path = props.location.pathname;
        if (path.indexOf("/error") === -1) {
            updateRefresh(true);
            setisOnLoadValid(true);
            return;
        }
        setisOnLoadValid(false);

    }



    const isPageRefreshed = () => {
        if (pageRefreshed() === false) {
            console.log("First Load");
            readPath();
            return;
        } else {
            setisOnLoadValid(false);
            let path = props.location.pathname;
            if (path.indexOf("/error") === -1) {
                navigateToErrorPage();
            }

        }
    }

    const backBrowser = () => {
        props.history.listen((newlocation, action) => {
            if (action === "PUSH") {
                if (newlocation.pathname.indexOf("/error") !== -1) {
                    setisOnLoadValid(false);
                }
            } else if (action === "POP") {
                setisOnLoadValid(false);
                let path = window.location.pathname;
                if (path.indexOf("/error") === -1) {
                    navigateToErrorPage();
                }
            }
        })
    }

    React.useEffect(() => {
        isPageRefreshed();
        backBrowser();
    }, []);

    return (<React.Fragment>
        {isOnLoadValid && props.children}
    </React.Fragment>)



}

export default withRouter(Gaurd);