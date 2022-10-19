import React from "react";
import "./App.css";
import Table from './Table';
import data from "./data.json"

function App() {
    const getHeadings = () => {
        return (
            Object.keys(data[0])
        );
    }
    return (
        <div className="container">
            <Table theadData={getHeadings()} tbodyData={data}/>
        </div>
    );
}

export default App;
