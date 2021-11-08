import React from "react";

import "../css/LandingPage.css";

export default function LandingPage({ setVisibleView }: {
    setVisibleView: (s: string | null) => void
}): JSX.Element {

    function changeView() {
        setVisibleView("2");
        //setTimeout(() => setVisibleView("2"), 2000);
    }

    return(
        <div className="home">
            <div className="centered">
                <h1>UD CIS Scheduler</h1>
                <h2>Start Building Your Plan</h2>
                <button onClick={() => changeView()}>Enter</button>
            </div>
        </div>
    );

}