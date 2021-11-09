import React, { useState } from "react";
import "./css/App.css";

import MainPage from "./components/MainPage";
import LandingPage from "./components/LandingPage";

function App(): JSX.Element {
    const [visibleView, setVisibleView] = useState<string | null>("0"); // Changes the different board views

    return (
        <div>
            
            {visibleView === "0" && <LandingPage
                setVisibleView={setVisibleView}
            ></LandingPage> }
        
            {visibleView !== "0" && <MainPage
                setVisibleView={setVisibleView}
                visibleView={visibleView}
            ></MainPage> }
        
        </div>
    );
}

export default App;
