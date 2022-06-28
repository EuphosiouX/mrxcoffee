import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
    // console.log(data)
    return (
        <div>
            <Dashboard/>
        </div>
    );
}

export default App;