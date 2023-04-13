import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import About from "./about/About";
import Resume from "./resume/Resume";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Resume/>
        </div>
    );
}

export default App;
